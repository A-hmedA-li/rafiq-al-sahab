"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  Zap,
  MessageSquare,
  Brain,
  Users,
  Calendar,
  Award,
  Lightbulb,
  Target
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "next-intl"


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

export default function HomePage() {
  const t = useTranslations("HomePage")

  const services = [
  {
    image:"Rafiq Booking.gif",
    title: t("services.0.title"),
    description: t("services.0.description"),
    color: "text-[#78C487]"
  },
  {
    image: "Smart Chatbot For Business.gif",
    title: t("services.1.title"),
    description: t("services.1.description"),
    color: "text-[#A5D5A9]"
  },
  {
    image: "Rafiq website.gif",
    title: t("services.2.title"),
    description: t("services.2.description"),
    color: "text-[#78C487]"
  },
  {
    image: "Rafiq Ai Automation Final.gif",
    title: t("services.3.title"),
    description: t("services.3.description"),
    color: "text-[#A5D5A9]"
  }
]

const portfolioItems = [
  {
    title: t("portfolio.0.title"),
    description: t("portfolio.0.description"),
    image: "/images/lg.png",
    tech: [t("portfolio.0.tech.0"), t("portfolio.0.tech.1"), t("portfolio.0.tech.2")]
  },
  {
    title: t("portfolio.1.title"),
    description: t("portfolio.1.description"),
    image: "/images/lg.png",
    tech: [t("portfolio.1.tech.0"), t("portfolio.1.tech.1"), t("portfolio.1.tech.2")]
  },
  {
    title: t("portfolio.2.title"),
    description: t("portfolio.2.description"),
    image: "/images/lg.png",
    tech: [t("portfolio.2.tech.0"), t("portfolio.2.tech.1"), t("portfolio.2.tech.2")]
  }
]

const milestones = [...Array(4)].map((item, i)=>{
  return {
    year: t('HowWeWork.milestones.' + i + '.year' ),
    title:t('HowWeWork.milestones.' + i + '.title' ),
    description : t('HowWeWork.milestones.' + i + '.description')
  }
}) 



  return (

    <div className="min-h-screen  bg-white dark:from-[#171717] dark:via-[#404544]/20 dark:to-[#78C487]/10 ">
 
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 px-4">
        <div className="absolute inset-0 bg-[url('/images/1.jpg')] opacity-15 bg-cover"></div>
        <div className="container mx-auto max-w-8xl relative z-10">
        
            <motion.div
              className="text-center"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
            <div className="md:flex w-full justify-between">
              <div className="items-center">
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-4xl/15 font-bold text-[#404544] dark:text-white  mt-15  " 
              >
                {t("hero.title1")}
                
                <br />
                <span className="text-[#78C487]">{t("hero.title2")}</span>
              </motion.h1>
                 <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-[#404544]/80 dark:text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              {t("hero.description")}
            </motion.p>
              </div>
              <motion.div variants={fadeInUp} className="mb-8">
                <Image
                  src="/Web Designs/Rafiq Hero 1570_1000.gif"
                  alt={t("hero.logoAlt")}
                  width={1570/4}
                  height={125}
                  className="mx-auto px-6 "
                />
              </motion.div>
              
              
            </div>
         

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-[#78C487] hover:bg-[#78C487]/90 text-white px-8 py-4 text-lg group  drop-shadow-2xl"
                asChild
              >
                <Link href="/contact">
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  {t("hero.cta1")}
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#78C487] text-[#78C487] hover:bg-[#78C487] hover:text-white px-8 py-4 text-lg bg-transparent drop-shadow-2xl"
                asChild
              >
                <Link href="/services">{t("hero.cta2")}</Link>
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
              {t("servicesSection.title")}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[#404544]/70 dark:text-white/70 max-w-2xl mx-auto"
            >
              {t("servicesSection.subtitle")}
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
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-[#A5D5A9]/30 group cursor-pointer ">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`  mb-4 group-hover:scale-110 transition-transform`}
                    >
                     <Image
                      src={"/Web Designs/" + service.image}
                      alt="service GIF"
                      width={1570}
                      height={1000}
                      className="mb-4"
                    />
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
                {t("servicesSection.viewAll")}
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
              {t("portfolioSection.title")}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[#404544]/70 dark:text-white/70 max-w-2xl mx-auto"
            >
              {t("portfolioSection.subtitle")}
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
                {t("portfolioSection.viewAll")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* How do we work */}
      </section>
         <section className="py-16 px-4 bg-[#78C487]/5 dark:bg-[#404544]/20">
              <div className="container mx-auto max-w-6xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-[#404544] dark:text-white mb-4">
                    {t('HowWeWork.title')}
                  </h2>
                  <p className="text-lg text-[#404544]/70 dark:text-white/70">
                    {t('HowWeWork.subtitle')}
                    
                  </p>
                </motion.div>
      
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#78C487]/20"></div>
                  <div className="space-y-12">
                    {milestones.map((milestone, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex items-center ${
                          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                        }`}
                      >
                        <div
                          className={`w-1/2 ${
                            index % 2 === 0 ? "pr-8 text-left" : "pl-8 text-right"
                          }`}
                        >
                          <Card className="hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                              <div className="flex items-center mb-3">
                                <div className="p-2 bg-[#78C487]/10 rounded-full mr-3 ">
                               
                                </div>
                                <span className="text-2xl font-bold text-[#78C487]">
                                  {milestone.year}
                                </span>
                              </div>
                              <h3 className="text-lg font-semibold text-[#404544] dark:text-white mb-2">
                                {milestone.title}
                              </h3>
                              <p className="text-[#404544]/70 dark:text-white/70">
                                {milestone.description}
                              </p>
                            </CardContent>
                          </Card>
                        </div>
                        <div className="w-4 h-4 bg-[#78C487] rounded-full border-4 border-white shadow-lg z-10"></div>
                        <div className="w-1/2"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
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
              {t("foundersSection.title")}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[#404544]/70 dark:text-white/70 mb-12 max-w-2xl mx-auto"
            >
              {t("foundersSection.subtitle")}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              <Card className="p-8 text-center hover:shadow-lg transition-all duration-300">
                <Image
                  src="/people/Nazeeh.jpg"
                  alt={t("foundersSection.founder1.name")}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4 border-4 border-[#78C487]/20 object-cover w-[100%] h-[50%]"
                />
                <h3 className="text-xl font-semibold text-[#404544] dark:text-white mb-2">
                  {t("foundersSection.founder1.name")}
                </h3>
                <br />
                <p className="text-[#404544]/70 dark:text-white/70 text-sm leading-relaxed">
                  {t("foundersSection.founder1.description")}
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-all duration-300">
                <Image
                  src="/people/Ahmad.jpg"
                  alt={t("foundersSection.founder2.name")}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4 border-4 border-[#A5D5A9]/20 w-[100%] h-[50%] object-cover"
                />
                <h3 className="text-xl font-semibold text-[#404544] dark:text-white mb-2">
                  {t("foundersSection.founder2.name")}
                </h3>
                <br />
                <p className="text-[#404544]/70 dark:text-white/70 text-sm leading-relaxed">
                  {t("foundersSection.founder2.description")}
                </p>
              </Card>

                    <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 ">
                <Image
                  src="/people/Arados Software.png"
                  alt={t("foundersSection.founder3.name")}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4 border-4 border-[#A5D5A9]/20 w-full"
                />
                <h3 className="text-xl font-semibold text-[#404544] dark:text-white mb-2">
                  {t("foundersSection.founder3.name")}  
                </h3>
                <br />
                <p className="text-[#404544]/70 dark:text-white/70 text-sm leading-relaxed">
                  {t("foundersSection.founder3.description")}
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
                  {t("foundersSection.cta")}
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
              {t("ctaSection.title")}
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t("ctaSection.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#78C487] hover:bg-white/90 px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link href="/booking">
                  {t("ctaSection.cta1")}
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
                  {t("ctaSection.cta2")}
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