"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { MENU_ITEMS } from "@/constants/constants";
import { Button } from "./ui/button";

const Menubar = () => {
  return (
    <nav className=" w-full hidden sm:flex justify-start items-center gap-2">
      <NavigationMenu>
        {MENU_ITEMS.map((menuItem) => (
          <NavigationMenuList key={menuItem.title}>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Button
                  variant={"link"}
                  asChild
                  className="text-white uppercase tracking-widest hover:opacity-50"
                >
                  <span>{menuItem.title}</span>
                </Button>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute">
                <ul className="w-max">
                  {menuItem.content.map((menuSubItem) => (
                    <li
                      key={menuSubItem.title}
                      className="text-sm hover:opacity-50"
                    >
                      <Button variant={"link"} asChild>
                        <Link href={menuSubItem.href}>{menuSubItem.title}</Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        ))}
      </NavigationMenu>
      <Button
        variant={"link"}
        className="text-white uppercase tracking-widest hover:opacity-50"
      >
        Blog
      </Button>
    </nav>
  );
};

export default Menubar;
