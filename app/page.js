"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  Zap,
  MessageSquare,
  Brain,
  Users,
  Calendar
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const services = [
  {
    icon: Calendar,
    title: "Online Booking Setup & Management",
    description: "نظام حجز مواعيد ذكي يسهل على عملائك التواصل معك",
    color: "text-[#78C487]"
  },
  {
    icon: Brain,
    title: "Custom AI Agent & Automation",
    description: "مساعد ذكي مخصص لأعمالك يوفر الوقت والجهد",
    color: "text-[#A5D5A9]"
  },
  {
    icon: MessageSquare,
    title: "Mass Messaging Integration",
    description: "ربط WhatsApp و Telegram لتواصل فعال مع العملاء",
    color: "text-[#78C487]"
  },
  {
    icon: Zap,
    title: "AI-Powered Personalization",
    description: "تخصيص تجربة العميل باستخدام الذكاء الاصطناعي",
    color: "text-[#A5D5A9]"
  }
]

const portfolioItems = [
  {
    title: "Smart Restaurant Booking System",
    description: "نظام حجز ذكي لمطعم مع تكامل WhatsApp",
    image: "/images/lg.png",
    tech: ["Next.js", "AI", "WhatsApp API"]
  },
  {
    title: "E-commerce AI Assistant",
    description: "مساعد ذكي لمتجر إلكتروني يساعد العملاء",
    image: "/images/lg.png",
    tech: ["AI Agent", "Automation", "CRM"]
  },
  {
    title: "Healthcare Appointment System",
    description: "نظام مواعيد طبية مع تذكيرات تلقائية",
    image: "/images/lg.png",
    tech: ["Booking System", "SMS", "Calendar"]
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#A5D5A9]/10 to-[#78C487]/20 dark:from-[#171717] dark:via-[#404544]/20 dark:to-[#78C487]/10 ">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 px-4">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            className="text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <Image
                src="/images/lgc.png"
                alt="رفيق السحاب Logo"
                width={300}
                height={120}
                className="mx-auto mb-6"
              />
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-[#404544] dark:text-white mb-6"
            >
              دعونا نبني السحابة معاً
              <br />
              <span className="text-[#78C487]">ولنحتفظ ببعض المرح!</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-[#404544]/80 dark:text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              رفيقك الخبير في حلول التكنولوجيا السحابية - نحول أفكارك إلى واقع
              رقمي بلا تعقيد
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-[#78C487] hover:bg-[#78C487]/90 text-white px-8 py-4 text-lg group"
                asChild
              >
                <Link href="/contact">
                  احصل على استشارة مجانية
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#78C487] text-[#78C487] hover:bg-[#78C487] hover:text-white px-8 py-4 text-lg bg-transparent"
                asChild
              >
                <Link href="/services">استكشف خدماتنا</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-[#404544] dark:text-white mb-4"
            >
              خدماتنا المميزة
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[#404544]/70 dark:text-white/70 max-w-2xl mx-auto"
            >
              حلول تقنية متطورة مصممة خصيصاً لتنمية أعمالك
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-[#A5D5A9]/30 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`inline-flex p-3 rounded-full bg-[#78C487]/10 mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <service.icon className={`h-8 w-8 ${service.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-[#404544] dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#404544]/70 dark:text-white/70 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-[#78C487] text-[#78C487] hover:bg-[#78C487] hover:text-white bg-transparent"
              asChild
            >
              <Link href="/services">
                عرض جميع الخدمات
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 px-4 bg-[#78C487]/5 dark:bg-[#404544]/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-[#404544] dark:text-white mb-4"
            >
              مشاريعنا المميزة
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[#404544]/70 dark:text-white/70 max-w-2xl mx-auto"
            >
              نماذج من أعمالنا التي حققت نجاحاً باهراً لعملائنا
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {portfolioItems.map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image || "/images/lg.png"}
                      alt={item.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-[#78C487]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#404544] dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#404544]/70 dark:text-white/70 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-[#A5D5A9]/20 text-[#404544] dark:text-white text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-[#78C487] text-[#78C487] hover:bg-[#78C487] hover:text-white bg-transparent"
              asChild
            >
              <Link href="/portfolio">
                عرض جميع المشاريع
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Founders Teaser */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-[#404544] dark:text-white mb-4"
            >
              تعرف على فريقنا
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[#404544]/70 dark:text-white/70 mb-12 max-w-2xl mx-auto"
            >
              خبراء متخصصون في التكنولوجيا السحابية والذكاء الاصطناعي
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              <Card className="p-8 text-center hover:shadow-lg transition-all duration-300">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Dr. Nazeeh Harfoosh"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4 border-4 border-[#78C487]/20"
                />
                <h3 className="text-xl font-semibold text-[#404544] dark:text-white mb-2">
                  Dr. Nazeeh Harfoosh
                </h3>
                <p className="text-[#78C487] font-medium mb-3">
                  Co-Founder & CTO
                </p>
                <p className="text-[#404544]/70 dark:text-white/70 text-sm leading-relaxed">
                  خبير في الذكاء الاصطناعي والأتمتة، يحب تبسيط التكنولوجيا
                  المعقدة
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-all duration-300">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Ahmad"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4 border-4 border-[#A5D5A9]/20"
                />
                <h3 className="text-xl font-semibold text-[#404544] dark:text-white mb-2">
                  Ahmad
                </h3>
                <p className="text-[#A5D5A9] font-medium mb-3">
                  Co-Founder & CEO
                </p>
                <p className="text-[#404544]/70 dark:text-white/70 text-sm leading-relaxed">
                  متخصص في تطوير الحلول السحابية وإدارة المشاريع التقنية
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8">
              <Button
                variant="outline"
                className="border-[#78C487] text-[#78C487] hover:bg-[#78C487] hover:text-white bg-transparent"
                asChild
              >
                <Link href="/founders">
                  تعرف عليهم أكثر
                  <Users className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#78C487] to-[#A5D5A9]">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              جاهز لتطوير أعمالك؟
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              احصل على استشارة مجانية واكتشف كيف يمكننا مساعدتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#78C487] hover:bg-white/90 px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link href="/contact">
                  احجز استشارتك المجانية
                  <Calendar className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#78C487] px-8 py-4 text-lg bg-transparent"
                asChild
              >
                <Link href="/services">
                  اطلب خدمة
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
