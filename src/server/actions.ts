"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "../../utils/db";

export async function postReview(productId: number, formData: FormData) {

    const session = await getServerSession(authOptions);


    if (!session?.user) return;

    const user = await prisma.user.findUnique({
        where: {
            email: session?.user?.email!,
        },
        select: {
            id: true,
        },
    });

    const reviews = await prisma.review.findMany({
        where: {
            productId: productId,
        },
        select: {
            rating: true,
        },
    });

    reviews.push({ rating: parseInt(formData.get("rating") as string) });

    const newAverageRating = reviews
        .map(({ rating }) => rating)
        .reduce((prev, curr, index, arr) => {
            if (index === arr.length - 1)
                return parseFloat(((prev + curr) / arr.length).toFixed(2));
            return prev + curr;
        }, 0);

    await prisma.product.update({
        where: {
            id: productId,
        },
        data: {
            rating: newAverageRating,
            reviews: {
                create: {
                    rating: parseInt(formData.get("rating") as string),
                    title: formData.get("review-title") as string,
                    description: formData.get("review-desc") as string,
                    userId: user?.id as string,
                },
            },
        },
    });

}