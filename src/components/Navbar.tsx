import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Menubar from "./Menubar";
import { Heart, Search, ShoppingCart, User2 } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-screen flex flex-col border-b-2 border-slate-900 mx-auto">
      <div className="flex justify-between items-center gap-y-4 min-[450px]:gap-4 max-[450px]:flex-wrap p-4">
        <h1 className="font-bold">Garden Up</h1>
        <div className="order-last min-[450px]:order-none flex items-center shrink max-[480px]:w-full">
          <Input
            type="search"
            placeholder="Search"
            className="focus-visible:ring-0  rounded-r-none "
          />
          <Button type="submit" className="rounded-l-none p-3">
            <Search />
          </Button>
        </div>
        <div className="flex justify-between items-center gap-3">
          <User2 />
          <span className="flex justify-between items-center gap-1">
            <p>Wishlist</p>
            <Heart />
          </span>
          <span>
            <ShoppingCart />
          </span>
        </div>
      </div>
      <Menubar />
    </header>
  );
};

export default Navbar;
