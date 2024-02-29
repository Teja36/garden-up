"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ItemType = {
  price: number;
  quantity: number;
};

type SubtotalProps = {
  items?: ItemType[];
};

const TAX = 7;

const Subtotal = ({ items }: SubtotalProps) => {
  const subtotal =
    items?.reduce((acc, cur) => acc + cur.price * cur.quantity, 0) ?? 0;

  return (
    <div className="sticky top-4 text-white bg-green-600 p-2 flex flex-col justify-between h-max gap-2">
      <div className="flex">
        <Input
          type="text"
          placeholder="Enter promo code"
          className="text-black"
        />
        <Button>Apply</Button>
      </div>
      <table>
        <tbody>
          <tr>
            <td>Subtotal:</td>
            <td className="text-right">${subtotal}</td>
          </tr>
          <tr>
            <td>Tax:</td>
            <td className="text-right">{TAX}%</td>
          </tr>
          <tr>
            <td>Total</td>
            <td className="text-right">${subtotal + (subtotal * TAX) / 100}</td>
          </tr>
        </tbody>
      </table>
      <Button
        variant={"secondary"}
        className="w-full uppercase font-medium text-lg "
      >
        Checkout
      </Button>
    </div>
  );
};

export default Subtotal;
