import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Button from '@/components/Button'

const hollywoodFavorites = [
  {
    title: 'Sand Dabs with Meunière Sauce',
    description: 'Frank Sinatra\'s favorite meal and our most popular lunchtime dish since the 1920s. Delicate Pacific sand dabs prepared with classic Meunière sauce.',
    price: 36,
    image: '/images/product-highlight.png',
    badge: 'Sinatra\'s Favorite',
  },
  {
    title: 'Fettuccine Alfredo',
    description: 'Mary Pickford and Douglas Fairbanks brought this recipe from Rome in 1920, sharing it with our legendary Chef Jean Rue. Fresh pasta made daily in-house.',
    price: 30,
    image: '/images/product-thumb-highlight.png',
    badge: 'Hollywood Royalty',
  },
  {
    title: 'Grilled Lamb Kidneys with Bacon',
    description: 'Charlie Chaplin\'s beloved dish, on our menu since 1919. A bold, adventurous choice with parsley-lemon vinaigrette and crispy bacon.',
    price: 34,
    image: '/images/light-photo-bg.jpg',
    badge: 'Chaplin\'s Favorite',
  },
  {
    title: 'Chicken Pot Pie',
    description: 'Our longest-running dish. Detective Harry Bosch stops by every Thursday for it—and so can you. Chef Rue\'s original recipe, available daily.',
    price: 32,
    image: '/images/product-highlight.png',
    badge: 'Thursday\'s Legend',
  },
  {
    title: 'Short Ribs (Flanken Style)',
    description: 'Our most iconic dish since the 1940s, available Saturdays only. So legendary, we have chefs dedicated to just this dish. Call ahead—we often sell out.',
    price: 42,
    image: '/images/product-thumb-highlight.png',
    badge: 'Saturday\'s Legend',
  },
  {
    title: 'Flannel Cakes',
    description: 'Domingo Pule\'s legendary paper-thin pancakes, perfected over 50 years. So beloved, they\'ve been shipped across the country to stars like Mila Kunis.',
    price: 18,
    image: '/images/light-photo-bg.jpg',
    badge: 'Made with Love',
  },
]

const dailyFeatures = [
  {
    day: 'Tuesday',
    dish: 'Corned Beef and Cabbage'
  },
  {
    day: 'Wednesday',
    dish: 'Sauerbraten, Potato Pancakes'
  },
  {
    day: 'Thursday',
    dish: 'Homemade Chicken Pot Pie'
  },
  {
    day: 'Friday',
    dish: 'Bouillabaisse Marseillaise'
  },
  {
    day: 'Saturday',
    dish: 'Braised Short Ribs of Beef with Vegetables'
  },
  {
    day: 'Sunday',
    dish: 'Duck Confit'
  },
]

const testimonials = [
  {
    quote: "The most authentic Hollywood dining experience. Musso & Frank is where history comes alive.",
    author: 'Michael Thompson',
    title: 'Los Angeles Times Food Critic'
  },
  {
    quote: "After 106 years, they still serve the best martini in Hollywood. A true institution.",
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

      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <Hero
          title="Where Hollywood History is Served Daily"
          subtitle="Since 1919"
          description="Classic American cuisine meets legendary Hollywood hospitality"
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
              <img
                src="/images/employment-slider-7.jpg"
                alt="Musso & Frank servers in burgundy jackets standing inside the historic restaurant"
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-6 left-6 w-32 h-32 rounded-full shadow-lg overflow-hidden">
                <img
                  src="/images/106-year-logo.jpg"
                  alt="106 Years of Excellence"
                  className="object-cover scale-110 w-full h-full"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Daily Features */}
        <Section
          background="pattern"
          title="Our Daily Features"
        >
          <div className="daily-features-container">
            <div className="ornamental-text-divider mb-8" aria-hidden="true">
              ━━━ ◆ ◆ ◆ ━━━
            </div>
            <div className="grid md:grid-cols-2 gap-0 daily-features-grid">
              {dailyFeatures.map((feature) => (
                <div key={feature.day} className="daily-feature-item">
                  <p className="daily-feature-day">{feature.day}</p>
                  <p className="daily-feature-dish">{feature.dish}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Hollywood's Favorites */}
        <Section
          background="white"
          title="Hollywood's Favorites"
          subtitle="Dishes beloved by legends from the Golden Age to today"
        >
          {/* Ornamental Divider */}
          <div className="ornamental-text-divider mb-12 text-center" aria-hidden="true">
            ━━━ ◆ ◆ ◆ ━━━
          </div>

          {/* Responsive Grid: 3 cols (desktop) / 2 cols (tablet) / 1 col (mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hollywoodFavorites.map((item) => (
              <Card
                key={item.title}
                title={item.title}
                description={item.description}
                price={item.price}
                image={item.image}
                badge={item.badge}
                href="/menu"
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/menu" variant="primary" size="lg">
              VIEW FULL MENU
            </Button>
          </div>
        </Section>

        {/* Private Events CTA */}
        <section className="relative py-24 bg-rich-black">
          <div className="absolute inset-0">
            <img
              src="/images/privateevents-hero.jpg"
              alt="Elegant private dining room with white tablecloths and classic decor at Musso & Frank Grill"
              className="object-cover opacity-30 w-full h-full"
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
                <div className="text-heritage-gold text-4xl font-playfair mb-2">106+</div>
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

        {/* Hollywood Legacy */}
        <Section
          background="pattern"
          title="Our Hollywood Legacy"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/images/original.avif"
                  alt="Black and white archival photograph of Musso & Frank Grill's original facade from 1919 on Hollywood Boulevard"
                  className="object-cover sepia-[.2] w-full h-full"
                />
              </div>
              <div className="text-center md:text-left space-y-6">
                <p className="text-2xl leading-relaxed font-crimson text-gray-700">
                  For over a century, Musso & Frank has been the heartbeat of Hollywood,
                  where legends were made and deals were sealed over martinis. From Charlie
                  Chaplin to modern-day stars, our red leather booths have witnessed the
                  evolution of entertainment history.
                </p>
                <div className="text-heritage-gold font-playfair text-5xl font-light tracking-wider">
                  EST. 1919
                </div>
                <div className="pt-4">
                  <Button href="/about" variant="primary" size="lg">
                    Discover Our History
                  </Button>
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