'use client'

import React, { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Section from '@/components/Section'

export default function CareersPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const sliderImages = [
    '/images/employment-slider-1.jpg',
    '/images/employment-slider-2.jpg',
    '/images/employment-slider-3.jpg',
    '/images/employment-slider-4.jpg',
    '/images/employment-slider-5.jpg',
    '/images/employment-slider-6.jpg',
    '/images/employment-slider-7.jpg',
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setSelectedFiles((prev) => [...prev, ...newFiles])
    }
  }

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const getFilePreview = (file: File) => {
    if (file.type.startsWith('image/')) {
      return URL.createObjectURL(file)
    }
    return null
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <Header />

      <main className="pt-20">
        <Hero
          title="Life at Musso & Frank"
          subtitle="Join Our Team"
          description="Where hospitality meets heritage, and careers become legacies"
          image="/images/employment-hero.jpg"
          height="medium"
        />

        {/* Introduction */}
        <Section background="white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md text-musso-burgundy mb-8">
              Your Last Career Move
            </h2>
            <p className="body-lg text-gray-700 mb-6">
              For 106 years, the success of Musso & Frank has been built on one foundation: our people.
              Our team members aren't just employees—they're part of a legacy, stewards of tradition,
              and masters of their craft. Many have been with us for decades, carrying forward the
              exceptional standards that make us Hollywood's oldest restaurant.
            </p>
            <p className="body-lg text-gray-700">
              We believe in creating lasting relationships with our team and fostering an environment
              where growth is limitless. Here, we focus equally on the satisfaction of our guests and
              our staff. We don't want to be your next job—we want to be your last career move.
            </p>
          </div>
        </Section>

        {/* Our Team */}
        <Section background="pattern">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-md text-center text-musso-burgundy mb-12">
              Excellence in Every Role
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {/* Servers */}
              <div>
                <div className="relative h-80 mb-6 rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/images/employment-servers.jpg"
                    alt="Professional server in burgundy jacket preparing table service at Musso & Frank"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-musso-burgundy mb-4 text-center">
                  Servers
                </h3>
                <p className="body-md text-gray-700">
                  White tablecloths and gleaming silverware set the stage, but at Musso & Frank, the heart
                  of fine dining is our people. Our servers bring energy, personality, and genuine care to
                  every interaction. Their mission is simple yet profound: ensure every guest leaves happier
                  than when they arrived. This dedication transforms service from a job into a calling—a
                  lifelong pursuit of excellence in hospitality.
                </p>
              </div>

              {/* Bartenders */}
              <div>
                <div className="relative h-80 mb-6 rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/images/employment-bartenders.jpg"
                    alt="Skilled bartender crafting classic martini behind the historic Musso & Frank bar"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-musso-burgundy mb-4 text-center">
                  Bartenders
                </h3>
                <p className="body-md text-gray-700">
                  Our bar is more than iconic—it's a Los Angeles institution. Opened shortly after Prohibition,
                  it has hosted countless celebrities and personalities over the decades. This space carries
                  an incredible heritage and unique energy. Our bartenders are skilled craftsmen and hospitality
                  professionals who understand that every drink tells a story. They warmly welcome newcomers and
                  regulars alike, creating connections that last a lifetime.
                </p>
              </div>

              {/* Kitchen Staff */}
              <div>
                <div className="relative h-80 mb-6 rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/images/employment-kitchen.jpg"
                    alt="Chef preparing classic dishes in Musso & Frank's professional kitchen"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-musso-burgundy mb-4 text-center">
                  Kitchen Staff
                </h3>
                <p className="body-md text-gray-700">
                  Our kitchen team upholds a legacy of culinary excellence spanning 106 years. Led by our
                  executive chef—just the third in our history—we seek individuals with positive attitudes
                  and curious minds. People passionate about the culinary arts who take genuine pride in their
                  work. We nurture growth at every level, with management dedicated to supporting, guiding,
                  and motivating our team every step of the way.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Quote Section */}
        <Section background="white">
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <img
              src="/images/employment-quote-container-2.jpg"
              alt="Server Brogan Roche standing proudly in the elegant dining room with red leather booths"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent" />
            <div className="relative h-full flex items-center justify-end px-8 md:px-16">
              <div className="max-w-2xl text-right">
                <blockquote className="text-3xl md:text-4xl italic text-white mb-8 font-playfair leading-tight">
                  "Being a part of the team at Musso's is truly a family feeling—from the family who owns
                  the restaurant to my coworkers to the guests we serve. One of a kind!"
                </blockquote>
                <div className="flex items-center justify-end">
                  <div className="text-right">
                    <p className="text-white text-xl font-playfair font-semibold">Brogan Roche</p>
                    <p className="text-white/90 font-inter">Server</p>
                  </div>
                  <div className="w-16 h-1 bg-heritage-gold ml-4" />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Why Work Here */}
        <Section background="cream">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center text-musso-burgundy mb-12">
              Why Musso & Frank?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-heritage-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-4">Legacy & History</h3>
                <p className="text-gray-600 font-crimson">
                  Be part of Hollywood's oldest restaurant, serving the entertainment industry since 1919
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-heritage-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-4">Career Growth</h3>
                <p className="text-gray-600 font-crimson">
                  Develop your skills alongside industry veterans in an environment that values excellence
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-heritage-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-4">True Family Atmosphere</h3>
                <p className="text-gray-600 font-crimson">
                  Work in a supportive environment where relationships matter and longevity is celebrated
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Image Gallery Slider */}
        <Section background="white">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-md text-center text-musso-burgundy mb-4">
              Behind the Scenes
            </h2>
            <p className="text-center body-lg text-gray-600 mb-12">
              A glimpse into daily life at Hollywood's most storied restaurant
            </p>

            <div className="relative">
              {/* Main slider container */}
              <div className="relative h-[400px] md:h-[600px] overflow-hidden rounded-lg shadow-2xl">
                {sliderImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Behind the scenes at Musso & Frank: team members serving guests in the historic restaurant`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>

              {/* Previous button */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/95 hover:bg-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6 text-musso-burgundy group-hover:text-heritage-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next button */}
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/95 hover:bg-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="Next image"
              >
                <svg className="w-6 h-6 text-musso-burgundy group-hover:text-heritage-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/75 w-2'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Application Form */}
        <Section background="pattern">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-md text-musso-burgundy mb-6">
                Ready to Join Our Legacy?
              </h2>
              <p className="body-lg text-gray-700">
                At Musso & Frank, we're always looking for exceptional individuals who are passionate about
                hospitality and committed to excellence. Fill out the form below and we'll be in touch.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8 md:p-10">
              <form className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-inter font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-heritage-gold focus:border-heritage-gold transition-colors font-crimson"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-inter font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-heritage-gold focus:border-heritage-gold transition-colors font-crimson"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone and Role Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-inter font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-heritage-gold focus:border-heritage-gold transition-colors font-crimson"
                      placeholder="(323) 555-0123"
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-inter font-semibold text-gray-700 mb-2">
                      Position of Interest *
                    </label>
                    <select
                      id="role"
                      name="role"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-heritage-gold focus:border-heritage-gold transition-colors font-crimson bg-white"
                    >
                      <option value="">Select a position</option>
                      <option value="server">Server</option>
                      <option value="bartender">Bartender</option>
                      <option value="kitchen">Kitchen Staff</option>
                      <option value="host">Host/Hostess</option>
                      <option value="manager">Management</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <label htmlFor="experience" className="block text-sm font-inter font-semibold text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-heritage-gold focus:border-heritage-gold transition-colors font-crimson bg-white"
                  >
                    <option value="">Select experience level</option>
                    <option value="0-1">Less than 1 year</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-inter font-semibold text-gray-700 mb-2">
                    Tell Us About Yourself *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-heritage-gold focus:border-heritage-gold transition-colors font-crimson resize-none"
                    placeholder="Share your relevant experience, why you're interested in Musso & Frank, and what makes you a great fit for our team..."
                  />
                </div>

                {/* Resume Upload */}
                <div>
                  <label htmlFor="resume" className="block text-sm font-inter font-semibold text-gray-700 mb-2">
                    Upload Resume & Portfolio
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Upload Area */}
                    <div>
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        multiple
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="resume"
                        className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-sm hover:border-heritage-gold transition-colors cursor-pointer bg-gray-50 hover:bg-classic-cream"
                      >
                        <div className="text-center">
                          <svg className="mx-auto h-10 w-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <p className="text-xs font-semibold text-gray-700 font-inter mt-2">
                            Click to upload
                          </p>
                          <p className="text-xs text-gray-500 font-inter mt-1">
                            PDF, DOC, JPG, PNG
                          </p>
                        </div>
                      </label>
                      <p className="mt-2 text-xs text-gray-500 font-inter">
                        Upload multiple files (max 10MB each)
                      </p>
                    </div>

                    {/* Uploaded Files List */}
                    <div className="max-h-48 overflow-y-auto">
                      {selectedFiles.length > 0 ? (
                        <div className="space-y-2">
                          {selectedFiles.map((file, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3 p-2 bg-white border border-gray-200 rounded-sm hover:border-heritage-gold transition-colors"
                            >
                              {/* File Preview/Icon */}
                              <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
                                {getFilePreview(file) ? (
                                  <img
                                    src={getFilePreview(file)!}
                                    alt={file.name}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                  </svg>
                                )}
                              </div>

                              {/* File Info */}
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-semibold text-gray-700 font-inter truncate">
                                  {file.name}
                                </p>
                                <p className="text-xs text-gray-500 font-inter">
                                  {(file.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                              </div>

                              {/* Remove Button */}
                              <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="flex-shrink-0 text-gray-400 hover:text-musso-burgundy transition-colors"
                                aria-label="Remove file"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="h-full flex items-center justify-center text-center">
                          <p className="text-sm text-gray-400 font-inter">
                            No files uploaded yet
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-10 py-4 bg-musso-burgundy text-white font-inter font-semibold text-sm rounded-sm tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[#6D0000] shadow-[0_4px_16px_rgba(139,0,0,0.4)] hover:shadow-[0_6px_24px_rgba(139,0,0,0.5)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_2px_8px_rgba(139,0,0,0.4)]"
                  >
                    Submit Application
                  </button>
                </div>
              </form>

              <p className="mt-6 text-center text-sm text-gray-600 font-inter">
                Questions? Email us at{' '}
                <a href="mailto:resumes@mussoandfrank.com" className="text-musso-burgundy hover:text-heritage-gold transition-colors">
                  resumes@mussoandfrank.com
                </a>
              </p>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  )
}
