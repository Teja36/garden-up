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

const FilterSidebar = () => {
  return (
    <div className="sticky top-2 z-30 w-80 h-min max-h-screen overflow-y-scroll flex flex-col items-center justify-between bg-gray-50 rounded-md">
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
  );
};

export default FilterSidebar;
