import React from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Button from '@/components/Button'

const featuredMenuItems = [
  {
    title: 'Prime Rib',
    description: 'Our signature cut, slow-roasted to perfection and served with Yorkshire pudding',
    price: 68,
    image: '/images/product-highlight.png',
  },
  {
    title: 'Lobster Thermidor',
    description: 'Classic preparation with brandy cream sauce and gruyere',
    price: 'Market Price',
    image: '/images/product-thumb-highlight.png',
  },
  {
    title: 'Caesar Salad',
    description: 'Prepared tableside with our secret dressing recipe from 1924',
    price: 24,
    image: '/images/light-photo-bg.jpg',
  },
]

const testimonials = [
  {
    quote: "The most authentic Hollywood dining experience. Musso & Frank is where history comes alive.",
    author: 'Michael Thompson',
    title: 'Los Angeles Times Food Critic'
  },
  {
    quote: "After 105 years, they still serve the best martini in Hollywood. A true institution.",
    author: 'Sarah Chen',
    title: 'Zagat Review'
  },
  {
    quote: "Where legends dined and deals were made. The atmosphere is absolutely unmatched.",
    author: 'Robert Williams',
    title: 'Hollywood Reporter'
  },
]

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <Hero
          title="Where Hollywood History is Served Daily"
          subtitle="Since 1919"
          description="Experience the timeless elegance of Hollywood's oldest restaurant, where classic American cuisine meets legendary hospitality"
          image="/images/homepage-hero-lg.jpg"
          primaryCTA={{ text: 'Make a Reservation', href: '/reservations' }}
          secondaryCTA={{ text: 'View Our Menu', href: '/menu' }}
        />

        {/* Welcome Section */}
        <Section
          background="white"
          title="Welcome to Musso & Frank"
          subtitle="A Hollywood Institution"
          description="For over a century, we've been the gathering place for those who appreciate the finer things in life"
          divider
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="body-lg text-gray-700">
                Since opening our doors in 1919, Musso & Frank Grill has been more than just a restaurant—
                we've been a cornerstone of Hollywood history. From Charlie Chaplin to modern-day celebrities,
                our red leather booths have hosted the most influential figures in entertainment, literature, and business.
              </p>
              <p className="body-lg text-gray-700">
                Our commitment to excellence remains unchanged. We still prepare our steaks the same way,
                mix our martinis with the same care, and provide the same impeccable service that has made
                us a legend. When you dine with us, you're not just having a meal—you're becoming part of our story.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button href="/about" variant="primary">
                  Discover Our Story
                </Button>
                <Button href="/private-events" variant="outline">
                  Host an Event
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/musso-family.jpg"
                alt="Musso & Frank interior"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-rich-black/80 to-transparent">
                <Image
                  src="/images/105-year-logo-2.svg"
                  alt="105 Years of Excellence"
                  width={120}
                  height={60}
                  className="filter brightness-0 invert"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Featured Menu Items */}
        <Section
          background="pattern"
          title="Signature Dishes"
          subtitle="From Our Kitchen"
          description="Time-honored recipes prepared with the finest ingredients"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {featuredMenuItems.map((item) => (
              <Card
                key={item.title}
                title={item.title}
                description={item.description}
                price={item.price}
                image={item.image}
                href="/menu"
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/menu" variant="primary" size="lg">
              View Full Menu
            </Button>
          </div>
        </Section>

        {/* Private Events CTA */}
        <section className="relative py-24 bg-rich-black">
          <div className="absolute inset-0">
            <Image
              src="/images/privateevents-hero.jpg"
              alt="Private events at Musso & Frank"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="relative section-padding text-center">
            <h2 className="heading-lg text-white mb-6">
              Host Your Special Event
            </h2>
            <p className="body-lg text-white/90 max-w-2xl mx-auto mb-8">
              From intimate gatherings to grand celebrations, our private dining rooms provide
              the perfect setting for your most important moments
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-heritage-gold text-4xl font-playfair mb-2">20-200</div>
                <p className="text-white/80 font-inter">Guest Capacity</p>
              </div>
              <div className="text-center">
                <div className="text-heritage-gold text-4xl font-playfair mb-2">4</div>
                <p className="text-white/80 font-inter">Private Rooms</p>
              </div>
              <div className="text-center">
                <div className="text-heritage-gold text-4xl font-playfair mb-2">105+</div>
                <p className="text-white/80 font-inter">Years of Hosting</p>
              </div>
            </div>
            <Button href="/private-events" variant="secondary" size="lg">
              Plan Your Event
            </Button>
          </div>
        </section>

        {/* Testimonials */}
        <Section
          background="white"
          title="What They're Saying"
          subtitle="Reviews & Testimonials"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-heritage-gold text-xl">★</span>
                  ))}
                </div>
                <blockquote className="body-lg text-gray-700 italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-playfair font-semibold text-rich-black">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500 font-inter">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Location & Hours */}
        <Section
          background="cream"
          title="Visit Us"
          subtitle="Location & Hours"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="heading-md text-musso-burgundy mb-4">Location</h3>
                <p className="body-lg text-gray-700 mb-2">6667 Hollywood Boulevard</p>
                <p className="body-lg text-gray-700 mb-2">Hollywood, CA 90028</p>
                <p className="body-lg text-gray-700">(323) 467-7788</p>
              </div>
              <div>
                <h3 className="heading-md text-musso-burgundy mb-4">Hours</h3>
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
              </div>
              <div className="flex gap-4">
                <Button href="/location" variant="primary">
                  Get Directions
                </Button>
                <Button href="/reservations" variant="outline">
                  Make Reservation
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/light-photo-bg.jpg"
                alt="Musso & Frank exterior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Section>

        {/* Newsletter CTA */}
        <section className="relative py-16 lg:py-20">
          <div className="absolute inset-0">
            <Image
              src="/images/newsletter-hero-sm.jpg"
              alt="Newsletter background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-rich-black/70" />
          </div>
          <div className="relative section-padding text-center">
            <h2 className="heading-md text-white mb-4">
              Stay Connected
            </h2>
            <p className="body-lg text-white/90 max-w-2xl mx-auto mb-8">
              Join our mailing list for exclusive offers, event invitations, and a taste of Hollywood history
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-md text-rich-black font-inter focus:outline-none focus:ring-2 focus:ring-heritage-gold"
                required
              />
              <Button type="submit" variant="secondary" size="md">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}