"use client"

import { useState } from "react"
import { AdminNavbar } from "@/components/pages/admin/admin-navbar"
import { ServicesManager } from "@/components/pages/admin/services-manager"
import { ProjectsManager } from "@/components/pages/admin/projects-manager"
import { MessagesManager } from "@/components/pages/admin/messages-manager"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart3,
  MessageSquare,
  Briefcase,
  Calendar,
  TrendingUp
} from "lucide-react"

const DashboardOverview = () => {
  const stats = [
    {
      title: "إجمالي المشاريع",
      value: "24",
      change: "+12%",
      icon: Briefcase,
      color: "text-[#78C487]"
    },
    {
      title: "الخدمات النشطة",
      value: "8",
      change: "+2",
      icon: BarChart3,
      color: "text-[#A5D5A9]"
    },
    {
      title: "الرسائل الجديدة",
      value: "15",
      change: "+5",
      icon: MessageSquare,
      color: "text-blue-500"
    },
    {
      title: "المواعيد هذا الأسبوع",
      value: "7",
      change: "+3",
      icon: Calendar,
      color: "text-purple-500"
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#404544] dark:text-white">
          لوحة التحكم
        </h1>
        <p className="text-[#404544]/70 dark:text-white/70">
          نظرة عامة على أداء الشركة
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#404544]/70 dark:text-white/70">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-[#404544] dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {stat.change}
                  </p>
                </div>
                <div className={`p-3 rounded-full bg-current/10 ${stat.color}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>المشاريع الحديثة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "نظام حجز المطعم الذكي",
                  status: "قيد التطوير",
                  progress: 75
                },
                {
                  name: "مساعد ذكي للتجارة الإلكترونية",
                  status: "مكتمل",
                  progress: 100
                },
                {
                  name: "نظام إدارة العيادة",
                  status: "قيد التطوير",
                  progress: 45
                }
              ].map((project, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-[#404544] dark:text-white">
                      {project.name}
                    </p>
                    <p className="text-sm text-[#404544]/70 dark:text-white/70">
                      {project.status}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-[#78C487]">
                      {project.progress}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>الرسائل الأخيرة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "أحمد محمد",
                  message: "أحتاج إلى نظام حجز لمطعمي",
                  time: "منذ ساعة"
                },
                {
                  name: "فاطمة علي",
                  message: "استفسار عن المساعد الذكي",
                  time: "منذ 3 ساعات"
                },
                {
                  name: "محمد السالم",
                  message: "طلب استشارة تقنية",
                  time: "أمس"
                }
              ].map((msg, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="w-8 h-8 bg-[#78C487] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">
                      {msg.name[0]}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-[#404544] dark:text-white text-sm">
                      {msg.name}
                    </p>
                    <p className="text-sm text-[#404544]/70 dark:text-white/70 line-clamp-1">
                      {msg.message}
                    </p>
                    <p className="text-xs text-[#404544]/50 dark:text-white/50 mt-1">
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview />
      case "services":
        return <ServicesManager />
      case "projects":
        return <ProjectsManager />
      case "messages":
        return <MessagesManager />
      default:
        return <DashboardOverview />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#171717] flex">
      <AdminNavbar onTabChange={setActiveTab} activeTab={activeTab} />
      <div className="flex-1 overflow-auto">
        <div className="p-6">{renderContent()}</div>
      </div>
    </div>
  )
}
