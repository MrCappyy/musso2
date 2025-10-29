import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  explore: [
    { name: 'Menu', href: '/menu' },
    { name: 'Reservations', href: '/reservations' },
    { name: 'Private Events', href: '/private-events' },
    { name: 'Gift Cards', href: '/shop#gift-cards' },
  ],
  about: [
    { name: 'Our Story', href: '/about' },
    { name: 'Press', href: '/about#press' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  policies: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Accessibility', href: '/accessibility' },
  ],
}

const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com/mussoandfrank', icon: 'instagram' },
  { name: 'Facebook', href: 'https://facebook.com/mussoandfrank', icon: 'facebook' },
  { name: 'Twitter', href: 'https://twitter.com/mussoandfrank', icon: 'twitter' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-rich-black text-white">
      {/* Newsletter Section */}
      <div className="bg-musso-burgundy py-12 lg:py-16">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="heading-md text-white mb-4">
              Join Our Table
            </h3>
            <p className="body-lg text-white/90 mb-8">
              Subscribe for exclusive offers, event invitations, and a taste of Hollywood history
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-md text-rich-black font-inter focus:outline-none focus:ring-2 focus:ring-heritage-gold"
                required
              />
              <button
                type="submit"
                className="btn bg-heritage-gold text-rich-black hover:bg-opacity-90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12 lg:py-16">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/images/logo.svg"
                  alt="Musso & Frank Grill"
                  width={200}
                  height={70}
                  className="h-16 w-auto filter brightness-0 invert"
                />
              </Link>
              <p className="body-md text-gray-300 mb-6">
                Since 1919, Musso & Frank Grill has been Hollywood's gathering place
                for those who appreciate classic American cuisine and timeless hospitality.
              </p>
              <div className="space-y-2 text-gray-300">
                <p className="font-inter">6667 Hollywood Boulevard</p>
                <p className="font-inter">Hollywood, CA 90028</p>
                <p className="font-inter">(323) 467-7788</p>
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-playfair font-semibold text-lg mb-4 text-heritage-gold">
                Explore
              </h4>
              <ul className="space-y-3">
                {footerLinks.explore.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-heritage-gold transition-colors duration-200 font-inter"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-playfair font-semibold text-lg mb-4 text-heritage-gold">
                About
              </h4>
              <ul className="space-y-3">
                {footerLinks.about.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-heritage-gold transition-colors duration-200 font-inter"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-playfair font-semibold text-lg mb-4 text-heritage-gold">
                Hours
              </h4>
              <div className="space-y-3 text-gray-300 font-inter">
                <div>
                  <p className="font-semibold">Monday - Thursday</p>
                  <p>11:00 AM - 10:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold">Friday - Saturday</p>
                  <p>11:00 AM - 11:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold">Sunday</p>
                  <p>4:00 PM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center space-x-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-heritage-gold transition-colors duration-200"
                    aria-label={link.name}
                  >
                    <span className="sr-only">{link.name}</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      {link.icon === 'instagram' && (
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                      )}
                      {link.icon === 'facebook' && (
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      )}
                      {link.icon === 'twitter' && (
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      )}
                    </svg>
                  </a>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400 font-inter">
                <span>&copy; {currentYear} Musso & Frank Grill</span>
                <span className="hidden sm:inline">•</span>
                <span>All Rights Reserved</span>
                <span className="hidden sm:inline">•</span>
                <span>Est. 1919</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}