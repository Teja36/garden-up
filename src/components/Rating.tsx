import { Star, StarHalf } from "lucide-react";

type RatingProps = {
  rating: number;
};

const Rating = ({ rating }: RatingProps) => {
  const [integer, fractional] = (rating + "").split(".").map((x) => Number(x));
  //   const dullStars = fractional >= 5 ? 5 - integer - 1 : 5 - integer;

  return (
    <div className="flex">
      {[...Array(integer)].map((_, index) => (
        <span key={index} className="text-yellow-400">
          <Star className="w-5 h-5" />
        </span>
      ))}
      {fractional >= 5 && (
        <span className="text-yellow-400">
          <StarHalf className="w-5 h-5" />
        </span>
      )}
      {/* {[...Array(dullStars)].map((_, index) => (
        <span key={index} className="text-gray-400">
          <Star className="w-5 h-5" />
        </span>
      ))} */}
    </div>
  );
};

export default Rating;
