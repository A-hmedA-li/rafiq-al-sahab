"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Moon, Sun, Cloud, User, LogIn, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslations } from "next-intl"
import LanguageSwitcher from "./LanguageSwitcher" // Import the language switcher
import { signIn, signOut, useSession } from "next-auth/react"

export function Navigation() {
  const t = useTranslations("Navigation")
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  


  const navItems = [
    { href: "/", label: t("home") },
    { href: "/services", label: t("services") },
    // { href: "/portfolio", label: t("portfolio") },
    // { href: "/founders", label: t("team") },
    { href: "/about", label: t("about") },
    { href: "/booking", label: t("booking") },
    { href: "/contact", label: t("contact") },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  const transition = {
    'signIn': t('signIn') 
  }
  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 dark:bg-[#171717]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 3 }}
              transition={{ duration: 0.2 }}
              className="p-2  rounded-full"
            >
              <img src="/images/lgc.png"  className="w-25" />
            </motion.div>
            <span className="text-xl font-bold text-[#404544] dark:text-white group-hover:text-[#78C487] transition-colors">
              {t("companyName")}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-[#78C487] ${
                  pathname === item.href ? "text-[#78C487]" : "text-[#404544] dark:text-white"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#78C487]"
                    layoutId="activeTab"
                    initial={false}
                  />
                )}
              </Link>
            ))}


            <UserAuth translation={transition} />
          </div>

         
          {/* Theme Toggle, Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2"
              aria-label={t("toggleTheme")}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden p-2" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label={t("toggleMenu")}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-[#A5D5A9]/20 bg-white/95 dark:bg-[#171717]/95 backdrop-blur-md"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-2 text-sm font-medium transition-colors hover:text-[#78C487] hover:bg-[#78C487]/10 rounded-md ${
                      pathname === item.href ? "text-[#78C487] bg-[#78C487]/10" : "text-[#404544] dark:text-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="border-t border-[#A5D5A9]/20 pt-4 space-y-2">
                <Link href="/signin" onClick={() => setIsOpen(false)}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-[#404544] dark:text-white hover:text-[#78C487] hover:bg-[#78C487]/10"
                  >
                    <LogIn className="h-4 w-4 ml-2" />
                    تسجيل الدخول
                  </Button>
                </Link>
                <Link href="/signup" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-[#78C487] hover:bg-[#78C487]/90 text-white">
                    <User className="h-4 w-4 ml-2" />
                    إنشاء حساب
                  </Button>
                </Link>
              </div>
                
                
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}




function UserAuth({translation}) {
  let { data: session, status } = useSession()

  

  if (status === 'loading') {
    return (
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
      </div>
    )
  }

  if (!session) {
    return (
      <Button 
        onClick={() => signIn('google')}
        variant="outline"
        className="border-[#78C487] text-[#78C487] hover:bg-[#78C487] hover:text-white"
      >
        {translation.signIn}
      </Button>
    )
  }

  return (
    <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300  p-2 rounded-2xl ">
      <div className="flex items-center space-x-2">
        <div className="w-10">
    
          {session.user?.image ? (
            <img
              src={session.user.image}
              alt={session.user.name || 'User avatar'}
          
              className="rounded-full "
            />
          ) : (
            <div className="w-8 h-8 bg-[#78C487] rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
          )}

        </div>
        <span className="hidden xl:block text-sm font-medium ">
          {session.user?.name}
        </span>
      </div>
      <Button
        onClick={() => signOut()}
        variant="ghost"
        size="sm"
        className="text-gray-500 hover:text-white hover:bg-red-600"
      >
        <LogOut className="h-4 w-4" />
      </Button>
    </div>
  )
}
