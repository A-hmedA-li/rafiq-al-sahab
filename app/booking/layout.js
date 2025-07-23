
"use client"

import { SessionProvider } from "next-auth/react"

export default function LayoutBooking({ children }) {
  return (
    <html lang="ar" dir="rtl"    >
      <body>
       
    <SessionProvider>
            <div>
                
                {children}
            </div>
  </SessionProvider>
      </body>
    </html>
  )
}
