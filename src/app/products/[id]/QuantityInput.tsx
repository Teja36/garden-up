"use client";

import { ChangeEvent, useState } from "react";
import { Minus, Plus } from "lucide-react";

const QuantityInput = () => {
  const [quantity, setQuantity] = useState(1);

  const handleClick = (sign: string) => {
    if (isNaN(quantity)) {
      setQuantity(1);
      return;
    }
    if (sign === "-") {
      if (quantity <= 1) return;
      setQuantity((prev) => prev - 1);
    } else if (sign === "+") {
      if (quantity >= 10) return;
      setQuantity((prev) => prev + 1);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value);
    if (e.target.value !== "" && isNaN(value)) {
      return;
    }
    if (value < 1 || value > 10) return;
    setQuantity(value);
  };

  return (
    <div className="flex justify-evenly gap-2 items-center">
      <button
        className="bg-slate-200 rounded-full p-1 hover:bg-slate-950 hover:text-white"
        onClick={() => handleClick("-")}
      >
        <Minus size={14} />
      </button>
      <input
        type="number"
        className="w-6 xs:w-12 text-center"
        value={quantity}
        min={1}
        max={5}
        onChange={handleChange}
      />
      <button
        className="bg-slate-200 rounded-full p-1 hover:bg-slate-950 hover:text-white"
        onClick={() => handleClick("+")}
      >
        <Plus size={14} />
      </button>
    </div>
  );
};

export default QuantityInput;
