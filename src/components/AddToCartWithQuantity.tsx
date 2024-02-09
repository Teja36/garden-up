"use client";

import { useRef } from "react";
import { useCartStore } from "@/store/cart";

import QuantityInput from "./QuantityInput";

const AddToCartWithQuantity = ({ productId }: { productId: number }) => {
  const ref = useRef({ quantity: 1 });

  const add = useCartStore((state) => state.add);

  const handleAdd = (id: number, quantity: number) => {
    ref.current.quantity = quantity;
  };

  const handleClick = () => {
    add({ id: productId, quantity: ref.current.quantity });
  };

  return (
    <>
      <QuantityInput
        item={{ id: productId, quantity: ref.current.quantity }}
        updateChange={handleAdd}
      />
      <button
        onClick={handleClick}
        className="text-white bg-green-600 uppercase p-2 w-full rounded-sm hover:bg-green-700"
      >
        Add to Cart
      </button>
    </>
  );
};

export default AddToCartWithQuantity;
