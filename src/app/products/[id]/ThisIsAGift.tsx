"use client";

import { useState } from "react";

const ThisIsAGift = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div>
        <input
          type="checkbox"
          name="gift"
          id="isAGift"
          checked={checked}
          onChange={() => setChecked((prev) => !prev)}
        />
        <label htmlFor="isAGift" className="ml-2">
          This is a Gift
        </label>
      </div>

      {checked && (
        <textarea
          className="border border-gray-300 w-full p-2 text-sm"
          name=""
          id=""
          rows={4}
          placeholder="Write something nice..."
        ></textarea>
      )}
    </>
  );
};

export default ThisIsAGift;
