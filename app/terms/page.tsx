import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'

export default function TermsPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <Section background="white" padding="large">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-lg text-musso-burgundy text-center mb-8">
              Terms of Service
            </h1>

            <p className="text-gray-600 font-crimson mb-8 text-center">
              Effective Date: January 1, 2024
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="font-playfair text-2xl font-semibold text-rich-black mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-700 font-crimson mb-4">
                  By accessing and using the Musso & Frank Grill website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-playfair text-2xl font-semibold text-rich-black mb-4">
                  2. Reservations
                </h2>
                <p className="text-gray-700 font-crimson mb-4">
                  Reservations made through our website are subject to availability. We reserve the right to cancel or modify reservations in case of unforeseen circumstances.
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 font-crimson">
                  <li>Tables are held for 15 minutes past reservation time</li>
                  <li>Cancellations must be made at least 2 hours in advance</li>
                  <li>Large party cancellations (8+ guests) require 24 hours notice</li>
                  <li>Repeated no-shows may result in restriction of booking privileges</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-playfair text-2xl font-semibold text-rich-black mb-4">
                  3. Gift Cards and Purchases
                </h2>
                <p className="text-gray-700 font-crimson mb-4">
                  Gift card purchases and merchandise sales are subject to the following terms:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 font-crimson">
                  <li>Gift cards are non-refundable and cannot be exchanged for cash</li>
                  <li>Lost or stolen gift cards will not be replaced</li>
                  <li>Gift cards do not expire</li>
                  <li>Merchandise may be returned within 30 days with receipt</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-playfair text-2xl font-semibold text-rich-black mb-4">
                  4. Intellectual Property
                </h2>
                <p className="text-gray-700 font-crimson mb-4">
                  All content on this website, including text, graphics, logos, images, and software, is the property of Musso & Frank Grill and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our written permission.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-playfair text-2xl font-semibold text-rich-black mb-4">
                  5. User Conduct
                </h2>
                <p className="text-gray-700 font-crimson mb-4">
                  When using our services, you agree to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 font-crimson">
                  <li>Provide accurate and complete information</li>
                  <li>Not engage in fraudulent or unlawful activities</li>
                  <li>Not violate any applicable laws or regulations</li>
                  <li>Not interfere with the proper functioning of our website</li>
                  <li>Respect our dress code and conduct policies when dining</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-playfair text-2xl font-semibold text-rich-black mb-4">
                  6. Limitation of Liability
                </h2>
                <p className="text-gray-700 font-crimson mb-4">
                  Musso & Frank Grill shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid by you for the specific service in question.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-playfair text-2xl font-semibold text-rich-black mb-4">
                  7. Indemnification
                </h2>
                <p className="text-gray-700 font-crimson mb-4">
                  You agree to indemnify and hold harmless Musso & Frank Grill, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-playfair text-2xl font-semibold text-rich-black mb-4">
                  8. Privacy
                </h2>
                <p className="text-gray-700 font-crimson mb-4">
                  Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and protect your information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-playfair text-2xl font-semibold text-rich-black mb-4">
                  9. Modifications to Terms
                </h2>
                <p className="text-gray-700 font-crimson mb-4">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any modifications constitutes acceptance of the updated terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-playfair text-2xl font-semibold text-rich-black mb-4">
                  10. Governing Law
                </h2>
                <p className="text-gray-700 font-crimson mb-4">
                  These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-playfair text-2xl font-semibold text-rich-black mb-4">
                  11. Contact Information
                </h2>
                <p className="text-gray-700 font-crimson mb-4">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-classic-cream p-6 rounded-lg">
                  <p className="font-inter text-gray-700">
                    Musso & Frank Grill<br />
                    6667 Hollywood Boulevard<br />
                    Hollywood, CA 90028<br />
                    Email: legal@mussoandfrank.com<br />
                    Phone: (323) 467-7788
                  </p>
                </div>
              </section>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  )
}