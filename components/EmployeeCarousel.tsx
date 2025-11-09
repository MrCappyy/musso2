'use client'

import React, { useRef, useState, useEffect } from 'react'

interface Employee {
  name: string
  role: string
  quote: string
  image: string
}

interface EmployeeCarouselProps {
  employees: Employee[]
}

export default function EmployeeCarousel({ employees }: EmployeeCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Triple the employees for infinite loop
  const infiniteEmployees = [...employees, ...employees, ...employees]

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!scrollContainerRef.current) return

    const cardWidth = 516 // 500px + 32px gap

    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      scrollContainerRef.current.scrollLeft -= cardWidth
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : employees.length - 1))
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      scrollContainerRef.current.scrollLeft += cardWidth
      setCurrentIndex((prev) => (prev < employees.length - 1 ? prev + 1 : 0))
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false)
    document.addEventListener('mouseup', handleGlobalMouseUp)
    return () => document.removeEventListener('mouseup', handleGlobalMouseUp)
  }, [])

  // Continuous auto-scroll
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const cardWidth = 516 // 500px + 32px gap
    const totalWidth = cardWidth * employees.length
    let animationFrameId: number

    // Initialize scroll position in the middle
    scrollContainer.scrollLeft = totalWidth

    const scroll = () => {
      if (!scrollContainer) return

      // Reset to middle when reaching the end
      if (scrollContainer.scrollLeft >= totalWidth * 2) {
        scrollContainer.scrollLeft = totalWidth
      }

      // Scroll continuously
      scrollContainer.scrollLeft += 1

      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationFrameId)
  }, [employees.length])

  return (
    <div
      ref={scrollContainerRef}
      role="region"
      aria-label="Employee testimonials carousel"
      aria-roledescription="carousel"
      className={`overflow-x-auto pb-4 scrollbar-hide select-none ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch',
      }}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      aria-live="polite"
    >
      <div className="flex gap-8 px-8">
        {infiniteEmployees.map((employee, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[500px]"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center" style={{ minHeight: '300px' }}>
              <div className="grid grid-cols-2 w-full items-center">
                <div className="relative h-[300px]">
                  <img
                    src={employee.image}
                    alt={employee.name}
                    className="object-cover object-center w-full h-full"
                    draggable={false}
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <p className="font-crimson text-gray-700 italic mb-4">
                    "{employee.quote}"
                  </p>
                  <p className="font-playfair font-semibold text-musso-burgundy">
                    {employee.name}
                  </p>
                  <p className="font-inter text-sm text-gray-600">
                    {employee.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
