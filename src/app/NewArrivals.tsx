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
      <h1 className="font-medium text-2xl md:text-4xl mt-12">New Arrivals</h1>
      <div className="mt-4 grid grid-cols-2 gap-2 xs:gap-6 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <button className="w-56 block mt-6 mx-auto text-white uppercase  bg-green-600 p-2 text-sm hover:bg-green-700 transition ease-in-out duration-100">
        View All
      </button>
    </>
  );
};

export default NewArrivals;
