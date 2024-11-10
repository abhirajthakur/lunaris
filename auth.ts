import prisma from "@/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Resend, GitHub, Google],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "email") {
        if (user.email) {
          const existingUser = await prisma.user.findUnique({
            where: { email: user.email },
          });
          if (!existingUser) {
            await prisma.user.create({
              data: {
                email: user.email,
                name: user.name,
              },
            });
          }
        }
      }
      return true;
    },
    async session({ token, session }) {
      if (token.sub) {
        session.user.id = token.sub;
      }
      console.log(session);
      return session;
    },
    async jwt({ token }) {
      return token;
    },
  },
  pages: {
    signIn: "/signin",
    verifyRequest: "/verify",
    error: "/error",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
});
