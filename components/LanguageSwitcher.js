"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { useLocale } from "next-intl"
import { Button } from "@/components/ui/button"
import { Globe, Languages, Link } from "lucide-react"

export default function SimpleLanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale()
  const [isOpen, setIsOpen] = useState(false)
  
  const languages = [
    { code: "ar", name: "العربية", flag: "AR" },
    { code: "en", name: "English", flag: "EN" }
  ]

  const switchLanguage = (locale) => {
    // setIsOpen(false)

    
    
    // Remove current locale from pathname if present
    let newPathname = pathname
    languages.forEach(lang => {
      if (newPathname.startsWith(`/${lang.code}`)) {
        newPathname = newPathname.replace(`/${lang.code}`, '') || '/'
      }
    })
    
    // Add new locale to pathname
    const newPath = `/${locale}${newPathname}`
    return newPath ; 
     router.replace('/' + locale)
  }

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0]

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        className="flex items-center space-x-2 px-3"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Switch language"
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm font-medium">{currentLanguage.flag}</span>
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-[#171717] rounded-lg shadow-lg border border-[#A5D5A9]/20 z-50">
          <div className="py-1">
            {languages.map((language) => (
              <a
                key={language.code}
              
                href={switchLanguage(language.code)}
                className={`w-full flex items-center space-x-2 px-4 py-2 text-sm text-left transition-colors ${
                  currentLocale === language.code 
                    ? "bg-[#78C487]/10 text-[#78C487]" 
                    : "hover:bg-[#78C487]/5 text-[#404544] dark:text-white"
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span className="flex-1">{language.name}</span>
                {currentLocale === language.code && (
                  <div className="w-2 h-2 rounded-full bg-[#78C487]" />
                )}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}