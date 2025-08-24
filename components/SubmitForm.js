

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

import {

  Send,

  CheckCircle
} from "lucide-react"


import { Button } from "@/components/ui/button"


export default function SubmitForm({sendMes="form.submit" , formData , handleSubmit , setFormData}){

    

    const [isSubmitting, setIsSubmitting] = useState(false)

    const [isSubmitted, setIsSubmitted] = useState(false)
    const t = useTranslations("ContactPage");
    const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }


    
    const services = [
    t("services.bookingSystem"),
    t("services.aiAssistant"),
    t("services.bulkMessaging"),
    t("services.aiCustomization"),
    t("services.generalConsultation")
  ]

  const companySize = [
    t("companySize.lessthan10"),
    t("companySize.lessthan50"),
    t("companySize.lessthan100"),
    t("companySize.lessthan500"),
    t("companySize.morethan500")
  ]


  const revenue = [
    t("revenue.less1"), 
    "1M - 10M AED",
    "11M - 50M AED",
    "50M - 100M AED",
    "100M+ AED"
  ]
  const budget = [
    t("budget.less1"), 
    "20K-50K AED", 
    "50K-100K AED", 
    "100K+ AED"
  ]



   

    return (
         <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

              {/* Contact Form */}
            <Card className="shadow-xl mb-10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#404544] dark:text-white">
                  {t("form.title")}
                </CardTitle>
                <p className="text-[#404544]/70 dark:text-white/70">
                  {t("form.subtitle")}
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
                      {t("form.success.title")}
                    </h3>
                    <p className="text-[#404544]/70 dark:text-white/70">
                      {t("form.success.message")}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                          {t("form.fields.name")} *
                        </label>
                        <Input
                          required
                          value={formData.name}
                          onChange={e =>
                            handleInputChange("name", e.target.value)
                          }
                          placeholder={t("form.placeholders.name")}
                          className="border-[#A5D5A9]/30 focus:border-[#78C487]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                          {t("form.fields.email")} *
                        </label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={e =>
                            handleInputChange("email", e.target.value)
                          }
                          placeholder={t("form.placeholders.email")}
                          className="border-[#A5D5A9]/30 focus:border-[#78C487]"
                        />
                      </div>
                    </div>
                         {/* Company Role */}
                    <div>
                      <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                        {t("form.fields.role")} *
                      </label>
                      <Input
                        required
                        value={formData.role}
                        onChange={e =>
                          handleInputChange("role", e.target.value)
                        }
                        placeholder={t("form.placeholders.role")}
                        className="border-[#A5D5A9]/30 focus:border-[#78C487]"
                      />
                    </div>
                  {/* Company Name */}

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                          {t("form.fields.companyName")} *
                        </label>
                        <Input
                          required
                          value={formData.companyName}
                          onChange={e =>
                            handleInputChange("companyName", e.target.value)
                          }
                          placeholder={t("form.placeholders.companyName")}
                          className="border-[#A5D5A9]/30 focus:border-[#78C487]"
                        />
                      </div>

                      <div>
                      <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                        {t("form.fields.companySize")}
                      </label>
                      <Select
                        value={formData.companySize}
                        onValueChange={value =>
                          handleInputChange("companySize", value)
                        }
                      >
                        <SelectTrigger className="border-[#A5D5A9]/30 focus:border-[#78C487]">
                          <SelectValue placeholder={t("form.placeholders.companySize")} />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {companySize.map((companySize, index) => (
                            <SelectItem key={index} value={companySize} className="hover:bg-[#78C487] dark:text-black">
                              {companySize}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    </div>


                    <div className="grid md:grid-cols-2 gap-4">
                 
                      <div>
                        <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                          {t("form.fields.phone")} *
                        </label>
                        <Input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={e =>
                            handleInputChange("phone", e.target.value)
                          }
                          placeholder={t("form.placeholders.phone")}
                          className="border-[#A5D5A9]/30 focus:border-[#78C487]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                          {t("form.fields.website")} 
                        </label>
                        <Input
                          
                          
                          value={formData.website}
                          onChange={e =>
                            handleInputChange("website", e.target.value)
                          }
                          placeholder={t("form.placeholders.website")}
                          className="border-[#A5D5A9]/30 focus:border-[#78C487]"
                        />
                      </div>
                    </div>


                     <div className="grid md:grid-cols-2 gap-4">
                 
                     <div>
                      <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                        {t("form.fields.revenue")}
                      </label>
                      <Select
                        value={formData.revenue}
                        onValueChange={value =>
                          handleInputChange("revenue", value)
                        }
                      >
                        <SelectTrigger className="border-[#A5D5A9]/30 focus:border-[#78C487]">
                          <SelectValue placeholder={t("form.placeholders.revenue")} />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {revenue.map((revenue, index) => (
                            <SelectItem key={index} value={revenue} className="hover:bg-[#78C487] dark:text-black">
                              {revenue}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                        {t("form.fields.budget")} *
                      </label>
                      <Select
                        value={formData.budget}
                        onValueChange={value =>
                          handleInputChange("budget", value)
                        }
                      >
                        <SelectTrigger className="border-[#A5D5A9]/30 focus:border-[#78C487]">
                          <SelectValue placeholder={t("form.placeholders.budget")} />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {budget.map((item, index) => (
                            <SelectItem key={index} value={item} className="hover:bg-[#78C487] dark:text-black">
                              {item}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    </div>
                          
                    

                    <div>
                      <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                        {t("form.fields.message")} *
                      </label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={e =>
                          handleInputChange("message", e.target.value)
                        }
                        placeholder={t("form.placeholders.message")}
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
                          {t("form.submitting")}
                        </>
                      ) : (
                        <>
                          {t(sendMes)}
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
    )
}