import { Heart, ShoppingCart } from "lucide-react";
import SearchInput from "./SearchInput";
import Link from "next/link";
import SignInButton from "./SignInButton";
import Menubar from "./Menubar";
import CartItemCountIndicator from "./CartItemCountIndicator";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center gap-y-4 min-[450px]:gap-4 max-[450px]:flex-wrap p-4">
      <Link href="/">
        <h1 className="font-semibold uppercase text-white">Garden Up</h1>
      </Link>
      <div>
        <Menubar />
      </div>
      <div className="order-last min-[450px]:order-none flex items-center shrink max-[480px]:w-full">
        <SearchInput />
      </div>
      <div className="flex justify-between items-center gap-3">
        <SignInButton />
        <span className="flex justify-between items-center gap-1">
          <Link href="/wishlist">
            <Heart color="white" />
          </Link>
        </span>
        <span className="relative">
          <Link href="/cart">
            <ShoppingCart color="white" />
            <CartItemCountIndicator />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
