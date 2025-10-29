import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <Section background="white" padding="large">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-lg text-musso-burgundy text-center mb-8">
              Privacy Policy
            </h1>

            <p className="text-gray-600 font-crimson mb-8 text-center">
              Last updated: January 1, 2024
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="font-playfair text-2xl font-semibold text-rich-black mb-4">
                  1. Information We Collect
                </h2>
                <p className="text-gray-700 font-crimson mb-4">
                  Musso & Frank Grill ("we," "our," or "us") collects information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 font-crimson">
                  <li>Make a reservation</li>
                  <li>Sign up for our newsletter</li>
                  <li>Make a purchase</li>
                  <li>Contact us with inquiries</li>
                  <li>Create an account</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-playfair text-2xl font-semibold text-rich-black mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-gray-700 font-crimson mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 font-crimson">
                  <li>Process your reservations and orders</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Respond to your comments and questions</li>
                  <li>Improve our services and customer experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-playfair text-2xl font-semibold text-rich-black mb-4">
                  3. Information Sharing
                </h2>
                <p className="text-gray-700 font-crimson mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 font-crimson">
                  <li>With service providers who assist in our operations</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and safety</li>
                  <li>With your consent</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-playfair text-2xl font-semibold text-rich-black mb-4">
                  4. Data Security
                </h2>
                <p className="text-gray-700 font-crimson mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-playfair text-2xl font-semibold text-rich-black mb-4">
                  5. Your Rights
                </h2>
                <p className="text-gray-700 font-crimson mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 font-crimson">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Lodge a complaint with supervisory authorities</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-playfair text-2xl font-semibold text-rich-black mb-4">
                  6. Cookies
                </h2>
                <p className="text-gray-700 font-crimson mb-4">
                  We use cookies and similar technologies to enhance your experience on our website. You can control cookies through your browser settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-playfair text-2xl font-semibold text-rich-black mb-4">
                  7. Children's Privacy
                </h2>
                <p className="text-gray-700 font-crimson mb-4">
                  Our services are not directed to individuals under 21. We do not knowingly collect personal information from children under 21.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-playfair text-2xl font-semibold text-rich-black mb-4">
                  8. Changes to This Policy
                </h2>
                <p className="text-gray-700 font-crimson mb-4">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-playfair text-2xl font-semibold text-rich-black mb-4">
                  9. Contact Us
                </h2>
                <p className="text-gray-700 font-crimson mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-classic-cream p-6 rounded-lg">
                  <p className="font-inter text-gray-700">
                    Musso & Frank Grill<br />
                    6667 Hollywood Boulevard<br />
                    Hollywood, CA 90028<br />
                    Email: privacy@mussoandfrank.com<br />
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