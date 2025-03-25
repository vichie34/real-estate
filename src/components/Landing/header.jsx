"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    document.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header
      className={`flex justify-between items-center w-full py-4 px-6 md:px-12 lg:px-24 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#4682B4]/80 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
    >
      {/* Logo */}
      <h1 className="flex items-center text-2xl font-semibold text-gray-800">
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <polygon points="16,4 28,8 28,24 16,28 4,24 4,8" fill="#FFFFFF" />
          <text x="50%" y="50%" text-anchor="middle" fill="#A03433" font-size="4" dy=".3em">KING</text>
        </svg>
        {/* <link rel="icon" type="image/svg+xml" href="/brooch.svg" /> */}
        <span className="ml-2">Medallion</span>
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8 font-medium text-gray-700">
        <a href="#" className="hover:text-blue-600 transition">
          Realtor
        </a>
        <a href="#" className="hover:text-blue-600 transition">
          Properties
        </a>
        <a href="#" className="hover:text-blue-600 transition">
          Sell your property
        </a>
        <a href="#" className="hover:text-blue-600 transition">
          Pricing
        </a>
      </nav>

      {/* Auth Buttons (Desktop) */}
      <div className="hidden md:flex gap-4">
        <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-200 transition">
          <a href="/login"> Log In</a>
        </button>
        <button className="px-4 py-2 bg-blue text-white rounded-lg hover:bg-blue-700 transition button1">
          <a href="/register">Sign Up</a>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-8 md:hidden"
          >
            <a
              href="#"
              className="text-lg text-gray-700 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Realtor
            </a>
            <a
              href="#"
              className="text-lg text-gray-700 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Properties
            </a>
            <a
              href="#"
              className="text-lg text-gray-700 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Sell your property
            </a>
            <a
              href="#"
              className="text-lg text-gray-700 hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <button
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-200 transition w-full max-w-xs"
              onClick={() => setIsOpen(false)}
            >
              Log In
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full max-w-xs"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Nav

