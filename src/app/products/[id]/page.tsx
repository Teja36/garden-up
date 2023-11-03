import CustomerReviews from "./CustomerReviews";
import Product from "./Product";
import Recommended from "./Recommended";

const page = () => {
  return (
    <div className="container">
      <Product />
      <Recommended />
      <CustomerReviews />
    </div>
  );
};

export default page;
