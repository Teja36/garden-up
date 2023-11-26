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
    <>
      <h2 className="font-medium text-2xl md:text-4xl mt-12">
        Customers also bought
      </h2>
      <div className="mt-4 grid grid-cols-2 gap-2 xs:gap-6 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </>
  );
};

export default Recommended;
