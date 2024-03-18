"use client";
import Image from "next/image";

const OfferCarousel = () => {
  return (
    <div className="flex w-full">
      <div key="slide1" className="relative w-full  h-64">
        <Image
          src="/pexels-designecologist-1005058.jpg"
          alt="Offer 1"
          fill={true}
          className="object-cover"
        />
      </div>
      <div key="slide1" className="relative w-full  h-64">
        <Image
          src="/pexels-designecologist-1005058.jpg"
          alt="Offer 1"
          fill={true}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default OfferCarousel;
