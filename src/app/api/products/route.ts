import prisma from "../../../../utils/db";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const cartItems = searchParams.get("productIds")?.split(",").map(val => Number(val))

    try {
        if (cartItems && cartItems?.length > 0) {
            const items = await prisma.product.findMany({
                where: {
                    id: {
                        in: cartItems,
                    },
                },
                select: {
                    id: true,
                    name: true,
                    imageUrl: true,
                    stock: true,
                    price: true,
                    discount: true,
                },
            });
            return Response.json(items)
        }
    } catch (error) {

        return Response.json({})
    }

}