"use server";

import prisma from "../../utils/db";

export const getProducts = async (sortBy: string | string[] | undefined, collectionName: string, pageParam = 0) => {
    const products = await prisma.product.findMany({
        where: {
            ...(sortBy === "featured" && { featured: true }),
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
        ...((sortBy === "asc" || sortBy === "desc") && {
            orderBy: { name: sortBy },
        }),
        take: 9,
        skip: pageParam * 9,
    });

    return products.map(product => ({ ...product, rating: product.rating?.toNumber() ?? 0 }));
};