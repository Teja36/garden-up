"use client";
import React, { useState } from "react";
import { Star } from "lucide-react";

const RatingInput = () => {
  const [rating, setRating] = useState<number>(0);
  const [ratingHover, setRatingHover] = useState<number>(0);
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, index) => (
        <label
          key={index}
          htmlFor={`${index + 1}`}
          className="cursor-pointer text-yellow-400"
          onMouseEnter={() => setRatingHover(index + 1)}
          onMouseLeave={() => setRatingHover(0)}
        >
          <Star
            size={18}
            className={
              ratingHover >= index + 1 ||
              (ratingHover === 0 && rating >= index + 1)
                ? "fill-yellow-400"
                : ""
            }
          />
          <input
            type="radio"
            name="rating"
            id={`${index + 1}`}
            value={index + 1}
            className="hidden"
            onClick={() => setRating(index + 1)}
          />
        </label>
      ))}
    </div>
  );
};

export default RatingInput;
