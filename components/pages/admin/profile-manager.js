"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield,
  Bell,
  Camera,
  Save,
  Edit,
  Lock,
  Eye,
  EyeOff,
  Check,
  X,
  Trash2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import Image from "next/image"

const initialProfile = {
  id: "1",
  firstName: "نزيه",
  lastName: "حرفوش",
  email: "nazeeh@rafiqalsahab.com",
  phone: "+971501234567",
  avatar: "/placeholder.svg?height=150&width=150",
  role: "مدير النظام",
  department: "التكنولوجيا",
  location: "دبي، الإمارات العربية المتحدة",
  bio:
    "خبير في الذكاء الاصطناعي والأتمتة مع أكثر من 10 سنوات من الخبرة في تطوير الحلول التقنية المبتكرة. أحب تبسيط التكنولوجيا المعقدة وجعلها في متناول الجميع.",
  dateJoined: "2024-01-01",
  lastLogin: "2024-01-20T10:30:00Z",
  isActive: true,
  preferences: {
    language: "ar",
    timezone: "Asia/Dubai",
    emailNotifications: true,
    pushNotifications: true,
    marketingEmails: false,
    theme: "light"
  },
  socialLinks: {
    linkedin: "https://linkedin.com/in/nazeeh-harfoosh",
    github: "https://github.com/nazeeh"
  },
  skills: [
    "الذكاء الاصطناعي",
    "تطوير البرمجيات",
    "إدارة المشاريع",
    "الحوسبة السحابية"
  ],
  achievements: [
    "دكتوراه في علوم الحاسوب",
    "50+ مشروع ناجح",
    "خبير معتمد في AI"
  ]
}

const languageOptions = [
  { value: "ar", label: "العربية" },
  { value: "en", label: "English" }
]

const timezoneOptions = [
  { value: "Asia/Dubai", label: "دبي (UTC+4)" },
  { value: "Asia/Riyadh", label: "الرياض (UTC+3)" },
  { value: "Europe/London", label: "لندن (UTC+0)" },
  { value: "America/New_York", label: "نيويورك (UTC-5)" }
]

const themeOptions = [
  { value: "light", label: "فاتح" },
  { value: "dark", label: "داكن" },
  { value: "system", label: "تلقائي" }
]

export function ProfileManager() {
  const [profile, setProfile] = useState(initialProfile)
  const [security, setSecurity] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    twoFactorEnabled: false,
    loginAlerts: true,
    sessionTimeout: 30
  })
  const [activeTab, setActiveTab] = useState("profile")
  const [isEditing, setIsEditing] = useState(false)
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  })
  const [isSaving, setIsSaving] = useState(false)
  const [newSkill, setNewSkill] = useState("")

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSaving(false)
    setIsEditing(false)
    // Show success message
  }

  const handlePasswordChange = async () => {
    if (security.newPassword !== security.confirmPassword) {
      alert("كلمات المرور الجديدة غير متطابقة")
      return
    }
    setIsSaving(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSecurity({
      ...security,
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    })
    setIsSaving(false)
    alert("تم تغيير كلمة المرور بنجاح")
  }

  const addSkill = () => {
    if (newSkill.trim() && !profile.skills.includes(newSkill.trim())) {
      setProfile({
        ...profile,
        skills: [...profile.skills, newSkill.trim()]
      })
      setNewSkill("")
    }
  }

  const removeSkill = skillToRemove => {
    setProfile({
      ...profile,
      skills: profile.skills.filter(skill => skill !== skillToRemove)
    })
  }

  const tabs = [
    { id: "profile", label: "الملف الشخصي", icon: User },
    { id: "security", label: "الأمان", icon: Shield },
    { id: "preferences", label: "التفضيلات", icon: Bell }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#404544] dark:text-white">
            الملف الشخصي
          </h1>
          <p className="text-[#404544]/70 dark:text-white/70">
            إدارة معلوماتك الشخصية وإعدادات الحساب
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge
            className={`${
              profile.isActive
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {profile.isActive ? "نشط" : "غير نشط"}
          </Badge>
          <Badge variant="secondary">{profile.role}</Badge>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Profile Summary Card */}
        <div className="lg:col-span-1">
          <Card className="sticky top-6">
            <CardContent className="p-6 text-center">
              <div className="relative inline-block mb-4">
                <Image
                  src={profile.avatar || "/placeholder.svg"}
                  alt={`${profile.firstName} ${profile.lastName}`}
                  width={120}
                  height={120}
                  className="rounded-full border-4 border-[#78C487]/20"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute bottom-0 right-0 p-2 bg-white dark:bg-[#404544] rounded-full shadow-lg"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              <h2 className="text-xl font-bold text-[#404544] dark:text-white mb-1">
                {profile.firstName} {profile.lastName}
              </h2>
              <p className="text-[#78C487] font-medium mb-2">{profile.role}</p>
              <p className="text-sm text-[#404544]/70 dark:text-white/70 mb-4">
                {profile.department}
              </p>

              <div className="space-y-2 text-sm text-[#404544]/70 dark:text-white/70">
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span className="truncate">{profile.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-center">{profile.location}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>
                    انضم في{" "}
                    {new Date(profile.dateJoined).toLocaleDateString("ar-AE")}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t">
                <p className="text-xs text-[#404544]/50 dark:text-white/50">
                  آخر تسجيل دخول:{" "}
                  {new Date(profile.lastLogin).toLocaleDateString("ar-AE", {
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit"
                  })}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Tabs */}
          <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg mb-6">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-white dark:bg-[#404544] text-[#78C487] shadow-sm"
                    : "text-[#404544]/70 dark:text-white/70 hover:text-[#404544] dark:hover:text-white"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Profile Tab */}
          {activeTab === "profile" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>المعلومات الأساسية</CardTitle>
                  <Button
                    variant="outline"
                    onClick={() => setIsEditing(!isEditing)}
                    className="border-[#78C487] text-[#78C487] hover:bg-[#78C487] hover:text-white"
                  >
                    {isEditing ? (
                      <X className="h-4 w-4 mr-2" />
                    ) : (
                      <Edit className="h-4 w-4 mr-2" />
                    )}
                    {isEditing ? "إلغاء" : "تحرير"}
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                        الاسم الأول
                      </label>
                      <Input
                        value={profile.firstName}
                        onChange={e =>
                          setProfile({ ...profile, firstName: e.target.value })
                        }
                        disabled={!isEditing}
                        className={
                          !isEditing ? "bg-gray-50 dark:bg-gray-800" : ""
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                        اسم العائلة
                      </label>
                      <Input
                        value={profile.lastName}
                        onChange={e =>
                          setProfile({ ...profile, lastName: e.target.value })
                        }
                        disabled={!isEditing}
                        className={
                          !isEditing ? "bg-gray-50 dark:bg-gray-800" : ""
                        }
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                        البريد الإلكتروني
                      </label>
                      <Input
                        type="email"
                        value={profile.email}
                        onChange={e =>
                          setProfile({ ...profile, email: e.target.value })
                        }
                        disabled={!isEditing}
                        className={
                          !isEditing ? "bg-gray-50 dark:bg-gray-800" : ""
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                        رقم الهاتف
                      </label>
                      <Input
                        value={profile.phone}
                        onChange={e =>
                          setProfile({ ...profile, phone: e.target.value })
                        }
                        disabled={!isEditing}
                        className={
                          !isEditing ? "bg-gray-50 dark:bg-gray-800" : ""
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                      الموقع
                    </label>
                    <Input
                      value={profile.location}
                      onChange={e =>
                        setProfile({ ...profile, location: e.target.value })
                      }
                      disabled={!isEditing}
                      className={
                        !isEditing ? "bg-gray-50 dark:bg-gray-800" : ""
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                      نبذة شخصية
                    </label>
                    <Textarea
                      value={profile.bio}
                      onChange={e =>
                        setProfile({ ...profile, bio: e.target.value })
                      }
                      disabled={!isEditing}
                      rows={4}
                      className={
                        !isEditing ? "bg-gray-50 dark:bg-gray-800" : ""
                      }
                    />
                  </div>

                  {isEditing && (
                    <div className="flex justify-end space-x-4">
                      <Button
                        variant="outline"
                        onClick={() => setIsEditing(false)}
                      >
                        إلغاء
                      </Button>
                      <Button
                        onClick={handleSave}
                        disabled={isSaving}
                        className="bg-[#78C487] hover:bg-[#78C487]/90 text-white"
                      >
                        {isSaving ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            جاري الحفظ...
                          </>
                        ) : (
                          <>
                            <Save className="h-4 w-4 mr-2" />
                            حفظ التغييرات
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Skills & Achievements */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>المهارات</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {profile.skills.map((skill, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="cursor-pointer hover:bg-red-100 hover:text-red-600 group"
                            onClick={() => isEditing && removeSkill(skill)}
                          >
                            {skill}
                            {isEditing && (
                              <X className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100" />
                            )}
                          </Badge>
                        ))}
                      </div>
                      {isEditing && (
                        <div className="flex space-x-2">
                          <Input
                            value={newSkill}
                            onChange={e => setNewSkill(e.target.value)}
                            placeholder="إضافة مهارة جديدة"
                            onKeyPress={e => e.key === "Enter" && addSkill()}
                          />
                          <Button
                            onClick={addSkill}
                            size="sm"
                            className="bg-[#78C487] hover:bg-[#78C487]/90"
                          >
                            إضافة
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>الإنجازات</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {profile.achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <Check className="h-4 w-4 text-[#78C487]" />
                          <span className="text-[#404544] dark:text-white">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Links */}
              <Card>
                <CardHeader>
                  <CardTitle>الروابط الاجتماعية</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                      LinkedIn
                    </label>
                    <Input
                      value={profile.socialLinks.linkedin || ""}
                      onChange={e =>
                        setProfile({
                          ...profile,
                          socialLinks: {
                            ...profile.socialLinks,
                            linkedin: e.target.value
                          }
                        })
                      }
                      disabled={!isEditing}
                      placeholder="https://linkedin.com/in/username"
                      className={
                        !isEditing ? "bg-gray-50 dark:bg-gray-800" : ""
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                      GitHub
                    </label>
                    <Input
                      value={profile.socialLinks.github || ""}
                      onChange={e =>
                        setProfile({
                          ...profile,
                          socialLinks: {
                            ...profile.socialLinks,
                            github: e.target.value
                          }
                        })
                      }
                      disabled={!isEditing}
                      placeholder="https://github.com/username"
                      className={
                        !isEditing ? "bg-gray-50 dark:bg-gray-800" : ""
                      }
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Security Tab */}
          {activeTab === "security" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>تغيير كلمة المرور</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                      كلمة المرور الحالية
                    </label>
                    <div className="relative">
                      <Input
                        type={showPasswords.current ? "text" : "password"}
                        value={security.currentPassword}
                        onChange={e =>
                          setSecurity({
                            ...security,
                            currentPassword: e.target.value
                          })
                        }
                        placeholder="أدخل كلمة المرور الحالية"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 p-1"
                        onClick={() =>
                          setShowPasswords({
                            ...showPasswords,
                            current: !showPasswords.current
                          })
                        }
                      >
                        {showPasswords.current ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                        كلمة المرور الجديدة
                      </label>
                      <div className="relative">
                        <Input
                          type={showPasswords.new ? "text" : "password"}
                          value={security.newPassword}
                          onChange={e =>
                            setSecurity({
                              ...security,
                              newPassword: e.target.value
                            })
                          }
                          placeholder="كلمة المرور الجديدة"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 p-1"
                          onClick={() =>
                            setShowPasswords({
                              ...showPasswords,
                              new: !showPasswords.new
                            })
                          }
                        >
                          {showPasswords.new ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                        تأكيد كلمة المرور
                      </label>
                      <div className="relative">
                        <Input
                          type={showPasswords.confirm ? "text" : "password"}
                          value={security.confirmPassword}
                          onChange={e =>
                            setSecurity({
                              ...security,
                              confirmPassword: e.target.value
                            })
                          }
                          placeholder="تأكيد كلمة المرور"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 p-1"
                          onClick={() =>
                            setShowPasswords({
                              ...showPasswords,
                              confirm: !showPasswords.confirm
                            })
                          }
                        >
                          {showPasswords.confirm ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handlePasswordChange}
                    disabled={
                      !security.currentPassword ||
                      !security.newPassword ||
                      !security.confirmPassword ||
                      isSaving
                    }
                    className="bg-[#78C487] hover:bg-[#78C487]/90 text-white"
                  >
                    {isSaving ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        جاري التحديث...
                      </>
                    ) : (
                      <>
                        <Lock className="h-4 w-4 mr-2" />
                        تحديث كلمة المرور
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>إعدادات الأمان</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-[#404544] dark:text-white">
                        المصادقة الثنائية
                      </h4>
                      <p className="text-sm text-[#404544]/70 dark:text-white/70">
                        إضافة طبقة حماية إضافية لحسابك
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={security.twoFactorEnabled}
                        onChange={e =>
                          setSecurity({
                            ...security,
                            twoFactorEnabled: e.target.checked
                          })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#78C487]/20 dark:peer-focus:ring-[#78C487]/40 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#78C487]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-[#404544] dark:text-white">
                        تنبيهات تسجيل الدخول
                      </h4>
                      <p className="text-sm text-[#404544]/70 dark:text-white/70">
                        إشعارات عند تسجيل الدخول من جهاز جديد
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={security.loginAlerts}
                        onChange={e =>
                          setSecurity({
                            ...security,
                            loginAlerts: e.target.checked
                          })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#78C487]/20 dark:peer-focus:ring-[#78C487]/40 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#78C487]"></div>
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                      انتهاء الجلسة (بالدقائق)
                    </label>
                    <Select
                      value={security.sessionTimeout.toString()}
                      onValueChange={value =>
                        setSecurity({
                          ...security,
                          sessionTimeout: Number.parseInt(value)
                        })
                      }
                    >
                      <SelectTrigger className="max-w-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 دقيقة</SelectItem>
                        <SelectItem value="30">30 دقيقة</SelectItem>
                        <SelectItem value="60">ساعة واحدة</SelectItem>
                        <SelectItem value="120">ساعتان</SelectItem>
                        <SelectItem value="480">8 ساعات</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Preferences Tab */}
          {activeTab === "preferences" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>التفضيلات العامة</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                        اللغة
                      </label>
                      <Select
                        value={profile.preferences.language}
                        onValueChange={value =>
                          setProfile({
                            ...profile,
                            preferences: {
                              ...profile.preferences,
                              language: value
                            }
                          })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {languageOptions.map(option => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                        المنطقة الزمنية
                      </label>
                      <Select
                        value={profile.preferences.timezone}
                        onValueChange={value =>
                          setProfile({
                            ...profile,
                            preferences: {
                              ...profile.preferences,
                              timezone: value
                            }
                          })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {timezoneOptions.map(option => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                      المظهر
                    </label>
                    <Select
                      value={profile.preferences.theme}
                      onValueChange={value =>
                        setProfile({
                          ...profile,
                          preferences: { ...profile.preferences, theme: value }
                        })
                      }
                    >
                      <SelectTrigger className="max-w-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {themeOptions.map(option => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>إعدادات الإشعارات</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-[#404544] dark:text-white">
                        إشعارات البريد الإلكتروني
                      </h4>
                      <p className="text-sm text-[#404544]/70 dark:text-white/70">
                        تلقي إشعارات حول النشاطات المهمة
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={profile.preferences.emailNotifications}
                        onChange={e =>
                          setProfile({
                            ...profile,
                            preferences: {
                              ...profile.preferences,
                              emailNotifications: e.target.checked
                            }
                          })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#78C487]/20 dark:peer-focus:ring-[#78C487]/40 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#78C487]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-[#404544] dark:text-white">
                        الإشعارات الفورية
                      </h4>
                      <p className="text-sm text-[#404544]/70 dark:text-white/70">
                        إشعارات فورية في المتصفح
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={profile.preferences.pushNotifications}
                        onChange={e =>
                          setProfile({
                            ...profile,
                            preferences: {
                              ...profile.preferences,
                              pushNotifications: e.target.checked
                            }
                          })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#78C487]/20 dark:peer-focus:ring-[#78C487]/40 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#78C487]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-[#404544] dark:text-white">
                        الرسائل التسويقية
                      </h4>
                      <p className="text-sm text-[#404544]/70 dark:text-white/70">
                        تلقي رسائل حول المنتجات والعروض الجديدة
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={profile.preferences.marketingEmails}
                        onChange={e =>
                          setProfile({
                            ...profile,
                            preferences: {
                              ...profile.preferences,
                              marketingEmails: e.target.checked
                            }
                          })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#78C487]/20 dark:peer-focus:ring-[#78C487]/40 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#78C487]"></div>
                    </label>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">منطقة الخطر</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                    <h4 className="font-medium text-red-800 dark:text-red-400 mb-2">
                      حذف الحساب
                    </h4>
                    <p className="text-sm text-red-700 dark:text-red-300 mb-4">
                      حذف الحساب نهائياً مع جميع البيانات المرتبطة به. هذا
                      الإجراء لا يمكن التراجع عنه.
                    </p>
                    <Button
                      variant="outline"
                      className="border-red-500 text-red-500 hover:bg-red-50 bg-transparent"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      حذف الحساب
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
