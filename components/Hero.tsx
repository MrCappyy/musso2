import React from 'react'
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
    <section className={cn('hero-section', className)}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={imageAlt}
          className="object-cover w-full h-full"
        />
        {overlay && (
          <>
            {/* Desktop gradient */}
            <div className="hidden md:block absolute inset-0 hero-gradient-desktop" />
            {/* Tablet gradient */}
            <div className="hidden sm:block md:hidden absolute inset-0 hero-gradient-tablet" />
            {/* Mobile gradient */}
            <div className="sm:hidden absolute inset-0 hero-gradient-mobile" />
          </>
        )}
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-content-inner">
          {subtitle && (
            <p className="hero-label animate-fade-in">
              {subtitle}
            </p>
          )}

          <h1 className="hero-title animate-slide-up">
            {title}
          </h1>

          {description && (
            <p className="hero-subtitle animate-slide-up animation-delay-200">
              {description}
            </p>
          )}

          {(primaryCTA || secondaryCTA) && (
            <div className="hero-ctas animate-slide-up animation-delay-400">
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