import prisma from "../../../utils/db";

import ProductCard from "@/components/ProductCard";
import SortByDropdown from "../../components/SortByDropdown";

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const searchQuery = searchParams["search"];
  const sortBy = searchParams["sort-by"];

  const products = await prisma.product.findMany({
    where: {
      ...(sortBy === "bs" && { discount: { gt: 0 } }),
      ...(sortBy === "featured" && { featured: true }),
      name: {
        search: searchQuery?.trim().split(" ").join(" <-> "),
      },
    },
    ...((sortBy === "asc" || sortBy === "desc") && {
      orderBy: { name: sortBy },
    }),
  });

  return (
    <div className="container">
      <div className="flex items-center">
        {searchQuery ? (
          <p className="w-full text-sm text-gray-400">
            {products.length} product{products.length > 1 && "s"} for{" "}
            <span className="text-gray-700">'{searchQuery}'</span>
          </p>
        ) : (
          <p className="w-full text-sm text-gray-400">
            {products.length} products
          </p>
        )}
        <SortByDropdown />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 xs:gap-6 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default page;
