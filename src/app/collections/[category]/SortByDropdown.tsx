import React from "react";

const SortByDropdown = () => {
  return (
    <div className="w-full p-2 flex justify-end items-center gap-3">
      <select
        name="sort-by"
        id=""
        className="uppercase text-green-600 border-2 border-green-700 bg-white p-2"
      >
        <option value="">Sort By</option>
        <option value="" className="text-sm capitalize p-2">
          Best Selling
        </option>
        <option value="" className="text-sm capitalize p-2">
          Featured
        </option>
        <option value="" className="text-sm capitalize p-2">
          Alphabetical A-Z
        </option>
        <option value="" className="text-sm capitalize p-2">
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
      <p className="text-sm text-gray-400">236 products</p>
    </div>
  );
};

export default SortByDropdown;
