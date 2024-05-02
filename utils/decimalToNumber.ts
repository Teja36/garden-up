import { Decimal } from "@prisma/client/runtime/library";

type Product = {
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    price: number;
    stock: number;
    imageUrl: string | null;
    featured: boolean | null;
    discount: number | null;
    categoryId: number;
    rating: Decimal | null;
};

function decimalToNumber(products: Product[]) {

    return products.map((product) => ({
        ...product,
        rating: product.rating?.toNumber() || null,
    }));
}

export default decimalToNumber;
