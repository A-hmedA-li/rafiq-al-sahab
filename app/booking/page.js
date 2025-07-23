"use client"
import { useSession, signIn } from "next-auth/react";
import { useState } from "react"
import { motion } from "framer-motion"
import {
  Calendar,
  CalendarCheck,
  Clock,
  User,
  Phone,
  MessageSquare,
  CheckCircle,
  ArrowRight
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
import { Badge } from "@/components/ui/badge"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
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
  "استشارة عامة",
  "تطوير موقع إلكتروني",
  "تطوير تطبيق جوال"
]

const consultationTypes = [
  {
    id: "free",
    name: "استشارة مجانية",
    duration: "30 دقيقة",
    price: "مجاناً",
    description: "جلسة تعريفية لفهم احتياجاتك"
  },
  {
    id: "detailed",
    name: "استشارة مفصلة",
    duration: "60 دقيقة",
    price: "200 درهم",
    description: "تحليل شامل ووضع خطة عمل"
  },
  {
    id: "technical",
    name: "استشارة تقنية",
    duration: "90 دقيقة",
    price: "300 درهم",
    description: "مراجعة تقنية متخصصة"
  }
]

// Mock booked slots - in real app, this would come from your backend
const bookedSlots = ["10:00", "14:30", "16:00"]

export default function BookingPage() {

  const { data: session } = useSession();
  const [selectedDate, setSelectedDate] = useState()
  const [calendarView, setCalendarView] = useState("month")
  const [selectedConsultation, setSelectedConsultation] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })


  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isBooked, setIsBooked] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

    const bookOnGoogle = async () => {
    const endDate = new Date(selectedDate); 
    const startMin = endDate.getMinutes() ; 
    endDate.setMinutes(startMin + 30 );
    const event = {
      summary: formData.name,
      start: {
        dateTime: selectedDate.toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      end: {
        dateTime: endDate.toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
    };

    try {
      const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      });

      const data = await response.json();
      return true
    } catch (error) {
        
      console.error('Error creating event:', error);
      return false;
    }
  };

  const handleBooking = async e => {
    e.preventDefault()
    if (!selectedDate || !selectedConsultation) return

    setIsSubmitting(true)

    // Simulate booking process


    if (await bookOnGoogle()){

    setIsSubmitting(false)
    setIsBooked(true)

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsBooked(false)
      setSelectedDate(undefined)
      setSelectedConsultation("")
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    }, 5000)
}
else{
    console.log("failed")
      setIsBooked(false)
    setIsSubmitting(false)


}
  }

  const selectedConsultationType = consultationTypes.find(
    type => type.id === selectedConsultation
  )


if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl mb-4">Booking System</h1>
        <Button onClick={() => signIn('google')}>
          Sign in with Google to Book
        </Button>
      </div>
    );
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
              احجز استشارتك المجانية
            </h1>
            <p className="text-xl text-[#404544]/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
              اختر الوقت المناسب لك واحصل على استشارة مخصصة من خبرائنا في
              التكنولوجيا السحابية
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 pb-16">
        {isBooked ? (
          /* Success State */
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Card className="p-8 bg-gradient-to-br from-[#78C487]/10 to-[#A5D5A9]/10">
              <CardContent className="p-0">
                <CheckCircle className="h-20 w-20 text-[#78C487] mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-[#404544] dark:text-white mb-4">
                  تم تأكيد حجزك بنجاح!
                </h2>
                <p className="text-lg text-[#404544]/70 dark:text-white/70 mb-6">
                  شكراً لك {formData.name}، تم حجز موعدك بنجاح. ستصلك رسالة
                  تأكيد على بريدك الإلكتروني.
                </p>

                <div className="bg-white dark:bg-[#404544] p-6 rounded-2xl mb-6">
                  <h3 className="text-lg font-semibold text-[#404544] dark:text-white mb-4">
                    تفاصيل الموعد
                  </h3>
                  <div className="space-y-3 text-right">
                    <div className="flex justify-between">
                      <span className="text-[#404544]/70 dark:text-white/70">
                        التاريخ والوقت:
                      </span>
                      <span className="font-medium text-[#404544] dark:text-white">
                        {selectedDate?.toLocaleDateString("ar-AE", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit"
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#404544]/70 dark:text-white/70">
                        نوع الاستشارة:
                      </span>
                      <span className="font-medium text-[#404544] dark:text-white">
                        {selectedConsultationType?.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#404544]/70 dark:text-white/70">
                        المدة:
                      </span>
                      <span className="font-medium text-[#404544] dark:text-white">
                        {selectedConsultationType?.duration}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="bg-[#78C487] hover:bg-[#78C487]/90 text-white"
                    onClick={() => window.location.reload()}
                  >
                    حجز موعد آخر
                    <Calendar className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/">العودة للرئيسية</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calendar Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#404544] dark:text-white flex items-center">
                    <Calendar className="h-6 w-6 mr-3 text-[#78C487]" />
                    اختر التاريخ والوقت
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CalendarComponent
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    view={calendarView}
                    onViewChange={setCalendarView}
                    bookedSlots={bookedSlots}
                    className="border-0 shadow-none p-0"
                  />
                </CardContent>
              </Card>
            </motion.div>

            {/* Booking Form Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Consultation Types */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-[#404544] dark:text-white flex items-center">
                    <Clock className="h-5 w-5 mr-3 text-[#78C487]" />
                    نوع الاستشارة
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {consultationTypes.map(type => (
                    <div
                      key={type.id}
                      onClick={() => setSelectedConsultation(type.id)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                        selectedConsultation === type.id
                          ? "border-[#78C487] bg-[#78C487]/5"
                          : "border-gray-200 hover:border-[#78C487]/50 dark:border-gray-700"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-[#404544] dark:text-white">
                          {type.name}
                        </h3>
                        <Badge
                          className={`${
                            type.id === "free"
                              ? "bg-[#78C487] text-white"
                              : "bg-[#A5D5A9] text-[#404544]"
                          }`}
                        >
                          {type.price}
                        </Badge>
                      </div>
                      <p className="text-sm text-[#404544]/70 dark:text-white/70 mb-2">
                        {type.description}
                      </p>
                      <div className="flex items-center text-xs text-[#404544]/60 dark:text-white/60">
                        <Clock className="h-3 w-3 mr-1" />
                        {type.duration}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Contact Form */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-[#404544] dark:text-white flex items-center">
                    <User className="h-5 w-5 mr-3 text-[#78C487]" />
                    معلومات التواصل
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleBooking} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                          الاسم الكامل *
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
                         // value={session.user.email}
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
                        رقم الهاتف *
                      </label>
                      <Input
                        type="tel"
                        required
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
                        تفاصيل إضافية
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={e =>
                          handleInputChange("message", e.target.value)
                        }
                        placeholder="أخبرنا المزيد عن مشروعك أو استفسارك..."
                        rows={4}
                        className="border-[#A5D5A9]/30 focus:border-[#78C487]"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={
                        !selectedDate || !selectedConsultation || isSubmitting
                      }
                      className="w-full bg-[#78C487] hover:bg-[#78C487]/90 text-white py-3 text-lg disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          جاري الحجز...
                        </>
                      ) : (
                        <>
                          تأكيد الحجز
                          <CalendarCheck className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        )}
      </div>

      {/* Quick Contact Options */}
      {!isBooked && (
        <section className="py-16 px-4 bg-[#78C487]/5 dark:bg-[#404544]/20">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold text-[#404544] dark:text-white mb-4">
                تحتاج مساعدة فورية؟
              </h2>
              <p className="text-lg text-[#404544]/70 dark:text-white/70">
                تواصل معنا مباشرة للحصول على رد سريع
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="https://wa.me/971XXXXXXXX"
                target="_blank"
                className="flex items-center justify-between p-6 bg-white dark:bg-[#404544] rounded-2xl hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-[#25D366]/10 rounded-full">
                    <MessageSquare className="h-6 w-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#404544] dark:text-white">
                      WhatsApp
                    </h3>
                    <p className="text-sm text-[#404544]/70 dark:text-white/70">
                      رد فوري خلال دقائق
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-[#25D366] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="tel:+971XXXXXXXX"
                className="flex items-center justify-between p-6 bg-white dark:bg-[#404544] rounded-2xl hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-[#78C487]/10 rounded-full">
                    <Phone className="h-6 w-6 text-[#78C487]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#404544] dark:text-white">
                      اتصال مباشر
                    </h3>
                    <p className="text-sm text-[#404544]/70 dark:text-white/70">
                      +971 XX XXX XXXX
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-[#78C487] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
