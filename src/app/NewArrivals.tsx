import prisma from "../../utils/db";

import ProductSwiper from "./ProductSwiper";

const NewArrivals = async () => {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 8,
  });

  return (
    <ProductSwiper
      heading="New Arrivals"
      viewAllHref="/collections/plants?sort-by=date-desc"
      products={products}
    />
  );
};

export default NewArrivals;
