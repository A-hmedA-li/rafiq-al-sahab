"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  ExternalLink,
  Calendar,
  Eye,
  EyeOff,
  Star,
  Upload
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

const categoryOptions = [
  { value: "booking", label: "أنظمة الحجز" },
  { value: "ai-agent", label: "المساعد الذكي" },
  { value: "messaging", label: "الرسائل" },
  { value: "personalization", label: "التخصيص" },
  { value: "ecommerce", label: "التجارة الإلكترونية" },
  { value: "healthcare", label: "الرعاية الصحية" }
]

const techOptions = [
  "Next.js",
  "React",
  "AI",
  "WhatsApp API",
  "Telegram Bot",
  "Calendar Integration",
  "SMS Integration",
  "Machine Learning",
  "CRM Integration",
  "Analytics",
  "Payment Integration",
  "Mobile App",
  "Node.js",
  "Python",
  "TypeScript"
]

const initialProjects = [
  {
    id: "1",
    title: "Smart Restaurant Booking System",
    arabicTitle: "نظام حجز ذكي للمطاعم",
    description: "نظام حجز متطور مع تكامل WhatsApp وإدارة المواعيد التلقائية",
    image: "/placeholder.svg?height=300&width=400",
    category: "booking",
    tech: ["Next.js", "AI", "WhatsApp API", "Calendar Integration"],
    date: "2024-01",
    link: "https://example.com",
    featured: true,
    isActive: true,
    createdAt: "2024-01-15",
    updatedAt: "2024-01-20"
  },
  {
    id: "2",
    title: "E-commerce AI Assistant",
    arabicTitle: "مساعد ذكي للتجارة الإلكترونية",
    description:
      "مساعد ذكي يساعد العملاء في اختيار المنتجات ويزيد المبيعات بنسبة 40%",
    image: "/placeholder.svg?height=300&width=400",
    category: "ai-agent",
    tech: ["AI Agent", "Machine Learning", "CRM Integration", "Analytics"],
    date: "2024-02",
    link: "https://example.com",
    featured: true,
    isActive: true,
    createdAt: "2024-01-10",
    updatedAt: "2024-01-18"
  }
]

export function ProjectsManager() {
  const [projects, setProjects] = useState(initialProjects)
  const [editingProject, setEditingProject] = useState(null)
  const [isCreating, setIsCreating] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")

  const filteredProjects = projects.filter(project => {
    const matchesSearch =
      project.arabicTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory =
      filterCategory === "all" || project.category === filterCategory
    return matchesSearch && matchesCategory
  })

  const handleCreate = () => {
    const newProject = {
      id: Date.now().toString(),
      title: "",
      arabicTitle: "",
      description: "",
      image: "/placeholder.svg?height=300&width=400",
      category: "booking",
      tech: [],
      date: new Date()
        .toISOString()
        .split("T")[0]
        .substring(0, 7),
      link: "",
      featured: false,
      isActive: true,
      createdAt: new Date().toISOString().split("T")[0],
      updatedAt: new Date().toISOString().split("T")[0]
    }
    setEditingProject(newProject)
    setIsCreating(true)
  }

  const handleSave = project => {
    if (isCreating) {
      setProjects([...projects, project])
      setIsCreating(false)
    } else {
      setProjects(
        projects.map(p =>
          p.id === project.id
            ? { ...project, updatedAt: new Date().toISOString().split("T")[0] }
            : p
        )
      )
    }
    setEditingProject(null)
  }

  const handleDelete = id => {
    setProjects(projects.filter(p => p.id !== id))
  }

  const toggleActive = id => {
    setProjects(
      projects.map(p =>
        p.id === id
          ? {
              ...p,
              isActive: !p.isActive,
              updatedAt: new Date().toISOString().split("T")[0]
            }
          : p
      )
    )
  }

  const toggleFeatured = id => {
    setProjects(
      projects.map(p =>
        p.id === id
          ? {
              ...p,
              featured: !p.featured,
              updatedAt: new Date().toISOString().split("T")[0]
            }
          : p
      )
    )
  }

  const getCategoryLabel = category => {
    return (
      categoryOptions.find(option => option.value === category)?.label ||
      category
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#404544] dark:text-white">
            إدارة المشاريع
          </h1>
          <p className="text-[#404544]/70 dark:text-white/70">
            إدارة وتحرير مشاريع الشركة
          </p>
        </div>
        <Button
          onClick={handleCreate}
          className="bg-[#78C487] hover:bg-[#78C487]/90 text-white"
        >
          <Plus className="h-4 w-4 mr-2" />
          إضافة مشروع جديد
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="البحث في المشاريع..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="max-w-md"
            />
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="max-w-xs">
                <SelectValue placeholder="تصفية حسب الفئة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الفئات</SelectItem>
                {categoryOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              layout
            >
              <Card
                className={`h-full hover:shadow-lg transition-all duration-300 ${
                  !project.isActive ? "opacity-60" : ""
                }`}
              >
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.arabicTitle}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 right-2 flex space-x-1">
                    {project.featured && (
                      <Badge className="bg-[#78C487] text-white">
                        <Star className="h-3 w-3 mr-1" />
                        مميز
                      </Badge>
                    )}
                    <Badge variant="secondary">
                      {getCategoryLabel(project.category)}
                    </Badge>
                  </div>
                  <div className="absolute top-2 left-2 flex space-x-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleActive(project.id)}
                      className="p-1 bg-white/80 hover:bg-white"
                    >
                      {project.isActive ? (
                        <Eye className="h-4 w-4 text-green-500" />
                      ) : (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleFeatured(project.id)}
                      className="p-1 bg-white/80 hover:bg-white"
                    >
                      <Star
                        className={`h-4 w-4 ${
                          project.featured
                            ? "text-yellow-500 fill-current"
                            : "text-gray-400"
                        }`}
                      />
                    </Button>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg font-semibold text-[#404544] dark:text-white line-clamp-2">
                      {project.arabicTitle}
                    </CardTitle>
                    <div className="flex items-center space-x-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setEditingProject(project)}
                        className="p-1"
                      >
                        <Edit className="h-4 w-4 text-blue-500" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(project.id)}
                        className="p-1"
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-[#404544]/70 dark:text-white/70 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-medium text-[#404544]/60 dark:text-white/60 mb-2">
                        التقنيات المستخدمة
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.slice(0, 3).map((tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.tech.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-[#404544]/60 dark:text-white/60">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(project.date).toLocaleDateString("ar-AE", {
                          year: "numeric",
                          month: "long"
                        })}
                      </div>
                      {project.link && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-1"
                          asChild
                        >
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 text-[#78C487]" />
                          </a>
                        </Button>
                      )}
                    </div>

                    <div className="flex justify-between text-xs text-[#404544]/50 dark:text-white/50">
                      <span>تم الإنشاء: {project.createdAt}</span>
                      <span>آخر تحديث: {project.updatedAt}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Edit Modal */}
      <AnimatePresence>
        {editingProject && (
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
              className="bg-white dark:bg-[#404544] rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#404544] dark:text-white">
                  {isCreating ? "إضافة مشروع جديد" : "تحرير المشروع"}
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setEditingProject(null)
                    setIsCreating(false)
                  }}
                  className="p-2"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                        العنوان بالعربية *
                      </label>
                      <Input
                        value={editingProject.arabicTitle}
                        onChange={e =>
                          setEditingProject({
                            ...editingProject,
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
                        value={editingProject.title}
                        onChange={e =>
                          setEditingProject({
                            ...editingProject,
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
                      value={editingProject.description}
                      onChange={e =>
                        setEditingProject({
                          ...editingProject,
                          description: e.target.value
                        })
                      }
                      placeholder="وصف المشروع..."
                      rows={4}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                        الفئة *
                      </label>
                      <Select
                        value={editingProject.category}
                        onValueChange={value =>
                          setEditingProject({
                            ...editingProject,
                            category: value
                          })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {categoryOptions.map(option => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                        تاريخ المشروع
                      </label>
                      <Input
                        type="month"
                        value={editingProject.date}
                        onChange={e =>
                          setEditingProject({
                            ...editingProject,
                            date: e.target.value
                          })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                      رابط المشروع
                    </label>
                    <Input
                      value={editingProject.link || ""}
                      onChange={e =>
                        setEditingProject({
                          ...editingProject,
                          link: e.target.value
                        })
                      }
                      placeholder="https://example.com"
                    />
                  </div>

                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={editingProject.featured}
                        onChange={e =>
                          setEditingProject({
                            ...editingProject,
                            featured: e.target.checked
                          })
                        }
                        className="rounded border-gray-300"
                      />
                      <span className="text-sm text-[#404544] dark:text-white">
                        مشروع مميز
                      </span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={editingProject.isActive}
                        onChange={e =>
                          setEditingProject({
                            ...editingProject,
                            isActive: e.target.checked
                          })
                        }
                        className="rounded border-gray-300"
                      />
                      <span className="text-sm text-[#404544] dark:text-white">
                        نشط
                      </span>
                    </label>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                      صورة المشروع
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                      <Image
                        src={editingProject.image || "/placeholder.svg"}
                        alt="Project preview"
                        width={300}
                        height={200}
                        className="w-full h-40 object-cover rounded-lg mb-4"
                      />
                      <Button variant="outline" className="mb-2 bg-transparent">
                        <Upload className="h-4 w-4 mr-2" />
                        رفع صورة جديدة
                      </Button>
                      <p className="text-xs text-[#404544]/60 dark:text-white/60">
                        PNG, JPG, GIF حتى 10MB
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
                      التقنيات المستخدمة
                    </label>
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-2 p-3 border rounded-lg min-h-[100px]">
                        {editingProject.tech.map((tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="cursor-pointer hover:bg-red-100 hover:text-red-600"
                            onClick={() => {
                              const newTech = editingProject.tech.filter(
                                (_, i) => i !== index
                              )
                              setEditingProject({
                                ...editingProject,
                                tech: newTech
                              })
                            }}
                          >
                            {tech} ×
                          </Badge>
                        ))}
                      </div>
                      <Select
                        onValueChange={value => {
                          if (!editingProject.tech.includes(value)) {
                            setEditingProject({
                              ...editingProject,
                              tech: [...editingProject.tech, value]
                            })
                          }
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="إضافة تقنية" />
                        </SelectTrigger>
                        <SelectContent>
                          {techOptions
                            .filter(tech => !editingProject.tech.includes(tech))
                            .map(tech => (
                              <SelectItem key={tech} value={tech}>
                                {tech}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-4 pt-6 mt-6 border-t">
                <Button
                  variant="outline"
                  onClick={() => {
                    setEditingProject(null)
                    setIsCreating(false)
                  }}
                >
                  إلغاء
                </Button>
                <Button
                  onClick={() => handleSave(editingProject)}
                  className="bg-[#78C487] hover:bg-[#78C487]/90 text-white"
                  disabled={
                    !editingProject.arabicTitle ||
                    !editingProject.title ||
                    !editingProject.description
                  }
                >
                  <Save className="h-4 w-4 mr-2" />
                  حفظ
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
