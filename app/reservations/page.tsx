'use client'

import React, { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Button from '@/components/Button'
import { cn } from '@/lib/utils'

export default function ReservationsPage() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    partySize: '2',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    occasion: '',
    specialRequests: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - would integrate with Resy/OpenTable API
    console.log('Reservation submitted:', formData)
  }

  const occasions = [
    'No Special Occasion',
    'Birthday',
    'Anniversary',
    'Date Night',
    'Business Meal',
    'Celebration'
  ]

  const times = [
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
    '9:00 PM', '9:30 PM'
  ]

  return (
    <>
      <Header />

      <main className="pt-20">
        <Hero
          title="Reserve Your Table"
          subtitle="Make a Reservation"
          description="Join us for an unforgettable dining experience in Hollywood's most storied restaurant"
          image="/images/reservations-hero.jpg"
          height="medium"
        />

        <Section background="white">
          <div className="max-w-4xl mx-auto">
            {/* Reservation Form */}
            <div className="bg-classic-cream rounded-lg p-8 lg:p-12 shadow-xl">
              <h2 className="heading-md text-center text-musso-burgundy mb-8">
                Book Your Experience
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Date, Time, Party Size Row */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-inter font-medium text-rich-black mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-heritage-gold focus:ring-2 focus:ring-heritage-gold/20 font-inter"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-inter font-medium text-rich-black mb-2">
                      Time
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-heritage-gold focus:ring-2 focus:ring-heritage-gold/20 font-inter"
                      required
                    >
                      <option value="">Select Time</option>
                      {times.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-inter font-medium text-rich-black mb-2">
                      Party Size
                    </label>
                    <select
                      name="partySize"
                      value={formData.partySize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-heritage-gold focus:ring-2 focus:ring-heritage-gold/20 font-inter"
                      required
                    >
                      {[...Array(20)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Name Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-inter font-medium text-rich-black mb-2">
                      First Name
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
                      Last Name
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

                {/* Contact Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-inter font-medium text-rich-black mb-2">
                      Email
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
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-heritage-gold focus:ring-2 focus:ring-heritage-gold/20 font-inter"
                      required
                    />
                  </div>
                </div>

                {/* Occasion */}
                <div>
                  <label className="block text-sm font-inter font-medium text-rich-black mb-2">
                    Special Occasion (Optional)
                  </label>
                  <select
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-heritage-gold focus:ring-2 focus:ring-heritage-gold/20 font-inter"
                  >
                    {occasions.map(occasion => (
                      <option key={occasion} value={occasion}>{occasion}</option>
                    ))}
                  </select>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-sm font-inter font-medium text-rich-black mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Dietary restrictions, seating preferences, or other special requests..."
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-heritage-gold focus:ring-2 focus:ring-heritage-gold/20 font-inter resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="min-w-[200px]"
                  >
                    Complete Reservation
                  </Button>
                </div>
              </form>
            </div>

            {/* Important Information */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-heritage-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-playfair font-semibold text-lg mb-2">Reservation Policy</h3>
                <p className="text-sm text-gray-600 font-inter">
                  Please arrive within 15 minutes of your reservation time. Tables are held for 15 minutes.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-heritage-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-playfair font-semibold text-lg mb-2">Large Parties</h3>
                <p className="text-sm text-gray-600 font-inter">
                  For parties of 8 or more, please call us directly at (323) 467-7788.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-heritage-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-playfair font-semibold text-lg mb-2">Contact Us</h3>
                <p className="text-sm text-gray-600 font-inter">
                  Need to modify or cancel? Call (323) 467-7788 at least 2 hours in advance.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Dress Code Section */}
        <Section background="cream">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md text-musso-burgundy mb-6">
              Dining Information
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-playfair font-semibold text-xl mb-3">Dress Code</h3>
                <p className="text-gray-600 font-crimson">
                  Business casual attire is recommended. We kindly ask that guests refrain from
                  wearing athletic wear, beachwear, or overly casual clothing.
                </p>
              </div>
              <div>
                <h3 className="font-playfair font-semibold text-xl mb-3">Parking</h3>
                <p className="text-gray-600 font-crimson">
                  Valet parking is available for $15. Street parking and nearby public lots
                  are also available. See our location page for more details.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  )
}