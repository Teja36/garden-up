import prisma from "../../../../utils/db";

import CustomerReviews from "./CustomerReviews";
import Product from "./Product";
import Recommended from "./Recommended";

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
          <Product
            {...productData}
            rating={productData.rating?.toNumber() || null}
          />
          <Recommended categoryId={productData?.categoryId} />
          <CustomerReviews productId={productData.id} />
        </>
      )}
    </div>
  );
};

export default page;
