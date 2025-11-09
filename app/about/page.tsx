import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Button from '@/components/Button'
import EmployeeCarousel from '@/components/EmployeeCarousel'

const timelineEvents = [
  {
    year: '1919',
    title: 'The Beginning',
    description: 'September 27, 1919: Frank Toulet, Joseph Musso, and French chef Jean Rue open Musso & Frank Grill on Hollywood Boulevard.',
  },
  {
    year: '1927',
    title: 'Family Ownership Begins',
    description: 'Joseph Carissimi and John Mosso purchase the restaurant, beginning a family tradition that continues today.',
  },
  {
    year: '1934',
    title: 'The Back Room Opens',
    description: 'The Back Room opens, becoming the unofficial headquarters for Hollywood dealmaking and attracting legendary patrons like Charlie Chaplin.',
  },
  {
    year: '1930s-1940s',
    title: 'Literary Haven',
    description: 'Writers including F. Scott Fitzgerald, William Faulkner, Ernest Hemingway, Raymond Chandler, John Steinbeck, and Charles Bukowski make our booths their office.',
  },
  {
    year: '1989',
    title: 'Historic Designation',
    description: 'Musso & Frank is designated a Los Angeles Historic-Cultural Monument.',
  },
  {
    year: '2019',
    title: 'Centennial Celebration',
    description: 'We celebrate 100 years of service with the release of "The Musso & Frank Grill" book by Michael Callahan with introduction by Michael Connelly.',
  },
  {
    year: '2020',
    title: 'Award-Winning Book',
    description: 'The Musso & Frank Grill book wins the Gold Medal in the Independent Publisher Book Awards.',
  },
  {
    year: '2025',
    title: '106 Years Strong',
    description: 'Now in our 106th year, the fourth generation leads the restaurant with Mark Echeverria as Chief Operating Officer.',
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
    year: '2020',
    award: 'Independent Publisher Book Awards - Gold Medal',
    description: 'Our book "The Musso & Frank Grill" wins the prestigious Gold Medal in the Independent Publisher Book Awards',
  },
  {
    year: '2019-2025',
    award: 'Wine Spectator Award of Excellence',
    description: 'Consistently honored for our outstanding wine program featuring 450+ exceptional wines',
  },
  {
    year: '2019',
    award: 'Centennial Celebration & Book Release',
    description: 'Published "The Musso & Frank Grill" by Michael Callahan with introduction by novelist Michael Connelly',
  },
  {
    year: '1989',
    award: 'Los Angeles Historic-Cultural Monument',
    description: 'Officially designated as a Los Angeles Historic-Cultural Monument, recognizing our significance to the city',
  },
]

const employees = [
  {
    name: 'Ruben',
    role: 'serving since 1967',
    quote: 'Keith (Richards) gave me a 1954 Gibson guitar and signed it "To my fatso amigo."',
    image: '/images/musso-employee-ruban.jpg',
  },
  {
    name: 'Sergio',
    role: 'serving since 1972',
    quote: 'People ask me if we age the steaks; I tell them yes, but not as long as we age the servers.',
    image: '/images/musso-employee-sergio.jpg',
  },
  {
    name: 'Louie (Retired)',
    role: 'serving since 1957',
    quote: 'In 54 years, I have served 10s of thousands of customers at Musso\'s, and every single one was special!',
    image: '/images/musso-employee-louie.jpg',
  },
  {
    name: 'Manny',
    role: 'serving since 1989',
    quote: 'I have been a bartender in Hollywood for 58 years, 22 of them at Musso\'s. When guests come to the bar they tell me they hear I make the best martini in America. I tell them; "You be the judge."',
    image: '/images/musso-employee-manny.jpg',
  },
  {
    name: 'Peter',
    role: 'Maitre d',
    quote: 'We never think of our guests as customers – just new and old friends coming in to enjoy themselves... and a great dinner.',
    image: '/images/musso-employee-peter.jpg',
  },
  {
    name: 'Andrea',
    role: 'General Manager',
    quote: 'Being part of the team at Musso\'s is for me an emotional experience, since I read about this magical place in my favorite novelist\'s books. I knew about Musso\'s even before I imagined to venture in the restaurant Business. I\'m honored to be a part of this legacy.',
    image: '/images/musso-employee-andrea.jpg',
  },
  {
    name: 'Mark',
    role: 'Chief Executive Officer, Fourth Generation',
    quote: 'Musso\'s is a place where you feel comfortable, like you belong, always has been and always will be. When you step through the doors of The Musso & Frank Grill, you are part of our family.',
    image: '/images/musso-employee-mark.jpg',
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />

      <main id="main-content" className="pt-20">
        <Hero
          title="Our Story"
          subtitle="Since September 27, 1919"
          description="Hollywood's oldest restaurant—a living piece of cinema history"
          image="/images/homepage-hero-lg.jpg"
          height="medium"
        />

        {/* Introduction */}
        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <img
                src="/images/106-year-logo.jpg"
                alt="106 Years of Excellence"
                width={200}
                height={100}
                className="mx-auto mb-8"
              />
              <h2 className="heading-lg text-musso-burgundy mb-6">
                106 Years of Hollywood History
              </h2>
              <p className="body-lg text-gray-700">
                When Frank Toulet, Joseph Musso, and French chef Jean Rue opened the doors of
                Musso & Frank Grill on September 27, 1919, they created more than a restaurant—they established
                Hollywood's oldest restaurant. For over a century, we've been the gathering place for
                artists, writers, actors, and dreamers who shaped the entertainment capital of the world.
              </p>
            </div>

            <div>
              <h3 className="heading-md text-musso-burgundy mb-8">
                A Family Tradition
              </h3>
              <div className="float-right ml-8 mb-8 w-full md:w-3/5 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/images/history-hero.jpg"
                  alt="Interior view of Musso & Frank Grill showing red leather booths and vintage Hollywood atmosphere"
                  className="w-full h-auto"
                />
              </div>
              <p className="body-md text-gray-700 mb-4">
                In 1927, Joseph Carissimi and John Mosso purchased the restaurant from the original founders,
                beginning a family tradition that continues today. The Back Room opened in 1934, becoming the
                unofficial headquarters for Hollywood dealmaking.
              </p>
              <p className="body-md text-gray-700">
                Today, the families of John Mosso's three granddaughters—Steve and Anne Jones, John and Cathy
                Echeverria, and Richard and Kristen Kohlmeyer—are the proud owners, with John's great-grandson
                Mark Echeverria leading the fourth generation as Chief Executive Officer. For 106 years, from our
                classic recipes including the original 1914 fettucine Alfredo to our legendary martinis, every
                element has been carefully preserved.
              </p>
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

            <p className="body-lg text-gray-700">
              For over a century, these red leather booths have been the setting for countless Hollywood
              stories, literary masterpieces, and legendary conversations that shaped entertainment history.
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
              Our Team
            </h2>
            <p className="body-lg text-gray-700 mb-12">
              Many of our servers, bartenders, and chefs have been with us for decades, carrying forward
              our traditions with pride and dedication. When you dine with us, you're served by the best
              in the business—professionals who understand that hospitality is an art form.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-4xl font-playfair text-heritage-gold mb-2">40+</div>
                <p className="font-inter text-gray-600">Years of service (longest-serving employee)</p>
              </div>
              <div>
                <div className="text-4xl font-playfair text-heritage-gold mb-2">106</div>
                <p className="font-inter text-gray-600">Years serving Hollywood</p>
              </div>
              <div>
                <div className="text-4xl font-playfair text-heritage-gold mb-2">4</div>
                <p className="font-inter text-gray-600">Generations of family ownership</p>
              </div>
            </div>
            <Button href="/careers" variant="outline">
              Join Our Team
            </Button>
          </div>
        </Section>

        {/* Meet The Family */}
        <Section background="pattern">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-lg text-center text-musso-burgundy mb-12">
              Meet The Family
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/images/the-family.jpg"
                  alt="The fourth generation Musso & Frank family owners gathered together at the historic restaurant"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="body-lg text-gray-700 mb-6">
                  Today owned by families of three granddaughters of John Mosso: Steve and Anne Jones,
                  John and Cathy Echeverria, and Richard and Kristen Kohlmeyer. Mark Echeverria,
                  John Mosso's great grandson, serves as Chief Executive Officer.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-playfair text-xl font-semibold text-musso-burgundy mb-4">
                  The Founding Generation
                </h3>
                <p className="body-md text-gray-700">
                  John Mosso was born in Turin, Italy in 1888, and was brought to the United States
                  in 1922 by Joseph Carrissimi and his wife Rose, John's older sister. He immediately
                  went to work for the two men who had earlier founded the Grill, Joseph Musso and
                  Frank Toulet. Because the restaurant was not making money, they were willing to
                  sell to John Mosso and Joseph Carrissimi in 1927 for a price rumored to be $25,000.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-playfair text-xl font-semibold text-musso-burgundy mb-4">
                  Generations of Excellence
                </h3>
                <p className="body-md text-gray-700">
                  Rose Keegel, John's daughter, was active in the business in the 40's, 50's and 60's,
                  as was Edith Carissimi, Joseph's daughter. In the 70's and 80's, Rose's three daughters
                  and Edith's son began working in the business together. Today, third generation family
                  members, all of whom worked at Musso's growing up, are joined by the fourth generation,
                  including Mark Echeverria, who serves as Chief Executive Officer.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Employee Testimonials */}
        <Section background="white">
          <div className="max-w-7xl mx-auto">
            <h2 className="heading-md text-center text-musso-burgundy mb-12">
              Voices from Our Team
            </h2>
            <EmployeeCarousel employees={employees} />
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