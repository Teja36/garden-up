"use client";

import { useId } from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import ProductCard from "@/components/ProductCard";

import { ChevronLeft, ChevronRight } from "lucide-react";

type ProductSwiperProps = {
  heading: string;
  viewAllHref?: string;
  products: {
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    price: number;
    stock: number;
    imageUrl: string | null;
    featured: boolean | null;
    discount: number | null;
    categoryId: number;
    rating: number | null;
  }[];
};

const ProductSwiper = ({
  heading,
  viewAllHref,
  products,
}: ProductSwiperProps) => {
  const id = useId();

  return (
    <>
      <div className="flex justify-between items-center mt-12 mb-4">
        <h1 className="font-medium text-2xl md:text-4xl ">{heading}</h1>
        <div className="flex items-center gap-2">
          <button
            id={`${id}prevBtn`}
            className="p-1 bg-gray-200 disabled:opacity-45 rounded-full"
          >
            <ChevronLeft className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            id={`${id}nextBtn`}
            className="p-1 bg-gray-200 disabled:opacity-45 rounded-full"
          >
            <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: `#${CSS.escape(id)}nextBtn`,
          prevEl: `#${CSS.escape(id)}prevBtn`,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          440: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>

      {viewAllHref && (
        <button className="hidden lg:block w-56 mt-6 mx-auto text-white uppercase  bg-green-600 p-2 text-sm hover:bg-green-700 transition ease-in-out duration-100">
          <Link href={viewAllHref}>View All</Link>
        </button>
      )}
    </>
  );
};

export default ProductSwiper;
