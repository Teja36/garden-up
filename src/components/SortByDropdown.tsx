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
          "w-1/2": isMobile,
        }
      )}
    >
      <option value="">Sort By</option>
      <option value="bs" className="text-sm normal-case p-2">
        Best Selling
      </option>
      <option value="featured" className="text-sm normal-case p-2">
        Featured
      </option>
      <option value="name-asc" className="text-sm normal-case p-2">
        Alphabetical, A-Z
      </option>
      <option value="name-desc" className="text-sm normal-case p-2">
        Alphabetical, Z-A
      </option>
      <option value="price-asc" className="text-sm normal-case p-2">
        Price, low to high
      </option>
      <option value="price-desc" className="text-sm normal-case p-2">
        Price, high to low
      </option>
      <option value="date-desc" className="text-sm normal-case p-2">
        Date, new to old
      </option>
      <option value="date-asc" className="text-sm normal-case p-2">
        Date, old to new
      </option>
    </select>
  );
};

export default SortByDropdown;
