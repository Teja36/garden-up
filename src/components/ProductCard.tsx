import Image from "next/image";
import Link from "next/link";

import Rating from "./Rating";
import { Decimal } from "@prisma/client/runtime/library";
import AddToCartButton from "./AddToCartButton";
import AddToWishlistButton from "./AddToWishlistButton";

type ProductCardProps = {
  id: number;
  name: string;
  imageUrl: string | null;
  rating: Decimal | null;
  price: number;
  discount: number | null;
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
    <div className="relative flex flex-col w-full gap-2 group">
      <AddToWishlistButton productId={id} />

      <Link href={`/products/${id}`}>
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          <Image
            src={imageUrl ?? ""}
            alt="plant"
            fill={true}
            className="object-cover group-hover:scale-105 transition ease-linear duration-300 animate-fade-in"
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
          <Rating rating={rating} />
          {rating?.toNumber()! > 0 && (
            <span className="font-medium text-sm text-green-600 ml-1">
              {rating?.toString()}
            </span>
          )}
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
      </Link>
      <AddToCartButton id={id} stock={stock} />
    </div>
  );
};

export default ProductCard;
