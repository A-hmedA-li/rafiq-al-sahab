import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"
import { withAuth } from 'next-auth/middleware'

import { NextResponse } from 'next/server'




const protectedRoutes = ['/admin']
export default function middleware(req){


  
 const authMiddleware = withAuth(
  function middleware() {
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: (token) => {
 
       if (token)
          return true 
        return token?.role === 'admin'
      }
    }
  }
)
  const intlResponse = createMiddleware(routing)
  let isProtected = false ; 
  for (let i in protectedRoutes){
   
    isProtected = req.nextUrl.pathname.startsWith(protectedRoutes[i]) ; 
    if (isProtected)
        break;
  }

  if (isProtected)
      return authMiddleware(req) ;
  else 
    return intlResponse(req)

}

export const config = {

  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)"

 
}
