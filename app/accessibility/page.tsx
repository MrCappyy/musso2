'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Section from '@/components/Section'

export default function AccessibilityPage() {
  return (
    <>
      <Header />

      <main id="main-content" className="pt-20">
        <Hero
          title="Accessibility Statement"
          subtitle="Our Commitment to All Guests"
          description="Ensuring Musso & Frank Grill is accessible to everyone"
          image="/images/homepage-hero-lg.jpg"
          height="medium"
        />

        {/* Introduction */}
        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-musso-burgundy mb-6">
              Our Commitment to Accessibility
            </h2>
            <p className="body-lg text-gray-700 mb-6">
              Musso & Frank Grill is committed to ensuring digital accessibility for all people, including those
              with disabilities. We are continually improving the user experience for everyone and applying the
              relevant accessibility standards to ensure we provide equal access to all of our users.
            </p>
            <p className="body-lg text-gray-700">
              This statement reflects our ongoing efforts to ensure that this website is accessible to people
              with disabilities, in accordance with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
            </p>
          </div>
        </Section>

        {/* Measures to Support Accessibility */}
        <Section background="cream">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-musso-burgundy mb-6">
              Measures to Support Accessibility
            </h2>
            <p className="body-lg text-gray-700 mb-6">
              Musso & Frank Grill takes the following measures to ensure accessibility of our website:
            </p>
            <ul className="space-y-3 text-gray-700 font-crimson text-lg">
              <li className="flex items-start">
                <span className="text-heritage-gold mr-3 mt-1">•</span>
                <span>Include accessibility as part of our mission statement and company values</span>
              </li>
              <li className="flex items-start">
                <span className="text-heritage-gold mr-3 mt-1">•</span>
                <span>Integrate accessibility into our procurement practices and development processes</span>
              </li>
              <li className="flex items-start">
                <span className="text-heritage-gold mr-3 mt-1">•</span>
                <span>Provide ongoing accessibility training for our staff</span>
              </li>
              <li className="flex items-start">
                <span className="text-heritage-gold mr-3 mt-1">•</span>
                <span>Employ formal accessibility quality assurance methods</span>
              </li>
              <li className="flex items-start">
                <span className="text-heritage-gold mr-3 mt-1">•</span>
                <span>Include people with disabilities in our design and testing processes</span>
              </li>
            </ul>
          </div>
        </Section>

        {/* Conformance Status */}
        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-musso-burgundy mb-6">
              Conformance Status
            </h2>
            <p className="body-lg text-gray-700 mb-6">
              The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers to
              improve accessibility for people with disabilities. It defines three levels of conformance: Level A,
              Level AA, and Level AAA.
            </p>
            <div className="bg-classic-cream p-6 rounded-lg border-l-4 border-heritage-gold">
              <p className="font-playfair text-xl text-musso-burgundy mb-2 font-semibold">
                WCAG 2.1 Level AA Conformance
              </p>
              <p className="body-md text-gray-700">
                The Musso & Frank Grill website is designed to conform to WCAG 2.1 Level AA standards.
                We are committed to maintaining and improving this conformance over time.
              </p>
            </div>
          </div>
        </Section>

        {/* Technical Specifications */}
        <Section background="cream">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-musso-burgundy mb-6">
              Technical Specifications
            </h2>
            <p className="body-lg text-gray-700 mb-6">
              Accessibility of the Musso & Frank Grill website relies on the following technologies to work
              with the particular combination of web browser and any assistive technologies or plugins installed
              on your computer:
            </p>
            <ul className="space-y-2 text-gray-700 font-crimson text-lg">
              <li className="flex items-start">
                <span className="text-heritage-gold mr-3 mt-1">•</span>
                <span>HTML5</span>
              </li>
              <li className="flex items-start">
                <span className="text-heritage-gold mr-3 mt-1">•</span>
                <span>WAI-ARIA (Accessible Rich Internet Applications)</span>
              </li>
              <li className="flex items-start">
                <span className="text-heritage-gold mr-3 mt-1">•</span>
                <span>CSS3</span>
              </li>
              <li className="flex items-start">
                <span className="text-heritage-gold mr-3 mt-1">•</span>
                <span>JavaScript</span>
              </li>
            </ul>
            <p className="body-md text-gray-700 mt-6">
              These technologies are relied upon for conformance with the accessibility standards used.
            </p>
          </div>
        </Section>

        {/* Accessibility Features */}
        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-musso-burgundy mb-6">
              Accessibility Features
            </h2>
            <p className="body-lg text-gray-700 mb-6">
              Our website includes the following accessibility features:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-classic-cream p-6 rounded-lg">
                <h3 className="font-playfair text-xl font-semibold text-musso-burgundy mb-3">
                  Keyboard Navigation
                </h3>
                <p className="body-md text-gray-700">
                  All interactive elements can be accessed and operated using only a keyboard, without requiring a mouse.
                </p>
              </div>
              <div className="bg-classic-cream p-6 rounded-lg">
                <h3 className="font-playfair text-xl font-semibold text-musso-burgundy mb-3">
                  Screen Reader Compatible
                </h3>
                <p className="body-md text-gray-700">
                  Our website is optimized for use with popular screen readers including NVDA, JAWS, and VoiceOver.
                </p>
              </div>
              <div className="bg-classic-cream p-6 rounded-lg">
                <h3 className="font-playfair text-xl font-semibold text-musso-burgundy mb-3">
                  Alternative Text
                </h3>
                <p className="body-md text-gray-700">
                  All meaningful images include descriptive alternative text for users who cannot see them.
                </p>
              </div>
              <div className="bg-classic-cream p-6 rounded-lg">
                <h3 className="font-playfair text-xl font-semibold text-musso-burgundy mb-3">
                  Color Contrast
                </h3>
                <p className="body-md text-gray-700">
                  Text and interactive elements meet WCAG AA contrast ratios for readability.
                </p>
              </div>
              <div className="bg-classic-cream p-6 rounded-lg">
                <h3 className="font-playfair text-xl font-semibold text-musso-burgundy mb-3">
                  Consistent Navigation
                </h3>
                <p className="body-md text-gray-700">
                  Navigation menus and page structures are consistent throughout the website.
                </p>
              </div>
              <div className="bg-classic-cream p-6 rounded-lg">
                <h3 className="font-playfair text-xl font-semibold text-musso-burgundy mb-3">
                  Form Labels
                </h3>
                <p className="body-md text-gray-700">
                  All form fields have clearly associated labels and instructions for completion.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Physical Accessibility */}
        <Section background="pattern">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-musso-burgundy mb-6">
              Physical Restaurant Accessibility
            </h2>
            <p className="body-lg text-gray-700 mb-6">
              In addition to our digital accessibility efforts, Musso & Frank Grill is committed to providing
              an accessible dining experience for all guests:
            </p>
            <ul className="space-y-3 text-gray-700 font-crimson text-lg">
              <li className="flex items-start">
                <span className="text-heritage-gold mr-3 mt-1">•</span>
                <span>Wheelchair-accessible entrance and dining areas</span>
              </li>
              <li className="flex items-start">
                <span className="text-heritage-gold mr-3 mt-1">•</span>
                <span>Accessible restroom facilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-heritage-gold mr-3 mt-1">•</span>
                <span>Braille menus available upon request</span>
              </li>
              <li className="flex items-start">
                <span className="text-heritage-gold mr-3 mt-1">•</span>
                <span>Service animals welcome</span>
              </li>
              <li className="flex items-start">
                <span className="text-heritage-gold mr-3 mt-1">•</span>
                <span>Staff trained to assist guests with disabilities</span>
              </li>
            </ul>
            <p className="body-md text-gray-700 mt-6">
              If you have specific accessibility needs, please call us in advance at (323) 467-7788 so we can
              best accommodate you.
            </p>
          </div>
        </Section>

        {/* Feedback */}
        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-musso-burgundy mb-6">
              Feedback and Contact Information
            </h2>
            <p className="body-lg text-gray-700 mb-6">
              We welcome your feedback on the accessibility of the Musso & Frank Grill website. Please let us know
              if you encounter accessibility barriers:
            </p>
            <div className="bg-classic-cream p-8 rounded-lg">
              <div className="space-y-4">
                <div>
                  <p className="font-inter font-semibold text-gray-700 mb-1">Phone:</p>
                  <a href="tel:323-467-7788" className="text-musso-burgundy hover:text-heritage-gold text-lg transition-colors">
                    (323) 467-7788
                  </a>
                </div>
                <div>
                  <p className="font-inter font-semibold text-gray-700 mb-1">Email:</p>
                  <a href="mailto:info@mussoandfrank.com" className="text-musso-burgundy hover:text-heritage-gold text-lg transition-colors">
                    info@mussoandfrank.com
                  </a>
                </div>
                <div>
                  <p className="font-inter font-semibold text-gray-700 mb-1">Address:</p>
                  <p className="text-gray-700 text-lg">
                    6667 Hollywood Boulevard<br />
                    Hollywood, CA 90028
                  </p>
                </div>
              </div>
            </div>
            <p className="body-md text-gray-700 mt-6">
              We strive to respond to accessibility feedback within 5 business days and to propose a solution
              within 10 business days.
            </p>
          </div>
        </Section>

        {/* Assessment and Compliance */}
        <Section background="cream">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-musso-burgundy mb-6">
              Assessment Approach
            </h2>
            <p className="body-lg text-gray-700 mb-6">
              Musso & Frank Grill assessed the accessibility of our website by the following approaches:
            </p>
            <ul className="space-y-3 text-gray-700 font-crimson text-lg">
              <li className="flex items-start">
                <span className="text-heritage-gold mr-3 mt-1">•</span>
                <span>Self-evaluation using automated accessibility testing tools</span>
              </li>
              <li className="flex items-start">
                <span className="text-heritage-gold mr-3 mt-1">•</span>
                <span>Manual testing with keyboard-only navigation</span>
              </li>
              <li className="flex items-start">
                <span className="text-heritage-gold mr-3 mt-1">•</span>
                <span>Screen reader compatibility testing (NVDA, VoiceOver)</span>
              </li>
              <li className="flex items-start">
                <span className="text-heritage-gold mr-3 mt-1">•</span>
                <span>Color contrast verification tools</span>
              </li>
              <li className="flex items-start">
                <span className="text-heritage-gold mr-3 mt-1">•</span>
                <span>User feedback and testing with people with disabilities</span>
              </li>
            </ul>
          </div>
        </Section>

        {/* Last Updated */}
        <Section background="white">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 font-inter text-sm">
              This accessibility statement was last updated on October 30, 2025.
            </p>
            <p className="text-gray-600 font-inter text-sm mt-2">
              We are committed to maintaining and improving the accessibility of our website.
              This statement will be updated as we make improvements.
            </p>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  )
}
