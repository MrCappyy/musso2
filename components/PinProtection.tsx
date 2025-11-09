'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function PinProtection({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Check if already authenticated
    const auth = sessionStorage.getItem('musso_authenticated')
    if (auth === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  useEffect(() => {
    // Track page views if authenticated
    if (isAuthenticated && pathname) {
      fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'pageview',
          page: pathname
        })
      }).catch(console.error)
    }
  }, [pathname, isAuthenticated])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/verify-pin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin })
      })

      if (response.ok) {
        sessionStorage.setItem('musso_authenticated', 'true')
        setIsAuthenticated(true)

        // Track successful login
        fetch('/api/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'login',
            pin: pin
          })
        }).catch(console.error)
      } else {
        setError('Invalid PIN. Please try again.')
        setPin('')
      }
    } catch (err) {
      setError('Connection error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (isAuthenticated) {
    return <>{children}</>
  }

  return (
    <div className="fixed inset-0 bg-rich-black flex items-center justify-center z-[9999]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-pattern-overlay" />
      </div>

      <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-musso-burgundy rounded-full mx-auto mb-6 flex items-center justify-center">
            <svg className="w-10 h-10 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="font-playfair text-3xl font-bold text-musso-burgundy mb-3">
            Private Preview
          </h1>
          <p className="text-gray-600 font-crimson text-lg">
            Enter PIN to access the Musso & Frank website showcase
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="pin" className="block text-sm font-inter font-semibold text-gray-700 mb-2">
              Access PIN
            </label>
            <input
              id="pin"
              type="password"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={8}
              value={pin}
              onChange={(e) => setPin(e.target.value.replace(/\D/g, ''))}
              className="w-full px-6 py-4 text-center text-xl font-mono border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-musso-burgundy focus:border-musso-burgundy transition-colors tracking-widest"
              placeholder="1919-6667"
              required
              autoFocus
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
              <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-red-700 font-inter">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading || pin.length !== 8}
            className="w-full py-4 bg-musso-burgundy text-white font-inter font-semibold text-lg rounded-lg hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            {loading ? 'Verifying...' : 'Enter'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 font-inter">
            © 2025 Musso & Frank Grill • Hollywood's Oldest Restaurant
          </p>
        </div>
      </div>
    </div>
  )
}
