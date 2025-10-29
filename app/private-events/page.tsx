'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Button from '@/components/Button'

const eventSpaces = [
  {
    name: 'The Hollywood Room',
    capacity: '20-50 guests',
    description: 'Our most prestigious private dining room with original 1919 décor',
    image: '/images/privateevents-hero.jpg',
    features: ['Private bar', 'AV equipment', 'Dedicated entrance'],
  },
  {
    name: 'The Writers Room',
    capacity: '10-20 guests',
    description: 'Intimate space where legendary screenwriters once gathered',
    image: '/images/light-photo-bg.jpg',
    features: ['Round table seating', 'Historic memorabilia', 'Wine storage'],
  },
  {
    name: 'The Garden Terrace',
    capacity: '30-75 guests',
    description: 'Semi-private outdoor space with Hollywood Boulevard views',
    image: '/images/rewards-hero.jpg',
    features: ['Outdoor heaters', 'Retractable awning', 'Cocktail setup'],
  },
  {
    name: 'Full Restaurant Buyout',
    capacity: '150-200 guests',
    description: 'Exclusive use of the entire restaurant for grand celebrations',
    image: '/images/homepage-hero-lg.jpg',
    features: ['Complete privacy', 'Custom menu', 'Valet service included'],
  },
]

const eventTypes = [
  'Corporate Events',
  'Wedding Receptions',
  'Birthday Celebrations',
  'Anniversary Parties',
  'Film Premieres',
  'Award Ceremonies',
  'Holiday Parties',
  'Networking Events',
]

export default function PrivateEventsPage() {
  const [formStep, setFormStep] = useState(1)
  const [formData, setFormData] = useState({
    eventType: '',
    date: '',
    guestCount: '',
    startTime: '',
    endTime: '',
    space: '',
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    budget: '',
    menuPreference: '',
    specialRequests: '',
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
    // Handle form submission
    console.log('Event inquiry submitted:', formData)
  }

  const nextStep = () => setFormStep(prev => Math.min(prev + 1, 3))
  const prevStep = () => setFormStep(prev => Math.max(prev - 1, 1))

  return (
    <>
      <Header />

      <main className="pt-20">
        <Hero
          title="Private Events & Celebrations"
          subtitle="Your Milestone Moments"
          description="Host your special occasion in Hollywood's most storied venue"
          image="/images/privateevents-hero.jpg"
          primaryCTA={{ text: 'Start Planning', href: '#inquiry' }}
          secondaryCTA={{ text: 'Download Event Kit', href: '#' }}
        />

        {/* Event Spaces */}
        <Section
          background="white"
          title="Our Event Spaces"
          subtitle="Distinctive Venues"
          description="Each space tells its own story of Hollywood glamour"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {eventSpaces.map((space) => (
              <div key={space.name} className="group">
                <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={space.image}
                    alt={space.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rich-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-playfair text-2xl font-semibold">{space.name}</h3>
                    <p className="font-inter text-sm">{space.capacity}</p>
                  </div>
                </div>
                <p className="text-gray-600 font-crimson mb-3">{space.description}</p>
                <div className="flex flex-wrap gap-2">
                  {space.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-classic-cream text-sm font-inter rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Event Types */}
        <Section background="pattern">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md text-musso-burgundy mb-8">
              Events We Host
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {eventTypes.map((type) => (
                <div
                  key={type}
                  className="bg-white px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="font-inter font-medium text-rich-black">{type}</p>
                </div>
              ))}
            </div>
            <p className="body-lg text-gray-700 mb-8">
              From intimate gatherings to grand celebrations, our experienced events team
              will ensure every detail is perfect. We offer customized menus, dedicated
              service staff, and full event coordination.
            </p>
          </div>
        </Section>

        {/* Multi-Step Inquiry Form */}
        <Section background="white" id="inquiry">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md text-center text-musso-burgundy mb-8">
              Request Event Information
            </h2>

            {/* Progress Bar */}
            <div className="flex justify-between mb-8">
              {['Event Details', 'Contact Info', 'Preferences'].map((step, index) => (
                <div key={step} className="flex-1">
                  <div className="relative">
                    <div
                      className={`h-2 rounded-full transition-colors ${
                        formStep > index ? 'bg-heritage-gold' : 'bg-gray-200'
                      }`}
                    />
                    <div
                      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-inter font-semibold transition-colors ${
                        formStep > index
                          ? 'bg-heritage-gold text-rich-black'
                          : formStep === index + 1
                          ? 'bg-musso-burgundy text-white'
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-center mt-4 text-sm font-inter text-gray-600">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="bg-classic-cream rounded-lg p-8">
              {/* Step 1: Event Details */}
              {formStep === 1 && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-inter font-medium text-rich-black mb-2">
                        Event Type
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-heritage-gold focus:ring-2 focus:ring-heritage-gold/20 font-inter"
                        required
                      >
                        <option value="">Select Event Type</option>
                        {eventTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-inter font-medium text-rich-black mb-2">
                        Event Date
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
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-inter font-medium text-rich-black mb-2">
                        Number of Guests
                      </label>
                      <input
                        type="number"
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleInputChange}
                        min="10"
                        max="200"
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-heritage-gold focus:ring-2 focus:ring-heritage-gold/20 font-inter"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-inter font-medium text-rich-black mb-2">
                        Start Time
                      </label>
                      <input
                        type="time"
                        name="startTime"
                        value={formData.startTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-heritage-gold focus:ring-2 focus:ring-heritage-gold/20 font-inter"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-inter font-medium text-rich-black mb-2">
                        End Time
                      </label>
                      <input
                        type="time"
                        name="endTime"
                        value={formData.endTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-heritage-gold focus:ring-2 focus:ring-heritage-gold/20 font-inter"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-inter font-medium text-rich-black mb-2">
                      Preferred Space
                    </label>
                    <select
                      name="space"
                      value={formData.space}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-heritage-gold focus:ring-2 focus:ring-heritage-gold/20 font-inter"
                    >
                      <option value="">No Preference</option>
                      {eventSpaces.map(space => (
                        <option key={space.name} value={space.name}>{space.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Step 2: Contact Information */}
              {formStep === 2 && (
                <div className="space-y-6">
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

                  <div>
                    <label className="block text-sm font-inter font-medium text-rich-black mb-2">
                      Company/Organization (Optional)
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-heritage-gold focus:ring-2 focus:ring-heritage-gold/20 font-inter"
                    />
                  </div>

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
                </div>
              )}

              {/* Step 3: Event Preferences */}
              {formStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-inter font-medium text-rich-black mb-2">
                      Estimated Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-heritage-gold focus:ring-2 focus:ring-heritage-gold/20 font-inter"
                    >
                      <option value="">Select Budget Range</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000-25000">$10,000 - $25,000</option>
                      <option value="25000-50000">$25,000 - $50,000</option>
                      <option value="50000+">$50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-inter font-medium text-rich-black mb-2">
                      Menu Preference
                    </label>
                    <select
                      name="menuPreference"
                      value={formData.menuPreference}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-heritage-gold focus:ring-2 focus:ring-heritage-gold/20 font-inter"
                    >
                      <option value="">Select Menu Style</option>
                      <option value="plated">Plated Dinner</option>
                      <option value="buffet">Buffet Style</option>
                      <option value="cocktail">Cocktail Reception</option>
                      <option value="custom">Custom Menu</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-inter font-medium text-rich-black mb-2">
                      Special Requests or Requirements
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Tell us about your vision, dietary requirements, or any special needs..."
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-heritage-gold focus:ring-2 focus:ring-heritage-gold/20 font-inter resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {formStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                  >
                    Previous
                  </Button>
                )}
                {formStep < 3 ? (
                  <Button
                    type="button"
                    variant="primary"
                    onClick={nextStep}
                    className="ml-auto"
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="primary"
                    className="ml-auto"
                  >
                    Submit Inquiry
                  </Button>
                )}
              </div>
            </form>
          </div>
        </Section>

        {/* Testimonial */}
        <Section background="cream">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl font-playfair text-rich-black italic mb-6">
              "Our wedding reception at Musso & Frank was absolutely perfect.
              The historic ambiance, exceptional service, and incredible food
              made it a night our guests still talk about."
            </blockquote>
            <p className="font-inter text-gray-600">
              — Sarah & Michael Thompson, Married June 2023
            </p>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  )
}