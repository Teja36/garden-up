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

const filters = [
  {
    name: "Type of Plants",
    list: [
      "Air Plants",
      "Cacti & Succulents",
      "Climbers",
      "Creepers/Groundcovers",
      "Flowering Plants",
      "Fruit Plants",
    ],
  },
  {
    name: "Ideal plant location",
    list: [
      "Office Desk Plants",
      "Office Premises Plants",
      "Plants for Living Room Tables",
      "Plants for Shaded Balconies",
    ],
  },
  {
    name: "Indoor/Outdoor",
    list: ["Indoor", "Outdoor", "Outdoor shade loving", "Outdoor sun loving"],
  },
  {
    name: "Maintenance",
    list: ["High", "Low", "Medium"],
  },
  {
    name: "Water Schedule",
    list: ["Every alternate day", "Once a day", "Once a week"],
  },
];

const page = () => {
  return (
    <div className="container mt-2">
      <div>
        <h1 className="text-4xl font-semibold">Plants</h1>
        <p className="text-md mt-4">
          Welcome to our online nursery, where you can find a wide variety of
          natural plants available for purchase. We specialize in providing a
          seamless plant online shopping experience, making it convenient for
          you to buy plants online and have them delivered right to your
          doorstep.
        </p>
      </div>
      <div className="w-full p-2 flex justify-end items-center gap-3">
        <select
          name="sort-by"
          id=""
          className="uppercase text-green-600 border-2 border-green-700 bg-white p-2"
        >
          <option value="">Sort By</option>
          <option value="" className="text-sm capitalize p-2">
            Best Selling
          </option>
          <option value="" className="text-sm capitalize p-2">
            Featured
          </option>
          <option value="" className="text-sm capitalize p-2">
            Alphabetical A-Z
          </option>
          <option value="" className="text-sm capitalize p-2">
            Alphabetical Z-A
          </option>
        </select>

        {/* <details className="border border-black">
          <summary className="uppercase text-green-600 border-2 border-green-700 p-2">
            Sort by
          </summary>
          <ul>
            <li className="p-2">
              <label htmlFor="">Best Selling</label>
            </li>
            <li className="p-2">
              <label htmlFor="">Best Selling</label>
            </li>
            <li className="p-2">
              <label htmlFor="">Best Selling</label>
            </li>
          </ul>
        </details> */}
        <p className="text-sm text-gray-400">236 products</p>
      </div>
      <div className="flex gap-4 justify-between sticky top-0">
        <div className="w-80 h-min flex flex-col items-center justify-between bg-gray-50 rounded-md">
          <div className="self-stretch flex justify-between p-4">
            <h4 className="text-md font-medium">Filter</h4>
            <button className="text-sm font-medium uppercase underline">
              Clear All
            </button>
          </div>

          {filters.map(({ name, list }, index) => (
            <details
              key={index}
              className="w-11/12 border-t border-gray-300 p-4 group"
            >
              <summary className="font-medium cursor-pointer list-none">
                <div className="flex justify-between items-center">
                  {name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-plus group-open:hidden"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-minus hidden group-open:block"
                  >
                    <path d="M5 12h14" />
                  </svg>
                </div>
              </summary>
              <ul className="flex flex-col ml-5 mt-4">
                {list.map((val, index) => (
                  <li key={index} className="flex p-3 border-b border-gray-300">
                    <input
                      type="checkbox"
                      name="air-plants"
                      id={val}
                      className="w-5 h-5 accent-green-700"
                    />
                    <label
                      htmlFor={val}
                      className="text-sm font-normal cursor-pointer ml-2"
                    >
                      {val}
                    </label>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
