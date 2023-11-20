import Rating from "@/components/Rating";
import Image from "next/image";

type ProductProps = {
  id: number;
  name: string;
  description?: string;
  imageUrl: string;
  price: number;
  stock: number;
  discount?: number;
};

const Product = ({
  id,
  name,
  description,
  imageUrl,
  price,
  stock,
  discount,
}: ProductProps) => {
  return (
    <div className="flex justify-around p-2">
      <div className="relative w-1/2 h-96">
        <Image src={imageUrl} alt={name} fill={true} className="object-cover" />
      </div>
      <div className="w-1/2 p-4 flex flex-col gap-4 items-start">
        <h1 className="font-bold text-4xl">{name}</h1>

        <Rating rating={5} />

        <div className="flex gap-2 justify-start items-center">
          {discount && (
            <span className="text-gray-400 line-through">₹{price}</span>
          )}
          <span className="text-3xl text-green-600">
            ₹{discount ? discount : price}
          </span>
          {discount && (
            <span className="bg-yellow-400 py-1 px-2 uppercase text-xs">
              Sale
            </span>
          )}
        </div>

        <div className="flex justify-evenly gap-2">
          <button className="bg-slate-400 p-2">-</button>
          <input type="number" min={1} max={5} />
          <button className="bg-slate-400 p-2">+</button>
        </div>

        <div className="flex justify-evenly gap-8 w-full">
          <button className="text-white bg-green-600 uppercase p-2 w-1/2 hover:bg-green-700">
            Add to cart
          </button>
          <button className="text-white bg-green-600 uppercase p-2 w-1/2 hover:bg-green-700">
            Buy It Now
          </button>
        </div>

        <div className="w-full ">
          <label className="uppercase text-sm text-gray-700" htmlFor="">
            Check delivery
          </label>
          <div className="flex mt-1">
            <input
              type="text"
              placeholder="Enter PIN code"
              className="border-[1px] border-gray-200 p-2 w-full"
            />
            <button className="text-white uppercase p-2 bg-green-600 hover:bg-green-700">
              Check
            </button>
          </div>
          <p className="mt-2 font-medium">
            Estimated Delivery:{" "}
            <span className="text-green-600">Mon, 6 Nov</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
