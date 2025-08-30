import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./prisma";
import { signIn } from "next-auth/react";

export const authConfig = {
  adapter: PrismaAdapter(prisma), 
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "openid email profile https://www.googleapis.com/auth/calendar",
        },
      },
    }),
  ],
  pages:{
    signIn: "/signin", 
  },
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async jwt({ token,user, account }) {
      if (user){
        token.role = user.role; 
      }
      return token;
    },
     async session({ session, token }) {
      
      if (session.user) {
        session.user.role = token.role
        session.user.id = token.sub
      }
      return session
    },
    session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  },
};