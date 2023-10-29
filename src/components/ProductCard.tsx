import Image from "next/image";
import Rating from "./Rating";

type ProductCardProps = {
  name: string;
  image: string;
  rating: number;
  price: number;
  offer?: string;
};

const ProductCard = ({
  name,
  image,
  rating,
  price,
  offer,
}: ProductCardProps) => {
  return (
    <div className="flex flex-col flex-initial w-80 gap-2 p-2 group">
      <div className="relative w-full h-96 overflow-hidden">
        <Image
          src={image}
          alt="plant"
          fill={true}
          className="object-cover group-hover:scale-105 transition ease-linear duration-300 "
        />
        {offer && (
          <span className="absolute top-2 left-2 text-black font-bold bg-yellow-400 text-sm px-2 py-1 uppercase">
            {offer}
          </span>
        )}
      </div>
      <h2 className="font-bold text-xl">{name}</h2>
      <Rating rating={rating} />
      <p className="text-green-600 font-bold">Rs.{price}</p>
      <button className="text-white uppercase bg-green-600 p-2 text-sm hover:bg-green-700 transition ease-in-out duration-100">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
