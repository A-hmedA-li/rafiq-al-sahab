"use client"

import { motion } from "framer-motion"
import {
  Mail,
  Linkedin,
  Github,
  Calendar,
  Award,
  Code,
  Brain,
  Users,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const founders = [
  {
    name: "Dr. Nazeeh Harfoosh",
    arabicName: "د. نزيه حرفوش",
    role: "Co-Founder & CTO",
    arabicRole: "الشريك المؤسس والمدير التقني",
    image: "/images/lg.png",
    bio:
      "خبير في الذكاء الاصطناعي والأتمتة مع أكثر من 10 سنوات من الخبرة في تطوير الحلول التقنية المبتكرة. يحب تبسيط التكنولوجيا المعقدة وجعلها في متناول الجميع.",
    expertise: [
      "الذكاء الاصطناعي",
      "أتمتة العمليات",
      "تطوير البرمجيات",
      "إدارة البيانات"
    ],
    achievements: [
      "دكتوراه في علوم الحاسوب",
      "أكثر من 50 مشروع ناجح",
      "خبير معتمد في الذكاء الاصطناعي",
      "متحدث في المؤتمرات التقنية"
    ],
    timeline: [
      { year: "2024", event: "تأسيس رفيق السحاب" },
      { year: "2020", event: "بدء العمل في الذكاء الاصطناعي" },
      { year: "2018", event: "الحصول على الدكتوراه" },
      { year: "2015", event: "بداية مسيرة ريادة الأعمال" }
    ],
    social: {
      email: "nazeeh@rafiqalsahab.com",
      linkedin: "https://linkedin.com/in/nazeeh-harfoosh",
      github: "https://github.com/nazeeh"
    },
    personality: "تحليلي ومرح، يؤمن بأن التكنولوجيا يجب أن تكون بسيطة وممتعة"
  },
  {
    name: "Ahmad",
    arabicName: "أحمد",
    role: "Co-Founder & CEO",
    arabicRole: "الشريك المؤسس والمدير التنفيذي",
    image: "/images/lg.png",
    bio:
      "متخصص في تطوير الحلول السحابية وإدارة المشاريع التقنية. يتمتع بخبرة واسعة في قيادة الفرق وتحويل الأفكار إلى منتجات ناجحة.",
    expertise: [
      "الحلول السحابية",
      "إدارة المشاريع",
      "استراتيجية الأعمال",
      "تطوير المنتجات"
    ],
    achievements: [
      "ماجستير في إدارة الأعمال",
      "قائد أكثر من 100 مشروع",
      "خبير في التحول الرقمي",
      "مستشار تقني معتمد"
    ],
    timeline: [
      { year: "2024", event: "تأسيس رفيق السحاب" },
      { year: "2021", event: "إطلاق أول منصة سحابية" },
      { year: "2019", event: "الحصول على الماجستير" },
      { year: "2016", event: "بداية العمل في التكنولوجيا" }
    ],
    social: {
      email: "ahmad@rafiqalsahab.com",
      linkedin: "https://linkedin.com/in/ahmad",
      github: "https://github.com/ahmad"
    },
    personality: "قائد ملهم، يركز على بناء علاقات قوية مع العملاء والفريق"
  }
]

export default function FoundersPage() {
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
              تعرف على فريقنا
            </h1>
            <p className="text-xl text-[#404544]/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed">
              الخبراء الذين يقفون وراء نجاح رفيق السحاب - شغفهم بالتكنولوجيا
              يدفعهم لتقديم الأفضل
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founders Profiles */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-20">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden shadow-xl">
                  <div
                    className={`grid lg:grid-cols-2 gap-0 ${
                      index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    {/* Profile Image */}
                    <div
                      className={`relative ${
                        index % 2 === 1 ? "lg:col-start-2" : ""
                      }`}
                    >
                      <div className="aspect-square lg:aspect-auto lg:h-full relative">
                        <Image
                          src={founder.image || "/placeholder.svg"}
                          alt={founder.arabicName}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#78C487]/20 to-transparent"></div>
                      </div>
                    </div>

                    {/* Profile Content */}
                    <div
                      className={`p-8 lg:p-12 ${
                        index % 2 === 1 ? "lg:col-start-1" : ""
                      }`}
                    >
                      <div className="mb-6">
                        <h2 className="text-3xl font-bold text-[#404544] dark:text-white mb-2">
                          {founder.arabicName}
                        </h2>
                        <p className="text-lg text-[#78C487] font-medium mb-4">
                          {founder.arabicRole}
                        </p>
                        <p className="text-[#404544]/70 dark:text-white/70 leading-relaxed mb-6">
                          {founder.bio}
                        </p>
                        <div className="bg-[#78C487]/10 p-4 rounded-lg mb-6">
                          <p className="text-[#404544] dark:text-white font-medium italic">
                            "{founder.personality}"
                          </p>
                        </div>
                      </div>

                      {/* Expertise */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-[#404544] dark:text-white mb-3">
                          مجالات الخبرة
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {founder.expertise.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              className="bg-[#A5D5A9]/20 text-[#404544] dark:text-white hover:bg-[#A5D5A9]/30"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-[#404544] dark:text-white mb-3">
                          الإنجازات
                        </h3>
                        <ul className="space-y-2">
                          {founder.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="flex items-center space-x-3"
                            >
                              <Award className="h-4 w-4 text-[#78C487] flex-shrink-0" />
                              <span className="text-[#404544]/80 dark:text-white/80">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Social Links */}
                      <div className="flex space-x-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-[#78C487] text-[#78C487] hover:bg-[#78C487] hover:text-white bg-transparent"
                          asChild
                        >
                          <Link href={`mailto:${founder.social.email}`}>
                            <Mail className="h-4 w-4 mr-2" />
                            تواصل
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-[#A5D5A9] text-[#A5D5A9] hover:bg-[#A5D5A9] hover:text-white bg-transparent"
                          asChild
                        >
                          <Link href={founder.social.linkedin} target="_blank">
                            <Linkedin className="h-4 w-4 mr-2" />
                            LinkedIn
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-[#404544] text-[#404544] hover:bg-[#404544] hover:text-white dark:border-white dark:text-white bg-transparent"
                          asChild
                        >
                          <Link href={founder.social.github} target="_blank">
                            <Github className="h-4 w-4 mr-2" />
                            GitHub
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 bg-[#78C487]/5 dark:bg-[#404544]/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#404544] dark:text-white mb-4">
              رحلتنا معاً
            </h2>
            <p className="text-lg text-[#404544]/70 dark:text-white/70">
              كيف بدأت قصة رفيق السحاب
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {founders.map((founder, founderIndex) => (
              <motion.div
                key={founderIndex}
                initial={{ opacity: 0, x: founderIndex === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: founderIndex * 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-[#404544] dark:text-white flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-[#78C487]" />
                      رحلة {founder.arabicName}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {founder.timeline.map((item, timeIndex) => (
                        <div
                          key={timeIndex}
                          className="flex items-start space-x-4"
                        >
                          <div className="flex-shrink-0 w-12 h-12 bg-[#78C487]/10 rounded-full flex items-center justify-center">
                            <span className="text-[#78C487] font-semibold text-sm">
                              {item.year}
                            </span>
                          </div>
                          <div className="flex-grow">
                            <p className="text-[#404544] dark:text-white font-medium">
                              {item.event}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Built This Together */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#404544] dark:text-white mb-8">
              لماذا بنينا هذا معاً؟
            </h2>

            <Card className="p-8 bg-gradient-to-br from-[#78C487]/10 to-[#A5D5A9]/10">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="inline-flex p-4 bg-[#78C487]/10 rounded-full mb-4">
                      <Brain className="h-8 w-8 text-[#78C487]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#404544] dark:text-white mb-2">
                      رؤية مشتركة
                    </h3>
                    <p className="text-[#404544]/70 dark:text-white/70 text-sm">
                      نؤمن بأن التكنولوجيا يجب أن تكون في خدمة الإنسان، بسيطة
                      ومفيدة
                    </p>
                  </div>

                  <div>
                    <div className="inline-flex p-4 bg-[#A5D5A9]/10 rounded-full mb-4">
                      <Code className="h-8 w-8 text-[#A5D5A9]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#404544] dark:text-white mb-2">
                      خبرات متكاملة
                    </h3>
                    <p className="text-[#404544]/70 dark:text-white/70 text-sm">
                      نجمع بين الخبرة التقنية العميقة والفهم الواضح لاحتياجات
                      الأعمال
                    </p>
                  </div>

                  <div>
                    <div className="inline-flex p-4 bg-[#78C487]/10 rounded-full mb-4">
                      <Users className="h-8 w-8 text-[#78C487]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#404544] dark:text-white mb-2">
                      شغف مشترك
                    </h3>
                    <p className="text-[#404544]/70 dark:text-white/70 text-sm">
                      نحب مساعدة الآخرين في تحقيق أهدافهم من خلال التكنولوجيا
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white/50 dark:bg-[#404544]/20 rounded-lg">
                  <p className="text-[#404544] dark:text-white text-lg leading-relaxed italic">
                    "بدأنا رفيق السحاب لأننا نؤمن بأن كل فكرة تستحق أن تصبح
                    واقعاً. نحن هنا لنكون رفيقك في هذه الرحلة، نقدم لك الخبرة
                    والدعم والأدوات التي تحتاجها لتحويل حلمك إلى مشروع ناجح."
                  </p>
                  <div className="flex justify-center mt-4 space-x-8">
                    <span className="text-[#78C487] font-semibold">- نزيه</span>
                    <span className="text-[#A5D5A9] font-semibold">- أحمد</span>
                  </div>
                </div>
              </CardContent>
            </Card>
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
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              جاهز للعمل معنا؟
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              تواصل معنا اليوم ودعنا نساعدك في تحقيق أهدافك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#78C487] hover:bg-white/90 px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link href="/contact">
                  تواصل معنا الآن
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
