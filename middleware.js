import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"
import { withAuth } from 'next-auth/middleware'

import { NextResponse } from 'next/server'


const protectedRoutes = ['/admin']



 const authMiddleware = withAuth(
    function middleware (req){
      const token = req.nextauth?.token ; 
      return NextResponse.next();
    },
  {
    callbacks: {
      authorized: async (req ) => {
     
        const token = req.token
        
       if (token)
        return token?.role === 'admin'
      return false
      }
    }
  }, 
)

export default async function middleware(req, params){

  const intlResponse = createMiddleware(routing)
  let isProtected = false ; 
  for (let i in protectedRoutes){
   
    isProtected = req.nextUrl.pathname.startsWith(protectedRoutes[i]) ; 
    if (isProtected)
        break;
  }

  if (isProtected)
      return authMiddleware(req ) ;
  else 
    return intlResponse(req)

}

export const config = {

  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)"

 
}
