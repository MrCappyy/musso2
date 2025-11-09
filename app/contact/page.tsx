'use client'

import React, { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Button from '@/components/Button'

const contactReasons = [
  'General Inquiry',
  'Reservation Assistance',
  'Private Events',
  'Gift Cards',
  'Press & Media',
  'Feedback',
  'Other',
]

const departments = [
  {
    name: 'Reservations',
    phone: '(323) 467-7788',
    email: 'reservations@mussoandfrank.com',
    hours: 'Mon-Fri: 10 AM - 8 PM',
    description: 'For booking assistance and special dining requests',
  },
  {
    name: 'Private Events',
    phone: '(323) 467-7788 ext. 2',
    email: 'events@mussoandfrank.com',
    hours: 'Mon-Fri: 9 AM - 6 PM',
    description: 'For corporate events, weddings, and special occasions',
  },
  {
    name: 'Press & Media',
    phone: '(323) 467-7788 ext. 3',
    email: 'media@mussoandfrank.com',
    hours: 'Mon-Fri: 9 AM - 5 PM',
    description: 'For press inquiries, photo shoots, and interviews',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    reason: '',
    message: '',
    newsletter: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
  }

  return (
    <>
      <Header />

      <main className="pt-20">
        <Hero
          title="Get in Touch"
          subtitle="Contact Us"
          description="We're here to assist you with any questions or special requests"
          image="/images/homepage-hero-lg.jpg"
          height="medium"
        />

        {/* Contact Form & Info Grid */}
        <Section background="white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form - 2 columns */}
              <div className="lg:col-span-2">
                <h2 className="heading-md text-musso-burgundy mb-8">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-inter font-medium text-rich-black mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-heritage-gold focus:ring-2 focus:ring-heritage-gold/20 font-inter"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-inter font-medium text-rich-black mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-heritage-gold focus:ring-2 focus:ring-heritage-gold/20 font-inter"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-inter font-medium text-rich-black mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-heritage-gold focus:ring-2 focus:ring-heritage-gold/20 font-inter"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-inter font-medium text-rich-black mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-heritage-gold focus:ring-2 focus:ring-heritage-gold/20 font-inter"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-inter font-medium text-rich-black mb-2">
                      Reason for Contact *
                    </label>
                    <select
                      name="reason"
                      value={formData.reason}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-heritage-gold focus:ring-2 focus:ring-heritage-gold/20 font-inter"
                      required
                    >
                      <option value="">Select a reason</option>
                      {contactReasons.map(reason => (
                        <option key={reason} value={reason}>{reason}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-inter font-medium text-rich-black mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-heritage-gold focus:ring-2 focus:ring-heritage-gold/20 font-inter resize-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleInputChange}
                        className="mr-2 w-4 h-4 text-musso-burgundy border-gray-300 rounded focus:ring-heritage-gold"
                      />
                      <span className="font-inter text-sm text-gray-600">
                        I would like to receive news and special offers from Musso & Frank Grill
                      </span>
                    </label>
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" variant="primary" size="lg">
                      Send Message
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      onClick={() => setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        reason: '',
                        message: '',
                        newsletter: false,
                      })}
                    >
                      Clear Form
                    </Button>
                  </div>
                </form>
              </div>

              {/* Quick Contact Info - 1 column */}
              <div className="lg:col-span-1">
                <div className="bg-classic-cream rounded-lg p-8 sticky top-24">
                  <h3 className="heading-md text-musso-burgundy mb-6">
                    Quick Contact
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-playfair font-semibold text-lg mb-2">General Inquiries</h4>
                      <p className="font-inter text-gray-600">
                        <a href="tel:323-467-7788" className="hover:text-musso-burgundy transition-colors">
                          (323) 467-7788
                        </a>
                      </p>
                      <p className="font-inter text-gray-600">
                        <a href="mailto:info@mussoandfrank.com" className="hover:text-musso-burgundy transition-colors">
                          info@mussoandfrank.com
                        </a>
                      </p>
                    </div>

                    <div>
                      <h4 className="font-playfair font-semibold text-lg mb-2">Location</h4>
                      <p className="font-inter text-gray-600">
                        6667 Hollywood Boulevard<br />
                        Hollywood, CA 90028
                      </p>
                    </div>

                    <div>
                      <h4 className="font-playfair font-semibold text-lg mb-2">Hours</h4>
                      <div className="space-y-1 text-sm">
                        <p className="font-inter text-gray-600">Mon-Thu: 11 AM - 10 PM</p>
                        <p className="font-inter text-gray-600">Fri-Sat: 11 AM - 11 PM</p>
                        <p className="font-inter text-gray-600">Sunday: 4 PM - 10 PM</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-playfair font-semibold text-lg mb-3">Follow Us</h4>
                      <div className="flex gap-3">
                        <a
                          href="https://www.instagram.com/Mussoandfrankgrill/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-musso-burgundy text-white rounded-full flex items-center justify-center hover:bg-heritage-gold transition-colors"
                          aria-label="Instagram"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                          </svg>
                        </a>
                        <a
                          href="https://www.facebook.com/mussoandfrankgrill/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-musso-burgundy text-white rounded-full flex items-center justify-center hover:bg-heritage-gold transition-colors"
                          aria-label="Facebook"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </a>
                        <a
                          href="https://x.com/MussoFrankGrill"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-musso-burgundy text-white rounded-full flex items-center justify-center hover:bg-heritage-gold transition-colors"
                          aria-label="Twitter"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Department Contacts */}
        <Section background="pattern">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center text-musso-burgundy mb-12">
              Department Contacts
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {departments.map((dept) => (
                <div key={dept.name} className="bg-white rounded-lg p-6 shadow-md text-center">
                  <h3 className="font-playfair text-xl font-semibold text-rich-black mb-3">
                    {dept.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-crimson mb-4">
                    {dept.description}
                  </p>
                  <div className="space-y-2">
                    <p className="font-inter text-sm">
                      <a href={`tel:${dept.phone.replace(/[^0-9]/g, '')}`} className="text-musso-burgundy hover:text-heritage-gold transition-colors">
                        {dept.phone}
                      </a>
                    </p>
                    <p className="font-inter text-sm">
                      <a href={`mailto:${dept.email}`} className="text-musso-burgundy hover:text-heritage-gold transition-colors">
                        {dept.email}
                      </a>
                    </p>
                    <p className="font-inter text-xs text-gray-500">
                      {dept.hours}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* FAQs */}
        <Section background="white">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md text-center text-musso-burgundy mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-playfair text-lg font-semibold mb-3">
                  Do you accept walk-ins?
                </h3>
                <p className="text-gray-600 font-crimson">
                  Yes, we welcome walk-ins based on availability. However, we strongly recommend
                  making a reservation, especially for dinner service and weekends.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-playfair text-lg font-semibold mb-3">
                  What is your cancellation policy?
                </h3>
                <p className="text-gray-600 font-crimson">
                  Please cancel or modify your reservation at least 2 hours in advance.
                  For parties of 8 or more, we require 24 hours notice.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-playfair text-lg font-semibold mb-3">
                  Do you accommodate dietary restrictions?
                </h3>
                <p className="text-gray-600 font-crimson">
                  Yes, our chefs can accommodate most dietary restrictions including vegetarian,
                  vegan, and gluten-free options. Please inform us when making your reservation.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-playfair text-lg font-semibold mb-3">
                  Is there a dress code?
                </h3>
                <p className="text-gray-600 font-crimson">
                  We recommend business casual attire. We kindly ask that guests refrain from
                  wearing athletic wear, beachwear, or overly casual clothing.
                </p>
              </div>

              <div>
                <h3 className="font-playfair text-lg font-semibold mb-3">
                  Do you offer gift cards?
                </h3>
                <p className="text-gray-600 font-crimson">
                  Yes, we offer both physical and digital gift cards in various denominations.
                  They make perfect gifts for any occasion and can be purchased online or at the restaurant.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 font-crimson mb-4">
                Can't find what you're looking for?
              </p>
              <Button href="tel:323-467-7788" variant="primary">
                Call Us Directly
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  )
}