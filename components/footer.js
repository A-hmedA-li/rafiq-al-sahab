"use client"

import { motion } from "framer-motion"
import { Cloud, Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations("Footer")

  const footerLinks = {
    services: [
      { label: t("links.services.0"), href: "/services#booking" },
      { label: t("links.services.1"), href: "/services#ai-agent" },
      { label: t("links.services.2"), href: "/services#messaging" },
      { label: t("links.services.3"), href: "/services#personalization" }
    ],
    company: [
      { label: t("links.company.0"), href: "/about" },
      { label: t("links.company.1"), href: "/founders" },
      { label: t("links.company.2"), href: "/portfolio" },
      { label: t("links.company.3"), href: "/contact" }
    ]
  }

  return (
    <footer className="bg-[#404544] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-4">
              <img src="/images/lgc.png" className="w-40" />
              <span className="text-2xl font-bold">{t("companyName")}</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              {t("description")}
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#78C487]" />
                <span className="text-white/80">info@rafiqsahab.com</span>
              </div>
              <div className="flex items-center space-x-3 " >
                <Phone className="h-4 w-4 text-[#78C487] "  />
                <span className="text-white/80"  dir="ltr">{t("contact.phone")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-[#78C487]" />
                <span className="text-white/80">{t("contact.location")}</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[#78C487]">
              {t("sections.services")}
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#78C487] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[#A5D5A9]">
              {t("sections.company")}
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#A5D5A9] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Quick Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">{t("quickContact.title")}</h4>
              <p className="text-white/70 text-sm">{t("quickContact.subtitle")}</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://wa.me/971509741123"
                target="_blank"
                className="flex items-center space-x-2 bg-[#25D366] hover:bg-[#25D366]/90 px-4 py-2 rounded-lg transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm">WhatsApp</span>
              </Link>
              <Link
                href="https://t.me/rafiqalsahab"
                target="_blank"
                className="flex items-center space-x-2 bg-[#0088cc] hover:bg-[#0088cc]/90 px-4 py-2 rounded-lg transition-colors"
              >
                <Send className="h-4 w-4" />
                <span className="text-sm">Telegram</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}