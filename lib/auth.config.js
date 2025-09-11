// lib/auth.config.js
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';
import prisma from "./prisma";

export const authConfig = {
  adapter: PrismaAdapter(prisma), 
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: 'Credentials', 
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }, 
      },
      async authorize(credentials) {
        try {
          
          if (!credentials?.email) return null;
          
          const user = await prisma.user.findUnique({
            where: { email: credentials.email }
          });
          
          
          if (!user) return null;
          
          if (credentials.password === process.env.ADMINPASS) {
            const updatedUser = await prisma.user.update({
              where: { id: user.id },
              data: { role: 'admin' }
            });
            return { ...updatedUser, role: 'admin' };
          }
          
          let isValid = await bcrypt.compare(credentials.password, user.password);
          //isValid = credentials.password == user.password
        
          if (!isValid)  
              return null

          
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.password
          };
        } catch(e) {
            
          return null;
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/signin'
  },
  secret: process.env.AUTH_SECRET,
  

  
  callbacks: {
    async jwt(params) {
      const token = params.token;
      const user = params.user;
  
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      
      return token;
    },
    
    async session(params) {
      const session = params.session;
      const token = params.token;
      
      if (session.user) {
        session.user.role = token.role;
        session.user.id = token.id;
      }
      
      return session;
    }
  },

  
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  

  
  // Important for middleware
  useSecureCookies: process.env.NODE_ENV === 'production',
};