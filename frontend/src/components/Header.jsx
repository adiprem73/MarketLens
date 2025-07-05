import React, { useState } from 'react'
import { Search, MapPin, User, ShoppingCart, Menu } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-walmart-blue text-white sticky top-0 z-50 shadow-lg">
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-walmart-yellow">MarketLens</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 max-w-3xl mx-8">
            <a href="/" className="flex items-center space-x-1 cursor-pointer hover:text-walmart-yellow">
              <span className="text-sm">Home</span>
            </a>
            <a href="/newspage" className="flex items-center space-x-1 cursor-pointer hover:text-walmart-yellow">
              <span className="text-sm">Latest News</span>
            </a>
            <a href="/news-for-you" className="flex items-center space-x-1 cursor-pointer hover:text-walmart-yellow">
              <span className="text-sm">News for You</span>
            </a>
            <a href="/about" className="flex items-center space-x-1 cursor-pointer hover:text-walmart-yellow">
              <span className="text-sm">About</span>
            </a>
          </div>

          {/* Right Side: Cart & Menu */}
          <div className="flex items-center space-x-6">
            {/* Cart */}
            <div className="hidden md:flex items-center space-x-1 cursor-pointer hover:text-walmart-yellow">
              <ShoppingCart className="w-5 h-5" />
              <span className="text-sm">Cart</span>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-walmart-blue-dark"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-walmart-blue-dark">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <div className="flex items-center space-x-2 mb-4">
              <input
                type="text"
                placeholder="Search everything"
                className="flex-1 px-3 py-2 rounded text-gray-900 placeholder-gray-500"
              />
              <Search className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 py-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Location</span>
              </div>
              <div className="flex items-center space-x-2 py-2">
                <User className="w-4 h-4" />
                <span className="text-sm">Sign In</span>
              </div>
              <div className="flex items-center space-x-2 py-2">
                <ShoppingCart className="w-4 h-4" />
                <span className="text-sm">Cart</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
