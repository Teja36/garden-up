import prisma from "../../../../utils/db";

import CustomerReviews from "./CustomerReviews";
import Product from "./Product";
import Recommended from "./Recommended";
import StickyCard from "./StickyCard";

const page = async ({ params }: { params: { id: string } }) => {
  const productData = await prisma.product.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return (
    <div className="container">
      {productData && (
        <>
          <Product {...productData} />
          <Recommended categoryId={productData?.categoryId} />
          <CustomerReviews productId={productData.id} />
          <StickyCard {...productData} />
        </>
      )}
    </div>
  );
};

export default page;
