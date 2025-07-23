"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Calendar,
  Clock,
  CheckCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const services = [
  "نظام الحجز الإلكتروني والإدارة",
  "المساعد الذكي المخصص وأنظمة الأتمتة",
  "تكامل الرسائل الجماعية",
  "التخصيص بالذكاء الاصطناعي",
  "استشارة عامة"
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    }, 3000)
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

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
              تواصل معنا
            </h1>
            <p className="text-xl text-[#404544]/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
              نحن هنا لمساعدتك في تحويل أفكارك إلى واقع رقمي. تواصل معنا اليوم
              واحصل على استشارة مجانية
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#404544] dark:text-white">
                  أرسل لنا رسالة
                </CardTitle>
                <p className="text-[#404544]/70 dark:text-white/70">
                  سنرد عليك خلال 24 ساعة
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="h-16 w-16 text-[#78C487] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-[#404544] dark:text-white mb-2">
                      تم إرسال رسالتك بنجاح!
                    </h3>
                    <p className="text-[#404544]/70 dark:text-white/70">
                      سنتواصل معك قريباً
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                          الاسم *
                        </label>
                        <Input
                          required
                          value={formData.name}
                          onChange={e =>
                            handleInputChange("name", e.target.value)
                          }
                          placeholder="اسمك الكامل"
                          className="border-[#A5D5A9]/30 focus:border-[#78C487]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                          البريد الإلكتروني *
                        </label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={e =>
                            handleInputChange("email", e.target.value)
                          }
                          placeholder="your@email.com"
                          className="border-[#A5D5A9]/30 focus:border-[#78C487]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                        رقم الهاتف (اختياري)
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={e =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="+971 XX XXX XXXX"
                        className="border-[#A5D5A9]/30 focus:border-[#78C487]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                        الخدمة المطلوبة
                      </label>
                      <Select
                        value={formData.service}
                        onValueChange={value =>
                          handleInputChange("service", value)
                        }
                      >
                        <SelectTrigger className="border-[#A5D5A9]/30 focus:border-[#78C487]">
                          <SelectValue placeholder="اختر الخدمة" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service, index) => (
                            <SelectItem key={index} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                        الرسالة *
                      </label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={e =>
                          handleInputChange("message", e.target.value)
                        }
                        placeholder="أخبرنا عن مشروعك أو استفسارك..."
                        rows={5}
                        className="border-[#A5D5A9]/30 focus:border-[#78C487]"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#78C487] hover:bg-[#78C487]/90 text-white py-3 text-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          جاري الإرسال...
                        </>
                      ) : (
                        <>
                          إرسال الرسالة
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >

             {/* Booking Widget */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#404544] dark:text-white">
                  احجز استشارة مجانية
                </CardTitle>
                <p className="text-[#404544]/70 dark:text-white/70">
                  30 دقيقة لمناقشة مشروعك
                </p>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-[#78C487] hover:bg-[#78C487]/90 text-white py-3"
                  asChild
                >
                  <Link href="/booking">
                    احجز موعدك الآن
                    <Calendar className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-xs text-[#404544]/60 dark:text-white/60 text-center mt-2">
                  * الاستشارة مجانية تماماً
                </p>
              </CardContent>
            </Card>
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#404544] dark:text-white">
                  معلومات التواصل
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-[#78C487]/10 rounded-full">
                    <Mail className="h-5 w-5 text-[#78C487]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#404544] dark:text-white">
                      البريد الإلكتروني
                    </p>
                    <p className="text-[#404544]/70 dark:text-white/70">
                      info@rafiqalsahab.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-[#A5D5A9]/10 rounded-full">
                    <Phone className="h-5 w-5 text-[#A5D5A9]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#404544] dark:text-white">
                      الهاتف
                    </p>
                    <p className="text-[#404544]/70 dark:text-white/70">
                      +971 XX XXX XXXX
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-[#78C487]/10 rounded-full">
                    <MapPin className="h-5 w-5 text-[#78C487]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#404544] dark:text-white">
                      الموقع
                    </p>
                    <p className="text-[#404544]/70 dark:text-white/70">
                      دولة الإمارات العربية المتحدة
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-[#A5D5A9]/10 rounded-full">
                    <Clock className="h-5 w-5 text-[#A5D5A9]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#404544] dark:text-white">
                      ساعات العمل
                    </p>
                    <p className="text-[#404544]/70 dark:text-white/70">
                      الأحد - الخميس: 9:00 - 18:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Options */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#404544] dark:text-white">
                  تواصل سريع
                </CardTitle>
                <p className="text-[#404544]/70 dark:text-white/70">
                  للحصول على رد فوري
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link
                  href="https://wa.me/971XXXXXXXX"
                  target="_blank"
                  className="flex items-center justify-between p-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 rounded-lg transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-6 w-6 text-[#25D366]" />
                    <div>
                      <p className="font-medium text-[#404544] dark:text-white">
                        WhatsApp
                      </p>
                      <p className="text-sm text-[#404544]/70 dark:text-white/70">
                        رد فوري خلال دقائق
                      </p>
                    </div>
                  </div>
                  <div className="text-[#25D366] group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </Link>

                <Link
                  href="https://t.me/rafiqalsahab"
                  target="_blank"
                  className="flex items-center justify-between p-4 bg-[#0088cc]/10 hover:bg-[#0088cc]/20 rounded-lg transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <Send className="h-6 w-6 text-[#0088cc]" />
                    <div>
                      <p className="font-medium text-[#404544] dark:text-white">
                        Telegram
                      </p>
                      <p className="text-sm text-[#404544]/70 dark:text-white/70">
                        محادثة مباشرة
                      </p>
                    </div>
                  </div>
                  <div className="text-[#0088cc] group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </Link>
              </CardContent>
            </Card>

           

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#404544] dark:text-white">
                  موقعنا
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-48 bg-[#A5D5A9]/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-[#78C487] mx-auto mb-2" />
                    <p className="text-[#404544]/70 dark:text-white/70">
                      دولة الإمارات العربية المتحدة
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-[#78C487]/5 dark:bg-[#404544]/20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#404544] dark:text-white mb-4">
              أسئلة شائعة
            </h2>
            <p className="text-lg text-[#404544]/70 dark:text-white/70">
              إجابات على أكثر الأسئلة تكراراً
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "كم يستغرق تطوير المشروع؟",
                answer:
                  "يعتمد على تعقيد المشروع، لكن معظم مشاريعنا تكتمل خلال 2-6 أسابيع."
              },
              {
                question: "هل تقدمون دعماً بعد التسليم؟",
                answer:
                  "نعم، نقدم دعماً فنياً مجانياً لمدة 3 أشهر، بالإضافة إلى خطط صيانة مدفوعة."
              },
              {
                question: "ما هي تكلفة الخدمات؟",
                answer:
                  "التكلفة تختلف حسب المشروع. نقدم عروض أسعار مخصصة بعد فهم احتياجاتك."
              },
              {
                question: "هل يمكنكم العمل مع الأنظمة الحالية؟",
                answer:
                  "بالطبع! نتخصص في تكامل الحلول الجديدة مع الأنظمة الموجودة."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-[#404544] dark:text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-[#404544]/70 dark:text-white/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
