"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

interface NavbarProps {
  onNavigate: (index: number) => void
  activeSection?: number
}

export default function Navbar({ onNavigate, activeSection = 0 }: NavbarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const navItems = [
    { name: "Hero", index: 0 },
    { name: "Projects", index: 1 },
    { name: "Work", index: 2 },
    { name: "Contact", index: 3 },
  ]

  const getNavbarTheme = () => {
    switch (activeSection) {
      case 0: // Hero - Forest theme
        return {
          text: "text-emerald-100",
          brand: "from-emerald-300 to-teal-300",
          accent: "text-emerald-300",
          hover: "hover:text-emerald-300",
          shadow: "drop-shadow-lg",
          activeGradient: "from-emerald-300 to-teal-300",
          indicatorColor: "bg-emerald-400",
        }
      case 1: // Projects - Mystical theme
        return {
          text: "text-purple-100",
          brand: "from-purple-300 to-blue-300",
          accent: "text-purple-300",
          hover: "hover:text-purple-300",
          shadow: "drop-shadow-lg",
          activeGradient: "from-purple-300 to-blue-300",
          indicatorColor: "bg-purple-400",
        }
      case 2: // Work - Professional theme
        return {
          text: "text-blue-100",
          brand: "from-blue-300 to-cyan-300",
          accent: "text-blue-100",
          hover: "hover:text-blue-100",
          shadow: "drop-shadow-lg",
          activeGradient: "from-blue-300 to-cyan-300",
          indicatorColor: "bg-blue-400",
        }
      case 3: // About - Warm theme
        return {
          text: "text-amber-100",
          brand: "from-amber-300 to-yellow-300",
          accent: "text-amber-100",
          hover: "hover:text-amber-100",
          shadow: "drop-shadow-lg",
          activeGradient: "from-amber-300 to-yellow-300",
          indicatorColor: "bg-amber-400",
        }
      default:
        return {
          text: "text-emerald-100",
          brand: "from-emerald-300 to-teal-300",
          accent: "text-emerald-100",
          hover: "hover:text-emerald-100",
          shadow: "drop-shadow-lg",
          activeGradient: "from-emerald-300 to-teal-300",
          indicatorColor: "bg-emerald-400",
        }
    }
  }

  const theme = getNavbarTheme()

  const closeSidebar = () => setIsSidebarOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 h-28 text-sm tracking-widest uppercase font-['Bebas_Neue',sans-serif] transition-all duration-500`}
      >
        <div
          className={`bg-gradient-to-r ${theme.brand} bg-clip-text text-transparent font-bold text-lg transition-all duration-500 ${theme.shadow}`}
        >
          Alankrit Arya
        </div>

        <nav className="hidden md:flex gap-4">
          {navItems.map((item) => (
            <Button
              key={item.index}
              variant="ghost"
              onClick={() => onNavigate(item.index)}
              className={`${
                activeSection === item.index
                  ? `bg-gradient-to-r ${theme.activeGradient} bg-clip-text text-transparent font-semibold`
                  : `${theme.text} ${theme.hover}`
              } ${theme.shadow} transition-all duration-300 relative hover:bg-white/10 backdrop-blur-sm`}
            >
              {item.name}
              {activeSection === item.index && (
                <div
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 ${theme.indicatorColor} rounded-full animate-pulse`}
                />
              )}
            </Button>
          ))}
        </nav>

        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`md:hidden flex flex-col gap-1 p-2 ${theme.text} ${theme.hover} ${theme.shadow} transition-colors z-50 relative`}
        >
          <div
            className={`w-6 h-0.5 bg-current transition-all duration-300 ${isSidebarOpen ? "rotate-45 translate-y-1.5" : ""}`}
          />
          <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isSidebarOpen ? "opacity-0" : ""}`} />
          <div
            className={`w-6 h-0.5 bg-current transition-all duration-300 ${isSidebarOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          />
        </button>
      </header>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={closeSidebar}>
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
        </div>
      )}

      <div
        className={`fixed inset-0 z-45 transform transition-all duration-300 ease-out ${
          isSidebarOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } md:hidden pointer-events-none ${isSidebarOpen ? "pointer-events-auto" : ""}`}
      >
        <div
          className="h-full w-full bg-black/10 backdrop-blur-md border-l border-white/10 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center justify-center h-full px-8">
            <nav className="flex flex-col gap-6 w-full max-w-sm">
              {navItems.map((item) => (
                <Button
                  key={item.index}
                  variant="ghost"
                  onClick={() => {
                    onNavigate(item.index)
                    closeSidebar()
                  }}
                  className={`w-full justify-center text-center px-8 py-6 text-xl font-light ${
                    activeSection === item.index
                      ? `bg-gradient-to-r ${theme.activeGradient} bg-clip-text text-transparent font-semibold bg-white/10 border border-white/30`
                      : `${theme.text} ${theme.hover} hover:bg-white/10 border border-transparent hover:border-white/20`
                  } transition-all duration-300 backdrop-blur-sm rounded-xl`}
                >
                  {item.name}
                </Button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
