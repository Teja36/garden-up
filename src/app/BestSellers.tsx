import prisma from "../../utils/db";

import ProductSwiper from "./ProductSwiper";

const BestSellers = async () => {
  const products = await prisma.product.findMany({
    where: {
      featured: true,
    },
    take: 4,
  });

  return (
    <ProductSwiper
      heading={"Best Sellers"}
      viewAllHref="/collections/plants?sort-by=bs"
      products={products}
    />
  );
};

export default BestSellers;
