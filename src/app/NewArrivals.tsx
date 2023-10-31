import ProductCard from "@/components/ProductCard";

const products = [
  {
    name: "Plant 1",
    image: "/Plant.jpg",
    rating: 5,
    price: 99,
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
    price: 49,
  },
  {
    name: "Plant 4",
    image: "/Plant.jpg",
    rating: 2.1,
    price: 499,
    offer: "-20%",
  },
  {
    name: "Plant 1",
    image: "/Plant.jpg",
    rating: 5,
    price: 149,
  },
  {
    name: "Plant 2",
    image: "/Plant.jpg",
    rating: 4.5,
    price: 249,
    offer: "sale",
  },
  {
    name: "Plant 3",
    image: "/Plant.jpg",
    rating: 3.8,
    price: 199,
  },
  {
    name: "Plant 4",
    image: "/Plant.jpg",
    rating: 2.1,
    price: 299,
    offer: "-20%",
  },
];

const NewArrivals = () => {
  return (
    <>
      <h1 className="font-bold text-4xl p-4">New Arrivals</h1>
      <div className="flex flex-wrap justify-evenly mt-8 gap-2 max-w-full">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
        <button className="w-1/6 mt-6 text-white uppercase  bg-green-600 p-2 text-sm hover:bg-green-700 transition ease-in-out duration-100">
          View All
        </button>
      </div>
    </>
  );
};

export default NewArrivals;
