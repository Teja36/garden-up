"use client";
import React, { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PriceFilterInput = () => {
  const minPriceRef = useRef<HTMLInputElement>(null);
  const maxPriceRef = useRef<HTMLInputElement>(null);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const newSearchParams = new URLSearchParams(searchParams);

  useEffect(() => {
    if (!minPriceRef.current || !maxPriceRef.current) return;

    if (searchParams.has("min.price")) {
      minPriceRef.current.value = searchParams.get("min.price") ?? "";
    }

    if (searchParams.has("max.price")) {
      maxPriceRef.current.value = searchParams.get("max.price") ?? "";
    }
  }, []);

  const handleClick = () => {
    if (
      !minPriceRef ||
      !maxPriceRef ||
      !minPriceRef.current ||
      !maxPriceRef.current
    )
      return;

    if (minPriceRef.current.value === "" || maxPriceRef.current.value === "")
      return;

    if (
      Number(minPriceRef?.current?.value) > Number(maxPriceRef?.current?.value)
    ) {
      minPriceRef.current.value = "";
      maxPriceRef.current.value = "";
      return;
    }

    newSearchParams.set("min.price", minPriceRef.current.value);
    newSearchParams.set("max.price", maxPriceRef.current.value);

    router.replace(`${pathname}?${newSearchParams}`, { scroll: false });
  };

  return (
    <div className="flex gap-2 items-center">
      <div className="relative flex w-full">
        <Input
          className="pl-5"
          type="number"
          min={1}
          max={1000}
          placeholder="Min"
          ref={minPriceRef}
        />
        <span className="absolute p-2">$</span>
      </div>
      {"-"}
      <div className="relative flex w-full">
        <Input
          className="pl-5"
          type="number"
          min={1}
          max={1000}
          placeholder="Max"
          ref={maxPriceRef}
        />
        <span className="absolute p-2">$</span>
      </div>
      <Button onClick={handleClick}>Go</Button>
    </div>
  );
};

export default PriceFilterInput;
