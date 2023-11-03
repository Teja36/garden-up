import Rating from "@/components/Rating";

const reviews = [
  {
    name: "Zxc",
    rating: 5,
    dateOfReview: "07/07/2023",
    title: "Good",
    desc: "It was good.",
  },
  {
    name: "Abcd",
    rating: 4,
    dateOfReview: "05/11/2023",
    title: "Nice",
    desc: "Nice packing. The plant was in good condition. Overall good experience.",
  },
  {
    name: "Xyz",
    rating: 5,
    dateOfReview: "01/09/2023",
    title: "beautiful plant and packaging!",
    desc: "I'd ordered a Fern morpankhi plant and was pleasantly surprised when it was delivered. The plant was packed in a very beautiful cylindrical tube due to which the plant stayed intact while it was travelling. The plant was in a very healthy condition and there were clear instructions as to what needs to be done once we receive the plant. Kudos to Ugaoo for delivering a beautiful plant. Will be buying many more plants!!!",
  },
];

const CustomerReviews = () => {
  const ratingAverage = reviews
    .map(({ rating }) => rating)
    .reduce(
      (prev, curr, index, arr) =>
        index === arr.length - 1
          ? ((prev + curr) / arr.length).toFixed(2)
          : prev + curr,
      0
    );

  const dataForHistogram = reviews
    .map(({ rating }) => rating)
    .reduce((prev, curr, index, arr) => {
      prev[curr - 1]++;
      return prev;
    }, Array(5).fill(0))
    .reverse();

  return (
    <div className="mt-8">
      <h3 className="font-medium text-2xl">Customer Reviews</h3>
      <div className="mt-4 flex gap-4">
        <div>
          <Rating rating={5} />
          <p className="text-md">
            {ratingAverage} based on {reviews.length} reviews
          </p>
        </div>
        <div className="px-4 border-x border-gray-200">
          {dataForHistogram.map((val, index) => (
            <div key={index} className="flex items-center mb-1">
              <Rating rating={5 - index} size={15} />
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
        <button className="h-min w-32 p-1 ml-auto font-medium underline border border-black">
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

      {reviews.map(({ name, rating, dateOfReview, title, desc }, index) => (
        <div className="py-4 border-t border-gray-200" key={index}>
          <div className="flex gap-2">
            <div className="w-12 h-12 flex justify-center items-center bg-gray-200 rounded-full">
              <span className="text-sm">{name.charAt(0)}</span>
            </div>

            <div className="flex flex-col">
              <span className="flex">
                <Rating rating={rating} />
                <span className="text-sm ml-2">{dateOfReview}</span>
              </span>
              <span className="font-medium">{name}</span>
            </div>
          </div>
          <div className="py-2">
            <h4 className="font-semibold">{title}</h4>
            <p className="text-sm">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerReviews;
