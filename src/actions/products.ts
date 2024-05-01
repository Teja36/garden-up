"use server";

import prisma from "../../utils/db";
import { PAGE_SIZE } from "@/constants/constants";

export const getProducts = async (searchParams: { [key: string]: string | string[] | undefined }, collectionName: string, pageParam = 0) => {

    const sortBy = searchParams["sort-by"];
    const filters = searchParams["custom.filter"];
    const minPrice = Number(searchParams["min.price"]);
    const maxPrice = Number(searchParams["max.price"]);

    let attributeIDs: number[] = [];

    if (filters) {
        attributeIDs = Array.isArray(filters) ? filters?.map(val => {
            return Number(val)
        }) : [Number(filters)];
    }

    const products = await prisma.product.findMany({
        where: {
            ...(sortBy === "featured" && { featured: true }),
            ...(attributeIDs?.length > 0 && {
                attributes: {
                    some: {
                        id: {
                            in: attributeIDs,
                        },
                    },
                },
            }),

            price: {
                ...(!isNaN(minPrice) && { gte: minPrice }),
                ...(!isNaN(maxPrice) && { lte: maxPrice }),
            },

            category: {
                collection: {
                    name: collectionName,
                },
            },
        },
        select: {
            id: true,
            name: true,
            imageUrl: true,
            rating: true,
            price: true,
            discount: true,
            stock: true,
        },
        ...(sortBy === "name-asc" && {
            orderBy: { name: "asc" },
        }),
        ...(sortBy === "name-desc" && {
            orderBy: { name: "desc" },
        }),
        ...(sortBy === "price-asc" && {
            orderBy: { price: "asc" },
        }),
        ...(sortBy === "price-desc" && {
            orderBy: { price: "desc" },
        }),
        ...(sortBy === "date-desc" && { orderBy: { createdAt: "desc" } }),
        ...(sortBy === "date-asc" && { orderBy: { createdAt: "asc" } }),
        take: PAGE_SIZE,
        skip: pageParam * PAGE_SIZE,
    });

    return products.map(product => ({ ...product, rating: product.rating?.toNumber() ?? 0 }));
};