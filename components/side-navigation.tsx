"use client"
import { useEffect, useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { User, Briefcase, FolderOpen, Code, Mail, MapPin, Clock } from "lucide-react"

export function SideNavigation() {
  const [activeSection, setActiveSection] = useState("about")
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "about", label: "Introduction", icon: User },
    { id: "experience", label: "Work Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "skills", label: "Technical Skills", icon: Code },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  return (
    <>
      {/* Desktop Side Navigation */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-full w-80 bg-white/90 dark:bg-black/90 backdrop-blur-xl border-r border-slate-200 dark:border-slate-800 z-50 flex-col">
        {/* Header */}
        <div className="p-8 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Asia/Cebu</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
              <Clock className="w-4 h-4" />
              <span>{currentTime}</span>
            </div>
          </div>

          {/* Profile Section */}
          <div className="text-center mb-6">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-slate-300 dark:border-slate-700 hover:border-blue-500 transition-colors duration-300">
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                WB
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-slate-600 dark:text-slate-400 text-sm">Asia/Cebu</span>
            </div>
            <div className="flex gap-2 justify-center mb-4">
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs rounded-full border border-slate-200 dark:border-slate-700">
                English
              </span>
              <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs rounded-full border border-slate-200 dark:border-slate-700">
                Cebuano
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <ThemeToggle />
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 p-8">
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`
                    flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 group
                    ${
                      isActive
                        ? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50"
                    }
                  `}
                >
                  <div className="flex items-center gap-1">
                    <span className="text-slate-400 dark:text-slate-600 text-sm">—</span>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{item.label}</span>
                  {isActive && <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full animate-pulse" />}
                </a>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed top-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur-xl z-50 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-slate-900 dark:text-white">Winson Baring</h1>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                <Clock className="w-4 h-4" />
                <span>{currentTime}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
