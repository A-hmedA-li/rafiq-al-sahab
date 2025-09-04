
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
import { useTranslations } from "next-intl"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}



export function ServicesPage({servicesGot}) {
  const t = useTranslations("ServicesPage")
   let services = []
   let services1 = [
    {
      
      id: "booking",
      icon: Calendar,
      title: t("services.0.title"),
      arabicTitle: t("services.0.arabicTitle"),
      description: t("services.0.description"),
      features: [...Array(5)].map((_, i) => t(`services.0.features.${i}`)),
      image: "/Web Designs/Rafiq Booking.gif",
      color: "text-[#78C487]",
      bgColor: "bg-[#78C487]/10"
    },
    {
      id: "ai-agent",
      icon: Brain,
      title: t("services.1.title"),
      arabicTitle: t("services.1.arabicTitle"),
      description: t("services.1.description"),
      features: [...Array(5)].map((_, i) => t(`services.1.features.${i}`)),
      image: "/Web Designs/Rafiq Ai Automation Final.gif",
      color: "text-[#A5D5A9]",
      bgColor: "bg-[#A5D5A9]/10"
    },
    {
      id: "messaging",
      icon: MessageSquare,
      title: t("services.2.title"),
      arabicTitle: t("services.2.arabicTitle"),
      description: t("services.2.description"),
      features: [...Array(5)].map((_, i) => t(`services.2.features.${i}`)),
      image: "/Web Designs/Rafiq website.gif",
      color: "text-[#78C487]",
      bgColor: "bg-[#78C487]/10"
    },
    {
      id: "personalization",
      icon: Zap,
      title: t("services.3.title"),
      arabicTitle: t("services.3.arabicTitle"),
      description: t("services.3.description"),
      features: [...Array(5)].map((_, i) => t(`services.3.features.${i}`)),
      image: "/images/lg.png",
      color: "text-[#A5D5A9]",
      bgColor: "bg-[#A5D5A9]/10"
    },
    {
      id: "custom_sms",
      icon: Zap,
      title: t("services.4.title"),
      arabicTitle: t("services.4.arabicTitle"),
      description: t("services.4.description"),
      features: [...Array(5)].map((_, i) => t(`services.4.features.${i}`)),
      image: "/images/lg.png",
      color: "text-[#A5D5A9]",
      bgColor: "bg-[#A5D5A9]/10"
    },


  ]
  servicesGot.forEach(item => {
    services.push({
        id:item.id, 
        title:item.title, 
        arabicTitle:item.arabicTitle,
        description:item.description, 
        features: item.features, 
        icon:Zap, 
        image: "/images/lg.png",
    })
  });

  

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ddd] via-[#A5D5A9]/30 to-[#78C487]/20 dark:from-[#171717] dark:via-[#404544]/20 dark:to-[#78C487]/10 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity:0.5, y: 30 }}
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

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-16 ">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0.3, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}

                className="bg-[#A5D5A9]/20 dark:bg-black"
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
                          {service.title}
                        </CardTitle>
                        <p className="text-[#404544]/70 dark:text-white/70 leading-relaxed">
                          {service.description}
                        </p>
                      </CardHeader>

                      <CardContent className="p-0">
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-[#404544] dark:text-white mb-4">
                            {t("featuresTitle")}
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
                              {t("buttons.requestService")}
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                          <Button
                            variant="outline"
                            className={`border-current ${service.color} hover:bg-current hover:text-white`}
                            asChild
                          >
                            <Link href="/booking">{t("buttons.freeConsultation")}</Link>
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
                        height={400}
                        className=" w-full "
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
              {t("whyChooseUs.title")}
            </h2>
            <p className="text-lg text-[#404544]/70 dark:text-white/70 max-w-2xl mx-auto">
              {t("whyChooseUs.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.raw("whyChooseUs.items").map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center p-6 h-full hover:shadow-lg transition-all duration-300">
                  <div className="inline-flex p-3 rounded-full bg-[#78C487]/10 mb-4">
                    <Star className="h-8 w-8 text-[#78C487]" />
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
              {t("cta.title")}
            </h2>
            <p className="text-xl text-[#404544]/70 dark:text-white/70 mb-8 leading-relaxed">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#78C487] hover:bg-[#78C487]/90 text-white px-8 py-4 text-lg"
                asChild
              >
                <Link href="/booking">
                  {t("cta.buttons.consultation")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#78C487] text-[#78C487] hover:bg-[#78C487] hover:text-white px-8 py-4 text-lg bg-transparent"
                asChild
              >
                <Link href="/portfolio">{t("cta.buttons.portfolio")}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}