"use client"

import { useState } from "react"
import { Menu, X, Home, User, Briefcase, Mail, Info } from "lucide-react"

export default function BottomNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Home", icon: Home, href: "#home" },
    { name: "About", icon: Info, href: "#about" },
    { name: "Services", icon: Briefcase, href: "#services" },
    { name: "Portfolio", icon: User, href: "#portfolio" },
    { name: "Contact", icon: Mail, href: "#contact" },
  ]

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-100">
      <div
        className={`
        transition-all duration-500 ease-in-out
        ${
          isMenuOpen
            ? "bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3"
            : "bg-white/20 backdrop-blur-md border border-white/30 rounded-full pt-2 px-3  hover:scale-110 "
        }
      `}
      >
        {!isMenuOpen ? (
          // Hamburger Menu Button
          <button
            onClick={toggleMenu}
            className="text-white hover:text-purple-300 transition-colors duration-300 cursor-pointer"
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        ) : (
          // Expanded Menu with Links Side by Side
          <div className="flex items-center space-x-6">
            {navItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-white hover:text-purple-300 transition-all duration-300 transform hover:scale-110 opacity-0 animate-fade-in"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "forwards",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <IconComponent size={20} />
                  <span className="font-medium">{item.name}</span>
                </a>
              )
            })}
            <button
              onClick={toggleMenu}
              className="text-white hover:text-purple-300 transition-colors duration-300 ml-4 opacity-0 animate-fade-in"
              style={{
                animationDelay: `${navItems.length * 100}ms`,
                animationFillMode: "forwards",
              }}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
