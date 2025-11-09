'use client'

import React, { useState } from 'react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Button from '@/components/Button'
import EventSpaceCard from '@/components/EventSpaceCard'

const eventSpaces = [
  {
    name: 'The Palio Wine Room',
    capacity: 'Up to 8 guests',
    description: 'Named for the famed Palio di Siena horse race dating back more than six hundred years, this sumptuously appointed private wine room captures the Old World ambience of Northern Italy. Lined with oak wood paneling, hand-painted murals, temperature-controlled wine cases and handcrafted furniture, the Palio Room is perfect for small parties of eight or less who want a more interactive service experience.\n\nCustomize your event with a menu specially prepared by Executive Chef J. P. Amateau. Choose expert wine pairings with General Manager Andrea Scuto and our sommelier team, then savor the gracious hospitality Musso & Frank is known for.',
    images: [
      '/images/PDR_Wine-Room-3-copy-1.jpg',
      '/images/PDR_Wine-Room-8-copy-1.jpg'
    ],
    features: ['Oak wood paneling', 'Hand-painted murals', 'Temperature-controlled wine cases', 'Handcrafted furniture', 'Expert wine pairings'],
  },
  {
    name: 'The Grand Private Rooms',
    capacity: 'Flexible: 14, 28, or 42 guests',
    description: 'With the capacity to seat up to 42 for dinner, and 65 for cocktail receptions, this high-end private dining space is set aside for larger parties seeking the classic Musso & Frank treatment. New, yet steeped in tradition, this elegant space is impeccably arranged into two midsize or one large space, furnished in custom-crafted oak paneling and hand-painted scenes of the Italian countryside.\n\nConfiguration Options:\n• Private Dining Room 1: Intimate gatherings up to 14 guests\n• Private Dining Room 2: Mid-size events up to 28 guests\n• Combined Grand Room: Large celebrations up to 42 guests (65 for cocktails)\n\nEach configuration features the same exquisite oak paneling, hand-painted murals, and impeccable service. Perfect for board meetings, milestone celebrations, or corporate events.\n\nWork directly with General Manager Andrea Scuto to design your event with a pre-fixe menu and the high level of service celebrated at Musso & Frank for over a hundred years.',
    images: [
      '/images/grandprivaterooms.jpg',
      '/images/pdr1.jpg',
      '/images/pdr2.jpg',
      '/images/PDR_Large-Room-5-copy-1.jpg',
      '/images/PDR_Large-Room-13-copy-1.jpg',
      '/images/PDR_Board-Room-8-copy-1.jpg',
      '/images/PDR_Board-Room-10-copy-1.jpg',
      '/images/PDR_Banquet-Room-5-copy-1.jpg'
    ],
    features: ['Flexible capacity: 14, 28, or 42 guests', 'Cocktail capacity for 65', 'Three configuration options', 'Custom oak paneling', 'Italian countryside murals', 'Full bar service', 'AV capabilities', 'Pre-fixe menu options', 'Dedicated event coordinator'],
  },
  {
    name: 'Main Dining Rooms',
    capacity: 'Up to 300 guests',
    description: 'We are still delighted to host your large private parties in our world-renown dining rooms, maintaining the highest level of professionalism and discretion. Our dedicated private event team will help you tailor every aspect of your function, from creating the perfect menu to managing floral arrangements, linens, personalized menus and valet parking services.\n\nWe can accommodate up to 300 guests, all with Musso\'s sommelier at your service, and our legendary bar team crafting the best cocktails in town.',
    images: [
      '/images/private-event-photo.jpeg',
      '/images/private-parties-available.jpeg'
    ],
    features: ['Grand scale events to 300', 'Complete customization', 'Sommelier service', 'Legendary bar team', 'Valet parking', 'Floral arrangements'],
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
  const [formErrors, setFormErrors] = useState<string[]>([])
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
    // Clear errors when user starts typing
    if (formErrors.length > 0) {
      setFormErrors([])
    }
  }

  const validateStep = (step: number): boolean => {
    const errors: string[] = []

    if (step === 1) {
      if (!formData.eventType) errors.push('Event Type is required')
      if (!formData.date) errors.push('Event Date is required')
      if (!formData.guestCount) errors.push('Number of Guests is required')
      if (!formData.startTime) errors.push('Start Time is required')
      if (!formData.endTime) errors.push('End Time is required')
      if (!formData.space) errors.push('Please select an Event Space')
    } else if (step === 2) {
      if (!formData.firstName) errors.push('First Name is required')
      if (!formData.lastName) errors.push('Last Name is required')
      if (!formData.email) errors.push('Email is required')
      if (formData.email && !formData.email.includes('@')) errors.push('Please enter a valid email address')
      if (!formData.phone) errors.push('Phone Number is required')
    } else if (step === 3) {
      if (!formData.budget) {
        errors.push('Please enter your estimated budget')
      } else if (parseInt(formData.budget) < 1500) {
        errors.push('Budget must be at least $1,500')
      }
      if (!formData.menuPreference) errors.push('Please select a Menu Preference')
    }

    setFormErrors(errors)
    return errors.length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateStep(3)) {
      console.log('Event inquiry submitted:', formData)
      // You could add a success message here
      alert('Thank you for your inquiry! Our events team will contact you within 24 hours.')
    }
  }

  const nextStep = () => {
    if (validateStep(formStep)) {
      setFormStep(prev => Math.min(prev + 1, 3))
    }
  }

  const prevStep = () => {
    setFormErrors([])
    setFormStep(prev => Math.max(prev - 1, 1))
  }

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
          title="The Perfect Space for Every Occasion"
          subtitle="Three Distinctive Venues"
          description="Intimate dinners for 8, corporate events for 42, or grand celebrations for 300. Oak-paneled elegance with legendary Musso & Frank service."
        >
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {eventSpaces.map((space) => (
                <EventSpaceCard key={space.name} space={space} />
              ))}
            </div>
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

            {/* Error Messages */}
            {formErrors.length > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="font-inter font-semibold text-red-800 mb-2">Please fix the following errors:</p>
                <ul className="list-disc list-inside space-y-1">
                  {formErrors.map((error, index) => (
                    <li key={index} className="text-red-700 font-inter text-sm">{error}</li>
                  ))}
                </ul>
              </div>
            )}

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
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-inter">$</span>
                      <input
                        type="number"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        min="1500"
                        step="100"
                        placeholder="Enter amount (minimum $1,500)"
                        className="w-full pl-8 pr-4 py-3 rounded-md border border-gray-300 focus:border-heritage-gold focus:ring-2 focus:ring-heritage-gold/20 font-inter"
                        required
                      />
                    </div>
                    <p className="text-xs text-gray-600 font-inter mt-1">Minimum budget: $1,500</p>
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
