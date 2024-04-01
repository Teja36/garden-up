import prisma from "../../../../utils/db";

import ProductSwiper from "@/app/ProductSwiper";

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

  return <ProductSwiper heading="Customers also bought" products={products} />;
};

export default Recommended;
