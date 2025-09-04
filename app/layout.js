import { NextIntlClientProvider, hasLocale } from "next-intl"
import { getLocale } from "next-intl/server"

import { Noto_Kufi_Arabic } from 'next/font/google';



import { getServerSession } from 'next-auth/next'

import { SessionProvider } from "next-auth/react";

import { authConfig } from "@/lib/auth.config"

import SessionProviderWrapper from "@/components/session-provider-wrapper";




import "./globals.css"
import { auth } from "googleapis/build/src/apis/abusiveexperiencereport";

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


export default async function LocaleLayout({ children, params }) {

  const locale = await getLocale();

  const session = await getServerSession(authConfig)

  let dir = 'ltr'; 
  if (locale == "ar")
      dir = 'rtl'

 
  return (
    <html lang={locale} dir={dir} >
      <body className={notoKufi.className}>

        <SessionProviderWrapper>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  )
}
