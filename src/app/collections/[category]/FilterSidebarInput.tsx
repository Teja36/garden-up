"use client";

import { ChangeEvent } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const FilterSidebarInput = ({
  value,
  attributeId,
}: {
  value: string;
  attributeId: number;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const newSearchParams = new URLSearchParams(searchParams);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      newSearchParams.append("custom.filter", attributeId.toString());
      router.replace(`${pathname}?${newSearchParams.toString()}`, {
        scroll: false,
      });
    } else {
      if (newSearchParams.has("custom.filter", attributeId.toString())) {
        newSearchParams.delete("custom.filter", attributeId.toString());
        router.replace(`${pathname}?${newSearchParams.toString()}`, {
          scroll: false,
        });
      }
    }
  };

  return (
    <input
      type="checkbox"
      name="air-plants"
      id={value}
      className="w-5 h-5 accent-green-700"
      onChange={handleChange}
    />
  );
};

export default FilterSidebarInput;
