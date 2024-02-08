"use client";

import { useCartStore } from "@/store/cart";
import useStore from "../../utils/useStore";

const CartItemCountIndicator = () => {
  const count = useStore(useCartStore, (state) => state.cart.length);

  if (count === 0) return null;

  return (
    <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full text-xs text-center bg-white text-green-700">
      {count}
    </span>
  );
};

export default CartItemCountIndicator;
