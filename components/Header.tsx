'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Menu', href: '/menu' },
  { name: 'Private Events', href: '/private-events' },
  { name: 'Our Story', href: '/about' },
  { name: 'Shop', href: '/shop' },
  { name: 'Press', href: '/press' },
  { name: 'Location', href: '/location' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-gray-50 shadow-lg' : 'bg-gray-50/95 backdrop-blur-sm'
      )}
    >
      <nav className="section-padding" aria-label="Main navigation">
        <div className="flex items-center justify-between py-4 lg:py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/images/logo.svg"
              alt="Musso & Frank Grill"
              width={180}
              height={60}
              className="h-12 w-auto lg:h-14"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-rich-black font-inter font-medium hover:text-musso-burgundy transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/reservations"
              className="btn btn-primary ml-4"
            >
              Reserve a Table
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-heritage-gold"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span
                className={cn(
                  'block h-0.5 w-full bg-rich-black transition-transform duration-300',
                  isMenuOpen && 'rotate-45 translate-y-2'
                )}
              />
              <span
                className={cn(
                  'block h-0.5 w-full bg-rich-black transition-opacity duration-300',
                  isMenuOpen && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'block h-0.5 w-full bg-rich-black transition-transform duration-300',
                  isMenuOpen && '-rotate-45 -translate-y-2'
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300',
            isMenuOpen ? 'max-h-96' : 'max-h-0'
          )}
          aria-hidden={!isMenuOpen}
        >
          <div className="py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-rich-black font-inter font-medium hover:text-musso-burgundy transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/reservations"
              className="btn btn-primary w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}