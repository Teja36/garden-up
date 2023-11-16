"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

type StickyCardProps = {
  title: string;
  img: string;
  price: number;
  offerPrice?: number;
};

const StickyCard = ({ title, img, price, offerPrice }: StickyCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);

    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  const listenToScroll = () => {
    let hieghtToHideFrom = 600;

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > hieghtToHideFrom) setIsVisible(true);
    else setIsVisible(false);
  };

  return (
    <div
      className="w-full h-20 p-10 fixed left-0 bg-white flex items-center gap-4 shadow-[0_-6px_50px_-12px_rgba(0,0,0,0.3)] transition-all delay-75 "
      style={{ bottom: isVisible ? "0px" : "-80px" }}
    >
      <Image
        src={img}
        alt={title}
        width={64}
        height={64}
        className="object-cover hidden md:block"
      />

      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold text-green-800 hidden md:block">
          {title}
        </h2>
        <div>
          {offerPrice ? (
            <>
              <span className="text-sm text-gray-500 line-through">
                ₹{price}
              </span>
              <span className="text-lg font-medium text-green-600 ml-2">
                ₹{offerPrice}
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
