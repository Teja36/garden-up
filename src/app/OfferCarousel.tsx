"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { OFFERS } from "@/constants/constants";

const OfferCarousel = () => {
  return (
    <Swiper modules={[Navigation, Autoplay]} navigation autoplay>
      {OFFERS.map((item) => (
        <SwiperSlide>
          <div className="relative w-full  h-64">
            <Image
              src={item.img}
              alt="Offer 1"
              fill={true}
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default OfferCarousel;
