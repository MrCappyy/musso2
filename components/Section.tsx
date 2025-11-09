import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface SectionProps {
  title?: string
  subtitle?: string
  description?: string
  children: React.ReactNode
  className?: string
  background?: 'cream' | 'white' | 'pattern' | 'dark'
  padding?: 'none' | 'small' | 'medium' | 'large'
  divider?: boolean
  id?: string
}

export default function Section({
  title,
  subtitle,
  description,
  children,
  className,
  background = 'cream',
  padding = 'large',
  divider = false,
  id,
}: SectionProps) {
  const backgroundClasses = {
    cream: 'bg-classic-cream',
    white: 'bg-white',
    pattern: 'bg-classic-cream bg-pattern-overlay',
    dark: 'bg-rich-black text-white',
  }

  const paddingClasses = {
    none: '',
    small: 'py-8 lg:py-12',
    medium: 'py-12 lg:py-16',
    large: 'py-16 lg:py-24',
  }

  return (
    <section
      id={id}
      className={cn(
        backgroundClasses[background],
        paddingClasses[padding],
        'relative',
        className
      )}
    >
      <div className="section-padding">
        {(title || subtitle || description) && (
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            {subtitle && (
              <p className="text-heritage-gold font-playfair text-lg mb-2">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="heading-lg text-rich-black mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="body-lg text-gray-600">
                {description}
              </p>
            )}
            {divider && (
              <div className="mt-8 flex justify-center">
                <Image
                  src="/images/divider.png"
                  alt=""
                  aria-hidden="true"
                  width={150}
                  height={30}
                  className="opacity-50"
                />
              </div>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}