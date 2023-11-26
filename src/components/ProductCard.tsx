import Image from "next/image";
import Link from "next/link";

import Rating from "./Rating";

type ProductCardProps = {
  id: number;
  name: string;
  imageUrl: string;
  rating: number;
  price: number;
  discount?: number;
  stock: number;
};

const ProductCard = ({
  id,
  name,
  imageUrl,
  rating,
  price,
  discount,
  stock,
}: ProductCardProps) => {
  return (
    <Link href={`/products/${id}`}>
      <div className="flex flex-col w-full gap-2 group">
        <div className="relative w-full h-48 xs:h-96 overflow-hidden">
          <Image
            src={imageUrl}
            alt="plant"
            loading="lazy"
            fill={true}
            className="object-cover group-hover:scale-105 transition ease-linear duration-300 "
          />
          {discount && (
            <span className="absolute top-1 left-1 sm:top-2 sm:left-2  text-green-900 font-medium bg-yellow-400 text-xs sm:text-sm px-1 py-[2px] sm:px-2 sm:py-1 uppercase rounded-sm">
              - {discount}%
            </span>
          )}
        </div>
        <h2 className="font-medium text-base md:text-xl line-clamp-2 min-h-[48px] md:min-h-[56px]">
          {name}
        </h2>
        <div className="flex items-center">
          <Rating rating={5} />
          <span className="font-medium text-sm text-green-600 ml-1">
            {rating}
          </span>
        </div>
        <div>
          {Boolean(discount) && (
            <span className="text-sm font-medium text-gray-400 line-through">
              ₹{price}
            </span>
          )}
          <span className="ml-2 text-green-600 font-medium">
            ₹{discount ? Math.round(price - (price / 100) * discount) : price}
          </span>
        </div>
        <button
          disabled={stock === 0}
          className="text-white uppercase bg-green-600 p-2 text-sm hover:bg-green-700 transition ease-in-out duration-100"
        >
          {stock > 0 ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
