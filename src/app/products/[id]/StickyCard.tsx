"use client";

import Image from "next/image";

type StickyCardProps = {
  name: string;
  imageUrl: string | null;
  price: number;
  discount: number | null;
  inView: boolean;
};

const StickyCard = ({
  name,
  imageUrl,
  price,
  discount,
  inView,
}: StickyCardProps) => {
  return (
    <div
      className="w-full h-20 p-10 fixed left-0 z-50 bg-white flex items-center gap-4 shadow-[0_-6px_50px_-12px_rgba(0,0,0,0.3)] transition-all delay-75 "
      style={{ bottom: !inView ? "0px" : "-80px" }}
    >
      <Image
        src={imageUrl || "/Plant.jpg"}
        alt={name}
        width={64}
        height={64}
        className="object-cover hidden md:block"
      />

      <div className="flex flex-col">
        <h2 className="text-2xl font-medium text-green-800 hidden md:block">
          {name}
        </h2>
        <div>
          {discount ? (
            <>
              <span className="text-sm text-gray-500 line-through">
                ₹{price}
              </span>
              <span className="text-lg font-medium text-green-600 ml-2">
                ₹{Math.round(price - (price / 100) * discount)}
              </span>
            </>
          ) : (
            <span className="text-lg font-medium text-green-600">₹{price}</span>
          )}
        </div>
      </div>
      <button className="text-white text-xs font-medium tracking-widest uppercase bg-green-600 w-44 h-10 rounded-sm ml-auto hover:bg-green-700">
        Add to cart
      </button>
    </div>
  );
};

export default StickyCard;
