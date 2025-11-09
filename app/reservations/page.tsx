'use client'

import React, { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Section from '@/components/Section'

export default function ReservationsPage() {
  useEffect(() => {
    // Check if widget already exists
    const container = document.getElementById('opentable-container')
    if (!container || container.children.length > 0) return

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = '//www.opentable.com/widget/reservation/loader?rid=203986&type=standard&theme=wide&color=1&dark=false&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website&cfe=true'
    container.appendChild(script)
  }, [])

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
          <div className="flex flex-col items-center">
            {/* OpenTable Widget Container - Compact size for 850x350 widget */}
            <div className="bg-classic-cream rounded-lg shadow-xl px-4 pt-4 pb-8" style={{width: '882px'}}>
              <h2 className="heading-md text-center text-musso-burgundy mb-1">
                Book Your Experience
              </h2>
              <p className="text-center text-gray-600 font-crimson text-lg mb-1">
                Reserve your table at Hollywood's most storied restaurant
              </p>

              {/* OpenTable widget - 850x350 */}
              <div id="opentable-container" className="flex justify-center -mb-56">
                {/* OpenTable widget loads here */}
              </div>
            </div>

            {/* Important Information */}
            <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-4xl">
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