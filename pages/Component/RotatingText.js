"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const texts = ["WEB 2.0", "MERN Stack",]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, 3000) // Change text every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 flex items-center">
        <div className="w-52 md:w-52 h-16 md:h-20 relative mr-4">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentIndex}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-start text-blue-600"
              style={{ fontSize: "inherit" }}
            >
              {texts[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
        <span className="text-4xl md:text-6xl opacity-100">Projects</span>
      </h1>
    </div>
  )
}