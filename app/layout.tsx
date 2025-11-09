import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import StaticPinProtection from '@/components/StaticPinProtection'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://mussoandfrank.com'),
  title: 'Musso & Frank Grill - Hollywood\'s Oldest Restaurant Since 1919',
  description: 'Experience the legendary Musso & Frank Grill, Hollywood\'s oldest restaurant serving classic American cuisine since 1919. Make reservations, explore our menu, and plan private events at this iconic establishment.',
  keywords: 'Musso & Frank, Hollywood restaurant, fine dining, historic restaurant, private events, Hollywood Boulevard',
  authors: [{ name: 'Musso & Frank Grill' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mussoandfrank.com',
    siteName: 'Musso & Frank Grill',
    title: 'Musso & Frank Grill - Hollywood\'s Oldest Restaurant',
    description: 'Since 1919, serving Hollywood\'s finest in an atmosphere of timeless elegance',
    images: [
      {
        url: '/images/homepage-hero-lg.jpg',
        width: 1200,
        height: 630,
        alt: 'Musso & Frank Grill Restaurant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Musso & Frank Grill',
    description: 'Hollywood\'s oldest restaurant since 1919',
    images: ['/images/homepage-hero-lg.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased">
        <StaticPinProtection>
          {children}
        </StaticPinProtection>
        <Script
          src="https://website-widgets.pages.dev/dist/sienna.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}