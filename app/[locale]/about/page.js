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

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const values = [
  {
    icon: Heart,
    title: "من القلب إلى القلب",
    description:
      "نتعامل مع عملائنا كأصدقاء، نفهم احتياجاتهم ونقدم لهم الحلول بصدق وشفافية",
    color: "text-[#78C487]"
  },
  {
    icon: Lightbulb,
    title: "الابتكار المستمر",
    description:
      "نسعى دائماً لاستخدام أحدث التقنيات وتطوير حلول مبتكرة تواكب العصر",
    color: "text-[#A5D5A9]"
  },
  {
    icon: CheckCircle,
    title: "الجودة أولاً",
    description:
      "نلتزم بأعلى معايير الجودة في كل مشروع، لأن رضا عملائنا هو أولويتنا",
    color: "text-[#78C487]"
  },
  {
    icon: Users,
    title: "العمل الجماعي",
    description: "نؤمن بقوة الفريق ونعمل معاً لتحقيق أفضل النتائج لعملائنا",
    color: "text-[#A5D5A9]"
  }
]

const milestones = [
  {
    year: "2024",
    title: "تأسيس الشركة",
    description: "بداية رحلة رفيق السحاب مع رؤية واضحة لتبسيط التكنولوجيا",
    icon: Award
  },
  {
    year: "2024",
    title: "أول 10 عملاء",
    description: "نجحنا في خدمة أول 10 عملاء وتحقيق نتائج مميزة لهم",
    icon: Users
  },
  {
    year: "2024",
    title: "توسيع الخدمات",
    description: "أضفنا خدمات جديدة في الذكاء الاصطناعي والأتمتة",
    icon: Lightbulb
  },
  {
    year: "2025",
    title: "التوسع الإقليمي",
    description: "خطط للتوسع في دول الخليج العربي",
    icon: Target
  }
]

export default function AboutPage() {
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
              من نحن
            </h1>
            <p className="text-xl text-[#404544]/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
              نحن رفيق السحاب - شركة تقنية متخصصة في تطوير الحلول السحابية
              والذكاء الاصطناعي
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
                قصتنا
              </h2>
              <div className="space-y-4 text-[#404544]/80 dark:text-white/80 leading-relaxed">
                <p>
                  بدأت فكرة رفيق السحاب من إيماننا العميق بأن التكنولوجيا يجب أن
                  تكون في خدمة الإنسان، وليس العكس. رأينا كيف تعاني الشركات
                  الصغيرة والمتوسطة من تعقيدات التكنولوجيا، وقررنا أن نكون الجسر
                  الذي يربط بين أحلامهم والواقع الرقمي.
                </p>
                <p>
                  اسم "رفيق السحاب" يعكس فلسفتنا - نحن لسنا مجرد مقدمي خدمات، بل
                  رفقاء في رحلة التحول الرقمي. نقف بجانب عملائنا، نفهم تحدياتهم،
                  ونقدم لهم الحلول التي تناسب احتياجاتهم الفريدة.
                </p>
                <p>
                  منذ تأسيسنا، نجحنا في مساعدة العشرات من الشركات في تحقيق
                  أهدافها الرقمية، وما زلنا نسعى لتوسيع دائرة تأثيرنا الإيجابي
                  في المنطقة.
                </p>
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
                alt="قصة رفيق السحاب"
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
              رؤيتنا ورسالتنا
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
                    رؤيتنا
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#404544]/80 dark:text-white/80 leading-relaxed text-lg">
                    أن نكون الشريك التقني الأول للشركات الصغيرة والمتوسطة في
                    المنطقة، ونساهم في تحويل أفكارهم إلى حلول رقمية ناجحة تدفع
                    بأعمالهم نحو المستقبل.
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
                    رسالتنا
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#404544]/80 dark:text-white/80 leading-relaxed text-lg">
                    نقدم حلولاً تقنية مبتكرة ومخصصة تساعد عملاءنا على تحقيق
                    أهدافهم بكفاءة وفعالية، مع التركيز على البساطة والجودة
                    والدعم المستمر.
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
              قيمنا الأساسية
            </h2>
            <p className="text-lg text-[#404544]/70 dark:text-white/70">
              المبادئ التي توجه عملنا وتشكل هويتنا
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
              رحلتنا عبر الزمن
            </h2>
            <p className="text-lg text-[#404544]/70 dark:text-white/70">
              المحطات المهمة في مسيرة رفيق السحاب
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
              فريق العمل
            </h2>
            <p className="text-lg text-[#404544]/70 dark:text-white/70 mb-8">
              خبراء متخصصون يعملون بشغف لتحقيق أهدافك
            </p>

            <Card className="p-8 bg-gradient-to-br from-[#78C487]/10 to-[#A5D5A9]/10">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <Image
                      src="/placeholder.svg?height=120&width=120"
                      alt="Dr. Nazeeh Harfoosh"
                      width={120}
                      height={120}
                      className="rounded-full mx-auto mb-4 border-4 border-[#78C487]/20"
                    />
                    <h3 className="text-lg font-semibold text-[#404544] dark:text-white mb-1">
                      د. نزيه حرفوش
                    </h3>
                    <p className="text-[#78C487] font-medium mb-2">
                      الشريك المؤسس والمدير التقني
                    </p>
                    <p className="text-sm text-[#404544]/70 dark:text-white/70">
                      خبير في الذكاء الاصطناعي والأتمتة
                    </p>
                  </div>

                  <div className="text-center">
                    <Image
                      src="/placeholder.svg?height=120&width=120"
                      alt="Ahmad"
                      width={120}
                      height={120}
                      className="rounded-full mx-auto mb-4 border-4 border-[#A5D5A9]/20"
                    />
                    <h3 className="text-lg font-semibold text-[#404544] dark:text-white mb-1">
                      أحمد
                    </h3>
                    <p className="text-[#A5D5A9] font-medium mb-2">
                      الشريك المؤسس والمدير التنفيذي
                    </p>
                    <p className="text-sm text-[#404544]/70 dark:text-white/70">
                      متخصص في الحلول السحابية وإدارة المشاريع
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    className="bg-[#78C487] hover:bg-[#78C487]/90 text-white"
                    asChild
                  >
                    <Link href="/founders">
                      تعرف على الفريق بالتفصيل
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
