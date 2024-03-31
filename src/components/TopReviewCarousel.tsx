"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";
import Rating from "./Rating";
import formatDate from "../../utils/formatDate";

const ReviewCard = ({
  review,
}: {
  review: {
    user: {
      image: string | null;
      name: string | null;
    };
  } & {
    id: number;
    rating: number;
    title: string;
    description: string | null;
    createdAt: Date;
    userId: string;
    productId: number;
  };
}) => {
  return (
    <div className="w-full p-8 rounded-2xl bg-gray-50 min-h-48">
      <div className="flex gap-2">
        {review.user.image ? (
          <Image
            src={review.user.image!}
            alt={review.user.name!}
            width={48}
            height={48}
            className="object-cover rounded-full"
          />
        ) : (
          <div className="w-12 h-12 flex justify-center items-center bg-gray-200 rounded-full">
            <span className="text-sm">{review.user.name?.charAt(0)}</span>
          </div>
        )}

        <div className="flex flex-col">
          <span className="flex justify-between">
            <Rating rating={5} />
            <span className="text-sm ml-2">{formatDate(review.createdAt)}</span>
          </span>

          <span className="font-medium self-start">{review.user.name}</span>
        </div>
      </div>

      <div className="py-2 text-left">
        <h4 className="font-semibold">{review.title}</h4>
        <p className="text-sm text-left">{review.description}</p>
      </div>
    </div>
  );
};

const TopReviewCarousel = ({
  reviews,
}: {
  reviews: ({
    user: {
      image: string | null;
      name: string | null;
    };
  } & {
    id: number;
    rating: number;
    title: string;
    description: string | null;
    createdAt: Date;
    userId: string;
    productId: number;
  })[];
}) => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        autoplay
        grabCursor={true}
        loop={true}
        slidesPerView={3}
        pagination={{}}
        spaceBetween={32}
        speed={300}
      >
        {reviews.map((review) => {
          return (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TopReviewCarousel;
