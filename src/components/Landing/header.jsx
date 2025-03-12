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
      className={`flex justify-between items-center w-full py-4 px-6 md:px-12 lg:px-24 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#7C3AED]/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <h1 className="flex items-center text-2xl font-semibold text-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 33 32" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.056 0.957947C9.51052 0.957947 7.15837 2.31596 5.88561 4.52045L1.31492 12.4371C0.0421632 14.6416 0.0421609 17.3576 1.31492 19.5621L5.88561 27.4788C7.15837 29.6833 9.51052 31.0413 12.056 31.0413H21.1974C23.7429 31.0413 26.0951 29.6833 27.3678 27.4788L31.9385 19.5621C33.2113 17.3576 33.2113 14.6416 31.9385 12.4371L27.3678 4.52045C26.0951 2.31597 23.7429 0.957947 21.1974 0.957947H12.056ZM21.1974 5.70795L15.4841 5.70795C14.5699 5.70795 13.9987 6.69744 14.4565 7.48871C15.8688 9.93005 17.2845 12.3696 18.6947 14.8121C19.119 15.5469 19.119 16.4523 18.6947 17.1871C17.2845 19.6297 15.8688 22.0692 14.4565 24.5105C13.9987 25.3018 14.5699 26.2913 15.4841 26.2913H21.1974C22.0459 26.2913 22.83 25.8386 23.2542 25.1038L27.8249 17.1871C28.2492 16.4523 28.2492 15.5469 27.8249 14.8121L23.2542 6.89545C22.83 6.16062 22.0459 5.70795 21.1974 5.70795Z"
            fill={scrolled ? "#f0f0f0" : "white"}
            // 0f172a
          />
        </svg>
        <span className="ml-2">King'sCourt</span>
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
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition button1">
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

