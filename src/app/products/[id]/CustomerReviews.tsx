import Image from "next/image";
import Rating from "@/components/Rating";
import ReviewForm from "./ReviewForm";
import formatDate from "../../../../utils/formatDate";
import prisma from "../../../../utils/db";
import { Decimal } from "@prisma/client/runtime/library";

const CustomerReviews = async ({ productId }: { productId: number }) => {
  const reviews = await prisma.review.findMany({
    where: {
      productId: productId,
    },
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const ratingAverage = reviews
    .map(({ rating }) => rating)
    .reduce((prev, curr, index, arr) => {
      if (index === arr.length - 1)
        return parseFloat(((prev + curr) / arr.length).toFixed(2));
      return prev + curr;
    }, 0);

  const dataForHistogram = reviews
    .map(({ rating }) => rating)
    .reduce((prev, curr) => {
      prev[curr - 1]++;
      return prev;
    }, Array(5).fill(0))
    .reverse();

  if (reviews.length === 0) {
    return (
      <div className="mt-8">
        <h3 className="font-medium text-2xl">Customer Reviews</h3>
        <div className="mt-4 flex gap-4">
          <div className="flex items-center gap-2 w-full">
            <Rating />
            <p className="font-medium text-sm">
              Be the first to write a review
            </p>
            <button className="h-min w-32 p-1 ml-auto font-medium text-green-600  border border-green-600">
              Write a Review
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h3 className="font-medium text-2xl">Customer Reviews</h3>
      <div className="mt-4 flex gap-4">
        <div>
          <Rating rating={new Decimal(ratingAverage)} />
          <p className="text-md">
            {ratingAverage} based on {reviews.length} reviews
          </p>
        </div>
        <div className="px-4 border-x border-gray-200">
          {dataForHistogram.map((val, index) => (
            <div key={index} className="flex items-center mb-1">
              <Rating rating={new Decimal(5 - index)} size={15} />
              <div className="w-[120px] h-[18px] md:h-4 ml-1 border border-gray-200 ">
                <div
                  style={{
                    width: `${Math.round((val / reviews.length) * 100)}%`,
                  }}
                  className="h-full bg-yellow-400"
                ></div>
              </div>
              <span className="text-xs ml-1">
                {Math.round((val / reviews.length) * 100)}%
              </span>
              <span className={val > 0 ? "text-xs ml-4" : "text-xs ml-auto"}>
                ({val})
              </span>
            </div>
          ))}
        </div>
        <button className="h-min w-32 p-1 ml-auto font-medium text-green-600  border border-green-600">
          Write a Review
        </button>
      </div>
      <select
        name="sortBy"
        id=""
        className="text-xs p-[2px] mb-4 bg-white border border-gray-300"
      >
        <option value="Most Recent">Most Recent</option>
        <option value="Highest Rating">Highest Rating</option>
        <option value="Lowset Rating">Lowest Rating</option>
        <option value="Most Relevant">Most Relevant</option>
      </select>

      <ReviewForm isActive={true} productId={productId} />

      {reviews.map(({ id, rating, createdAt, title, description, user }) => (
        <div className="py-4 border-t border-gray-200" key={id}>
          <div className="flex gap-2">
            {/* <div className="w-12 h-12 flex justify-center items-center bg-gray-200 rounded-full">
              <span className="text-sm">{name.charAt(0)}</span>
            </div> */}
            <Image
              src={user.image!}
              alt={user.name!}
              width={48}
              height={48}
              className="object-cover rounded-full"
            />

            <div className="flex flex-col">
              <span className="flex">
                <Rating rating={new Decimal(rating)} />
                <span className="text-sm ml-2">{formatDate(createdAt)}</span>
              </span>
              <span className="font-medium">{user.name}</span>
            </div>
          </div>
          <div className="py-2">
            <h4 className="font-semibold">{title}</h4>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerReviews;
