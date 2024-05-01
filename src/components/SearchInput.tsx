"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useDebounce from "../hooks/useDebounce";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const SearchInput = () => {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 300);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (debouncedText === "") return;

    const newSearchParams = new URLSearchParams(searchParams);

    if (newSearchParams.has("search")) newSearchParams.delete("search");
    newSearchParams.append("search", debouncedText);

    router.replace(`/products?${newSearchParams.toString()}`);
  }, [debouncedText]);

  return (
    <div className="relative">
      <Input
        type="search"
        placeholder="Search..."
        className="focus-visible:ring-0 pr-8"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Search className="absolute right-1 top-2 text-gray-400 pointer-events-none" />
    </div>
  );
};

export default SearchInput;
