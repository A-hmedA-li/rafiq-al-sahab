import { NextIntlClientProvider, hasLocale } from "next-intl"
import { getLocale } from "next-intl/server"

import { Noto_Kufi_Arabic } from 'next/font/google';

import "./globals.css"

const notoKufi = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-noto-kufi', 
  display: 'swap',
});


export default async function LocaleLayout({ children, params }) {

  const locale = await getLocale();

  
  let dir = 'ltr'; 
  if (locale == "ar")
      dir = 'rtl'

 
  return (
    <html lang={locale} dir={dir} >
      <body className={notoKufi.className}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
