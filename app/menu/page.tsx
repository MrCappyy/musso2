'use client'

import React, { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import { cn } from '@/lib/utils'

// Sample menu data - would come from CMS
const menuCategories = {
  dinner: {
    appetizers: [
      { name: 'Oysters Rockefeller', description: 'Half dozen, spinach, hollandaise', price: 24 },
      { name: 'Shrimp Cocktail', description: 'Jumbo prawns, classic cocktail sauce', price: 22 },
      { name: 'Caesar Salad', description: 'Prepared tableside, anchovies, parmesan', price: 18 },
      { name: 'French Onion Soup', description: 'Gruyere, croutons', price: 16 },
    ],
    mains: [
      { name: 'Prime Rib', description: '16oz cut, Yorkshire pudding, au jus', price: 68 },
      { name: 'Filet Mignon', description: '10oz center cut, béarnaise sauce', price: 72 },
      { name: 'Lobster Thermidor', description: 'Maine lobster, brandy cream sauce', price: 'Market Price' },
      { name: 'Rack of Lamb', description: 'Herb crusted, mint jelly', price: 58 },
      { name: 'Dover Sole', description: 'Pan-fried, lemon butter', price: 52 },
    ],
    sides: [
      { name: 'Creamed Spinach', price: 14 },
      { name: 'Lobster Mac & Cheese', price: 24 },
      { name: 'Truffle Fries', price: 16 },
      { name: 'Grilled Asparagus', price: 14 },
    ],
    desserts: [
      { name: 'New York Cheesecake', description: 'Berry compote', price: 12 },
      { name: 'Chocolate Soufflé', description: 'Grand Marnier, vanilla ice cream', price: 14 },
      { name: 'Crème Brûlée', description: 'Classic vanilla custard', price: 12 },
      { name: 'Ice Cream Sundae', description: 'Three scoops, hot fudge', price: 10 },
    ],
  },
  lunch: {
    salads: [
      { name: 'Cobb Salad', description: 'Chicken, bacon, blue cheese, avocado', price: 22 },
      { name: 'Niçoise Salad', description: 'Tuna, olives, anchovies, egg', price: 24 },
      { name: 'Wedge Salad', description: 'Iceberg, bacon, blue cheese dressing', price: 16 },
    ],
    sandwiches: [
      { name: 'Club Sandwich', description: 'Turkey, bacon, lettuce, tomato', price: 18 },
      { name: 'French Dip', description: 'Roast beef, au jus, horseradish', price: 22 },
      { name: 'Reuben', description: 'Corned beef, sauerkraut, Swiss', price: 20 },
    ],
    entrees: [
      { name: 'Grilled Salmon', description: 'Lemon dill sauce, vegetables', price: 28 },
      { name: 'Chicken Piccata', description: 'Capers, lemon butter', price: 26 },
      { name: 'Beef Stroganoff', description: 'Egg noodles, sour cream', price: 24 },
    ],
  },
  bar: {
    cocktails: [
      { name: 'Martini', description: 'Gin or vodka, dry vermouth', price: 16 },
      { name: 'Manhattan', description: 'Rye whiskey, sweet vermouth, bitters', price: 16 },
      { name: 'Old Fashioned', description: 'Bourbon, sugar, bitters, orange', price: 16 },
      { name: 'Negroni', description: 'Gin, Campari, sweet vermouth', price: 15 },
    ],
    wine: [
      { name: 'Cabernet Sauvignon', description: 'Napa Valley, 2019', price: '14/56' },
      { name: 'Pinot Noir', description: 'Russian River, 2020', price: '16/64' },
      { name: 'Chardonnay', description: 'Sonoma Coast, 2021', price: '12/48' },
      { name: 'Sauvignon Blanc', description: 'Marlborough, 2022', price: '11/44' },
    ],
    beer: [
      { name: 'Stella Artois', description: 'Draft', price: 8 },
      { name: 'Heineken', description: 'Bottle', price: 7 },
      { name: 'Local IPA', description: 'Rotating selection', price: 9 },
    ],
  },
}

const menuTabs = [
  { id: 'dinner', name: 'Dinner Menu' },
  { id: 'lunch', name: 'Lunch Menu' },
  { id: 'bar', name: 'Bar & Drinks' },
]

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState('dinner')
  const [dietaryFilter, setDietaryFilter] = useState('all')

  const renderMenuItem = (item: any, index: number) => (
    <div key={index} className="flex justify-between items-start mb-6 group">
      <div className="flex-1">
        <h4 className="font-playfair text-lg font-semibold text-rich-black group-hover:text-musso-burgundy transition-colors">
          {item.name}
        </h4>
        {item.description && (
          <p className="text-gray-600 font-crimson text-sm mt-1">
            {item.description}
          </p>
        )}
      </div>
      <span className="font-inter font-semibold text-musso-burgundy ml-4">
        {typeof item.price === 'number' ? `$${item.price}` : item.price}
      </span>
    </div>
  )

  const renderMenuSection = (title: string, items: any[]) => (
    <div className="mb-12">
      <h3 className="heading-md text-musso-burgundy mb-6 pb-2 border-b-2 border-heritage-gold/30">
        {title}
      </h3>
      <div className="grid lg:grid-cols-2 gap-x-12">
        {items.map(renderMenuItem)}
      </div>
    </div>
  )

  const currentMenu = menuCategories[activeTab as keyof typeof menuCategories] as any

  return (
    <>
      <Header />

      <main className="pt-20">
        <Hero
          title="Our Menu"
          subtitle="Culinary Excellence Since 1919"
          description="Classic American cuisine prepared with time-honored techniques"
          image="/images/light-photo-bg.jpg"
          height="medium"
        />

        <Section background="white">
          {/* Menu Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {menuTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'px-8 py-3 font-inter font-medium rounded-full transition-all duration-200',
                  activeTab === tab.id
                    ? 'bg-musso-burgundy text-white'
                    : 'bg-classic-cream text-rich-black hover:bg-heritage-gold/20'
                )}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Dietary Filter */}
          <div className="text-center mb-8">
            <label className="font-inter text-sm text-gray-600 mr-4">
              Dietary Preferences:
            </label>
            <select
              value={dietaryFilter}
              onChange={(e) => setDietaryFilter(e.target.value)}
              className="px-4 py-2 rounded-md border border-gray-300 font-inter text-sm focus:border-heritage-gold focus:ring-2 focus:ring-heritage-gold/20"
            >
              <option value="all">All Items</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="gluten-free">Gluten Free</option>
            </select>
          </div>

          {/* Menu Content */}
          <div className="max-w-6xl mx-auto">
            {activeTab === 'dinner' && (
              <>
                {renderMenuSection('Appetizers', currentMenu.appetizers)}
                {renderMenuSection('Main Courses', currentMenu.mains)}
                {renderMenuSection('Sides', currentMenu.sides)}
                {renderMenuSection('Desserts', currentMenu.desserts)}
              </>
            )}
            {activeTab === 'lunch' && (
              <>
                {renderMenuSection('Salads', currentMenu.salads)}
                {renderMenuSection('Sandwiches', currentMenu.sandwiches)}
                {renderMenuSection('Lunch Entrées', currentMenu.entrees)}
              </>
            )}
            {activeTab === 'bar' && (
              <>
                {renderMenuSection('Classic Cocktails', currentMenu.cocktails)}
                {renderMenuSection('Wine Selection', currentMenu.wine)}
                {renderMenuSection('Beer', currentMenu.beer)}
              </>
            )}
          </div>

          {/* Special Notes */}
          <div className="mt-16 p-8 bg-classic-cream rounded-lg max-w-4xl mx-auto">
            <h3 className="font-playfair text-xl font-semibold text-center mb-4">
              Important Information
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div>
                <p className="text-sm text-gray-600 font-inter">
                  <span className="font-semibold">Consuming raw or undercooked meats</span> may increase
                  your risk of foodborne illness.
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-inter">
                  <span className="font-semibold">20% gratuity</span> will be added to parties
                  of 6 or more.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Wine Program CTA */}
        <Section background="pattern">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-md text-musso-burgundy mb-6">
              Award-Winning Wine Program
            </h2>
            <p className="body-lg text-gray-700 mb-8">
              Our sommelier has curated an extensive collection of over 500 wines from
              the world's finest vineyards. Ask your server for our complete wine list
              or schedule a wine tasting experience.
            </p>
            <div className="flex justify-center gap-4">
              <button className="btn btn-primary">
                View Wine List
              </button>
              <button className="btn btn-outline">
                Book Wine Tasting
              </button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  )
}