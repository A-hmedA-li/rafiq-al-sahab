
import { Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import ChatButton from "@/components/chatButton"

const inter = Inter({ subsets: ["latin"] })





export default async function RootLayout({ children }) {
 
  return (
      
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <Navigation />
                <main>{children}</main>
              <ChatButton />
              <Footer />
            </ThemeProvider>
                   
  
   
  )
}
