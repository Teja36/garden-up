"use client";

import React, { useEffect } from "react";
import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";

import { getProducts } from "@/actions/products";
import ProductCard from "@/components/ProductCard";
import { useInView } from "react-intersection-observer";

const InfiniteProducts = ({
  sortBy,
  collectionName,
}: {
  sortBy: string | string[] | undefined;
  collectionName: string;
}) => {
  const get = async (queryFunctionContext: QueryFunctionContext) => {
    const products = await getProducts(
      sortBy,
      collectionName,
      queryFunctionContext?.pageParam
    );
    return products;
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["products", { sortBy, collectionName }],
    queryFn: get,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) =>
      lastPage.length === 9 ? pages.length : null,
  });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (isFetching || isFetchingNextPage) return;

    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  if (status === "pending") return null;

  if (status === "error") return `Something went wrong ${error}`;

  return (
    <div className="grid grid-cols-3 gap-8 w-3/4">
      {data?.pages.map((products, i) => (
        <React.Fragment key={i}>
          {products?.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </React.Fragment>
      ))}
      <div ref={ref}></div>
    </div>
  );
};

export default InfiniteProducts;
