import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Button from '@/components/Button'

const nearbyAttractions = [
  {
    name: 'TCL Chinese Theatre',
    distance: '0.2 miles',
    walkTime: '4 minutes',
    description: 'Historic movie palace famous for handprints and footprints',
  },
  {
    name: 'Hollywood Walk of Fame',
    distance: 'Outside our door',
    walkTime: '0 minutes',
    description: 'The famous sidewalk featuring stars of entertainment icons',
  },
  {
    name: 'Dolby Theatre',
    distance: '0.3 miles',
    walkTime: '6 minutes',
    description: 'Home of the Academy Awards',
  },
  {
    name: 'Hollywood & Highland',
    distance: '0.3 miles',
    walkTime: '5 minutes',
    description: 'Shopping and entertainment complex',
  },
]

const parkingOptions = [
  {
    type: 'Valet Parking (Recommended)',
    location: '6667 Hollywood Blvd (Entrance on N Cherokee Ave)',
    address: '6667 Hollywood Boulevard, Los Angeles, CA 90028',
    price: '$15 (first 3 hours) / $25 (after 3 hours)',
    hours: 'Available during all operating hours',
    note: 'Most convenient option. Entrance between Hollywood Blvd and Yucca St.',
    mapUrl: 'https://maps.google.com/?q=6667+Hollywood+Boulevard+Los+Angeles+CA+90028',
  },
  {
    type: 'Ovation Hollywood Garage',
    location: '6801 Hollywood Blvd',
    address: '6801 Hollywood Boulevard, Los Angeles, CA 90028',
    price: '$2.50/20min • $25 daily max • $11 early bird',
    hours: '24 hours',
    note: '5-minute walk. Enter from Highland Ave or Orange Court.',
    mapUrl: 'https://maps.google.com/?q=6801+Hollywood+Boulevard+Los+Angeles+CA+90028',
  },
  {
    type: 'Las Palmas Garage',
    location: '1721 N Las Palmas Ave',
    address: '1721 N Las Palmas Avenue, Los Angeles, CA 90028',
    price: 'Hourly rates vary',
    hours: '24 hours',
    note: 'Closest public garage (295 feet away). Reserve via SpotHero or ParkWhiz.',
    mapUrl: 'https://maps.google.com/?q=1721+N+Las+Palmas+Avenue+Los+Angeles+CA+90028',
  },
  {
    type: 'Highland Ave Garage',
    location: '1648 N Highland Ave',
    address: '1648 N Highland Avenue, Los Angeles, CA 90028',
    price: 'Hourly rates vary',
    hours: '24 hours',
    note: '0.2 miles away. Online reservations available.',
    mapUrl: 'https://maps.google.com/?q=1648+N+Highland+Avenue+Los+Angeles+CA+90028',
  },
  {
    type: 'Street Parking',
    location: 'Hollywood Blvd & surrounding streets',
    address: 'Hollywood Boulevard near 6667, Los Angeles, CA 90028',
    price: '$2-4/hour metered',
    hours: 'Metered Mon-Sat until 8:00 PM',
    note: 'Limited availability during peak hours. Check signs for restrictions.',
    mapUrl: 'https://maps.google.com/?q=Hollywood+Boulevard+Los+Angeles+CA+90028',
  },
]

export default function LocationPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <Hero
          title="Visit Us in Hollywood"
          subtitle="Location & Directions"
          description="Find us in the heart of Hollywood Boulevard"
          image="/images/homepage-hero-lg.jpg"
          height="medium"
        />

        {/* Main Location Info */}
        <Section background="white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Location Details */}
              <div>
                <h2 className="heading-md text-musso-burgundy mb-6">
                  Our Location
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-playfair text-xl font-semibold mb-3">Address</h3>
                    <p className="body-lg text-gray-700">
                      6667 Hollywood Boulevard<br />
                      Hollywood, CA 90028
                    </p>
                    <Button
                      href="https://maps.google.com/?q=6667+Hollywood+Boulevard+Hollywood+CA+90028"
                      external
                      variant="outline"
                      className="mt-4"
                    >
                      Open in Google Maps
                    </Button>
                  </div>

                  <div>
                    <h3 className="font-playfair text-xl font-semibold mb-3">Phone</h3>
                    <p className="body-lg text-gray-700">
                      <a href="tel:323-467-7788" className="hover:text-musso-burgundy transition-colors">
                        (323) 467-7788
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-playfair text-xl font-semibold mb-3">Hours of Operation</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-inter font-medium">Monday - Thursday</span>
                        <span className="font-inter">11:00 AM - 10:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-inter font-medium">Friday - Saturday</span>
                        <span className="font-inter">11:00 AM - 11:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-inter font-medium">Sunday</span>
                        <span className="font-inter">4:00 PM - 10:00 PM</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 font-inter mt-3">
                      *Kitchen closes 30 minutes before restaurant closing
                    </p>
                  </div>

                  <div>
                    <h3 className="font-playfair text-xl font-semibold mb-3">Special Hours</h3>
                    <p className="text-gray-600 font-crimson">
                      We are closed on Thanksgiving and Christmas Day. Special hours apply
                      for New Year's Eve and other holidays. Please call ahead to confirm.
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Google Map */}
              <div>
                <div className="rounded-lg overflow-hidden shadow-xl h-full min-h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.866837763894!2d-118.33851492393654!3d34.10195971582742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf2e64267807%3A0x2a7e5fe3b43b3a0d!2sMusso%20%26%20Frank%20Grill!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus&markers=color:red%7Clabel:M%7C34.101959,-118.336315"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '500px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Musso & Frank Grill Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Parking Information */}
        <Section background="pattern">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center text-musso-burgundy mb-12">
              Parking Options
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {parkingOptions.map((option, index) => (
                <div key={option.type} className={`bg-white rounded-lg p-6 shadow-md ${index === 0 ? 'border-2 border-heritage-gold' : ''}`}>
                  <h3 className="font-playfair text-lg font-semibold text-rich-black mb-3">
                    {option.type}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-600 font-inter block mb-1">Location:</span>
                      <span className="font-inter">{option.location}</span>
                    </div>
                    <div>
                      <span className="text-gray-600 font-inter block mb-1">Price:</span>
                      <span className="font-inter font-semibold text-musso-burgundy">{option.price}</span>
                    </div>
                    <div>
                      <span className="text-gray-600 font-inter block mb-1">Hours:</span>
                      <span className="font-inter">{option.hours}</span>
                    </div>
                    {option.note && (
                      <p className="text-gray-500 font-inter italic pt-2 border-t border-gray-200 text-xs">
                        {option.note}
                      </p>
                    )}
                    <div className="pt-3">
                      <a
                        href={option.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-musso-burgundy hover:text-heritage-gold font-inter font-medium text-xs transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-heritage-gold/20 rounded-lg">
              <p className="text-center text-sm font-inter">
                <strong>Pro Tip:</strong> For the best experience, we recommend using our valet service,
                especially during peak dining hours (6 PM - 9 PM).
              </p>
            </div>
          </div>
        </Section>

        {/* Directions */}
        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center text-musso-burgundy mb-12">
              Getting Here
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-musso-burgundy rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-3">From Downtown LA</h3>
                <p className="text-gray-600 font-inter text-sm">
                  Take US-101 North to Hollywood Blvd exit. Turn right on Hollywood Blvd.
                  We're on the right side after Highland Ave. (20 minutes)
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-musso-burgundy rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-3">From Beverly Hills</h3>
                <p className="text-gray-600 font-inter text-sm">
                  Take Sunset Blvd east to Highland Ave. Turn left on Highland,
                  then right on Hollywood Blvd. (15 minutes)
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-musso-burgundy rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-3">From LAX Airport</h3>
                <p className="text-gray-600 font-inter text-sm">
                  Take I-405 North to US-101 North. Exit at Hollywood Blvd,
                  turn right. (35-45 minutes depending on traffic)
                </p>
              </div>
            </div>

            {/* Public Transit */}
            <div className="mt-12 p-6 bg-classic-cream rounded-lg">
              <h3 className="font-playfair text-xl font-semibold text-center mb-4">
                Public Transportation
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-inter font-semibold mb-2">Metro Red Line</h4>
                  <p className="text-gray-600 font-inter text-sm">
                    Hollywood/Highland Station is a 5-minute walk from the restaurant.
                    Exit at Hollywood & Highland, walk east on Hollywood Blvd.
                  </p>
                </div>
                <div>
                  <h4 className="font-inter font-semibold mb-2">Bus Lines</h4>
                  <p className="text-gray-600 font-inter text-sm">
                    Metro Lines 217, 222, 780, and DASH Hollywood serve Hollywood Blvd.
                    Multiple stops within walking distance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Nearby Attractions */}
        <Section background="pattern">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center text-musso-burgundy mb-12">
              Nearby Attractions
            </h2>
            <p className="body-lg text-center text-gray-700 mb-8">
              Make a day of it! We're located in the heart of Hollywood's entertainment district.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {nearbyAttractions.map((attraction) => (
                <div key={attraction.name} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="font-playfair text-lg font-semibold text-rich-black mb-2">
                    {attraction.name}
                  </h3>
                  <p className="text-gray-600 font-crimson text-sm mb-3">
                    {attraction.description}
                  </p>
                  <div className="flex justify-between text-sm font-inter">
                    <span className="text-heritage-gold font-semibold">{attraction.distance}</span>
                    <span className="text-gray-500">{attraction.walkTime} walk</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Contact CTA */}
        <Section background="white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md text-musso-burgundy mb-6">
              Need Assistance?
            </h2>
            <p className="body-lg text-gray-700 mb-8">
              Our team is here to help with directions, parking, or any questions about your visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="tel:323-467-7788" variant="primary" size="lg">
                Call Us
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Send Message
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  )
}