"use client";

import { ChangeEvent } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

const SortByDropdown = ({ isMobile = false }: { isMobile?: boolean }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const newSearchParams = new URLSearchParams(searchParams);

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;

    if (e.target.value === "") {
      newSearchParams.delete("sort-by");
      router.replace(`${pathname}?${newSearchParams.toString()}`);
      return;
    }

    newSearchParams.set("sort-by", val);
    router.replace(`${pathname}?${newSearchParams.toString()}`);
  };

  return (
    <select
      onChange={handleSelectChange}
      name="sort-by"
      id=""
      className={cn(
        "uppercase text-green-600 border-2 border-green-700 bg-white p-2",
        {
          "flex-1": isMobile,
        }
      )}
    >
      <option value="">Sort By</option>
      <option value="bs" className="text-sm capitalize p-2">
        Best Selling
      </option>
      <option value="featured" className="text-sm capitalize p-2">
        Featured
      </option>
      <option value="asc" className="text-sm capitalize p-2">
        Alphabetical A-Z
      </option>
      <option value="desc" className="text-sm capitalize p-2">
        Alphabetical Z-A
      </option>
    </select>
  );
};

export default SortByDropdown;
