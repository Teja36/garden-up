import prisma from "../../../../utils/db";

import ProductCard from "@/components/ProductCard";
import FilterSidebar from "./FilterSidebar";
import SortByDropdown from "../../../components/SortByDropdown";

const page = async ({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const collectionName = params.category;
  const sortBy = searchParams["sort-by"];

  const { description } = await prisma.collection.findFirst({
    where: {
      name: collectionName,
    },
  });

  const products = await prisma.product.findMany({
    where: {
      ...(sortBy === "featured" && { featured: true }),
      category: {
        collection: {
          name: collectionName,
        },
      },
    },
    ...((sortBy === "asc" || sortBy === "desc") && {
      orderBy: { name: sortBy },
    }),
    // take: 9,
  });

  return (
    <div className="container mt-2">
      <div>
        <h1 className="text-4xl font-semibold capitalize">{collectionName}</h1>
        <p className="text-md mt-4">{description}</p>
      </div>
      <SortByDropdown noOfProducts={products.length} />
      <div className="flex gap-4 justify-between sticky top-0">
        <FilterSidebar />
        <div className="grid grid-cols-3 gap-2">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
