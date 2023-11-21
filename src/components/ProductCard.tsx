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
      <div className="flex flex-col flex-initial w-80 gap-2 p-2 group">
        <div className="relative w-full h-96 overflow-hidden">
          <Image
            src={imageUrl}
            alt="plant"
            fill={true}
            className="object-cover group-hover:scale-105 transition ease-linear duration-300 "
          />
          {discount && (
            <span className="absolute top-2 left-2 text-black font-bold bg-yellow-400 text-sm px-2 py-1 uppercase tracking-widest">
              -{discount}%
            </span>
          )}
        </div>
        <h2 className="font-medium text-xl line-clamp-1">{name}</h2>
        <div className="flex items-center">
          <Rating rating={5} />
          <span className="font-medium text-sm text-green-600 ml-1">
            {rating}
          </span>
        </div>
        <p className="text-green-600 font-medium">₹ {price}</p>
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
