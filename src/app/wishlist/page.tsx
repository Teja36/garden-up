"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { useWishlistStore } from "@/store/wishlist";
import { useCartStore } from "@/store/cart";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

type itemType = {
  id: number;
  name: string;
  imageUrl: string;
  stock: number;
  price: number;
  discount: number;
  quantity: number;
};

const page = () => {
  const [items, setItems] = useState<itemType[] | null>();

  const wishlist = useWishlistStore((state) => state.wishlist);

  const remove = useWishlistStore((state) => state.remove);

  const addToCart = useCartStore((state) => state.add);

  const queryString = `productIds=${wishlist.join(",")}`;

  useEffect(() => {
    fetch(`/api/products/?${queryString}`)
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleRemove = (id: number) => {
    const newItems = items?.filter((item) => item.id !== id);
    setItems(newItems);
    remove(id);
  };

  const handleMove = (id: number) => {
    handleRemove(id);
    addToCart({ id, quantity: 1 });
  };

  if (!items) return <>Loading</>;

  return (
    <div className="container">
      <h1 className="text-center text-4xl font-medium my-8">My Wishlist</h1>
      <table className="w-full">
        <thead className="border-b ">
          <tr>
            <th>Product</th>
            <th>Unit Price</th>
            <th>Stock Status</th>
          </tr>
        </thead>
        <tbody>
          {items && items?.length > 0 ? (
            items.map((item) => (
              <tr key={item.id} className="text-center h-32">
                <td>
                  <div className="flex items-center">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={128}
                      height={128}
                    />
                    <h2 className="font-medium">{item.name}</h2>
                  </div>
                </td>
                <td>${item.price}</td>
                <td>{item.stock > 0 ? "In Stock" : "Out of Stock"}</td>
                <td className="flex gap-2 justify-center items-center h-32">
                  <Button
                    variant="default"
                    color="green"
                    onClick={() => handleMove(item.id)}
                    {...(item.stock === 0 && { disabled: true })}
                  >
                    Move to Cart
                  </Button>

                  <Button
                    variant="destructive"
                    onClick={() => handleRemove(item.id)}
                  >
                    <Trash2 />
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr className="text-center">No items found.</tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default page;
