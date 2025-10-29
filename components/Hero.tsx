import React from 'react'
import Image from 'next/image'
import Button from './Button'
import { cn } from '@/lib/utils'

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  image: string
  imageAlt?: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  overlay?: boolean
  height?: 'full' | 'large' | 'medium'
  className?: string
}

export default function Hero({
  title,
  subtitle,
  description,
  image,
  imageAlt = 'Hero image',
  primaryCTA,
  secondaryCTA,
  overlay = true,
  height = 'full',
  className,
}: HeroProps) {
  const heightClasses = {
    full: 'min-h-screen',
    large: 'min-h-[80vh]',
    medium: 'min-h-[60vh]',
  }

  return (
    <section className={cn('relative', heightClasses[height], className)}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          quality={95}
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-b from-rich-black/60 via-rich-black/40 to-rich-black/60" />
        )}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="section-padding text-center max-w-4xl mx-auto py-20">
          {subtitle && (
            <p className="text-heritage-gold font-playfair text-lg lg:text-xl mb-4 animate-fade-in">
              {subtitle}
            </p>
          )}

          <h1 className="heading-xl text-white mb-6 text-shadow-xl animate-slide-up">
            {title}
          </h1>

          {description && (
            <p className="body-lg text-white/90 mb-8 text-shadow-lg animate-slide-up animation-delay-200">
              {description}
            </p>
          )}

          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-400">
              {primaryCTA && (
                <Button
                  href={primaryCTA.href}
                  size="lg"
                  variant="primary"
                >
                  {primaryCTA.text}
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  href={secondaryCTA.href}
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-rich-black"
                >
                  {secondaryCTA.text}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Decorative Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-classic-cream to-transparent" />
    </section>
  )
}