import prisma from "../../utils/db";
import ProductCard from "@/components/ProductCard";

const NewArrivals = async () => {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 8,
  });
  return (
    <>
      <h1 className="font-bold text-4xl p-4">New Arrivals</h1>
      <div className="flex flex-wrap justify-evenly mt-8 gap-2 max-w-full">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
        <button className="w-1/6 mt-6 text-white uppercase  bg-green-600 p-2 text-sm hover:bg-green-700 transition ease-in-out duration-100">
          View All
        </button>
      </div>
    </>
  );
};

export default NewArrivals;
