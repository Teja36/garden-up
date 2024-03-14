import NextAuth from "next-auth/next";
import { AuthOptions } from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";

import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "../../../../../utils/db";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: { label: "Password", type: "password", placeholder: "Password" },
      },
      async authorize(credentials, req) {

        if (!credentials?.email || !credentials.password) return null;

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          }
        });

        if (!user) return null;

        const res = await bcrypt.compare(credentials.password, user.passwordHash as string);

        if (!res) return null;

        return user;
      }
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
