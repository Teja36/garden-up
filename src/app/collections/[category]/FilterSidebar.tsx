import prisma from "../../../../utils/db";
import ClearAllFiltersButton from "./ClearAllFiltersButton";
import FilterSidebarInput from "./FilterSidebarInput";
import PriceFilterInput from "./PriceFilterInput";

const FilterSidebar = async ({ collectionId }: { collectionId: number }) => {
  const filters = await prisma.attribute.findMany({
    where: {
      collectionId: collectionId,
    },
    select: {
      id: true,
      name: true,
      values: {
        select: {
          id: true,
          value: true,
          _count: {
            select: {
              product: true,
            },
          },
        },
      },
    },
  });

  if (!filters || filters.length < 1) return null;

  return (
    <div className="sticky top-2 z-30 w-80 h-min max-h-screen overflow-y-scroll flex flex-col items-center justify-between bg-gray-50 rounded-md">
      <div className="self-stretch flex justify-between p-4">
        <h4 className="text-md font-medium">Filter</h4>
        <ClearAllFiltersButton />
      </div>

      <details className="w-11/12 border-t border-gray-300 p-4 group ">
        <summary className="font-medium cursor-pointer list-none">
          <div className="flex justify-between items-center">
            Price
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
        <ul className="flex flex-col ml-3 mt-4">
          <li className="flex flex-col p-3 ">
            <PriceFilterInput />
          </li>
        </ul>
      </details>

      {filters.map(({ name, values: list }, index) => (
        <details
          key={index}
          className="w-11/12 border-t border-gray-300 p-4 group "
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
            {list.map(
              ({
                id,
                value: attributeValue,
                _count: { product: productCount },
              }) => (
                <li key={id} className="flex p-3 border-b border-gray-300">
                  <FilterSidebarInput
                    attributeValue={attributeValue}
                    attributeId={id}
                  />
                  <label
                    htmlFor={attributeValue}
                    className="text-sm font-normal cursor-pointer ml-2"
                  >
                    {attributeValue} ({productCount})
                  </label>
                </li>
              )
            )}
          </ul>
        </details>
      ))}
    </div>
  );
};

export default FilterSidebar;
