"use client"
import {  useState } from "react"
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
  EyeOff,
  ImageIcon, Upload,
  CheckCheck,
  Check
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
import { CreateORUpdateService, deleteService , } from "@/server/services"
import Error from "@/components/ui/error"


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




export function ServicesManager({servicesGot}) {

 

  let ren = [] ; 
  for (let i in servicesGot){
    ren.push(servicesGot[i]); 
  }

  const [services, setServices] = useState(ren)
  const [editingService, setEditingService] = useState(null)
  const [isCreating, setIsCreating] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [displayError , setDisplayerror  ] = useState(false)
  const [errorMessage , setErrorMessage ] = useState('ولله Error يا غالي')

  const filteredServices = services.filter(
    service =>
      service.arabicTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  const handleCreate = () => {
    const newService = {
     
      title: "",
      arabicTitle: "",
      description: "",
      features: [],
      icon: "Calendar",
      color: "text-[#78C487]",
      bgColor: "bg-[#78C487]/10",
      isActive: true,
      isOnMainPage: false, 
      createdAt: new Date(),
      updatedAt: new Date(),
      image:'/images/lg.png' , 
    }

   
    setEditingService(newService)
    setIsCreating(true)
  }

  const handleSave = async service => {
    if (service['id'])
      service.id = parseInt(service.id)


    const res = await CreateORUpdateService(service); 

    if (!res.success){
      setDisplayerror(true)
      console.error(res);

      return
      }
    if (isCreating) {
      setServices([...services, service])
      setIsCreating(false)
    } else {
      setServices(
        services.map(s =>
          s.id === service.id
            ? { ...service, updatedAt: new Date()}
            : s
        )
      )
    }
    setEditingService(null)
  }

  const handleDelete = async id => {
    try{
      const res = await deleteService(parseInt(id)); 
   
    }
    catch(e){
      setDisplayerror(true)
      console.error(e) ; 

      return 
    }
    setServices(services.filter(s => s.id !== id))
  }

  const toggleActive = async id => {
    let updated ; 
     services.map(s =>{
            if (s.id === id){
              updated =  {
                  ...s,
                  isActive: !s.isActive,
                  updatedAt: new Date()
                }

                return updated ; 
              }
            else
            return s 
        }
      )
     
      const res = await CreateORUpdateService(updated) ; 
      
      if (!res.success){
        setDisplayerror(true) ;
        setErrorMessage("Error in toggling active state") 
        return ; 
      }

    setServices(services.map(s =>{
            if (s.id === id){
              updated =  {
                  ...s,
                  isActive: !s.isActive,
                  updatedAt: new Date()
                }

                return updated ; 
              }
            else
            return s 
        }
      ))
    

    
  }

  const toggleCheck = async id => {
    let updated ; 
     services.map(s =>{
            if (s.id === id){
              updated =  {
                  ...s,
                  isOnMainPage: !s.isOnMainPage,
                  updatedAt: new Date()
                }

                return updated ; 
              }
            else
            return s 
        }
      )
     
      const res = await CreateORUpdateService(updated) ; 
      
      if (!res.success){
        setDisplayerror(true) ;
        setErrorMessage("Error in toggling active state") 
        return ; 
      }

    setServices(services.map(s =>{
            if (s.id === id){
              updated =  {
                  ...s,
                  isOnMainPage: !s.isOnMainPage,
                  updatedAt: new Date()
                }

                return updated ; 
              }
            else
            return s 
        }
      ))
    

    
  }

  const getIconComponent = iconName => {
    const iconOption = iconOptions.find(option => option.value === iconName)
    return iconOption ? iconOption.icon : Calendar
  }

  return (
    <div className="space-y-6">

      <Error showError={displayError} errorMessage={errorMessage} />

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
                          onClick={() => toggleCheck(service.id)}
                          className="p-1"
                        >
                          {service.isOnMainPage ? (
                            <CheckCheck className="h-4 w-4 text-green-500" />
                          ) : (
                            <Check className="h-4 w-4 text-gray-400" />
                          )}
                        </Button>
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
                        <span>تم الإنشاء: {service.createdAt.toLocaleDateString("ar-AE", {
                          
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit"
                        })}</span>
                        <span>آخر تحديث: {service.updatedAt.toLocaleDateString("ar-AE", {
                          
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit"
                        })}</span>
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
      {/* Image Input Section - Added here */}
      <div>
        <label className="block text-sm font-medium text-[#404544] dark:text-white mb-2">
          صورة الخدمة
        </label>
        <div className="flex items-center space-x-4">
          {editingService.image ? (
            <div className="relative">
              <img
                src={editingService.image}
                alt="Service preview"
                className="w-20 h-20 object-cover rounded-lg border"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setEditingService({
                    ...editingService,
                    image: null
                  })
                }}
                className="absolute -top-2 -right-2 p-1 h-6 w-6 bg-red-500 hover:bg-red-600 text-white"
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ) : (
            <div className="border-2 border-dashed border-gray-300 rounded-lg w-20 h-20 flex items-center justify-center">
              <ImageIcon className="h-8 w-8 text-gray-400" />
            </div>
          )}
          <div className="flex-1">
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) {
                  const reader = new FileReader()
                  reader.onload = (event) => {
                    setEditingService({
                      ...editingService,
                      image: event.target?.result
                    })
                  }
                  reader.readAsDataURL(file)
                }
              }}
              className="hidden"
              id="service-image"
            />
            <label
              htmlFor="service-image"
              className="cursor-pointer bg-[#78C487] hover:bg-[#78C487]/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              <Upload className="h-4 w-4 mr-2 inline" />
              اختر صورة
            </label>
            <p className="text-xs text-gray-500 mt-1">
              PNG, JPG, JPEG up to 5MB
            </p>
          </div>
        </div>
      </div>

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
            <SelectContent className="bg-white">
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
