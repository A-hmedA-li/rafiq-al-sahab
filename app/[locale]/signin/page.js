"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Eye, EyeOff, Mail, Lock, Cloud, ArrowRight, Chrome } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

import { signIn } from "next-auth/react"

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  })

  const handleSubmit = async e => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Redirect to admin panel
    window.location.href = "/admin"
  }

  const handleInputChange = e => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
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
          <CardHeader className="text-center pb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto mb-4 p-3  rounded-full w-fit"
            >
              
              <img src="/images/lgc.png"  className="w-60" />

            </motion.div>
            <CardTitle className="text-2xl font-bold text-[#404544] mb-2">
              مرحباً بك مرة أخرى
            </CardTitle>
            <p className="text-[#404544]/70 text-sm">
              سجل دخولك للوصول إلى لوحة التحكم
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#404544]/50" />
                  <Input
                    type="email"
                    name="email"
                    placeholder="البريد الإلكتروني"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pr-12 h-12 border-[#A5D5A9]/30 focus:border-[#78C487] rounded-xl"
                    required
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#404544]/50" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="كلمة المرور"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pr-12 pl-12 h-12 border-[#A5D5A9]/30 focus:border-[#78C487] rounded-xl"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#404544]/50 hover:text-[#78C487]"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="rounded border-[#A5D5A9]/30 text-[#78C487] focus:ring-[#78C487]"
                  />
                  <span className="text-sm text-[#404544]/70">تذكرني</span>
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-[#78C487] hover:text-[#78C487]/80 transition-colors"
                >
                  نسيت كلمة المرور؟
                </Link>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-[#78C487] hover:bg-[#78C487]/90 text-white rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear"
                    }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <span>تسجيل الدخول</span>
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </Button>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#A5D5A9]/30" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-[#404544]/70">أو</span>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-12 mt-4 border-[#A5D5A9]/30 hover:border-[#78C487] rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-3 bg-transparent"
                  onClick={() => {
                    signIn('google'); 
                   
                  }}
                >
                  <Chrome className="h-5 w-5 text-[#4285F4]" />
                  <span className="text-[#404544]">تسجيل الدخول بواسطة Google</span>
                </Button>
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-[#404544]/70 text-sm">
                ليس لديك حساب؟{" "}
                <Link
                  href="/signup"
                  className="text-[#78C487] hover:text-[#78C487]/80 font-medium transition-colors"
                >
                  إنشاء حساب جديد
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
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
