'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Section from '@/components/Section'

const featuredArticle = {
  title: 'Mark Echeverria Leads Musso & Frank Grill Into A New Era',
  publication: 'Forbes',
  excerpt: 'As a fourth-generation owner, Echeverria tows the line between preserving the venue\'s cultural and culinary history while keeping it relevant in the city\'s dynamic and finicky dining landscape.',
  url: 'https://www.forbes.com/sites/lmowery/2024/04/17/mark-echevarria-leads-musso--frank-grill-into-a-new-era/?sh=c080c5776107',
  image: 'https://specials-images.forbesimg.com/imageserve/66200c161dba8edc23ec7c68/Mark-Echeverria-Musso---Frank/960x0.jpg?fit=scale',
}

const majorPublications = [
  {
    name: 'New York Times',
    logo: '/images/press-ny-times.jpg',
    articles: [
      { title: 'Once Upon a Time … in an Old Hollywood Restaurant', url: 'https://www.nytimes.com/2019/08/02/us/california-today-musso-frank-grill.html' },
    ]
  },
  {
    name: 'LA Times',
    logo: '/images/press-la-times.jpg',
    articles: [
      { title: 'Musso & Frank Grill, 100 years later', url: 'https://www.latimes.com/food/story/2019-09-24/musso-and-frank-after-100-years' },
      { title: 'New dining rooms for the first time in 66 years', url: 'https://www.latimes.com/food/story/2021-11-02/the-musso-frank-grill-expands-adds-new-dining-rooms-for-the-first-time-in-66-years' },
      { title: 'Where professional service is still in style', url: 'https://www.latimes.com/food/newsletter/2023-12-23/classic-los-angeles-restaurants-musso-and-frank-dal-rae-tasting-notes' },
    ]
  },
  {
    name: 'CNN',
    logo: '/images/press-cnn-entertainment.jpg',
    articles: [
      { title: 'How Tarantino Once Upon a Time traveled back to 1969 L.A.', url: 'https://www.cnn.com/2019/07/26/entertainment/once-upon-a-time-locations/index.html' },
    ]
  },
  {
    name: 'Variety',
    logo: '/images/press-variety.jpg',
    articles: [
      { title: 'Musso & Frank Celebrates 100 Years of Catering to Hollywood', url: 'https://variety.com/2019/film/spotlight/quentin-tarantino-2-1203349929/' },
    ]
  },
]

const additionalCoverage = [
  { title: 'Martini From the Iconic Hollywood Hangout', publication: 'Parade', logo: '/images/parade-logo-mnf.jpg', url: 'https://parade.com/974004/parade/musso-and-frank-martini/' },
  { title: 'Alana Haim and Vanity Fair Toast to Young Hollywood', publication: 'Vanity Fair', logo: '/images/vanity-logo-mnf.jpg', url: 'https://www.vanityfair.com/hollywood/photos/2022/03/vanity-fair-bacardi-rum-young-hollywood-party' },
  { title: 'The Anatomy of Legendary Martini', publication: 'LA Magazine', logo: '/images/press-la-magazine.png', url: 'https://www.lamag.com/article/musso-frank-martini/' },
  { title: 'Hollywood oldest restaurant turning 100', publication: 'Daily News', logo: '/images/press-daily-news.jpg', url: 'https://www.dailynews.com/2019/09/23/musso-franks-in-hollywood-is-turning-100-heres-how-its-celebrating/' },
  { title: '100th Anniversary Gets the Star Treatment', publication: 'Hollywood Reporter', logo: '/images/press-the-hollywood-reporter.jpg', url: 'https://www.hollywoodreporter.com/news/100th-anniversary-musso-frank-s-grill-gets-star-treatment-1244098' },
  { title: 'Cheers to Another 100 Years', publication: 'LA Weekly', logo: '/images/press-la-weekly-1.png', url: 'https://www.laweekly.com/musso-frank-grill-cheers-to-another-100-years/' },
  { title: 'What Keeps Hollywood Oldest Restaurant Running', publication: 'The Atlantic', logo: '/images/press-the-atlantic.jpg', url: 'https://www.theatlantic.com/entertainment/archive/2019/05/musso-and-frank-100-years-later/589264/' },
  { title: 'Hollywood 100th Anniversary Celebration', publication: 'KTLA', logo: '/images/press-ktla.jpg', url: 'https://ktla.com/video/musso-and-frank-grill-has-been-a-hollywood-staple-for-over-100-years/7245712/' },
  { title: 'Restaurant With a Star on Hollywood Walk of Fame', publication: 'NBC LA', logo: '/images/press-nbc-la.jpg', url: 'https://www.nbclosangeles.com/multimedia/Musso-Frank-Grill-Restaurant-Hollywood-Walk-of-Fame-Star-561625361.html' },
  { title: 'How LA century-old grill retains old-Hollywood charm', publication: 'OpenTable', logo: '/images/ot-logo-mnf.jpg', url: 'https://www.opentable.com/blog/musso-frank-grill-los-angeles/' },
  { title: 'The roaring 20s never died at these decadent LA bars', publication: 'The Guardian', logo: '/images/guardian-logo-mnf.jpg', url: 'https://www.theguardian.com/travel/2023/dec/30/los-angeles-hollywood-1920s-bars' },
  { title: 'Staying power: Musso & Frank Grill', publication: 'Restaurant Hospitality', logo: '/images/press-restaurant-hospitality.jpg', url: 'https://www.restaurant-hospitality.com/operations/staying-power-musso-frank-grill' },
  { title: 'We fact-check Quentin Tarantino Once Upon A Time', publication: 'USA Today', logo: '/images/press-usa-today.jpg', url: 'https://www.usatoday.com/story/entertainment/movies/2019/07/29/once-upon-time-hollywood-whats-truth-whats-fiction/1842709001/' },
  { title: 'A Taste of Old Hollywood', publication: 'LA Business Journal', logo: '/images/press-la-business-journal.jpg', url: 'https://labusinessjournal.com/news/2019/apr/26/taste-old-hollywood/' },
  { title: 'Menu Change For Thanksgiving', publication: 'Deadline', logo: '/images/press-deadline.jpg', url: 'https://deadline.com/2019/04/musso-frank-grill-100th-anniversary-private-rooms-1202598662/' },
  { title: 'Quentin Tarantino Homage to Hollywood', publication: 'Architectural Digest', logo: '/images/press-ad.jpg', url: 'https://www.architecturaldigest.com/story/once-upon-a-time-in-hollywood-set-design' },
  { title: 'Chaplin to Tarantino: Hollywood eatery turns 100', publication: 'Breitbart', logo: '/images/press-breitbart.jpg', url: 'https://www.breitbart.com/news/chaplin-to-tarantino-hollywood-eatery-musso-frank-turns-100/' },
  { title: 'French onion: the most romantic soup in L.A.', publication: 'LA Times', logo: '/images/press-la-times.jpg', url: 'https://www.latimes.com/food/story/2024-02-19/best-french-onion-soup-los-angeles' },
  { title: 'Stars come out for 100th anniversary in Hollywood', publication: 'Beverly Press', logo: '/images/press-beverly-press.jpg', url: 'https://beverlypress.com/2019/09/stars-come-out-for-musso-frank-grills-100th-anniversary-in-hollywood/' },
  { title: 'The Story of an LA Icon', publication: 'Discover Los Angeles', logo: '/images/lad-logo-mnf.jpg', url: 'https://www.discoverlosangeles.com/eat-drink/musso-frank-grill-the-story-of-an-la-icon' },
  { title: 'Building New Private Dining Rooms', publication: 'FSR Magazine', logo: '/images/press-fsr.jpg', url: 'https://www.fsrmagazine.com/content/100-year-old-musso-frank-grill-building-new-private-dining-rooms' },
  { title: 'The martinis of Los Angeles', publication: 'LA Times', logo: '/images/press-la-times.jpg', url: 'https://www.latimes.com/food/story/2019-09-21/martini-bars-los-angeles' },
  { title: 'Wine Spectator Award of Excellence', publication: 'Wine Spectator', logo: '/images/press-wine-spectator.jpg', url: 'https://restaurants.winespectator.com/restaurant/4977/the-musso-%26-frank-grill' },
  { title: 'Hollywood landmark prepares to celebrate', publication: 'Table Talk', logo: '/images/press-table-talk.jpg', url: 'https://www.tabletalkatlarrys.com/2019/08/musso-and-frank-grill-turns-100-a-hollywood-landmark-prepares-to-celebrate/' },
  { title: 'Stepping Into Musso Is Like A Warm Bath', publication: 'Atlantic Dispatch', logo: '/images/atlantic-dispatch-logo-resize.jpg', url: 'https://theatlanticdispatch.com/the-musso-and-frank-grill-stepping-into-mussos-is-like-stepping-in-a-warm-bath-a-sense-of-familiarity-and-comfort/' },
]

export default function PressPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <Hero
          title="Press & Media"
          subtitle="A Century in the Spotlight"
          description="Hollywood's oldest restaurant continues to captivate the world's most prestigious publications"
          image="/images/press-hero.jpg"
          height="medium"
        />

        {/* Featured Story */}
        <Section background="white">
          <div className="max-w-6xl mx-auto">
            <div className="bg-musso-burgundy rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto min-h-[400px]">
                  <img
                    src={featuredArticle.image}
                    alt="Mark Echeverria - Musso & Frank Grill"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-block px-4 py-2 bg-heritage-gold rounded-full mb-6 self-start">
                    <span className="font-inter font-semibold text-rich-black text-sm uppercase tracking-wide">
                      Featured Story
                    </span>
                  </div>
                  <h2 className="heading-lg text-white mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="body-lg text-white/90 mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <a
                    href={featuredArticle.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-white text-musso-burgundy hover:bg-heritage-gold hover:text-rich-black inline-block"
                  >
                    Read Full Article
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Publications Showcase */}
        <Section background="cream">
          <div className="max-w-7xl mx-auto">
            <h2 className="heading-md text-center text-musso-burgundy mb-4">
              Featured In Major Publications
            </h2>
            <p className="body-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              From the pages of America's most respected newspapers to international media, our story continues to inspire
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <a href="https://www.nytimes.com/2019/08/02/us/california-today-musso-frank-grill.html" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img src="/images/press-ny-times.jpg" alt="New York Times" width={150} height={60} className="object-contain" />
              </a>
              <a href="https://www.latimes.com/food/story/2019-09-24/musso-and-frank-after-100-years" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img src="/images/press-la-times.jpg" alt="LA Times" width={150} height={60} className="object-contain" />
              </a>
              <a href="https://www.cnn.com/2019/07/26/entertainment/once-upon-a-time-locations/index.html" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img src="/images/press-cnn-entertainment.jpg" alt="CNN" width={150} height={60} className="object-contain" />
              </a>
              <a href="https://variety.com/2019/film/spotlight/quentin-tarantino-2-1203349929/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img src="/images/press-variety.jpg" alt="Variety" width={150} height={60} className="object-contain" />
              </a>
              <a href="https://www.hollywoodreporter.com/news/100th-anniversary-musso-frank-s-grill-gets-star-treatment-1244098" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img src="/images/press-the-hollywood-reporter.jpg" alt="Hollywood Reporter" width={150} height={60} className="object-contain" />
              </a>
              <a href="https://www.vanityfair.com/hollywood/photos/2022/03/vanity-fair-bacardi-rum-young-hollywood-party" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img src="/images/vanity-logo-mnf.jpg" alt="Vanity Fair" width={150} height={60} className="object-contain" />
              </a>
              <a href="https://www.theatlantic.com/entertainment/archive/2019/05/musso-and-frank-100-years-later/589264/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img src="/images/press-the-atlantic.jpg" alt="The Atlantic" width={150} height={60} className="object-contain" />
              </a>
              <a href="https://www.theguardian.com/travel/2023/dec/30/los-angeles-hollywood-1920s-bars" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img src="/images/guardian-logo-mnf.jpg" alt="The Guardian" width={150} height={60} className="object-contain" />
              </a>
              <a href="https://www.lamag.com/article/musso-frank-martini/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img src="/images/press-la-magazine.png" alt="LA Magazine" width={150} height={60} className="object-contain" />
              </a>
              <a href="https://www.opentable.com/blog/musso-frank-grill-los-angeles/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img src="/images/ot-logo-mnf.jpg" alt="OpenTable" width={150} height={60} className="object-contain" />
              </a>
              <a href="https://www.discoverlosangeles.com/eat-drink/musso-frank-grill-the-story-of-an-la-icon" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img src="/images/lad-logo-mnf.jpg" alt="Discover Los Angeles" width={150} height={60} className="object-contain" />
              </a>
              <a href="https://parade.com/974004/parade/musso-and-frank-martini/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img src="/images/parade-logo-mnf.jpg" alt="Parade" width={150} height={60} className="object-contain" />
              </a>
              <a href="https://www.laweekly.com/musso-frank-grill-cheers-to-another-100-years/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img src="/images/press-la-weekly-1.png" alt="LA Weekly" width={150} height={60} className="object-contain" />
              </a>
              <a href="https://www.dailynews.com/2019/09/23/musso-franks-in-hollywood-is-turning-100-heres-how-its-celebrating/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img src="/images/press-daily-news.jpg" alt="Daily News" width={150} height={60} className="object-contain" />
              </a>
              <a href="https://ktla.com/video/musso-and-frank-grill-has-been-a-hollywood-staple-for-over-100-years/7245712/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img src="/images/press-ktla.jpg" alt="KTLA" width={150} height={60} className="object-contain" />
              </a>
              <a href="https://www.nbclosangeles.com/multimedia/Musso-Frank-Grill-Restaurant-Hollywood-Walk-of-Fame-Star-561625361.html" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img src="/images/press-nbc-la.jpg" alt="NBC LA" width={150} height={60} className="object-contain" />
              </a>
            </div>
          </div>
        </Section>

        {/* Featured Articles Masonry */}
        <Section background="white">
          <div className="max-w-7xl mx-auto">
            <h2 className="heading-md text-center text-musso-burgundy mb-4">
              Press Highlights
            </h2>
            <p className="body-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Discover our story through the eyes of the world's most prestigious publications
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalCoverage.map((article, idx) => (
                <a
                  key={idx}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  style={{
                    gridRow: idx === 0 || idx === 5 || idx === 11 ? 'span 2' : 'span 1'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-musso-burgundy/5 to-heritage-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative p-8 h-full flex flex-col">
                    <div className="flex-1 flex items-center justify-center mb-6">
                      <div className="relative w-full h-24 flex items-center justify-center">
                        <img
                          src={article.logo}
                          alt={article.publication}
                          width={180}
                          height={80}
                          className="object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    <div className="border-t border-gray-100 pt-6">
                      <h3 className="font-crimson text-base text-gray-800 mb-3 line-clamp-3 group-hover:text-musso-burgundy transition-colors duration-300">
                        {article.title}
                      </h3>

                      <div className="flex items-center justify-between">
                        <span className="text-xs font-inter text-heritage-gold uppercase tracking-wider">
                          {article.publication}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-classic-cream flex items-center justify-center group-hover:bg-heritage-gold transition-colors duration-300">
                          <svg className="w-4 h-4 text-musso-burgundy transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Section>

        {/* Media Contact */}
        <Section background="pattern">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-md text-center text-musso-burgundy mb-6">
              Media Inquiries
            </h2>
            <p className="body-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              For press inquiries, interviews, high-resolution images, and media kits, please contact our public relations representative
            </p>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-musso-burgundy p-12 flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 bg-heritage-gold rounded-full mb-6 flex items-center justify-center">
                    <svg className="w-12 h-12 text-musso-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="font-playfair text-3xl text-white mb-2">Dan Harary</h3>
                  <p className="text-heritage-gold font-inter text-sm uppercase tracking-widest">Public Relations</p>
                </div>

                <div className="p-12 flex flex-col justify-center space-y-6">
                  <a
                    href="mailto:dan@asburypr.com"
                    className="group flex items-center gap-4 p-4 rounded-lg hover:bg-classic-cream transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-musso-burgundy rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-heritage-gold transition-colors">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-gray-500 font-inter uppercase tracking-wider mb-1">Email</p>
                      <p className="font-crimson text-lg text-musso-burgundy group-hover:text-heritage-gold transition-colors">
                        dan@asburypr.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:310-859-1831"
                    className="group flex items-center gap-4 p-4 rounded-lg hover:bg-classic-cream transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-musso-burgundy rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-heritage-gold transition-colors">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-gray-500 font-inter uppercase tracking-wider mb-1">Phone</p>
                      <p className="font-crimson text-lg text-musso-burgundy group-hover:text-heritage-gold transition-colors">
                        (310) 859-1831
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  )
}
