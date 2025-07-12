"use client"

import { motion } from "framer-motion"
import {
  Calendar,
  Brain,
  MessageSquare,
  Zap,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const services = [
  {
    id: "booking",
    icon: Calendar,
    title: "Online Booking Setup & Management",
    arabicTitle: "نظام الحجز الإلكتروني والإدارة",
    description:
      "نظام حجز مواعيد ذكي يسهل على عملائك التواصل معك ويوفر عليك الوقت والجهد",
    features: [
      "واجهة حجز سهلة الاستخدام",
      "تذكيرات تلقائية للعملاء",
      "تكامل مع التقويم",
      "إدارة المواعيد والإلغاءات",
      "تقارير مفصلة"
    ],
    image: "/images/lg.png",
    color: "text-[#78C487]",
    bgColor: "bg-[#78C487]/10"
  },
  {
    id: "ai-agent",
    icon: Brain,
    title: "Custom AI Agent & Automation Systems",
    arabicTitle: "المساعد الذكي المخصص وأنظمة الأتمتة",
    description:
      "مساعد ذكي مخصص لأعمالك يجيب على استفسارات العملاء ويؤتمت المهام الروتينية",
    features: [
      "ذكاء اصطناعي متقدم",
      "تدريب مخصص لأعمالك",
      "أتمتة المهام الروتينية",
      "تكامل مع أنظمتك الحالية",
      "تحسين مستمر للأداء"
    ],
    image: "/images/lg.png",
    color: "text-[#A5D5A9]",
    bgColor: "bg-[#A5D5A9]/10"
  },
  {
    id: "messaging",
    icon: MessageSquare,
    title: "Mass Messaging Integration",
    arabicTitle: "تكامل الرسائل الجماعية",
    description:
      "ربط WhatsApp و Telegram لتواصل فعال مع العملاء وإرسال رسائل جماعية مخصصة",
    features: [
      "تكامل WhatsApp Business",
      "ربط Telegram Bot",
      "رسائل جماعية مخصصة",
      "أتمتة الردود",
      "تتبع معدلات الفتح والتفاعل"
    ],
    image: "/images/lg.png",
    color: "text-[#78C487]",
    bgColor: "bg-[#78C487]/10"
  },
  {
    id: "personalization",
    icon: Zap,
    title: "AI-Powered Personalization",
    arabicTitle: "التخصيص بالذكاء الاصطناعي",
    description:
      "تخصيص تجربة العميل باستخدام الذكاء الاصطناعي لزيادة المبيعات والرضا",
    features: [
      "تحليل سلوك العملاء",
      "توصيات مخصصة",
      "تجربة مستخدم ديناميكية",
      "تحسين معدلات التحويل",
      "تقارير تحليلية متقدمة"
    ],
    image: "/images/lg.png",
    color: "text-[#A5D5A9]",
    bgColor: "bg-[#A5D5A9]/10"
  }
]

export default function ServicesPage() {
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
              خدماتنا المتميزة
            </h1>
            <p className="text-xl text-[#404544]/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
              حلول تقنية متطورة مصممة خصيصاً لتنمية أعمالك وتحسين تجربة عملائك
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div
                    className={`grid lg:grid-cols-2 gap-8 ${
                      index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`p-8 ${
                        index % 2 === 1 ? "lg:col-start-2" : ""
                      }`}
                    >
                      <CardHeader className="p-0 mb-6">
                        <div
                          className={`inline-flex p-4 rounded-full ${service.bgColor} mb-4`}
                        >
                          <service.icon
                            className={`h-8 w-8 ${service.color}`}
                          />
                        </div>
                        <CardTitle className="text-2xl font-bold text-[#404544] dark:text-white mb-2">
                          {service.arabicTitle}
                        </CardTitle>
                        <p className="text-[#404544]/70 dark:text-white/70 leading-relaxed">
                          {service.description}
                        </p>
                      </CardHeader>

                      <CardContent className="p-0">
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-[#404544] dark:text-white mb-4">
                            المميزات الرئيسية:
                          </h4>
                          <ul className="space-y-3">
                            {service.features.map((feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="flex items-center space-x-3"
                              >
                                <CheckCircle
                                  className={`h-5 w-5 ${service.color} flex-shrink-0`}
                                />
                                <span className="text-[#404544]/80 dark:text-white/80">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button
                            className={`${
                              service.color === "text-[#78C487]"
                                ? "bg-[#78C487] hover:bg-[#78C487]/90"
                                : "bg-[#A5D5A9] hover:bg-[#A5D5A9]/90"
                            } text-white`}
                            asChild
                          >
                            <Link href={`/contact?service=${service.id}`}>
                              اطلب الخدمة
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                          <Button
                            variant="outline"
                            className={`border-current ${service.color} hover:bg-current hover:text-white`}
                            asChild
                          >
                            <Link href="/contact">استشارة مجانية</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </div>

                    {/* Image */}
                    <div
                      className={`relative ${
                        index % 2 === 1 ? "lg:col-start-1" : ""
                      }`}
                    >
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.arabicTitle}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className={`absolute inset-0 ${service.bgColor} opacity-20`}
                      ></div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-[#78C487]/5 dark:bg-[#404544]/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#404544] dark:text-white mb-4">
              لماذا تختارنا؟
            </h2>
            <p className="text-lg text-[#404544]/70 dark:text-white/70 max-w-2xl mx-auto">
              نحن نقدم أكثر من مجرد خدمات تقنية - نحن شركاؤك في النجاح
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "خبرة متخصصة",
                description: "فريق من الخبراء المتخصصين في أحدث التقنيات"
              },
              {
                icon: CheckCircle,
                title: "حلول مخصصة",
                description: "كل حل مصمم خصيصاً لاحتياجات عملك الفريدة"
              },
              {
                icon: MessageSquare,
                title: "دعم مستمر",
                description: "دعم فني متواصل وصيانة دورية لضمان الأداء الأمثل"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center p-6 h-full hover:shadow-lg transition-all duration-300">
                  <div className="inline-flex p-3 rounded-full bg-[#78C487]/10 mb-4">
                    <item.icon className="h-8 w-8 text-[#78C487]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#404544] dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#404544]/70 dark:text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#404544] dark:text-white mb-4">
              جاهز لبدء مشروعك؟
            </h2>
            <p className="text-xl text-[#404544]/70 dark:text-white/70 mb-8 leading-relaxed">
              تواصل معنا اليوم واحصل على استشارة مجانية لمناقشة احتياجاتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#78C487] hover:bg-[#78C487]/90 text-white px-8 py-4 text-lg"
                asChild
              >
                <Link href="/contact">
                  احصل على استشارة مجانية
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#78C487] text-[#78C487] hover:bg-[#78C487] hover:text-white px-8 py-4 text-lg bg-transparent"
                asChild
              >
                <Link href="/portfolio">شاهد أعمالنا</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
