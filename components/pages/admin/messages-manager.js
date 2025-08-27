"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Mail,
  Phone,
  Calendar,
  MessageSquare,
  Star,
  Archive,
  Trash2,
  Reply,
  Forward,
  Search,
  Clock,
  CheckCircle,
  AlertCircle
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

const initialMessages = [
  {
    id: "1",
    name: "أحمد محمد",
    email: "ahmed@example.com",
    phone: "+971501234567",
    service: "نظام الحجز الإلكتروني والإدارة",
    message:
      "أحتاج إلى نظام حجز لمطعمي الجديد. هل يمكنكم مساعدتي في تطوير نظام يدعم الحجز عبر WhatsApp؟",
    status: "new",
    priority: "high",
    createdAt: "2024-01-20T10:30:00Z",
    updatedAt: "2024-01-20T10:30:00Z",
    isStarred: true,
    tags: ["مطعم", "حجز", "whatsapp"]
  },
  {
    id: "2",
    name: "فاطمة علي",
    email: "fatima@example.com",
    phone: "+971507654321",
    service: "المساعد الذكي المخصص وأنظمة الأتمتة",
    message:
      "أريد تطوير مساعد ذكي لمتجري الإلكتروني لمساعدة العملاء في اختيار المنتجات المناسبة.",
    status: "read",
    priority: "medium",
    createdAt: "2024-01-19T14:15:00Z",
    updatedAt: "2024-01-19T16:20:00Z",
    isStarred: false,
    tags: ["متجر إلكتروني", "ذكاء اصطناعي"]
  },
  {
    id: "3",
    name: "محمد السالم",
    email: "mohammed@example.com",
    service: "استشارة عامة",
    message:
      "أحتاج إلى استشارة حول أفضل الحلول التقنية لشركتي الناشئة في مجال الخدمات اللوجستية.",
    status: "replied",
    priority: "low",
    createdAt: "2024-01-18T09:45:00Z",
    updatedAt: "2024-01-18T11:30:00Z",
    isStarred: false,
    tags: ["استشارة", "شركة ناشئة", "لوجستية"]
  },
  {
    id: "4",
    name: "سارة أحمد",
    email: "sara@example.com",
    phone: "+971509876543",
    service: "تكامل الرسائل الجماعية",
    message:
      "أحتاج إلى ربط نظام CRM الخاص بي مع WhatsApp و Telegram لإرسال رسائل تسويقية مخصصة.",
    status: "new",
    priority: "medium",
    createdAt: "2024-01-20T08:20:00Z",
    updatedAt: "2024-01-20T08:20:00Z",
    isStarred: false,
    tags: ["CRM", "تسويق", "رسائل جماعية"]
  },
  {
    id: "5",
    name: "خالد الزهراني",
    email: "khalid@example.com",
    phone: "+971502468135",
    service: "التخصيص بالذكاء الاصطناعي",
    message:
      "أريد تطوير نظام توصيات ذكي لموقعي الإلكتروني لزيادة معدلات التحويل والمبيعات.",
    status: "archived",
    priority: "high",
    createdAt: "2024-01-17T16:00:00Z",
    updatedAt: "2024-01-17T18:45:00Z",
    isStarred: true,
    tags: ["توصيات", "تحويل", "مبيعات"]
  }
]

const statusOptions = [
  { value: "all", label: "جميع الرسائل", color: "bg-gray-100" },
  { value: "new", label: "جديدة", color: "bg-blue-100 text-blue-800" },
  { value: "read", label: "مقروءة", color: "bg-yellow-100 text-yellow-800" },
  { value: "replied", label: "تم الرد", color: "bg-green-100 text-green-800" },
  { value: "archived", label: "مؤرشفة", color: "bg-gray-100 text-gray-800" }
]

const priorityOptions = [
  { value: "all", label: "جميع الأولويات" },
  { value: "high", label: "عالية", color: "text-red-600" },
  { value: "medium", label: "متوسطة", color: "text-yellow-600" },
  { value: "low", label: "منخفضة", color: "text-green-600" }
]

export function MessagesManager() {
  const [messages, setMessages] = useState(initialMessages)
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")
  const [replyText, setReplyText] = useState("")

  const filteredMessages = messages.filter(message => {
    const matchesSearch =
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message
    message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.message.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus =
      statusFilter === "all" || message.status === statusFilter
    const matchesPriority =
      priorityFilter === "all" || message.priority === priorityFilter
    return matchesSearch && matchesStatus && matchesPriority
  })

  const handleStatusChange = (messageId, newStatus) => {
    setMessages(
      messages.map(msg =>
        msg.id === messageId
          ? { ...msg, status: newStatus, updatedAt: new Date().toISOString() }
          : msg
      )
    )
  }

  const handleStarToggle = messageId => {
    setMessages(
      messages.map(msg =>
        msg.id === messageId
          ? {
              ...msg,
              isStarred: !msg.isStarred,
              updatedAt: new Date().toISOString()
            }
          : msg
      )
    )
  }

  const handleDelete = messageId => {
    setMessages(messages.filter(msg => msg.id !== messageId))
    if (selectedMessage?.id === messageId) {
      setSelectedMessage(null)
    }
  }

  const handleReply = () => {
    if (selectedMessage && replyText.trim()) {
      handleStatusChange(selectedMessage.id, "replied")
      setReplyText("")
      // Here you would typically send the reply via email
      console.log("Reply sent:", replyText)
    }
  }

  const getStatusBadge = status => {
    const statusOption = statusOptions.find(option => option.value === status)
    return statusOption ? statusOption : statusOptions[0]
  }

  const getPriorityIcon = priority => {
    switch (priority) {
      case "high":
        return <AlertCircle className="h-4 w-4 text-red-500" />
      case "medium":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "low":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      default:
        return null
    }
  }

  const formatDate = dateString => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60)

    if (diffInHours < 24) {
      return date.toLocaleTimeString("ar-AE", {
        hour: "2-digit",
        minute: "2-digit"
      })
    } else if (diffInHours < 48) {
      return "أمس"
    } else {
      return date.toLocaleDateString("ar-AE", {
        month: "short",
        day: "numeric"
      })
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#404544] dark:text-white">
            إدارة الرسائل
          </h1>
          <p className="text-[#404544]/70 dark:text-white/70">
            إدارة رسائل العملاء والاستفسارات ({filteredMessages.length} رسالة)
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="bg-blue-100 text-blue-800">
            {messages.filter(m => m.status === "new").length} جديدة
          </Badge>
          <Badge className="bg-yellow-100 text-yellow-800">
            {messages.filter(m => m.status === "read").length} مقروءة
          </Badge>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#404544]/50 dark:text-white/50" />
                <Input
                  placeholder="البحث في الرسائل..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="تصفية حسب الحالة" />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="تصفية حسب الأولوية" />
              </SelectTrigger>
              <SelectContent>
                {priorityOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Messages List */}
        <div className="lg:col-span-1 space-y-3 max-h-[600px] overflow-y-auto">
          <AnimatePresence>
            {filteredMessages.map(message => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                layout
              >
                <Card
                  className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                    selectedMessage?.id === message.id
                      ? "ring-2 ring-[#78C487] bg-[#78C487]/5"
                      : message.status === "new"
                      ? "bg-blue-50 dark:bg-blue-900/20"
                      : ""
                  }`}
                  onClick={() => {
                    setSelectedMessage(message)
                    if (message.status === "new") {
                      handleStatusChange(message.id, "read")
                    }
                  }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-[#404544] dark:text-white text-sm">
                          {message.name}
                        </h3>
                        {getPriorityIcon(message.priority)}
                        {message.isStarred && (
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        )}
                      </div>
                      <span className="text-xs text-[#404544]/60 dark:text-white/60">
                        {formatDate(message.createdAt)}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2 mb-2">
                      <Mail className="h-3 w-3 text-[#404544]/50 dark:text-white/50" />
                      <span className="text-xs text-[#404544]/70 dark:text-white/70 truncate">
                        {message.email}
                      </span>
                    </div>

                    {message.phone && (
                      <div className="flex items-center space-x-2 mb-2">
                        <Phone className="h-3 w-3 text-[#404544]/50 dark:text-white/50" />
                        <span className="text-xs text-[#404544]/70 dark:text-white/70">
                          {message.phone}
                        </span>
                      </div>
                    )}

                    <p className="text-sm text-[#404544]/80 dark:text-white/80 line-clamp-2 mb-3">
                      {message.message}
                    </p>

                    <div className="flex items-center justify-between">
                      <Badge className={getStatusBadge(message.status).color}>
                        {getStatusBadge(message.status).label}
                      </Badge>
                      {message.service && (
                        <span className="text-xs text-[#78C487] font-medium truncate max-w-[120px]">
                          {message.service}
                        </span>
                      )}
                    </div>

                    {message.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {message.tags.slice(0, 2).map((tag, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {message.tags.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{message.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredMessages.length === 0 && (
            <div className="text-center py-8">
              <MessageSquare className="h-12 w-12 text-[#404544]/30 dark:text-white/30 mx-auto mb-4" />
              <p className="text-[#404544]/70 dark:text-white/70">
                لا توجد رسائل تطابق البحث
              </p>
            </div>
          )}
        </div>

        {/* Message Detail */}
        <div className="lg:col-span-2">
          {selectedMessage ? (
            <Card className="h-full">
              <CardHeader className="border-b">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-[#404544] dark:text-white">
                      {selectedMessage.name}
                    </CardTitle>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-[#404544]/70 dark:text-white/70">
                      <div className="flex items-center space-x-1">
                        <Mail className="h-4 w-4" />
                        <span>{selectedMessage.email}</span>
                      </div>
                      {selectedMessage.phone && (
                        <div className="flex items-center space-x-1">
                          <Phone className="h-4 w-4" />
                          <span>{selectedMessage.phone}</span>
                        </div>
                      )}
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(
                            selectedMessage.createdAt
                          ).toLocaleDateString("ar-AE", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit"
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleStarToggle(selectedMessage.id)}
                      className="p-2"
                    >
                      <Star
                        className={`h-4 w-4 ${
                          selectedMessage.isStarred
                            ? "text-yellow-500 fill-current"
                            : "text-gray-400"
                        }`}
                      />
                    </Button>
                    <Select
                      value={selectedMessage.status}
                      onValueChange={value =>
                        handleStatusChange(selectedMessage.id, value)
                      }
                    >
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {statusOptions.slice(1).map(option => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(selectedMessage.id)}
                      className="p-2 text-red-500 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* Message Content */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-[#404544] dark:text-white">
                        محتوى الرسالة
                      </h3>
                      <div className="flex items-center space-x-2">
                        {getPriorityIcon(selectedMessage.priority)}
                        <Badge
                          className={
                            getStatusBadge(selectedMessage.status).color
                          }
                        >
                          {getStatusBadge(selectedMessage.status).label}
                        </Badge>
                      </div>
                    </div>
                    <div className="bg-[#78C487]/5 p-4 rounded-lg">
                      <p className="text-[#404544] dark:text-white leading-relaxed whitespace-pre-wrap">
                        {selectedMessage.message}
                      </p>
                    </div>
                  </div>

                  {/* Service & Tags */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedMessage.service && (
                      <div>
                        <h4 className="text-sm font-medium text-[#404544] dark:text-white mb-2">
                          الخدمة المطلوبة
                        </h4>
                        <Badge className="bg-[#78C487]/10 text-[#78C487]">
                          {selectedMessage.service}
                        </Badge>
                      </div>
                    )}
                    {selectedMessage.tags.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-[#404544] dark:text-white mb-2">
                          العلامات
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedMessage.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Reply Section */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-[#404544] dark:text-white mb-4">
                      الرد على الرسالة
                    </h3>
                    <div className="space-y-4">
                      <Textarea
                        value={replyText}
                        onChange={e => setReplyText(e.target.value)}
                        placeholder="اكتب ردك هنا..."
                        rows={4}
                        className="border-[#A5D5A9]/30 focus:border-[#78C487]"
                      />
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Forward className="h-4 w-4 mr-2" />
                            إعادة توجيه
                          </Button>
                          <Button variant="outline" size="sm">
                            <Archive className="h-4 w-4 mr-2" />
                            أرشفة
                          </Button>
                        </div>
                        <Button
                          onClick={handleReply}
                          disabled={!replyText.trim()}
                          className="bg-[#78C487] hover:bg-[#78C487]/90 text-white"
                        >
                          <Reply className="h-4 w-4 mr-2" />
                          إرسال الرد
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="h-full flex items-center justify-center">
              <CardContent className="text-center">
                <MessageSquare className="h-16 w-16 text-[#404544]/30 dark:text-white/30 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#404544] dark:text-white mb-2">
                  اختر رسالة لعرضها
                </h3>
                <p className="text-[#404544]/70 dark:text-white/70">
                  انقر على أي رسالة من القائمة لعرض تفاصيلها والرد عليها
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
