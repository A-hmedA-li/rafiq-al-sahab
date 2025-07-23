"use client"

import * as React from "react"
import { ChevronRight, ChevronLeft, CalendarIcon, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30"
]

const Calendar = React.forwardRef(
  (
    {
      selected,
      onSelect,
      view = "month",
      onViewChange,
      availableSlots = timeSlots,
      bookedSlots = [],
      className
    },
    ref
  ) => {
    const [currentDate, setCurrentDate] = React.useState(selected || new Date())
    const [selectedTime, setSelectedTime] = React.useState("")

    const today = new Date()
    const currentMonth = currentDate.getMonth()
    const currentYear = currentDate.getFullYear()

    const monthNames = [
      "يناير",
      "فبراير",
      "مارس",
      "أبريل",
      "مايو",
      "يونيو",
      "يوليو",
      "أغسطس",
      "سبتمبر",
      "أكتوبر",
      "نوفمبر",
      "ديسمبر"
    ]

    const dayNames = [
      "الأحد",
      "الاثنين",
      "الثلاثاء",
      "الأربعاء",
      "الخميس",
      "الجمعة",
      "السبت"
    ]
    const dayNamesShort = ["أح", "إث", "ثل", "أر", "خم", "جم", "سب"]

    const getDaysInMonth = date => {
      const year = date.getFullYear()
      const month = date.getMonth()
      const firstDay = new Date(year, month, 1)
      const lastDay = new Date(year, month + 1, 0)
      const daysInMonth = lastDay.getDate()
      const startingDayOfWeek = firstDay.getDay()

      const days = []

      // Previous month's days
      for (let i = startingDayOfWeek - 1; i >= 0; i--) {
        const prevDate = new Date(year, month, -i)
        days.push({ date: prevDate, isCurrentMonth: false })
      }

      // Current month's days
      for (let day = 1; day <= daysInMonth; day++) {
        days.push({ date: new Date(year, month, day), isCurrentMonth: true })
      }

      // Next month's days to fill the grid
      const remainingDays = 42 - days.length
      for (let day = 1; day <= remainingDays; day++) {
        days.push({
          date: new Date(year, month + 1, day),
          isCurrentMonth: false
        })
      }

      return days
    }

    const getWeekDays = date => {
      const startOfWeek = new Date(date)
      const day = startOfWeek.getDay()
      startOfWeek.setDate(startOfWeek.getDate() - day)

      const weekDays = []
      for (let i = 0; i < 7; i++) {
        const weekDay = new Date(startOfWeek)
        weekDay.setDate(startOfWeek.getDate() + i)
        weekDays.push(weekDay)
      }
      return weekDays
    }

    const getYearMonths = year => {
      return Array.from({ length: 12 }, (_, i) => new Date(year, i, 1))
    }

    const navigateDate = direction => {
      
      const newDate = new Date(currentDate)

      switch (view) {
        case "day":
          newDate.setDate(newDate.getDate() + (direction === "next" ? 1 : -1))
          break
        case "week":
          newDate.setDate(newDate.getDate() + (direction === "next" ? 7 : -7))
          break
        case "month":
          newDate.setMonth(newDate.getMonth() + (direction === "next" ? 1 : -1))
          break
        case "year":
          newDate.setFullYear(
            newDate.getFullYear() + (direction === "next" ? 1 : -1)
          )
          break
      }

      setCurrentDate(newDate)
    }

    const handleDateSelect = (date, time) => {
     
      if (time) {
        const [hours, minutes] = time.split(":").map(Number)
        const selectedDateTime = new Date(date)
        selectedDateTime.setHours(hours, minutes, 0, 0)
        onSelect?.(selectedDateTime)
        setSelectedTime(time)
      } else {
        onSelect?.(date)
        setCurrentDate(date)
      }
    }

    const isDateSelected = date => {
      if (!selected) return false
      return date.toDateString() === selected.toDateString()
    }

    const isDateToday = date => {
      return date.toDateString() === today.toDateString()
    }

    const formatDateHeader = () => {
      switch (view) {
        case "day":
          return `${dayNames[currentDate.getDay()]}، ${currentDate.getDate()} ${
            monthNames[currentDate.getMonth()]
          } ${currentDate.getFullYear()}`
        case "week":
          const weekStart = getWeekDays(currentDate)[0]
          const weekEnd = getWeekDays(currentDate)[6]
          return `${weekStart.getDate()} - ${weekEnd.getDate()} ${
            monthNames[currentDate.getMonth()]
          } ${currentDate.getFullYear()}`
        case "month":
          return `${
            monthNames[currentDate.getMonth()]
          } ${currentDate.getFullYear()}`
        case "year":
          return `${currentDate.getFullYear()}`
        default:
          return ""
      }
    }

    const renderDayView = () => (
      <div className="space-y-4">
        <div className="text-center p-4 bg-[#78C487]/5 rounded-2xl">
          <h3 className="text-lg font-semibold text-[#404544] dark:text-white mb-2">
            {dayNames[currentDate.getDay()]}
          </h3>
          <p className="text-3xl font-bold text-[#78C487]">
            {currentDate.getDate()}
          </p>
          <p className="text-sm text-[#404544]/70 dark:text-white/70">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
          {availableSlots.map(time => {
            const isBooked = bookedSlots.includes(time)
            const isSelected = selectedTime === time

            return (
              <button
                key={time}
                onClick={() => !isBooked && handleDateSelect(currentDate, time)}
                disabled={isBooked}
                className={cn(
                  "p-3 rounded-xl text-sm font-medium transition-all duration-200",
                  "hover:scale-105 active:scale-95",
                  isSelected
                    ? "bg-[#78C487] text-white shadow-lg"
                    : isBooked
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-800"
                    : "bg-[#78C487]/10 text-[#404544] hover:bg-[#78C487]/20 dark:text-white dark:bg-[#78C487]/20"
                )}
              >
                <Clock className="h-3 w-3 inline mr-1" />
                {time}
              </button>
            )
          })}
        </div>
      </div>
    )

    const renderWeekView = () => {
      const weekDays = getWeekDays(currentDate)

      return (
        <div className="space-y-4">
          <div className="grid grid-cols-7 gap-2">
            {weekDays.map((date, index) => (
              <div
                key={index}
                className={cn(
                  "text-center p-3 rounded-xl cursor-pointer transition-all duration-200",
                  "hover:bg-[#78C487]/10 hover:scale-105",
                  isDateSelected(date)
                    ? "bg-[#78C487] text-white shadow-lg"
                    : isDateToday(date)
                    ? "bg-[#A5D5A9]/20 text-[#78C487] font-semibold"
                    : "text-[#404544] dark:text-white"
                )}
                onClick={() => handleDateSelect(date)}
              >
                <div className="text-xs text-[#404544]/70 dark:text-white/70 mb-1">
                  {dayNamesShort[date.getDay()]}
                </div>
                <div className="text-lg font-semibold">{date.getDate()}</div>
              </div>
            ))}
          </div>
        </div>
      )
    }

    const renderMonthView = () => {
      const days = getDaysInMonth(currentDate)

      return (
        <div className="space-y-4">
          <div className="grid grid-cols-7 gap-1 mb-4">
            {dayNamesShort.map(day => (
              <div
                key={day}
                className="text-center text-sm font-medium text-[#404544]/70 dark:text-white/70 p-2"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {days.map((day, index) => (
              <button
                key={index}
                onClick={() => day.isCurrentMonth && handleDateSelect(day.date)}
                disabled={!day.isCurrentMonth}
                className={cn(
                  "aspect-square p-2 rounded-xl text-sm font-medium transition-all duration-200",
                  "hover:scale-105 active:scale-95",
                  !day.isCurrentMonth
                    ? "text-[#404544]/30 dark:text-white/30 cursor-not-allowed"
                    : isDateSelected(day.date)
                    ? "bg-[#78C487] text-white shadow-lg"
                    : isDateToday(day.date)
                    ? "bg-[#A5D5A9]/20 text-[#78C487] font-bold"
                    : "text-[#404544] hover:bg-[#78C487]/10 dark:text-white dark:hover:bg-[#78C487]/20"
                )}
              >
                {day.date.getDate()}
              </button>
            ))}
          </div>
        </div>
      )
    }

    const renderYearView = () => {
      const months = getYearMonths(currentYear)

      return (
        <div className="grid grid-cols-3 gap-4">
          {months.map((month, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentDate(month)
                onViewChange?.("month")
              }}
              className={cn(
                "p-4 rounded-xl text-center transition-all duration-200",
                "hover:bg-[#78C487]/10 hover:scale-105 active:scale-95",
                month.getMonth() === today.getMonth() &&
                  month.getFullYear() === today.getFullYear()
                  ? "bg-[#A5D5A9]/20 text-[#78C487] font-semibold"
                  : "text-[#404544] dark:text-white"
              )}
            >
              <div className="text-lg font-semibold mb-1">
                {monthNames[month.getMonth()]}
              </div>
              <div className="text-xs text-[#404544]/70 dark:text-white/70">
                {month.getFullYear()}
              </div>
            </button>
          ))}
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(
          "p-6 bg-white dark:bg-[#404544] rounded-3xl shadow-lg",
          className
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateDate("prev")}
              className="h-10 w-10 p-0 rounded-full hover:bg-[#78C487]/10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            <h2 className="text-xl font-bold text-[#404544] dark:text-white min-w-[200px] text-center">
              {formatDateHeader()}
            </h2>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateDate("next")}
              className="h-10 w-10 p-0 rounded-full hover:bg-[#78C487]/10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>

          {/* View Switcher */}
          <div className="flex bg-[#78C487]/10 rounded-full p-1">
            {["day", "week", "month", "year"].map(viewType => (
              <button
                key={viewType}
                onClick={() => onViewChange?.(viewType)}
                className={cn(
                  "px-3 py-1 rounded-full text-sm font-medium transition-all duration-200",
                  view === viewType
                    ? "bg-[#78C487] text-white shadow-sm"
                    : "text-[#404544] hover:bg-[#78C487]/20 dark:text-white"
                )}
              >
                {viewType === "day" && "يوم"}
                {viewType === "week" && "أسبوع"}
                {viewType === "month" && "شهر"}
                {viewType === "year" && "سنة"}
              </button>
            ))}
          </div>
        </div>

        {/* Calendar Content */}
        <div className="min-h-[300px]">
          {view === "day" && renderDayView()}
          {view === "week" && renderWeekView()}
          {view === "month" && renderMonthView()}
          {view === "year" && renderYearView()}
        </div>

        {/* Selected Date Info */}
        {selected && (
          <div className="mt-6 p-4 bg-[#78C487]/5 rounded-2xl">
            <div className="flex items-center justify-center space-x-2 text-[#404544] dark:text-white">
              <CalendarIcon className="h-4 w-4 text-[#78C487]" />
              <span className="font-medium">
                الموعد المحدد:{" "}
                {selected.toLocaleDateString("ar-AE", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit"
                })}
              </span>
            </div>
          </div>
        )}
      </div>
    )
  }
)

Calendar.displayName = "Calendar"


export {Calendar}