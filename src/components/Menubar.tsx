"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Menubar = () => {
  return (
    <nav className=" w-full hidden sm:flex justify-center items-center">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Plants</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col justify-start">
                <li>
                  <Link href="/plants/indoor" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Indoor
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/plants/flower" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Flower
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/plants/fruit" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Fruit
                    </NavigationMenuLink>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Pots & Planters</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col justify-start">
                <li>
                  <Link href="/plants/indoor" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Terracota
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/plants/flower" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Growbags
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/plants/fruit" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Sustainable
                    </NavigationMenuLink>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Decor</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col justify-start">
                <li>
                  <Link href="/plants/indoor" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Terracota
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/plants/flower" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Growbags
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/plants/fruit" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Sustainable
                    </NavigationMenuLink>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Essentials</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col justify-start">
                <li>
                  <Link href="/plants/indoor" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Terracota
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/plants/flower" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Growbags
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/plants/fruit" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Sustainable
                    </NavigationMenuLink>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/blog" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default Menubar;
