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
import { Button } from "@/components/ui/button";

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
      <div className="md:px-10">
        <h1 className="text-2xl md:text-4xl font-semibold capitalize">
          {collectionName}
        </h1>
        <p className="text-sm md:text-base mt-4">{result?.description}</p>
      </div>

      <div className="md:hidden my-8">
        <div className="flex gap-4 items-center">
          {/* TODO: Open and close shadcn Sheet with filters on button click */}
          <Button className="capitalize flex-1">Filter</Button>
          <SortByDropdown isMobile />
        </div>
        <p className="text-sm text-gray-400 mt-4">20 products</p>
      </div>

      <div className="hidden md:flex sticky top-0 z-20 w-full px-2 py-3 justify-end items-center gap-3 bg-white">
        <SortByDropdown />
        <p className="text-sm text-gray-400">20 products</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[max-content_1fr] gap-8 md:px-10">
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
