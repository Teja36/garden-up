import ProductCard from "@/components/ProductCard";

const products = [
  {
    name: "Plant 1",
    image: "/Plant.jpg",
    rating: 5,
    price: 399,
  },
  {
    name: "Plant 2",
    image: "/Plant.jpg",
    rating: 4.5,
    price: 199,
    offer: "sale",
  },
  {
    name: "Plant 3",
    image: "/Plant.jpg",
    rating: 3.8,
    price: 149,
  },
  {
    name: "Plant 4",
    image: "/Plant.jpg",
    rating: 2.1,
    price: 299,
    offer: "-20%",
  },
];

const BestSellers = () => {
  return (
    <>
      <h1 className="font-bold text-4xl p-4">Best Sellers</h1>
      <div className="flex flex-wrap justify-evenly mt-8 gap-2 max-w-full">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </>
  );
};

export default BestSellers;
