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
      <h1 className="font-medium text-2xl md:text-4xl mt-12">Best Sellers</h1>
      <div className="mt-4 grid grid-cols-2 gap-2 xs:gap-6 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </>
  );
};

export default BestSellers;
