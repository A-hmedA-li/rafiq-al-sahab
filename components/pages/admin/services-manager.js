"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Calendar,
  Brain,
  MessageSquare,
  Zap,
  Eye,
  EyeOff
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

const iconOptions = [
  { value: "Calendar", label: "تقويم", icon: Calendar },
  { value: "Brain", label: "دماغ", icon: Brain },
  { value: "MessageSquare", label: "رسالة", icon: MessageSquare },
  { value: "Zap", label: "برق", icon: Zap }
]

const colorOptions = [
  { value: "text-[#78C487]", label: "أخضر أساسي", bg: "bg-[#78C487]/10" },
  { value: "text-[#A5D5A9]", label: "أخضر ثانوي", bg: "bg-[#A5D5A9]/10" },
  { value: "text-blue-500", label: "أزرق", bg: "bg-blue-500/10" },
  { value: "text-purple-500", label: "بنفسجي", bg: "bg-purple-500/10" }
]

const initialServices = [
  {
    id: "1",
    title: "Online Booking Setup & Management",
    arabicTitle: "نظام الحجز الإلكتروني والإدارة",
    description:
      "نظام حجز مواعيد ذكي يسهل على عملائك التواصل معك ويوفر عليك الوقت والجهد",
    features: [
      "واجهة حجز سهلة الاستخدام",
      "تذكيرات تلقائية للعملاء",
      "تكامل مع التقويم",
      "إدارة المواعيد والإلغاءات",
      "تقارير مفصلة"
    ],
    icon: "Calendar",
    color: "text-[#78C487]",
    bgColor: "bg-[#78C487]/10",
    isActive: true,
    createdAt: "2024-01-15",
    updatedAt: "2024-01-20"
  },
  {
    id: "2",
    title: "Custom AI Agent & Automation Systems",
    arabicTitle: "المساعد الذكي المخصص وأنظمة الأتمتة",
    description:
      "مساعد ذكي مخصص لأعمالك يجيب على استفسارات العملاء ويؤتمت المهام الروتينية",
    features: [
      "ذكاء اصطناعي متقدم",
      "تدريب مخصص لأعمالك",
      "أتمتة المهام الروتينية",
      "تكامل مع أنظمتك الحالية",
      "تحسين مستمر للأداء"
    ],
    icon: "Brain",
    color: "text-[#A5D5A9]",
    bgColor: "bg-[#A5D5A9]/10",
    isActive: true,
    createdAt: "2024-01-10",
    updatedAt: "2024-01-18"
  }
]

export function ServicesManager() {
  const [services, setServices] = useState(initialServices)
  const [editingService, setEditingService] = useState(null)
  const [isCreating, setIsCreating] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredServices = services.filter(
    service =>
      service.arabicTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleCreate = () => {
    const newService = {
      id: Date.now().toString(),
      title: "",
      arabicTitle: "",
      description: "",
      features: [],
      icon: "Calendar",
      color: "text-[#78C487]",
      bgColor: "bg-[#78C487]/10",
      isActive: true,
      createdAt: new Date().toISOString().split("T")[0],
      updatedAt: new Date().toISOString().split("T")[0]
    }
    setEditingService(newService)
    setIsCreating(true)
  }

  const handleSave = service => {
    if (isCreating) {
      setServices([...services, service])
      setIsCreating(false)
    } else {
      setServices(
        services.map(s =>
          s.id === service.id
            ? { ...service, updatedAt: new Date().toISOString().split("T")[0] }
            : s
        )
      )
    }
    setEditingService(null)
  }

  const handleDelete = id => {
    setServices(services.filter(s => s.id !== id))
  }

  const toggleActive = id => {
    setServices(
      services.map(s =>
        s.id === id
          ? {
              ...s,
              isActive: !s.isActive,
              updatedAt: new Date().toISOString().split("T")[0]
            }
          : s
      )
    )
  }

  const getIconComponent = iconName => {
    const iconOption = iconOptions.find(option => option.value === iconName)
    return iconOption ? iconOption.icon : Calendar
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#404544] dark:text-white">
            إدارة الخدمات
          </h1>
          <p className="text-[#404544]/70 dark:text-white/70">
            إدارة وتحرير خدمات الشركة
          </p>
        </div>
        <Button
          onClick={handleCreate}
          className="bg-[#78C487] hover:bg-[#78C487]/90 text-white"
        >
          <Plus className="h-4 w-4 mr-2" />
          إضافة خدمة جديدة
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <Input
            placeholder="البحث في الخدمات..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </CardContent>
      </Card>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredServices.map(service => {
            const IconComponent = getIconComponent(service.icon)
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                layout
              >
                <Card
                  className={`h-full hover:shadow-lg transition-all duration-300 ${
                    !service.isActive ? "opacity-60" : ""
                  }`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div
                        className={`inline-flex p-3 rounded-full ${service.bgColor} mb-3`}
                      >
                        <IconComponent className={`h-6 w-6 ${service.color}`} />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleActive(service.id)}
                          className="p-1"
                        >
                          {service.isActive ? (
                            <Eye className="h-4 w-4 text-green-500" />
                          ) : (
                            <EyeOff className="h-4 w-4 text-gray-400" />
                          )}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setEditingService(service)}
                          className="p-1"
                        >
                          <Edit className="h-4 w-4 text-blue-500" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(service.id)}
                          className="p-1"
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </div>
                    <CardTitle className="text-lg font-semibold text-[#404544] dark:text-white">
                      {service.arabicTitle}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#404544]/70 dark:text-white/70 text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-medium text-[#404544]/60 dark:text-white/60 mb-2">
                          المميزات ({service.features.length})
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {service.features
                            .slice(0, 3)
                            .map((feature, index) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                className="text-xs"
                              >
                                {feature}
                              </Badge>
                            ))}
                          {service.features.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{service.features.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-[#404544]/50 dark:text-white/50">
                        <span>تم الإنشاء: {service.createdAt}</span>
                        <span>آخر تحديث: {service.updatedAt}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* Edit Modal */}
      <AnimatePresence>
        {editingService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-[#404544] rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#404544] dark:text-white">
                  {isCreating ? "إضافة خدمة جديدة" : "تحرير الخدمة"}
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setEditingService(null)
                    setIsCreating(false)
                  }}
                  className="p-2"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                      العنوان بالعربية *
                    </label>
                    <Input
                      value={editingService.arabicTitle}
                      onChange={e =>
                        setEditingService({
                          ...editingService,
                          arabicTitle: e.target.value
                        })
                      }
                      placeholder="العنوان بالعربية"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                      العنوان بالإنجليزية *
                    </label>
                    <Input
                      value={editingService.title}
                      onChange={e =>
                        setEditingService({
                          ...editingService,
                          title: e.target.value
                        })
                      }
                      placeholder="English Title"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                    الوصف *
                  </label>
                  <Textarea
                    value={editingService.description}
                    onChange={e =>
                      setEditingService({
                        ...editingService,
                        description: e.target.value
                      })
                    }
                    placeholder="وصف الخدمة..."
                    rows={3}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                      الأيقونة
                    </label>
                    <Select
                      value={editingService.icon}
                      onValueChange={value =>
                        setEditingService({ ...editingService, icon: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {iconOptions.map(option => (
                          <SelectItem key={option.value} value={option.value}>
                            <div className="flex items-center space-x-2">
                              <option.icon className="h-4 w-4" />
                              <span>{option.label}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                      اللون
                    </label>
                    <Select
                      value={editingService.color}
                      onValueChange={value => {
                        const colorOption = colorOptions.find(
                          option => option.value === value
                        )
                        setEditingService({
                          ...editingService,
                          color: value,
                          bgColor: colorOption?.bg || "bg-[#78C487]/10"
                        })
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {colorOptions.map(option => (
                          <SelectItem key={option.value} value={option.value}>
                            <div className="flex items-center space-x-2">
                              <div
                                className={`w-4 h-4 rounded-full ${option.bg}`}
                              ></div>
                              <span>{option.label}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                    المميزات (اضغط Enter لإضافة مميزة جديدة)
                  </label>
                  <div className="space-y-2">
                    {editingService.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Input
                          value={feature}
                          onChange={e => {
                            const newFeatures = [...editingService.features]
                            newFeatures[index] = e.target.value
                            setEditingService({
                              ...editingService,
                              features: newFeatures
                            })
                          }}
                          placeholder="مميزة الخدمة"
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            const newFeatures = editingService.features.filter(
                              (_, i) => i !== index
                            )
                            setEditingService({
                              ...editingService,
                              features: newFeatures
                            })
                          }}
                          className="p-2"
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      onClick={() =>
                        setEditingService({
                          ...editingService,
                          features: [...editingService.features, ""]
                        })
                      }
                      className="w-full"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      إضافة مميزة
                    </Button>
                  </div>
                </div>

                <div className="flex justify-end space-x-4 pt-4">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setEditingService(null)
                      setIsCreating(false)
                    }}
                  >
                    إلغاء
                  </Button>
                  <Button
                    onClick={() => handleSave(editingService)}
                    className="bg-[#78C487] hover:bg-[#78C487]/90 text-white"
                    disabled={
                      !editingService.arabicTitle ||
                      !editingService.title ||
                      !editingService.description
                    }
                  >
                    <Save className="h-4 w-4 mr-2" />
                    حفظ
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
