import Image from "next/image";
import Link from "next/link";
import Rating from "@/components/Rating";
import { ArrowRight } from "lucide-react";
import AddToCartWithQuantity from "@/components/AddToCartWithQuantity";
import prisma from "../../utils/db";

const DealOfTheWeek = async () => {
  const product = await prisma.product.findFirst({
    where: {
      discount: {
        not: null,
      },
    },
    orderBy: {
      discount: "desc",
    },
  });

  if (!product) return <>Loading...</>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 mt-12">
      <div className="relative aspect-square w-full">
        <Image
          src={product?.imageUrl ?? ""}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 md:gap-4 p-2">
        <h2 className="font-medium text-2xl mt-4 md:mt-12">Deal of the Week</h2>

        <h1 className="text-green-700 font-medium text-3xl">{product.name}</h1>

        <Rating rating={product?.rating} />

        <div className="flex gap-2 justify-start items-center mt-4">
          {Boolean(product?.discount) && (
            <span className="text-gray-400 line-through">₹{product.price}</span>
          )}
          <span className="text-3xl text-green-600">
            ₹
            {product?.discount
              ? Math.round(
                  product.price - (product.price / 100) * product.discount
                )
              : product.price}
          </span>
          {Boolean(product?.discount) && (
            <span className="bg-yellow-400 py-1 px-2 uppercase text-xs font-medium text-green-900">
              Sale
            </span>
          )}
        </div>

        <div className="flex justify-between gap-4 w-full">
          <AddToCartWithQuantity productId={product.id} />
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
