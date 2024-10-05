"use client"

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CreateArticle() {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    summary: '',
    url: '',
    readingDuration: ''
  })
  const [imagePreview, setImagePreview] = useState(null)
  const fileInputRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result }))
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Submitted:', formData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg p-8 rounded-xl bg-white shadow-2xl relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
        <div className="relative z-10">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl font-bold text-gray-800 mb-6 text-center"
          >
            Create Article
          </motion.h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <AnimatePresence>
              {Object.entries(formData).map(([key, value], index) => (
                key !== 'image' && (
                  <motion.div
                    key={key}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="space-y-2"
                  >
                    <label htmlFor={key} className="block text-sm font-medium text-gray-700">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </label>
                    <div className="relative">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: value ? 1 : 0 }}
                        className="absolute bottom-0 left-0 h-0.5 bg-gray-800"
                        style={{ width: '100%', originX: 0 }}
                      />
                      {key === 'summary' ? (
                        <textarea
                          id={key}
                          name={key}
                          value={value}
                          onChange={handleChange}
                          className="w-full bg-transparent border border-gray-300 text-gray-800 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 rounded-md p-2 transition duration-200 ease-in-out"
                          placeholder={`Enter ${key}`}
                          rows={3}
                        />
                      ) : (
                        <input
                          type={key === 'url' ? 'url' : 'text'}
                          id={key}
                          name={key}
                          value={value}
                          onChange={handleChange}
                          className="w-full bg-transparent border border-gray-300 text-gray-800 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 rounded-md p-2 transition duration-200 ease-in-out"
                          placeholder={`Enter ${key}`}
                        />
                      )}
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="space-y-2"
            >
              <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Image
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="url"
                  id="imageUrl"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="flex-grow bg-transparent border border-gray-300 text-gray-800 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 rounded-md p-2 transition duration-200 ease-in-out"
                  placeholder="Enter image URL"
                />
                <span className="text-gray-700 text-sm self-center">or</span>
                <button
                  type="button"
                  onClick={() => fileInputRef.current.click()}
                  className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded-md transition duration-200 ease-in-out"
                >
                  Choose File
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
            </motion.div>
            {imagePreview && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4"
              >
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-w-full h-auto rounded-md shadow-md"
                />
              </motion.div>
            )}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6"
            >
              <button
                type="submit"
                className="w-full bg-gray-800 text-white hover:bg-gray-700 py-2 px-4 rounded-md transition-colors duration-300"
              >
                Create Article
              </button>
            </motion.div>
          </form>
        </div>
      </motion.div>
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <motion.div
        className="absolute top-10 right-10 w-20 h-20 rounded-full bg-white opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-white opacity-10"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 7,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
      />
    </div>
  )
}