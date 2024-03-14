"use client";

import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { User2 } from "lucide-react";
import SignInModal from "./SignInModal";

const SignInButton = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  if (session && session.user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center gap-2">
            {session.user.image ? (
              <Image
                src={session.user.image ?? ""}
                alt={session.user.name ?? ""}
                className="rounded-full"
                width={32}
                height={32}
              />
            ) : (
              <div className="w-8 h-8 flex justify-center items-center bg-gray-200 rounded-full">
                <span className="text-sm font-semibold">
                  {session.user.name?.charAt(0)}
                </span>
              </div>
            )}

            <span className="text-white">{session.user.name}</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => signOut()}>
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <>
      <button onClick={() => setOpen((prev) => !prev)} className="text-white">
        <User2 />
      </button>
      {open && <SignInModal closeModal={() => setOpen(false)} />}
    </>
  );
};

export default SignInButton;
