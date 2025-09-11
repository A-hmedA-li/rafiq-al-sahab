"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  Cloud,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import Link from "next/link"

import { signUp } from "@/server/Users"

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "",
    agreeToTerms: false
  })

  const handleSubmit = async e => {
    e.preventDefault()
    setIsLoading(true)

    if (formData.password !== formData.confirmPassword) {
      alert("كلمات المرور غير متطابقة")
      setIsLoading(false)
      return
    }

    const res = await signUp(formData); 
  
    if (!res.success){
        setIsLoading(false)
        return 

    }

    // Redirect to sign in
   window.location.href = "/signin"
  }

  const handleInputChange = e => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  const handleSelectChange = value => {
    setFormData(prev => ({ ...prev, role: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#78C487]/10 via-white to-[#A5D5A9]/10 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto mb-4 p-3 bg-[#78C487] rounded-full w-fit"
            >
              <Cloud className="h-8 w-8 text-white" />
            </motion.div>
            <CardTitle className="text-2xl font-bold text-[#404544] mb-2">
              إنشاء حساب جديد
            </CardTitle>
            <p className="text-[#404544]/70 text-sm">
              انضم إلى فريق رفيق السحاب
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
         
                <div className="relative">
                  <User className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#404544]/50" />
                  <Input
                    type="text"
                    name="name"
                    placeholder="الاسم"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pr-10 h-11 border-[#A5D5A9]/30 focus:border-[#78C487] rounded-xl text-sm"
                    required
                  />
                </div>
               
            
              <div className="relative">
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#404544]/50" />
                <Input
                  type="email"
                  name="email"
                  placeholder="البريد الإلكتروني"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pr-10 h-11 border-[#A5D5A9]/30 focus:border-[#78C487] rounded-xl text-sm"
                  required
                />
              </div>

              <div className="relative">
                <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#404544]/50" />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="رقم الهاتف"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="pr-10 h-11 border-[#A5D5A9]/30 focus:border-[#78C487] rounded-xl text-sm"
                  required
                />
              </div>

              <Select onValueChange={handleSelectChange} required>
                <SelectTrigger className="h-11 border-[#A5D5A9]/30  focus:border-[#78C487] rounded-xl text-sm">
                  <SelectValue placeholder="اختر الدور الوظيفي" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="admin">مدير النظام</SelectItem>
                  <SelectItem value="manager">مدير</SelectItem>
                  <SelectItem value="developer">مطور</SelectItem>
                  <SelectItem value="designer">مصمم</SelectItem>
                  <SelectItem value="client">عميل</SelectItem>
                </SelectContent>
              </Select>

              <div className="relative">
                <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#404544]/50" />
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="كلمة المرور"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="pr-10 pl-10 h-11 border-[#A5D5A9]/30 focus:border-[#78C487] rounded-xl text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#404544]/50 hover:text-[#78C487]"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>

              <div className="relative">
                <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#404544]/50" />
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="تأكيد كلمة المرور"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="pr-10 pl-10 h-11 border-[#A5D5A9]/30 focus:border-[#78C487] rounded-xl text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#404544]/50 hover:text-[#78C487]"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="mt-1 rounded border-[#A5D5A9]/30 text-[#78C487] focus:ring-[#78C487]"
                  required
                />
                <label className="text-xs text-[#404544]/70 leading-relaxed">
                  أوافق على{" "}
                  <Link
                    href="/terms"
                    className="text-[#78C487] hover:underline"
                  >
                    الشروط والأحكام
                  </Link>{" "}
                  و{" "}
                  <Link
                    href="/privacy"
                    className="text-[#78C487] hover:underline"
                  >
                    سياسة الخصوصية
                  </Link>
                </label>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 bg-[#78C487] hover:bg-[#78C487]/90 text-white rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2 text-sm"
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear"
                    }}
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <span>إنشاء الحساب</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-[#404544]/70 text-sm">
                لديك حساب بالفعل؟{" "}
                <Link
                  href="/signin"
                  className="text-[#78C487] hover:text-[#78C487]/80 font-medium transition-colors"
                >
                  تسجيل الدخول
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-6"
        >
          <Link
            href="/"
            className="text-[#404544]/70 hover:text-[#78C487] text-sm transition-colors flex items-center justify-center space-x-2"
          >
            <span>العودة إلى الموقع الرئيسي</span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
