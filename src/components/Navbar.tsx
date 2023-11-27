import { Heart, ShoppingCart, User2 } from "lucide-react";
import Menubar from "./Menubar";
import SearchInput from "./SearchInput";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full flex flex-col border-b-2 border-slate-900 mx-auto">
      <div className="flex justify-between items-center gap-y-4 min-[450px]:gap-4 max-[450px]:flex-wrap p-4">
        <Link href="/">
          <h1 className="font-medium">Garden Up</h1>
        </Link>
        <div className="order-last min-[450px]:order-none flex items-center shrink max-[480px]:w-full">
          <SearchInput />
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
