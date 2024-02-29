"use client";
import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { useWishlistStore } from "@/store/wishlist";

type AddToWishlistButtonProps = {
  productId: number;
};

const AddToWishlistButton = ({ productId }: AddToWishlistButtonProps) => {
  const [active, setActive] = useState(false);

  const wishlist = useWishlistStore((state) => state.wishlist);
  const addToWishlist = useWishlistStore((state) => state.add);
  const removeFromWishlist = useWishlistStore((state) => state.remove);

  useEffect(() => {
    if (wishlist.indexOf(productId) >= 0) setActive(true);
  }, []);

  const handleClick = () => {
    if (active) {
      removeFromWishlist(productId);
    } else addToWishlist(productId);

    setActive((prev) => !prev);
  };

  return (
    <button
      onClick={handleClick}
      className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 sm:p-2 transition-[opacity] ease z-10"
    >
      <Heart
        className="w-4 sm:w-8"
        color="red"
        {...(active && { fill: "red" })}
      />
    </button>
  );
};

export default AddToWishlistButton;
