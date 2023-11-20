import ProductCard from "@/components/ProductCard";
import { PrismaClient } from "@prisma/client";

type RecommendedProps = {
  categoryId: number;
};

const Recommended = async ({ categoryId }: RecommendedProps) => {
  const prisma = new PrismaClient();
  const products = await prisma.product.findMany({
    where: {
      categoryId: categoryId,
    },
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
