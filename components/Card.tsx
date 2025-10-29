import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface CardProps {
  title: string
  description?: string
  image?: string
  imageAlt?: string
  href?: string
  price?: number | string
  badge?: string
  className?: string
  onClick?: () => void
  children?: React.ReactNode
}

export default function Card({
  title,
  description,
  image,
  imageAlt,
  href,
  price,
  badge,
  className,
  onClick,
  children,
}: CardProps) {
  const content = (
    <>
      {image && (
        <div className="relative h-48 lg:h-56 overflow-hidden">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {badge && (
            <span className="absolute top-4 left-4 px-3 py-1 bg-heritage-gold text-rich-black text-sm font-semibold rounded-full">
              {badge}
            </span>
          )}
        </div>
      )}
      <div className="p-6">
        <h3 className="font-playfair text-xl font-semibold text-rich-black mb-2 group-hover:text-musso-burgundy transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-gray-600 font-crimson text-base leading-relaxed mb-4">
            {description}
          </p>
        )}
        {price && (
          <p className="font-inter font-semibold text-musso-burgundy text-lg">
            {typeof price === 'number' ? `$${price}` : price}
          </p>
        )}
        {children}
      </div>
    </>
  )

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          'group block bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl hover:scale-[1.02] cursor-pointer',
          className
        )}
      >
        {content}
      </Link>
    )
  }

  return (
    <div
      onClick={onClick}
      className={cn(
        'group block bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl hover:scale-[1.02] cursor-pointer',
        className
      )}
    >
      {content}
    </div>
  )
}