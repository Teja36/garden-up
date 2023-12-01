import Image from "next/image";
import Link from "next/link";
import Rating from "@/components/Rating";
import QuantityInput from "./products/[id]/QuantityInput";
import { ArrowRight } from "lucide-react";

const product = {
  id: 1,
  name: "Snake Plant",
  description:
    "The Snake Plant, also known as Sansevieria or Mother-in-law's Tongue, is a resilient and low-maintenance indoor plant with distinctive long, upright leaves that resemble snake skin. Native to West Africa, it thrives in a variety of conditions, making it an ideal choice for both novice and experienced plant enthusiasts. Renowned for its air-purifying qualities, the Snake Plant efficiently removes toxins from the air, contributing to a healthier indoor environment. Its architectural beauty adds a touch of elegance to any space, and it can tolerate low light levels, drought, and neglect. With a reputation for promoting better sleep by releasing oxygen at night, the Snake Plant is a versatile and stylish addition to homes and offices. Whether placed in a modern planter or a traditional pot, this hardy plant brings a touch of nature and a sense of tranquility to any room. Easy to propagate, the Snake Plant allows you to expand your greenery effortlessly. Embrace the beauty and benefits of the Snake Plant—a charming and functional addition to your indoor garden.",
  discount: 90,
  categoryId: 1,
  featured: true,
  imageUrl: "/Plant.jpg",
  price: 999,
  stock: 10,
};

const DealOfTheWeek = () => {
  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="relative h-screen w-full">
        <Image
          src={product.imageUrl ?? ""}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 p-2">
        <h2 className="font-medium text-2xl mt-12">Deal of the Week</h2>

        <h1 className="text-green-700 font-medium text-3xl">{product.name}</h1>

        <Rating rating={5} />

        <div className="flex gap-2 justify-start items-center mt-4">
          {Boolean(product.discount) && (
            <span className="text-gray-400 line-through">₹{product.price}</span>
          )}
          <span className="text-3xl text-green-600">
            ₹
            {product.discount
              ? Math.round(
                  product.price - (product.price / 100) * product.discount
                )
              : product.price}
          </span>
          {Boolean(product.discount) && (
            <span className="bg-yellow-400 py-1 px-2 uppercase text-xs font-medium text-green-900">
              Sale
            </span>
          )}
        </div>

        <div className="flex justify-between gap-4 w-full">
          <QuantityInput />
          <button
            disabled={product.stock < 1}
            className="text-white bg-green-600 uppercase p-2 w-full rounded-sm hover:bg-green-700"
          >
            {product.stock > 0 ? "Add to cart" : "Out of Stock"}
          </button>
        </div>

        <p className="text-lg text-gray-600 line-clamp-6">
          {product.description}
        </p>

        <Link href={`/products/${product.id}`}>
          <div className="flex items-center gap-1">
            <span className="text-xs uppercase underline font-medium">
              View full details
            </span>
            <ArrowRight size={14} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DealOfTheWeek;
