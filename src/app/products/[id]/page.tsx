import CustomerReviews from "./CustomerReviews";
import Product from "./Product";
import Recommended from "./Recommended";
import StickyCard from "./StickyCard";

const mockdata = {
  name: "Snake Plant",
  image: "/Plant.jpg",
  price: 149,
  rating: 4.8,
  offerPrice: 49,
};

const page = () => {
  return (
    <div className="container">
      <Product />
      <Recommended />
      <CustomerReviews />
      <StickyCard
        title={mockdata.name}
        img={mockdata.image}
        price={mockdata.price}
        offerPrice={mockdata.offerPrice}
      />
    </div>
  );
};

export default page;
