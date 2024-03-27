import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import prisma from "../../../../utils/db";

import FilterSidebar from "./FilterSidebar";
import SortByDropdown from "../../../components/SortByDropdown";
import InfiniteProducts from "./InfiniteProducts";
import { getProducts } from "@/actions/products";

const page = async ({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const collectionName = params.category;

  const result = await prisma.collection.findFirst({
    where: {
      name: collectionName,
    },
    select: {
      id: true,
      description: true,
    },
  });

  const get = async () => {
    const products = await getProducts(searchParams, collectionName);
    return products;
  };

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products", { ...searchParams, collectionName, skip: 0 }],
    queryFn: get,
  });

  return (
    <div className="container mt-2">
      <div className=" px-10">
        <h1 className="text-4xl font-semibold capitalize">{collectionName}</h1>
        <p className="text-md mt-4">{result?.description}</p>
      </div>

      <SortByDropdown noOfProducts={5} />

      <div className="flex gap-6 justify-between px-10">
        <FilterSidebar collectionId={result?.id as number} />

        <HydrationBoundary state={dehydrate(queryClient)}>
          <InfiniteProducts
            searchParams={searchParams}
            collectionName={collectionName}
          />
        </HydrationBoundary>
      </div>
    </div>
  );
};

export default page;
