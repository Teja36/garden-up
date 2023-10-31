import Rating from "@/components/Rating";
import Image from "next/image";

const mockdata = {
  name: "Snake Plant",
  image: "/Plant.jpg",
  price: 149,
  rating: 4.8,
  offerPrice: 49,
};

const Product = () => {
  return (
    <div className="flex justify-around p-2">
      <div className="relative w-1/2 h-96">
        <Image
          src={mockdata.image}
          alt={mockdata.name}
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="w-1/2 p-4 flex flex-col gap-4 items-start">
        <h1 className="font-bold text-4xl">{mockdata.name}</h1>

        <Rating rating={mockdata.rating} />

        <div className="flex gap-2 justify-start items-center">
          {mockdata.offerPrice && (
            <span className="text-gray-400 line-through">
              ₹{mockdata.price}
            </span>
          )}
          <span className="text-3xl text-green-600">
            ₹{mockdata.offerPrice ? mockdata.offerPrice : mockdata.price}
          </span>
          {mockdata.offerPrice && (
            <span className="bg-yellow-400 py-1 px-2 uppercase text-xs">
              Sale
            </span>
          )}
        </div>

        <div className="flex justify-evenly gap-2">
          <button className="bg-slate-400 p-2">-</button>
          <input type="number" min={1} max={5} value={1} />
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
