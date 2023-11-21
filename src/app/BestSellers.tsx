import prisma from "../../utils/db";
import ProductCard from "@/components/ProductCard";

const BestSellers = async () => {
  const products = await prisma.product.findMany({
    where: {
      featured: true,
    },
    take: 4,
  });
  return (
    <>
      <h1 className="font-bold text-4xl p-4">Best Sellers</h1>
      <div className="flex flex-wrap justify-evenly mt-8 gap-2 max-w-full">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </>
  );
};

export default BestSellers;
