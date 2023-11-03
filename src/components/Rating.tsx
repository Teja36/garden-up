import { Star, StarHalf } from "lucide-react";

type RatingProps = {
  rating: number;
  size?: number;
};

const Rating = ({ rating, size = 18 }: RatingProps) => {
  const [integer, fractional] = (rating + "").split(".").map((x) => Number(x));
  const dullStars = fractional >= 5 ? 5 - integer - 1 : 5 - integer;

  return (
    <div className="flex" style={{ gap: size === 18 ? "2px" : "4px" }}>
      {[...Array(integer)].map((_, index) => (
        <span key={index} className="text-yellow-400">
          <Star size={size} className="fill-yellow-400" />
        </span>
      ))}
      {fractional >= 5 && (
        <span className=" text-yellow-400">
          {/* <Star className="w-5 h-5  absolute top-0 left-0" /> */}
          <StarHalf size={size} className="fill-yellow-400 " />
        </span>
      )}
      {[...Array(dullStars)].map((_, index) => (
        <span key={index} className="text-yellow-400">
          <Star size={size} className="" />
        </span>
      ))}
      {/* {integer}.{fractional || 0} */}
    </div>
  );
};

export default Rating;
