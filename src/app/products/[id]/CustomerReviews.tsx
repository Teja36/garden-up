import Image from "next/image";
import Rating from "@/components/Rating";
import formatDate from "../../../../utils/formatDate";
import prisma from "../../../../utils/db";
import { Decimal } from "@prisma/client/runtime/library";
import { postReview } from "@/server/actions";
import RatingInput from "@/components/RatingInput";

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

  const postReviewWithId = postReview.bind(null, productId);

  return (
    <div className="mt-8">
      <h3 className="font-medium text-2xl">Customer Reviews</h3>
      <div className="mt-4 flex gap-4">
        {reviews.length > 0 ? (
          <>
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
                  <span
                    className={val > 0 ? "text-xs ml-4" : "text-xs ml-auto"}
                  >
                    ({val})
                  </span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex items-center gap-2">
            <Rating />
            <p className="font-medium text-sm">
              Be the first to write a review
            </p>
          </div>
        )}
        <label
          htmlFor="write-review"
          className="h-min w-32 p-1 ml-auto font-medium text-green-600  border border-green-600"
        >
          Write a Review
        </label>
      </div>
      {reviews.length > 0 && (
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
      )}
      {/* TODO: Fix the state the form after submission */}
      <div className="h-0 overflow-hidden transition-[height] ease-in-out duration-500 has-[:checked]:h-max">
        <input type="checkbox" id="write-review" hidden />
        <form
          action={postReviewWithId}
          className="flex flex-col gap-y-4 border-t border-gray-200 py-3"
        >
          <div className="flex flex-col">
            <label htmlFor="" className="font-medium text-sm">
              Rating
            </label>
            <RatingInput />
          </div>

          <div className="flex flex-col">
            <label htmlFor="title" className="font-medium text-sm">
              Review Title
            </label>
            <input
              name="review-title"
              type="text"
              placeholder="Give your review a title"
              required
              className="border border-gray-300 text-xs px-2 py-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="desc" className="font-medium text-sm">
              Review
            </label>
            <textarea
              name="review-desc"
              id="desc"
              placeholder="Write your comments here"
              className="border border-gray-300 text-xs px-2 py-1"
            ></textarea>
          </div>

          <button
            type="submit"
            className="justify-self-start max-w-xs text-white uppercase bg-green-600 p-2 text-sm hover:bg-green-700 transition ease-in-out duration-100"
          >
            Submit Review
          </button>
        </form>
      </div>
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
