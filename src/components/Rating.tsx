import { Star, StarHalf } from "lucide-react";

type RatingProps = {
  rating?: number | null;
  size?: number;
};

const Rating = ({ rating, size = 18 }: RatingProps) => {
  const [integer, fractional] = (rating + "").split(".").map((x) => Number(x));
  const dullStars = fractional >= 5 ? 5 - integer - 1 : 5 - integer;

  if (!rating)
    return (
      <div className="flex" style={{ gap: size === 18 ? "2px" : "4px" }}>
        {[...Array(5)].map((_, index) => (
          <span key={index} className="text-yellow-400">
            <Star size={size} />
          </span>
        ))}
      </div>
    );

  return (
    <div className="flex" style={{ gap: size === 18 ? "2px" : "4px" }}>
      {[...Array(integer)].map((_, index) => (
        <span key={index} className="text-yellow-400">
          <Star size={size} className="fill-yellow-400" />
        </span>
      ))}
      {fractional >= 5 && (
        <span className="relative text-yellow-400">
          <StarHalf
            size={size}
            className="absolute top-0 left-0 fill-yellow-400"
          />
          <Star size={size} />
        </span>
      )}
      {[...Array(dullStars)].map((_, index) => (
        <span key={index} className="text-yellow-400">
          <Star size={size} />
        </span>
      ))}
      {/* {integer}.{fractional || 0} */}
    </div>
  );
};

export default Rating;
