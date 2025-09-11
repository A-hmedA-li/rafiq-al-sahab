"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Settings,
  Users,
  MessageSquare,
  Briefcase,
  Calendar,
  BarChart3,
  Bell,
  Search,
  Menu,
  X,
  LogOut,
  Shield,
  Cloud,
  ChevronDown
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSession , signOut} from "next-auth/react"

const adminNavItems = [
  {
    id: "dashboard",
    label: "لوحة التحكم",
    icon: BarChart3,
    href: "/admin"
  },
  {
    id: "services",
    label: "إدارة الخدمات",
    icon: Settings,
    href: "/admin/services"
  },
  {
    id: "projects",
    label: "إدارة المشاريع",
    icon: Briefcase,
    href: "/admin/projects"
  },
  {
    id: "messages",
    label: "الرسائل",
    icon: MessageSquare,
    href: "/admin/messages",
    badge: 5
  },
  {
    id: "bookings",
    label: "المواعيد",
    icon: Calendar,
    href: "/admin/bookings",
    badge: 3
  },
  {
    id: "users",
    label: "المستخدمين",
    icon: Users,
    href: "/admin/users",
    subItems: [
      {
        id: "all-users",
        label: "جميع المستخدمين",
        icon: Users,
        href: "/admin/users/all"
      },
      {
        id: "admins",
        label: "المديرين",
        icon: Shield,
        href: "/admin/users/admins"
      }
    ]
  }
]
const profile = {
  id:'user'
}

export function AdminNavbar({ onTabChange, activeTab }) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState([])
  const pathname = usePathname()
  const session = useSession() ;


  const toggleExpanded = itemId => {
    setExpandedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  const handleItemClick = item => {
    if (item.subItems) {
      toggleExpanded(item.id)
    } else {
      onTabChange(item.id)
      setIsMobileOpen(false)
    }
  }

  const NavItem = ({ item, level = 0 }) => {
    const isActive = activeTab === item.id
    const isExpanded = expandedItems.includes(item.id)
    const hasSubItems = item.subItems && item.subItems.length > 0

    return (
      <div>
        <motion.button
          onClick={() => handleItemClick(item)}
          className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 group ${
            level > 0 ? "ml-4" : ""
          } ${
            isActive
              ? "bg-[#78C487] text-white shadow-lg"
              : "text-[#404544] dark:text-white hover:bg-[#78C487]/10 dark:hover:bg-[#78C487]/20"
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center space-x-3">
            <item.icon
              className={`h-5 w-5 ${
                isActive ? "text-white" : "text-[#78C487]"
              }`}
            />
            {!isCollapsed && (
              <span className="font-medium text-sm">{item.label}</span>
            )}
            {!isCollapsed && item.badge && (
              <Badge className="bg-red-500 text-white text-xs px-2 py-1">
                {item.badge}
              </Badge>
            )}
          </div>
          {!isCollapsed && hasSubItems && (
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                isExpanded ? "rotate-180" : ""
              } ${isActive ? "text-white" : "text-[#404544] dark:text-white"}`}
            />
          )}
        </motion.button>

        {/* Sub Items */}
        <AnimatePresence>
          {!isCollapsed && hasSubItems && isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 space-y-1"
            >
              {item.subItems?.map(subItem => (
                <NavItem key={subItem.id} item={subItem} level={level + 1} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.div
        className={`hidden lg:flex flex-col bg-white dark:bg-[#404544] border-r border-[#A5D5A9]/20 transition-all duration-300 ${
          isCollapsed ? "w-20" : "w-72"
        }`}
        initial={false}
        animate={{ width: isCollapsed ? 80 : 288 }}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#A5D5A9]/20">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-2 bg-[#78C487] rounded-full"
              >
                <Cloud className="h-6 w-6 text-white" />
              </motion.div>
              {!isCollapsed && (
                <div>
                  <span className="text-lg font-bold text-[#404544] dark:text-white">
                    رفيق السحاب
                  </span>
                  <p className="text-xs text-[#404544]/70 dark:text-white/70">
                    لوحة الإدارة
                  </p>
                </div>
              )}
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>

          {/* Search */}
          {!isCollapsed && (
            <div className="mt-4 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#404544]/50 dark:text-white/50" />
              <Input
                placeholder="البحث..."
                className="pl-10 border-[#A5D5A9]/30 focus:border-[#78C487]"
              />
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4 space-y-2 overflow-y-auto">
          {adminNavItems.map(item => (
            <NavItem key={item.id} item={item} />
          ))}
        </div>

        {/* Footer */}
        <button onClick={()=>handleItemClick(profile)} className="hover:bg-[#A5D5A9]/40">
        <div className="p-4 border-t border-[#A5D5A9]/20">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
            
                  <div className="flex items-center space-x-3">

                    {
                      session.data?.user?.image? 
                        <img src={session.data.user.image} className="rounded-full w-10"/>
                      :

                    <div className="w-8 h-8 bg-[#78C487] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">ن</span>
                    </div>

                    } 
                    <div>
                    
                        <p className="text-sm font-medium text-[#404544] dark:text-white">
                          {session.data?.user?.name}
                        </p>
                        <p className="text-xs text-[#404544]/70 dark:text-white/70">
                          مدير النظام
                        </p>
                      
                    </div>
                  </div>
            
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={()=>{signOut()}}
              className="p-2 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
            >
              <LogOut className="h-4 w-4" />
            </Button>
            
          </div>
        </div>
        </button>
      </motion.div>

      {/* Mobile Header */}
      <div className="lg:hidden bg-white dark:bg-[#404544] border-b border-[#A5D5A9]/20 p-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="p-2 bg-[#78C487] rounded-full">
              <Cloud className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold text-[#404544] dark:text-white">
              رفيق السحاب
            </span>
          </Link>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="p-2">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1">
                3
              </Badge>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2"
            >
              {isMobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            className="lg:hidden fixed inset-y-0 left-0 z-50 w-72 bg-white dark:bg-[#404544] border-r border-[#A5D5A9]/20 shadow-xl"
          >
            <div className="p-4 space-y-2 overflow-y-auto h-full">
              {adminNavItems.map(item => (
                <NavItem key={item.id} item={item} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  )
}
