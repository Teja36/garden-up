import ProductCard from "@/components/ProductCard";
import prisma from "../../../../utils/db";

type RecommendedProps = {
  categoryId: number;
};

const Recommended = async ({ categoryId }: RecommendedProps) => {
  const products = await prisma.product.findMany({
    where: {
      categoryId: categoryId,
    },
    take: 4,
  });
  return (
    <div className="mt-8">
      <h2 className="font-semibold text-3xl">Customers also bought</h2>
      <div className="flex  justify-around  gap-2 max-w-full">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
