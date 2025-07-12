import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

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
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
