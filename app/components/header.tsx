'use client'

import { useState, useEffect } from 'react'

// Array of profile images
const profileImages = [
    '/image/berkeley.jpeg',
    '/image/berkeley_sit.jpeg',
    '/image/mit.jpeg',
    '/image/stanford.jpeg',
    '/image/golden_gate.jpeg',
]

// Get a random image that's different from a specific image
const getRandomImage = (excludeImage?: string) => {
  const availableImages = excludeImage 
    ? profileImages.filter(img => img !== excludeImage)
    : profileImages
  const randomIndex = Math.floor(Math.random() * availableImages.length)
  return availableImages[randomIndex]
}

export default function Header() {
  // Select random image during initial state setup
  const [selectedImage, setSelectedImage] = useState(getRandomImage())

  return (
    <div className="flex items-center mb-8">
      <h1 className="text-4xl font tracking-tighter font-eb-garamond flex-grow">
        idhant gulati
      </h1>
      <img
        src={selectedImage}
        alt="idhant gulati"
        className="w-32 h-32 rounded-lg ml-auto"
      />
    </div>
  )
} 