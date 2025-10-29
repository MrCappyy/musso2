import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Button from '@/components/Button'

const openPositions = [
  {
    title: 'Executive Chef',
    department: 'Kitchen',
    type: 'Full-time',
    experience: '10+ years',
    description: 'Lead our culinary team in maintaining the highest standards of classic American cuisine.',
  },
  {
    title: 'Server',
    department: 'Front of House',
    type: 'Full-time',
    experience: '2+ years fine dining',
    description: 'Provide exceptional service to our guests while maintaining our legendary hospitality standards.',
  },
  {
    title: 'Bartender',
    department: 'Bar',
    type: 'Full-time',
    experience: '3+ years craft cocktails',
    description: 'Craft classic cocktails and maintain our reputation for the best martini in Hollywood.',
  },
  {
    title: 'Host/Hostess',
    department: 'Front of House',
    type: 'Part-time',
    experience: '1+ years',
    description: 'Be the first point of contact for our guests, managing reservations and seating.',
  },
  {
    title: 'Line Cook',
    department: 'Kitchen',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Prepare dishes according to our time-honored recipes and exacting standards.',
  },
  {
    title: 'Event Coordinator',
    department: 'Private Events',
    type: 'Full-time',
    experience: '3+ years event planning',
    description: 'Coordinate private events and ensure flawless execution of special occasions.',
  },
]

const benefits = [
  'Competitive salary',
  'Health, dental, and vision insurance',
  'Paid time off and holidays',
  'Employee dining discounts',
  'Career advancement opportunities',
  '401(k) with company match',
  'Ongoing training and development',
  'Parking or transit benefits',
]

export default function CareersPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <Hero
          title="Join Our Legacy"
          subtitle="Careers at Musso & Frank"
          description="Become part of Hollywood's most storied restaurant team"
          image="/images/musso-family.jpg"
          primaryCTA={{ text: 'View Open Positions', href: '#positions' }}
          height="medium"
        />

        {/* Introduction */}
        <Section background="white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md text-musso-burgundy mb-8">
              More Than a Job, It's a Tradition
            </h2>
            <p className="body-lg text-gray-700 mb-8">
              For over a century, Musso & Frank Grill has been home to some of the most
              dedicated professionals in the hospitality industry. Many of our team members
              have been with us for decades, passing down their knowledge and maintaining
              the standards that have made us a Hollywood institution.
            </p>
            <p className="body-lg text-gray-700">
              When you join Musso & Frank, you're not just taking a job—you're becoming
              part of a legacy. You'll work alongside the best in the business, serve
              Hollywood's most discerning clientele, and help write the next chapter
              of our remarkable story.
            </p>
          </div>
        </Section>

        {/* Why Work Here */}
        <Section background="pattern">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center text-musso-burgundy mb-12">
              Why Musso & Frank?
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-heritage-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-3">Competitive Compensation</h3>
                <p className="text-gray-600 font-crimson">
                  Industry-leading wages, generous tips, and performance bonuses
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-heritage-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-3">Exceptional Team</h3>
                <p className="text-gray-600 font-crimson">
                  Work with passionate professionals who take pride in excellence
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-heritage-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-3">Career Growth</h3>
                <p className="text-gray-600 font-crimson">
                  Opportunities for advancement and professional development
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="font-playfair text-xl font-semibold text-center mb-6">
                Employee Benefits
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center">
                    <svg className="w-5 h-5 text-heritage-gold mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-inter text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Open Positions */}
        <Section background="white" id="positions">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center text-musso-burgundy mb-12">
              Current Openings
            </h2>

            <div className="space-y-6">
              {openPositions.map((position) => (
                <div key={position.title} className="bg-classic-cream rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="md:flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-playfair text-xl font-semibold text-rich-black mb-2">
                        {position.title}
                      </h3>
                      <p className="text-gray-600 font-crimson mb-3">
                        {position.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <span className="px-3 py-1 bg-white text-sm font-inter rounded-full">
                          {position.department}
                        </span>
                        <span className="px-3 py-1 bg-white text-sm font-inter rounded-full">
                          {position.type}
                        </span>
                        <span className="px-3 py-1 bg-white text-sm font-inter rounded-full">
                          {position.experience}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="primary"
                      size="md"
                      className="mt-4 md:mt-0 md:ml-6"
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-heritage-gold/10 rounded-lg">
              <p className="text-center font-inter">
                Don't see the right position? We're always looking for exceptional talent.
                <br />
                Send your resume to{' '}
                <a href="mailto:careers@mussoandfrank.com" className="text-musso-burgundy font-semibold hover:text-heritage-gold transition-colors">
                  careers@mussoandfrank.com
                </a>
              </p>
            </div>
          </div>
        </Section>

        {/* Employee Testimonials */}
        <Section background="pattern">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center text-musso-burgundy mb-12">
              In Their Own Words
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <blockquote className="font-crimson text-gray-700 italic mb-4">
                  "I've been with Musso & Frank for 23 years. This isn't just a restaurant,
                  it's a family. The respect for tradition and quality here is unmatched."
                </blockquote>
                <p className="font-inter font-semibold">— Roberto Martinez</p>
                <p className="text-sm text-gray-500 font-inter">Head Server</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <blockquote className="font-crimson text-gray-700 italic mb-4">
                  "Working here has taught me what true hospitality means. Every day,
                  I'm part of creating memorable experiences for our guests."
                </blockquote>
                <p className="font-inter font-semibold">— Sarah Chen</p>
                <p className="text-sm text-gray-500 font-inter">Bartender</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Application Process */}
        <Section background="white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md text-musso-burgundy mb-8">
              How to Apply
            </h2>
            <div className="space-y-6 text-left">
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 bg-heritage-gold text-white rounded-full flex items-center justify-center font-inter font-semibold">
                  1
                </div>
                <div className="ml-4">
                  <h3 className="font-playfair text-lg font-semibold mb-2">Submit Application</h3>
                  <p className="text-gray-600 font-crimson">
                    Apply online or email your resume to careers@mussoandfrank.com
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 bg-heritage-gold text-white rounded-full flex items-center justify-center font-inter font-semibold">
                  2
                </div>
                <div className="ml-4">
                  <h3 className="font-playfair text-lg font-semibold mb-2">Phone Interview</h3>
                  <p className="text-gray-600 font-crimson">
                    Initial screening call with our HR team to discuss your experience
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 bg-heritage-gold text-white rounded-full flex items-center justify-center font-inter font-semibold">
                  3
                </div>
                <div className="ml-4">
                  <h3 className="font-playfair text-lg font-semibold mb-2">In-Person Interview</h3>
                  <p className="text-gray-600 font-crimson">
                    Meet with department managers and tour our historic restaurant
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 bg-heritage-gold text-white rounded-full flex items-center justify-center font-inter font-semibold">
                  4
                </div>
                <div className="ml-4">
                  <h3 className="font-playfair text-lg font-semibold mb-2">Join the Team</h3>
                  <p className="text-gray-600 font-crimson">
                    Complete onboarding and begin your journey with Musso & Frank
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Button href="mailto:careers@mussoandfrank.com" variant="primary" size="lg">
                Start Your Application
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  )
}