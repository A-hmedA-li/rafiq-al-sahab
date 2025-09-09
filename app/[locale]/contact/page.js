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
import { useTranslations } from "next-intl"
import SubmitForm from "@/components/SubmitForm"
import { CreateMaessageOrUpdate } from "@/server/contactUs"
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

import { deleteMessage } from "@/server/contactUs"

export default function ContactPage() {
    const [formData, setFormData] = useState({
    name: "a",
    email: "a@a.com",
    phone: "+79256602397",
    message: "This is the Voice",
    roleInOrg:"cola",
    companyName: 'cola company', 
    website:"https://cola.com", 
    
    
  })
 

    const [isSubmitting, setIsSubmitting] = useState(false)

    const [isSubmitted, setIsSubmitted] = useState(false)
    const handleSubEvents = {
      isSubmitted: isSubmitted, 
      isSubmitting: isSubmitting, 
      setIsSubmitted: setIsSubmitted, 
      setIsSubmitting: setIsSubmitting
    }




  
    const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)

    const s = await deleteMessage('cmfcsh2nm00005ib9t3g14876')
    console.log(s);
    const res = CreateMaessageOrUpdate(formData);

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      // setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    }, 3000)
  }
  const t = useTranslations("ContactPage")


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
              {t("hero.title")}
            </h1>
            <p className="text-xl text-[#404544]/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
              {t("hero.description")}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 pb-16">


        <SubmitForm sendMes="form.submit" formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} handleSubEvents={handleSubEvents}/>
         
          {/* Contact Info & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
               <div className="grid lg:grid-cols-2 gap-12">
             {/* Booking Widget */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#404544] dark:text-white">
                  {t("booking.title")}
                </CardTitle>
                <p className="text-[#404544]/70 dark:text-white/70">
                  {t("booking.subtitle")}
                </p>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-[#78C487] hover:bg-[#78C487]/90 text-white py-3"
                  asChild
                >
                  <Link href="/booking">
                    {t("booking.button")}
                    <Calendar className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-xs text-[#404544]/60 dark:text-white/60 text-center mt-2">
                  {t("booking.note")}
                </p>
              </CardContent>
            </Card>
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#404544] dark:text-white">
                  {t("contactInfo.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-[#78C487]/10 rounded-full">
                    <Mail className="h-5 w-5 text-[#78C487]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#404544] dark:text-white">
                      {t("contactInfo.emailLabel")}
                    </p>
                    <p className="text-[#404544]/70 dark:text-white/70">
                      info@rafiqsahab.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-[#A5D5A9]/10 rounded-full">
                    <Phone className="h-5 w-5 text-[#A5D5A9]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#404544] dark:text-white">
                      {t("contactInfo.phoneLabel")}
                    </p>
                    <p className="text-[#404544]/70  dark:text-white/70" dir="ltr">
                      +971 50 974 1123
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-[#78C487]/10 rounded-full">
                    <MapPin className="h-5 w-5 text-[#78C487]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#404544] dark:text-white">
                      {t("contactInfo.locationLabel")}
                    </p>
                    <p className="text-[#404544]/70 dark:text-white/70">
                      {t("contactInfo.location")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-[#A5D5A9]/10 rounded-full">
                    <Clock className="h-5 w-5 text-[#A5D5A9]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#404544] dark:text-white">
                      {t("contactInfo.hoursLabel")}
                    </p>
                    <p className="text-[#404544]/70 dark:text-white/70">
                      {t("contactInfo.hours")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Options */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#404544] dark:text-white">
                  {t("quickContact.title")}
                </CardTitle>
                <p className="text-[#404544]/70 dark:text-white/70">
                  {t("quickContact.subtitle")}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link
                  href="https://wa.me/971509741123"
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
                        {t("quickContact.whatsapp")}
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
                        {t("quickContact.telegram")}
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
                  {t("map.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-48 bg-[#A5D5A9]/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-[#78C487] mx-auto mb-2" />
                    <p className="text-[#404544]/70 dark:text-white/70">
                      {t("contactInfo.location")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
              </div>
          </motion.div>
      
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
              {t("faq.title")}
            </h2>
            <p className="text-lg text-[#404544]/70 dark:text-white/70">
              {t("faq.subtitle")}
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: t("faq.questions.0.question"),
                answer: t("faq.questions.0.answer")
              },
              {
                question: t("faq.questions.1.question"),
                answer: t("faq.questions.1.answer")
              },
              {
                question: t("faq.questions.2.question"),
                answer: t("faq.questions.2.answer")
              },
              {
                question: t("faq.questions.3.question"),
                answer: t("faq.questions.3.answer")
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


