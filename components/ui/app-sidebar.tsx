"use client"

import { useEffect, useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { User, Briefcase, FolderOpen, Code, Mail, MapPin, Clock } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"

export function AppSidebar() {
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
        <Sidebar className="border-r border-slate-200 dark:border-slate-800">
            <SidebarHeader className="p-6 border-b border-slate-200 dark:border-slate-800">
                {/* Time and Location Header */}
                <div className="flex items-center justify-between mb-6 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Asia/Manila</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{currentTime}</span>
                    </div>
                </div>

                {/* Profile Section */}
                <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-slate-300 dark:border-slate-700 hover:border-blue-500 transition-colors duration-300">
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                            WB
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 mb-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-slate-600 dark:text-slate-400 text-sm">Asia/Manila</span>
                    </div>

                    <div className="flex gap-2 justify-center mb-4">
                        <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs rounded-full border border-slate-200 dark:border-slate-700">
                            English
                        </span>
                        <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs rounded-full border border-slate-200 dark:border-slate-700">
                            Cebuano
                        </span>
                    </div>

                    <div className="flex justify-center">
                        <ThemeToggle />
                    </div>
                </div>
            </SidebarHeader>

            <SidebarContent className="p-4">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navItems.map((item) => {
                                const Icon = item.icon
                                const isActive = activeSection === item.id

                                return (
                                    <SidebarMenuItem key={item.id}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={isActive}
                                            className=" w-full justify-start gap-3 px-3 py-2.5 text-sm font-medium"
                                        >
                                            <a href={`#${item.id}`} className="flex items-center gap-3">
                                                <span className="text-slate-400 dark:text-slate-600 text-xs">—</span>
                                                <Icon className="w-4 h-4" />
                                                <span>{item.label}</span>
                                                {isActive && <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full animate-pulse" />}
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="p-4 border-t border-slate-200 dark:border-slate-800">
                <div className="text-center text-xs text-slate-500 dark:text-slate-400">© 2024 Winson Baring</div>
            </SidebarFooter>

            <SidebarRail />
        </Sidebar>
    )
}
