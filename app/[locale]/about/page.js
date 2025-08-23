"use client"

import { motion } from "framer-motion"
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Lightbulb,
  CheckCircle
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTranslations } from "next-intl"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

export default function AboutPage() {
  const t = useTranslations("AboutPage")

  const values = t.raw("values").values.map((value, index) => ({
    ...value,
    icon: [Heart, Lightbulb, CheckCircle, Users][index],
    color: index % 2 === 0 ? "text-[#78C487]" : "text-[#A5D5A9]"
  }))

  const milestones = t.raw("milestones").map((milestone, index) => ({
    ...milestone,
    icon: [Award, Users, Lightbulb, Target][index]
  }))

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

      {/* Company Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#404544] dark:text-white mb-6">
                {t("story.title")}
              </h2>
              <div className="space-y-4 text-[#404544]/80 dark:text-white/80 leading-relaxed">
                {t.raw("story.paragraphs").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/images/lg.png"
                alt={t("story.imageAlt")}
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 bg-[#78C487]/5 dark:bg-[#404544]/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#404544] dark:text-white mb-4">
              {t("visionMission.title")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="inline-flex p-3 bg-[#78C487]/10 rounded-full mb-4">
                    <Eye className="h-8 w-8 text-[#78C487]" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-[#404544] dark:text-white">
                    {t("visionMission.vision.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#404544]/80 dark:text-white/80 leading-relaxed text-lg">
                    {t("visionMission.vision.description")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="inline-flex p-3 bg-[#A5D5A9]/10 rounded-full mb-4">
                    <Target className="h-8 w-8 text-[#A5D5A9]" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-[#404544] dark:text-white">
                    {t("visionMission.mission.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#404544]/80 dark:text-white/80 leading-relaxed text-lg">
                    {t("visionMission.mission.description")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#404544] dark:text-white mb-4">
              {t("values.title")}
            </h2>
            <p className="text-lg text-[#404544]/70 dark:text-white/70">
              {t("values.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div
                      className={`inline-flex p-4 rounded-full bg-current/10 mb-4 ${value.color}`}
                    >
                      <value.icon className={`h-8 w-8 ${value.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-[#404544] dark:text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-[#404544]/70 dark:text-white/70 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-16 px-4 bg-[#78C487]/5 dark:bg-[#404544]/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#404544] dark:text-white mb-4">
              {t("milestonesSection.title")}
            </h2>
            <p className="text-lg text-[#404544]/70 dark:text-white/70">
              {t("milestonesSection.subtitle")}
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
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <div className="p-2 bg-[#78C487]/10 rounded-full mr-3">
                            <milestone.icon className="h-5 w-5 text-[#78C487]" />
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

      {/* Team Snapshot */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#404544] dark:text-white mb-4">
              {t("team.title")}
            </h2>
            <p className="text-lg text-[#404544]/70 dark:text-white/70 mb-8">
              {t("team.subtitle")}
            </p>

            <Card className="p-8 bg-gradient-to-br from-[#78C487]/10 to-[#A5D5A9]/10">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                      <Image
                          src="/people/Nazeeh.jpg"
                          alt={"photo Nazeeh"}
                          width={150}
                          height={150}
                          className="rounded-full mx-auto mb-4 border-4 border-[#78C487]/20 object-cover w-[100%] h-[50%]"
                        />
                    <h3 className="text-lg font-semibold text-[#404544] dark:text-white mb-1">
                      {t("team.founder1.name")}
                    </h3>
                    <br />
                    <p className="text-sm text-[#404544]/70 dark:text-white/70">
                      {t("team.founder1.description")}
                    </p>
                  </div>

                  <div className="text-center">
                       <Image
                          src="/people/Ahmad.jpg"
                          alt={"photo Ahmad"}
                          width={150}
                          height={150}
                          className="rounded-full mx-auto mb-4 border-4 border-[#78C487]/20 object-cover w-[100%] h-[50%]"
                        />
                    <h3 className="text-lg font-semibold text-[#404544] dark:text-white mb-1">
                      {t("team.founder2.name")}
                    </h3>
                      <br />
                    <p className="text-sm text-[#404544]/70 dark:text-white/70">
                      {t("team.founder2.description")}
                    </p>
                  </div>
                  <div className="text-center">
                       <Image
                          src="/people/Arados Software.png"
                          alt={'photo Arados'}
                          width={150}
                          height={150}
                          className="rounded-full mx-auto mb-4 border-4 border-[#78C487]/20 object-cover w-[100%] h-[50%]"
                        />
                    <h3 className="text-lg font-semibold text-[#404544] dark:text-white mb-1">
                      {t("team.founder3.name")}
                    </h3>
                      <br />
                    <p className="text-sm text-[#404544]/70 dark:text-white/70">
                      {t("team.founder3.description")}

                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    className="bg-[#78C487] hover:bg-[#78C487]/90 text-white"
                    asChild
                  >
                    <Link href="/founders">
                      {t("team.cta")}
                      <Users className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}