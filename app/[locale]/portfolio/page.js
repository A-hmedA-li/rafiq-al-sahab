"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Filter, ExternalLink, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const portfolioItems = [
  {
    id: 1,
    title: "Smart Restaurant Booking System",
    arabicTitle: "نظام حجز ذكي للمطاعم",
    description: "نظام حجز متطور مع تكامل WhatsApp وإدارة المواعيد التلقائية",
    image: "/images/lg.png",
    category: "booking",
    tech: ["Next.js", "AI", "WhatsApp API", "Calendar Integration"],
    date: "2024-01",
    link: "https://example.com",
    featured: true
  },
  {
    id: 2,
    title: "E-commerce AI Assistant",
    arabicTitle: "مساعد ذكي للتجارة الإلكترونية",
    description:
      "مساعد ذكي يساعد العملاء في اختيار المنتجات ويزيد المبيعات بنسبة 40%",
    image: "/images/lg.png",
    category: "ai-agent",
    tech: ["AI Agent", "Machine Learning", "CRM Integration", "Analytics"],
    date: "2024-02",
    link: "https://example.com",
    featured: true
  },
  {
    id: 3,
    title: "Healthcare Appointment System",
    arabicTitle: "نظام مواعيد طبية",
    description:
      "نظام إدارة مواعيد طبية مع تذكيرات تلقائية وتكامل مع السجلات الطبية",
    image: "/images/lg.png",
    category: "booking",
    tech: ["Booking System", "SMS Integration", "Medical Records", "Calendar"],
    date: "2023-12",
    link: "https://example.com",
    featured: false
  },
  {
    id: 4,
    title: "Real Estate WhatsApp Bot",
    arabicTitle: "بوت عقاري لـ WhatsApp",
    description: "بوت ذكي للعقارات يساعد العملاء في البحث عن العقارات المناسبة",
    image: "/images/lg.png",
    category: "messaging",
    tech: ["WhatsApp Bot", "Property Search", "AI Matching", "CRM"],
    date: "2024-01",
    link: "https://example.com",
    featured: false
  },
  {
    id: 5,
    title: "Personalized Learning Platform",
    arabicTitle: "منصة تعلم مخصصة",
    description: "منصة تعليمية تستخدم الذكاء الاصطناعي لتخصيص المحتوى لكل طالب",
    image: "/images/lg.png",
    category: "personalization",
    tech: [
      "AI Personalization",
      "Learning Analytics",
      "Progress Tracking",
      "Adaptive Content"
    ],
    date: "2023-11",
    link: "https://example.com",
    featured: true
  },
  {
    id: 6,
    title: "Fitness Center Management",
    arabicTitle: "إدارة النادي الرياضي",
    description: "نظام شامل لإدارة النوادي الرياضية مع حجز الحصص والمدفوعات",
    image: "/images/lg.png",
    category: "booking",
    tech: [
      "Booking System",
      "Payment Integration",
      "Member Management",
      "Mobile App"
    ],
    date: "2023-10",
    link: "https://example.com",
    featured: false
  }
]

const categories = [
  { id: "all", label: "جميع المشاريع", count: portfolioItems.length },
  {
    id: "booking",
    label: "أنظمة الحجز",
    count: portfolioItems.filter(item => item.category === "booking").length
  },
  {
    id: "ai-agent",
    label: "المساعد الذكي",
    count: portfolioItems.filter(item => item.category === "ai-agent").length
  },
  {
    id: "messaging",
    label: "الرسائل",
    count: portfolioItems.filter(item => item.category === "messaging").length
  },
  {
    id: "personalization",
    label: "التخصيص",
    count: portfolioItems.filter(item => item.category === "personalization")
      .length
  }
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [filteredItems, setFilteredItems] = useState(portfolioItems)

  const handleCategoryChange = categoryId => {
    setActiveCategory(categoryId)
    if (categoryId === "all") {
      setFilteredItems(portfolioItems)
    } else {
      setFilteredItems(
        portfolioItems.filter(item => item.category === categoryId)
      )
    }
  }

  const featuredItems = portfolioItems.filter(item => item.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#A5D5A9]/10 to-[#78C487]/20 dark:from-[#171717] dark:via-[#404544]/20 dark:to-[#78C487]/10 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#404544] dark:text-white mb-6">
              مشاريعنا المميزة
            </h1>
            <p className="text-xl text-[#404544]/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
              نماذج من أعمالنا التي حققت نجاحاً باهراً لعملائنا وساهمت في نمو
              أعمالهم
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 bg-[#78C487]/5 dark:bg-[#404544]/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#404544] dark:text-white mb-4">
              المشاريع المميزة
            </h2>
            <p className="text-lg text-[#404544]/70 dark:text-white/70">
              أبرز إنجازاتنا التي نفتخر بها
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full">
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.arabicTitle}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-[#78C487]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Badge className="absolute top-4 right-4 bg-[#78C487] text-white">
                      مميز
                    </Badge>
                  </div>
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-[#404544] dark:text-white mb-2">
                        {item.arabicTitle}
                      </h3>
                      <p className="text-[#404544]/70 dark:text-white/70 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tech.slice(0, 3).map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-[#A5D5A9]/20 text-[#404544] dark:text-white text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {item.tech.length > 3 && (
                          <Badge
                            variant="secondary"
                            className="bg-[#A5D5A9]/20 text-[#404544] dark:text-white text-xs"
                          >
                            +{item.tech.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-[#A5D5A9]/20">
                      <div className="flex items-center text-sm text-[#404544]/60 dark:text-white/60">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(item.date).toLocaleDateString("ar-AE", {
                          year: "numeric",
                          month: "long"
                        })}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#78C487] hover:text-[#78C487]/80 p-0"
                        asChild
                      >
                        <Link href={item.link} target="_blank">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#404544] dark:text-white mb-4">
              جميع المشاريع
            </h2>
            <p className="text-lg text-[#404544]/70 dark:text-white/70">
              استكشف مجموعة شاملة من أعمالنا
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map(category => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => handleCategoryChange(category.id)}
                className={`${
                  activeCategory === category.id
                    ? "bg-[#78C487] hover:bg-[#78C487]/90 text-white"
                    : "border-[#78C487] text-[#78C487] hover:bg-[#78C487] hover:text-white"
                }`}
              >
                <Filter className="h-4 w-4 mr-2" />
                {category.label}
                <Badge
                  variant="secondary"
                  className={`ml-2 ${
                    activeCategory === category.id
                      ? "bg-white/20 text-white"
                      : "bg-[#78C487]/10 text-[#78C487]"
                  }`}
                >
                  {category.count}
                </Badge>
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full">
                    <div className="relative overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.arabicTitle}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-[#78C487]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {item.featured && (
                        <Badge className="absolute top-4 right-4 bg-[#78C487] text-white">
                          مميز
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-[#404544] dark:text-white mb-2">
                          {item.arabicTitle}
                        </h3>
                        <p className="text-[#404544]/70 dark:text-white/70 mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tech.slice(0, 3).map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="bg-[#A5D5A9]/20 text-[#404544] dark:text-white text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {item.tech.length > 3 && (
                            <Badge
                              variant="secondary"
                              className="bg-[#A5D5A9]/20 text-[#404544] dark:text-white text-xs"
                            >
                              +{item.tech.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-[#A5D5A9]/20">
                        <div className="flex items-center text-sm text-[#404544]/60 dark:text-white/60">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(item.date).toLocaleDateString("ar-AE", {
                            year: "numeric",
                            month: "long"
                          })}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#78C487] hover:text-[#78C487]/80 p-0"
                          asChild
                        >
                          <Link href={item.link} target="_blank">
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-[#404544]/70 dark:text-white/70 text-lg">
                لا توجد مشاريع في هذه الفئة حالياً
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#78C487] to-[#A5D5A9]">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              مستعد لمشروعك القادم؟
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              دعنا نساعدك في تحويل فكرتك إلى مشروع ناجح مثل هذه المشاريع
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#78C487] hover:bg-white/90 px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link href="/contact">
                  ابدأ مشروعك الآن
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#78C487] px-8 py-4 text-lg bg-transparent"
                asChild
              >
                <Link href="/services">استكشف خدماتنا</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
