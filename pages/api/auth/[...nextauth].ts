import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prismadb";
import EmailProvider from "next-auth/providers/email";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: `smtp://${process.env.EMAIL_FROM}:${process.env.EMAIL_FROM_PASSWORD}@${process.env.EMAIL_SERVER}:${process.env.EMAIL_SERVER_PORT}`,
      from: process.env.EMAIL_FROM,
    }),
  ],
};

export default NextAuth({
  ...authOptions,
});
