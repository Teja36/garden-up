"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import throttle from "../../utils/throttle";

const Header = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  const lastScroll = useRef(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);

    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  const listenToScroll = throttle(() => {
    let currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

    if (currentScroll > 0 && lastScroll.current <= currentScroll) {
      lastScroll.current = currentScroll;
      setIsVisible(false);
    } else {
      lastScroll.current = currentScroll;
      setIsVisible(true);
    }
  }, 100);

  return (
    <header
      className={cn("relative w-full flex flex-col bg-green-600 mx-auto z-50", {
        "sticky top-0 shadow-xl": lastScroll.current > 100,
        "animate-navbar-down": isVisible,
        "animate-navbar-up": lastScroll.current > 100 && !isVisible,
      })}
    >
      {children}
    </header>
  );
};

export default Header;
