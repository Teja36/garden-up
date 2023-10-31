import Product from "./Product";
import Recommended from "./Recommended";

const page = () => {
  return (
    <div className="container">
      <Product />
      <Recommended />
    </div>
  );
};

export default page;
