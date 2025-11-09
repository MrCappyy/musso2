import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  href?: string
  external?: boolean
  fullWidth?: boolean
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      href,
      external = false,
      fullWidth = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center font-inter font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-heritage-gold disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary: 'bg-musso-burgundy text-white hover:bg-[#6D0000] shadow-[0_4px_16px_rgba(139,0,0,0.4)] hover:shadow-[0_6px_24px_rgba(139,0,0,0.5)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_2px_8px_rgba(139,0,0,0.4)]',
      secondary: 'bg-heritage-gold text-rich-black hover:bg-opacity-90',
      outline: 'border-2 border-musso-burgundy text-musso-burgundy hover:bg-musso-burgundy hover:text-white active:bg-musso-burgundy/90',
      ghost: 'bg-transparent text-musso-burgundy hover:bg-musso-burgundy/10',
    }

    const sizes = {
      sm: 'px-4 py-2 text-xs rounded-sm tracking-[0.08em] uppercase',
      md: 'px-6 py-3 text-sm rounded-sm tracking-[0.1em] uppercase',
      lg: 'px-10 py-[18px] text-sm rounded-sm tracking-[0.1em] uppercase',
      xl: 'px-12 py-5 text-base rounded tracking-[0.1em] uppercase',
    }

    const classes = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      fullWidth && 'w-full',
      className
    )

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
          >
            {children}
          </a>
        )
      }
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      )
    }

    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button