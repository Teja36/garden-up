"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { ChangeEvent } from "react";

const SortByDropdown = ({ noOfProducts }: { noOfProducts: number }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const newSearchParams = new URLSearchParams(searchParams);

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;

    if (newSearchParams.has("sort-by")) newSearchParams.delete("sort-by");

    router.replace(`${pathname}?sort-by=${val}&${newSearchParams.toString()}`);
  };

  return (
    <div className="w-full p-2 flex justify-end items-center gap-3">
      <select
        onChange={handleSelectChange}
        name="sort-by"
        id=""
        className="uppercase text-green-600 border-2 border-green-700 bg-white p-2"
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

      {/* <details className="border border-black">
      <summary className="uppercase text-green-600 border-2 border-green-700 p-2">
        Sort by
      </summary>
      <ul>
        <li className="p-2">
          <label htmlFor="">Best Selling</label>
        </li>
        <li className="p-2">
          <label htmlFor="">Best Selling</label>
        </li>
        <li className="p-2">
          <label htmlFor="">Best Selling</label>
        </li>
      </ul>
    </details> */}
      <p className="text-sm text-gray-400">{noOfProducts} products</p>
    </div>
  );
};

export default SortByDropdown;
