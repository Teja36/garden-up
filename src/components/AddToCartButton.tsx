"use client";

import { useCartStore } from "@/store/cart";

const AddToCartButton = ({ id, stock }: { id: number; stock: number }) => {
  const add = useCartStore((state) => state.add);

  const handleClick = () => {
    if (stock === 0) return;
    add({ id, quantity: 1 });
  };

  return (
    <button
      disabled={stock === 0}
      className="text-white uppercase bg-green-600 p-2 text-sm lg:enabled:hover:bg-green-700 disabled:opacity-65 transition ease-in-out duration-100"
      onClick={handleClick}
    >
      {stock > 0 ? "Add to Cart" : "Sold Out"}
    </button>
  );
};

export default AddToCartButton;
