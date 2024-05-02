import prisma from "../../../../utils/db";

import ProductSwiper from "@/app/ProductSwiper";
import decimalToNumber from "../../../../utils/decimalToNumber";

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
    <ProductSwiper
      heading="Customers also bought"
      products={decimalToNumber(products)}
    />
  );
};

export default Recommended;
