"use client";

import { useEffect, useState } from "react";

import { useCartStore } from "@/store/cart";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import QuantityInput from "@/components/QuantityInput";
import Subtotal from "./Subtotal";

import { ShoppingCart } from "lucide-react";

type itemType = {
  id: number;
  name: string;
  imageUrl: string;
  stock: boolean;
  price: number;
  discount: number;
  quantity: number;
};

const page = () => {
  const [items, setItems] = useState<itemType[] | null>();

  const cartItems = useCartStore((state) => state.cart);

  const remove = useCartStore((state) => state.remove);

  const changeQuantity = useCartStore((state) => state.changeQuantity);

  const productIds = cartItems.map((product) => product.id);

  const queryString = `productIds=${productIds.join(",")}`;

  useEffect(() => {
    fetch(`/api/products/?${queryString}`)
      .then((response) => response.json())
      .then((data) => {
        const newData = data.map((item: any) => {
          let quantity = cartItems.find((val) => val.id === item.id)?.quantity;
          return { ...item, quantity };
        });
        setItems(newData);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleQuantityChange = (id: number, quantity: number) => {
    const newItems = items?.map((item) => {
      if (item.id === id) return { ...item, quantity: quantity };

      return item;
    });

    setItems(newItems);
    changeQuantity(id, quantity);
  };

  const handleRemove = (id: number) => {
    setItems((prev) => prev?.filter((item) => item.id !== id));
    remove(id);
  };

  if (items && items?.length <= 0) {
    return (
      <div className="container h-[60vh] flex flex-col items-center justify-center gap-4">
        <ShoppingCart className="w-32 h-32" />
        <h1 className="text-xl md:text-3xl font-medium text-center text-green-950">
          Your Cart is Empty!
        </h1>
        <Button variant={"default"} className="text-lg md:text-xl" asChild>
          <Link href="/">Shop Now</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-xl lg:text-2xl text-center font-medium text-green-950 p-4 bg-green-200 ">
        You have {items?.length} item(s) in Cart
      </h1>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[75fr,25fr] gap-x-8 gap-y-2 p-2">
          <table className="table-fixed text-left">
            <thead className="border-b border-green-950">
              <tr>
                <th className="font-medium lg:px-8">Product</th>
                <th className="font-medium lg:px-8 w-8">Quantity</th>
                <th className="font-medium lg:px-8 text-right">Total Price</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {items?.map((item) => (
                <tr key={item.id} className="border-b border-gray-200">
                  <td>
                    <div className="flex items-center">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        width={128}
                        height={128}
                      />
                      <div className="">
                        <h2 className="font-medium">{item.name}</h2>
                        <p className="text-green-600  text-left">
                          ₹{item.price}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col  gap-2">
                      <QuantityInput
                        item={{ id: item.id, quantity: item.quantity }}
                        updateChange={handleQuantityChange}
                      />
                      <Button
                        variant={"link"}
                        className="hover:text-green-600"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </td>
                  <td className="text-right p-8">
                    <p>₹{item.price}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Subtotal
            items={items?.map((item) => ({
              price: item.price,
              quantity: item.quantity,
            }))}
          />
        </div>
      </div>
    </>
  );
};

export default page;
