'use client'

import React, { useState } from 'react'
import ImageCarousel from './ImageCarousel'

interface EventSpaceProps {
  space: {
    name: string
    capacity: string
    description: string
    images: string[]
    features: string[]
  }
}

export default function EventSpaceCard({ space }: EventSpaceProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Check if description is longer than 150 characters
  const isLongDescription = space.description.length > 150

  // Get the truncated description (first 150 characters or first paragraph)
  const getTruncatedDescription = () => {
    if (space.description.length <= 150) {
      return space.description
    }

    // Try to cut at a sentence end near 150 chars
    const firstPart = space.description.substring(0, 150)
    const lastPeriod = firstPart.lastIndexOf('.')

    if (lastPeriod > 100) {
      return firstPart.substring(0, lastPeriod + 1)
    }

    // Otherwise cut at last space
    const lastSpace = firstPart.lastIndexOf(' ')
    return firstPart.substring(0, lastSpace) + '...'
  }

  // Get capacity icon based on size
  const getCapacityIcon = () => {
    if (space.capacity.includes('8')) {
      return (
        <svg className="w-5 h-5 inline-block mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      )
    } else if (space.capacity.includes('300')) {
      return (
        <svg className="w-5 h-5 inline-block mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      )
    } else {
      return (
        <svg className="w-5 h-5 inline-block mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      )
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative aspect-[16/9]">
        <ImageCarousel images={space.images} alt={space.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-6 left-6 right-6 text-white z-10 pointer-events-none">
          <h3 className="font-playfair text-4xl font-bold drop-shadow-2xl mb-2">{space.name}</h3>
          <div className="flex items-center gap-2">
            {getCapacityIcon()}
            <p className="font-inter text-xl drop-shadow-lg">{space.capacity}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="text-gray-600 font-crimson text-lg leading-relaxed mb-4">
          <div className="whitespace-pre-wrap">
            {isExpanded || !isLongDescription
              ? space.description
              : getTruncatedDescription()}
          </div>

          {isLongDescription && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 text-musso-burgundy hover:text-heritage-gold font-inter text-sm font-semibold transition-all duration-200 flex items-center gap-1 group"
            >
              {isExpanded ? (
                <>
                  Show Less
                  <svg className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  Read More
                  <svg className="w-4 h-4 group-hover:translate-y-[2px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          )}
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h4 className="font-playfair text-lg font-semibold text-rich-black mb-3">Features & Amenities</h4>
          <div className="flex flex-wrap gap-2">
            {space.features.map((feature, index) => {
              // Highlight special features
              const isSpecial = feature.toLowerCase().includes('projection') ||
                               feature.toLowerCase().includes('av') ||
                               feature.toLowerCase().includes('private') ||
                               feature.toLowerCase().includes('historic');

              return (
                <span
                  key={feature}
                  className={`px-3 py-1.5 text-sm font-inter rounded-full transition-all duration-200 ${
                    isSpecial
                      ? 'bg-gradient-to-r from-musso-burgundy to-heritage-gold text-white shadow-sm'
                      : 'bg-classic-cream text-rich-black hover:bg-heritage-gold/20'
                  }`}
                >
                  {feature}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}