import { Inter } from "next/font/google"
import { Noto_Kufi_Arabic } from 'next/font/google';

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import ChatButton from "@/components/chatButton"
import { SessionProvider } from "next-auth/react";
const inter = Inter({ subsets: ["latin"] })

const notoKufi = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-noto-kufi', 
  display: 'swap',
});


export const metadata = {
  title: "Rafiq Al Sahab Technology L.L.C - رفيق السحاب",
  description:
    "رفيقك الخبير في حلول التكنولوجيا السحابية - نحول أفكارك إلى واقع رقمي بلا تعقيد",
  keywords:
    "AI automation, cloud solutions, booking systems, WhatsApp integration, custom AI agents, UAE technology",
  authors: [{ name: "Rafiq Al Sahab Technology L.L.C" }],
  openGraph: {
    title: "Rafiq Al Sahab Technology L.L.C - رفيق السحاب",
    description: "رفيقك الخبير في حلول التكنولوجيا السحابية",
    type: "website",
    locale: "ar_AE"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl"    >
      <body className={notoKufi.className}>
       
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
  
      </body>
    </html>
  )
}
