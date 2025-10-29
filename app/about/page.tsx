import React from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Button from '@/components/Button'

const timelineEvents = [
  {
    year: '1919',
    title: 'The Beginning',
    description: 'Frank Toulet, Joseph Musso, and French chef Jean Rue open Musso & Frank Grill on Hollywood Boulevard.',
  },
  {
    year: '1927',
    title: 'The Golden Age',
    description: 'Charlie Chaplin becomes a regular. The Back Room becomes the unofficial headquarters for Hollywood dealmaking.',
  },
  {
    year: '1936',
    title: 'Literary Haven',
    description: 'Writers including F. Scott Fitzgerald, William Faulkner, and John Steinbeck make our booths their office.',
  },
  {
    year: '1955',
    title: 'Television Era',
    description: 'As Hollywood embraces television, producers and stars from the new medium join our clientele.',
  },
  {
    year: '1971',
    title: 'New Ownership',
    description: 'The Echeverria and Mejia families take ownership, maintaining traditions while modernizing service.',
  },
  {
    year: '1989',
    title: 'Historic Designation',
    description: 'Musso & Frank is designated a Los Angeles Historic-Cultural Monument.',
  },
  {
    year: '2019',
    title: 'Centennial Celebration',
    description: 'We celebrate 100 years of service with special events and the release of our first cookbook.',
  },
  {
    year: '2024',
    title: '105 Years Strong',
    description: 'Continuing our legacy as Hollywood\'s gathering place, now in our 105th year of operation.',
  },
]

const famousPatrons = [
  'Charlie Chaplin',
  'Marilyn Monroe',
  'Humphrey Bogart',
  'Ernest Hemingway',
  'F. Scott Fitzgerald',
  'Orson Welles',
  'Elizabeth Taylor',
  'Frank Sinatra',
  'Raymond Chandler',
  'Charles Bukowski',
  'Quentin Tarantino',
  'Brad Pitt',
]

const awards = [
  {
    year: '2023',
    award: 'James Beard America\'s Classics Award',
    description: 'Recognized for timeless appeal and quality food that reflects the character of the community',
  },
  {
    year: '2022',
    award: 'Michelin Guide Recommendation',
    description: 'Featured in the Michelin Guide California for exceptional dining experience',
  },
  {
    year: '2021',
    award: 'Wine Spectator Award of Excellence',
    description: 'Honored for our outstanding wine program and cellar selection',
  },
  {
    year: '2020',
    award: 'Los Angeles Times Restaurant of the Year',
    description: 'Named as an essential Los Angeles dining institution',
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <Hero
          title="Our Story"
          subtitle="Since 1919"
          description="More than a restaurant, we're a living piece of Hollywood history"
          image="/images/homepage-hero-lg.jpg"
          height="medium"
        />

        {/* Introduction */}
        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Image
                src="/images/105-year-logo-2.svg"
                alt="105 Years of Excellence"
                width={200}
                height={100}
                className="mx-auto mb-8"
              />
              <h2 className="heading-lg text-musso-burgundy mb-6">
                105 Years of Hollywood History
              </h2>
              <p className="body-lg text-gray-700">
                When Frank Toulet, Joseph Musso, and French chef Jean Rue opened the doors of
                Musso & Frank Grill in 1919, they created more than a restaurant—they established
                a Hollywood institution. For over a century, we've been the gathering place for
                artists, writers, actors, and dreamers who shaped the entertainment capital of the world.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="heading-md text-musso-burgundy mb-4">
                  The Original Vision
                </h3>
                <p className="body-md text-gray-700 mb-4">
                  Our founders envisioned a place where quality never compromises, where every
                  guest is treated like family, and where the atmosphere tells a thousand stories.
                  That vision remains unchanged today.
                </p>
                <p className="body-md text-gray-700 mb-4">
                  From our hand-carved steaks to our legendary martinis, every element of the
                  Musso & Frank experience has been carefully preserved and passed down through
                  generations of dedicated staff, some of whom have served here for over 40 years.
                </p>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/musso-family.jpg"
                  alt="Historic Musso & Frank"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Timeline */}
        <Section background="pattern" title="Our Journey Through Time">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-heritage-gold/30" />

              {timelineEvents.map((event, index) => (
                <div
                  key={event.year}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1" />

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-heritage-gold rounded-full border-4 border-white shadow-lg z-10" />

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <span className="text-heritage-gold font-playfair text-2xl font-bold">
                        {event.year}
                      </span>
                      <h3 className="font-playfair text-xl font-semibold text-rich-black mt-2 mb-3">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 font-crimson">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Hollywood Legends */}
        <Section background="white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md text-musso-burgundy mb-8">
              Hollywood Legends & Literary Giants
            </h2>
            <p className="body-lg text-gray-700 mb-12">
              Our red leather booths have hosted the most influential figures in entertainment
              and literature. These walls have witnessed deals that launched careers, scripts
              written on napkins, and friendships that shaped Hollywood.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {famousPatrons.map((patron) => (
                <div
                  key={patron}
                  className="bg-classic-cream px-4 py-3 rounded-lg font-playfair text-rich-black"
                >
                  {patron}
                </div>
              ))}
            </div>

            <blockquote className="text-xl font-playfair italic text-gray-700 mb-4">
              "When I want to know what's really happening in Hollywood, I go to Musso's.
              The walls have ears, and the martinis loosen tongues."
            </blockquote>
            <p className="font-inter text-gray-500">
              — Orson Welles, 1941
            </p>
          </div>
        </Section>

        {/* Awards & Recognition */}
        <Section background="cream">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center text-musso-burgundy mb-12">
              Awards & Recognition
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {awards.map((award) => (
                <div key={award.year} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start mb-3">
                    <span className="text-heritage-gold mr-3">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-playfair text-lg font-semibold text-rich-black">
                        {award.award}
                      </h3>
                      <p className="text-sm text-gray-500 font-inter">{award.year}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 font-crimson">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* The Team */}
        <Section background="white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md text-musso-burgundy mb-8">
              Our Dedicated Team
            </h2>
            <p className="body-lg text-gray-700 mb-12">
              The heart of Musso & Frank is our team. Many of our servers, bartenders, and
              chefs have been with us for decades, carrying forward our traditions with pride
              and dedication. When you dine with us, you're served by the best in the business—
              professionals who understand that hospitality is an art form.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-4xl font-playfair text-heritage-gold mb-2">40+</div>
                <p className="font-inter text-gray-600">Years of service (longest-serving employee)</p>
              </div>
              <div>
                <div className="text-4xl font-playfair text-heritage-gold mb-2">75</div>
                <p className="font-inter text-gray-600">Dedicated team members</p>
              </div>
              <div>
                <div className="text-4xl font-playfair text-heritage-gold mb-2">3</div>
                <p className="font-inter text-gray-600">Generations of family ownership</p>
              </div>
            </div>
            <Button href="/careers" variant="outline">
              Join Our Team
            </Button>
          </div>
        </Section>

        {/* Press Section */}
        <Section background="pattern" id="press">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md text-musso-burgundy mb-8">
              Press & Media
            </h2>
            <p className="body-lg text-gray-700 mb-8">
              Our story has been told in countless publications, documentaries, and films.
              We've been featured as a location in over 50 movies and television shows,
              cementing our place in Hollywood's cultural landscape.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary">
                Download Press Kit
              </Button>
              <Button variant="outline">
                Media Inquiries
              </Button>
            </div>
          </div>
        </Section>

        {/* Call to Action */}
        <Section background="white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md text-musso-burgundy mb-6">
              Become Part of Our Story
            </h2>
            <p className="body-lg text-gray-700 mb-8">
              Every guest who walks through our doors becomes part of the Musso & Frank legacy.
              Join us for an unforgettable dining experience where history is served daily.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/reservations" variant="primary" size="lg">
                Make a Reservation
              </Button>
              <Button href="/private-events" variant="outline" size="lg">
                Plan an Event
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  )
}