'use client'

import React, { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { cn, formatPrice } from '@/lib/utils'

const giftCardOptions = [
  { id: 'gc-50', amount: 50, popular: false },
  { id: 'gc-100', amount: 100, popular: true },
  { id: 'gc-250', amount: 250, popular: false },
  { id: 'gc-500', amount: 500, popular: false },
  { id: 'gc-custom', amount: 'custom', popular: false },
]

const merchandise = [
  {
    id: 'tshirt-classic',
    name: 'Classic Logo T-Shirt',
    price: 35,
    category: 'apparel',
    image: '/images/product-thumb-highlight.png',
    description: 'Premium cotton with vintage Musso & Frank logo',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'polo-burgundy',
    name: 'Burgundy Polo Shirt',
    price: 65,
    category: 'apparel',
    image: '/images/product-highlight.png',
    description: 'Embroidered logo on premium pique cotton',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'apron-chef',
    name: 'Chef\'s Apron',
    price: 45,
    category: 'apparel',
    image: '/images/product-thumb-highlight.png',
    description: 'Professional-grade canvas with adjustable straps',
    sizes: ['One Size'],
  },
  {
    id: 'mug-ceramic',
    name: 'Ceramic Coffee Mug',
    price: 22,
    category: 'barware',
    image: '/images/product-highlight.png',
    description: 'Hand-crafted ceramic with gold rim detail',
  },
  {
    id: 'glasses-martini',
    name: 'Martini Glass Set',
    price: 85,
    category: 'barware',
    image: '/images/product-thumb-highlight.png',
    description: 'Set of 2 crystal martini glasses with etched logo',
  },
  {
    id: 'shaker-cocktail',
    name: 'Cocktail Shaker',
    price: 75,
    category: 'barware',
    image: '/images/product-highlight.png',
    description: 'Stainless steel professional bar shaker',
  },
  {
    id: 'book-cookbook',
    name: 'Centennial Cookbook',
    price: 55,
    category: 'collectibles',
    image: '/images/product-thumb-highlight.png',
    description: 'Hardcover with 100 classic recipes and stories',
  },
  {
    id: 'pin-anniversary',
    name: '105th Anniversary Pin',
    price: 25,
    category: 'collectibles',
    image: '/images/product-highlight.png',
    description: 'Limited edition enamel pin',
  },
]

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'gift-cards', name: 'Gift Cards' },
  { id: 'apparel', name: 'Apparel' },
  { id: 'barware', name: 'Barware' },
  { id: 'collectibles', name: 'Collectibles' },
]

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [cart, setCart] = useState<any[]>([])
  const [selectedGiftCard, setSelectedGiftCard] = useState('gc-100')
  const [customAmount, setCustomAmount] = useState('')
  const [showCart, setShowCart] = useState(false)

  const addToCart = (item: any) => {
    setCart([...cart, { ...item, id: Date.now() }])
    setShowCart(true)
    setTimeout(() => setShowCart(false), 3000)
  }

  const filteredProducts = activeCategory === 'all'
    ? merchandise
    : activeCategory === 'gift-cards'
    ? []
    : merchandise.filter(item => item.category === activeCategory)

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price || item.amount || 0), 0)
  }

  return (
    <>
      <Header />

      <main className="pt-20">
        <Hero
          title="Shop Musso & Frank"
          subtitle="Gifts & Merchandise"
          description="Take home a piece of Hollywood history"
          image="/images/rewards-hero.jpg"
          height="medium"
        />

        {/* Cart Notification */}
        {showCart && (
          <div className="fixed top-24 right-4 bg-heritage-gold text-rich-black px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-down">
            <p className="font-inter font-medium">Added to cart! ({cart.length} items)</p>
          </div>
        )}

        {/* Category Navigation */}
        <Section background="white" padding="small">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'px-6 py-2 font-inter font-medium rounded-full transition-all duration-200',
                  activeCategory === category.id
                    ? 'bg-musso-burgundy text-white'
                    : 'bg-classic-cream text-rich-black hover:bg-heritage-gold/20'
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </Section>

        {/* Gift Cards Section */}
        {(activeCategory === 'all' || activeCategory === 'gift-cards') && (
          <Section background="pattern" id="gift-cards">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-md text-center text-musso-burgundy mb-8">
                Gift Cards
              </h2>
              <p className="body-lg text-center text-gray-700 mb-12">
                Give the gift of an unforgettable dining experience at Hollywood's most iconic restaurant
              </p>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="font-playfair text-xl font-semibold mb-6">
                  Choose Amount
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {giftCardOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedGiftCard(option.id)}
                      className={cn(
                        'relative p-4 rounded-lg border-2 transition-all duration-200',
                        selectedGiftCard === option.id
                          ? 'border-heritage-gold bg-heritage-gold/10'
                          : 'border-gray-200 hover:border-heritage-gold/50'
                      )}
                    >
                      {option.popular && (
                        <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-heritage-gold text-rich-black text-xs font-inter font-semibold rounded-full">
                          Most Popular
                        </span>
                      )}
                      <p className="font-playfair text-2xl text-musso-burgundy">
                        {option.amount === 'custom' ? 'Custom' : formatPrice(option.amount as number)}
                      </p>
                    </button>
                  ))}
                </div>

                {selectedGiftCard === 'gc-custom' && (
                  <div className="mb-6">
                    <label className="block text-sm font-inter font-medium text-rich-black mb-2">
                      Enter Custom Amount
                    </label>
                    <input
                      type="number"
                      min="25"
                      max="1000"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      placeholder="Enter amount ($25 - $1000)"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-heritage-gold focus:ring-2 focus:ring-heritage-gold/20 font-inter"
                    />
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-inter font-medium text-rich-black mb-2">
                      Recipient Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter recipient's name"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-heritage-gold focus:ring-2 focus:ring-heritage-gold/20 font-inter"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-inter font-medium text-rich-black mb-2">
                      Recipient Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter recipient's email"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-heritage-gold focus:ring-2 focus:ring-heritage-gold/20 font-inter"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-inter font-medium text-rich-black mb-2">
                    Personal Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Add a personal message to your gift..."
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-heritage-gold focus:ring-2 focus:ring-heritage-gold/20 font-inter resize-none"
                  />
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-600 font-inter mb-1">Delivery Options:</p>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input type="radio" name="delivery" defaultChecked className="mr-2" />
                        <span className="font-inter text-sm">Email Delivery</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="delivery" className="mr-2" />
                        <span className="font-inter text-sm">Physical Card (+$5)</span>
                      </label>
                    </div>
                  </div>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => {
                      const amount = selectedGiftCard === 'gc-custom'
                        ? parseInt(customAmount)
                        : giftCardOptions.find(o => o.id === selectedGiftCard)?.amount
                      if (amount) {
                        addToCart({ type: 'gift-card', amount, name: `Gift Card - ${formatPrice(typeof amount === 'number' ? amount : 0)}` })
                      }
                    }}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </Section>
        )}

        {/* Merchandise Section */}
        {activeCategory !== 'gift-cards' && (
          <Section background={activeCategory === 'all' ? 'white' : 'pattern'}>
            <div className="max-w-6xl mx-auto">
              {activeCategory === 'all' && (
                <>
                  <h2 className="heading-md text-center text-musso-burgundy mb-8">
                    Merchandise
                  </h2>
                  <p className="body-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
                    Premium apparel, barware, and collectibles celebrating 105 years of Hollywood history
                  </p>
                </>
              )}

              <div className="grid md:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                    <div className="relative h-64 overflow-hidden bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover group-hover:scale-110 transition-transform duration-300 w-full h-full"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-playfair text-xl font-semibold text-rich-black mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 font-crimson text-sm mb-4">
                        {product.description}
                      </p>
                      {product.sizes && (
                        <div className="flex gap-2 mb-4">
                          {product.sizes.map((size) => (
                            <button
                              key={size}
                              className="px-3 py-1 border border-gray-300 rounded text-sm font-inter hover:border-heritage-gold hover:bg-heritage-gold/10 transition-colors"
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      )}
                      <div className="flex justify-between items-center">
                        <span className="font-playfair text-2xl text-musso-burgundy">
                          {formatPrice(product.price)}
                        </span>
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => addToCart(product)}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        )}

        {/* Shopping Cart Summary */}
        {cart.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-rich-black text-white p-4 z-40">
            <div className="section-padding flex justify-between items-center">
              <div>
                <p className="font-inter">
                  Cart: {cart.length} items • Total: {formatPrice(getCartTotal())}
                </p>
              </div>
              <Button variant="secondary" size="md">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        )}

        {/* Shipping Information */}
        <Section background="cream">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center text-musso-burgundy mb-8">
              Shipping & Returns
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-heritage-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-2">Free Shipping</h3>
                <p className="text-sm text-gray-600 font-inter">
                  On orders over $100. Standard shipping 5-7 business days.
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-heritage-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-2">Quality Guarantee</h3>
                <p className="text-sm text-gray-600 font-inter">
                  All products are inspected for quality before shipping.
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-heritage-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-2">Easy Returns</h3>
                <p className="text-sm text-gray-600 font-inter">
                  30-day return policy on all merchandise. Gift cards are final sale.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  )
}