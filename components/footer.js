"use client"

import { motion } from "framer-motion"
import { Cloud, Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  services: [
    { label: "نظام الحجز الإلكتروني", href: "/services#booking" },
    { label: "المساعد الذكي المخصص", href: "/services#ai-agent" },
    { label: "تكامل الرسائل الجماعية", href: "/services#messaging" },
    { label: "التخصيص بالذكاء الاصطناعي", href: "/services#personalization" }
  ],
  company: [
    { label: "من نحن", href: "/about" },
    { label: "الفريق", href: "/founders" },
    { label: "المشاريع", href: "/portfolio" },
    { label: "تواصل معنا", href: "/contact" }
  ]
}

export function Footer() {
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
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-[#78C487] rounded-full">
                <Cloud className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">رفيق السحاب</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              رفيقك الخبير في حلول التكنولوجيا السحابية. نحول أفكارك إلى واقع
              رقمي بلا تعقيد، من القلب إلى القلب.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#78C487]" />
                <span className="text-white/80">info@rafiqalsahab.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[#78C487]" />
                <span className="text-white/80">+971 XX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-[#78C487]" />
                <span className="text-white/80">
                  دولة الإمارات العربية المتحدة
                </span>
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
              خدماتنا
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
              الشركة
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
              <h4 className="text-lg font-semibold mb-2">تواصل معنا الآن</h4>
              <p className="text-white/70 text-sm">سنرد عليك خلال 24 ساعة</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://wa.me/971XXXXXXXX"
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
            © 2024 Rafiq Al Sahab Technology L.L.C. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  )
}
