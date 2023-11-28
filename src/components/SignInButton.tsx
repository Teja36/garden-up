"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const SignInButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex items-center gap-2">
        <Image
          src={session.user.image ?? ""}
          alt={session.user.name ?? ""}
          className="rounded-full"
          width={32}
          height={32}
        />
        <p>{session.user.name}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }

  return <button onClick={() => signIn()}>Sign In</button>;
};

export default SignInButton;
