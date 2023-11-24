import Image from "next/image";

import Rating from "@/components/Rating";
import ThisIsAGift from "./ThisIsAGift";
import QuantityInput from "./QuantityInput";

type ProductProps = {
  id: number;
  name: string;
  description: string;
  imageUrl: string | null;
  price: number;
  stock: number;
  discount: number | null;
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
    <div className="flex justify-around p-2 border-b border-gray-400">
      <div className="relative w-1/2 h-screen">
        <Image
          src={imageUrl || "/Plant.jpg"}
          alt={name}
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="w-1/2 p-4 flex flex-col gap-4 items-start">
        <h1 className="font-medium text-4xl">{name}</h1>

        <Rating rating={5} />

        <div className="flex gap-2 justify-start items-center">
          {Boolean(discount) && (
            <span className="text-gray-400 line-through">₹{price}</span>
          )}
          <span className="text-3xl text-green-600">
            ₹{discount ? Math.round(price - (price / 100) * discount) : price}
          </span>
          {Boolean(discount) && (
            <span className="bg-yellow-400 py-1 px-2 uppercase text-xs">
              Sale
            </span>
          )}
        </div>

        <div className="flex justify-between gap-4 w-full">
          <QuantityInput />
          <button
            disabled={stock < 1}
            className="text-white bg-green-600 uppercase p-2 w-full rounded-sm hover:bg-green-700"
          >
            {stock > 0 ? "Add to cart" : "Out of Stock"}
          </button>
        </div>

        <button className="text-white bg-green-600 uppercase p-2 w-full hover:bg-green-700">
          Buy It Now
        </button>

        <ThisIsAGift />

        <div className="w-full">
          <label className="uppercase text-sm text-gray-700" htmlFor="">
            Check delivery
          </label>
          <div className="flex mt-1">
            <input
              type="text"
              placeholder="Enter PIN code"
              className="border border-gray-300 p-2 w-full"
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

        <div className="flex justify-between text-xs text-center w-full mt-4 px-4 py-8 border-t border-gray-400">
          <div className="w-1/5 flex flex-col items-center">
            <Image
              src="/ShippingTruck.png"
              width={64}
              height={64}
              alt="Shipping truck image"
            />
            <span>Free Shipping above $499</span>
          </div>
          <div className="w-1/5 flex flex-col items-center">
            <Image
              src="/GuaranteedReturn.png"
              width={64}
              height={64}
              alt="Guaranteed return image"
            />
            <span>Guaranteed Replacements if Damaged</span>
          </div>
          <div className="w-1/5 flex flex-col items-center">
            <Image
              src="/ExpertGuidence.png"
              width={64}
              height={64}
              alt="Expert guidence image"
            />
            <span>Expert Guidance</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
