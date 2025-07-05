import React, { useState } from 'react'
import { Search, MapPin, User, ShoppingCart, Menu } from 'lucide-react'
import { useFormSubmission } from './FormSubmissionContext' // Assuming useFormSubmission is imported from context

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { formSubmission } = useFormSubmission() // Assuming useFormSubmission is imported from context

  return (
    <header className="bg-walmart-blue text-white sticky top-0 z-50 shadow-lg bg-opacity-90 backdrop-blur-md">
      {/* Main Header */}
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-walmart-yellow">MarketLens</h1>
            </div>
          </div>

          
          <div className="hidden md:flex items-center space-x-8 max-w-3xl mx-8 ">
            <a href="/" className="flex items-center space-x-1 cursor-pointer hover:text-walmart-yellow ">
              <span className="text-sm"> <p className='transition duration-300 transform hover:scale-110 hover:text-cyan-400'>Home</p></span>
            </a>
            <a href="/newspage" className="flex items-center space-x-1 cursor-pointer hover:text-walmart-yellow">
              <span className="text-sm"><p className='transition duration-300 transform hover:scale-110 hover:text-cyan-400'>Latest News</p></span>
            </a>

            <button
              onClick={() => {
                if (formSubmission) {
                  window.location.href = '/yournewspage'
                } else {
                  alert('You should first link your portfolio')
                }
              }}
              className="flex items-center space-x-1 cursor-pointer hover:text-walmart-yellow bg-transparent border-none outline-none"
              style={{ background: 'none' }}
            >
              <span className="text-sm"><p className='transition duration-300 transform hover:scale-110 hover:text-cyan-400'>News for You</p></span>
            </button>


            <a href="/about" className="flex items-center space-x-1 cursor-pointer hover:text-walmart-yellow">
              <span className="text-sm"><p className='transition duration-300 transform hover:scale-110 hover:text-cyan-400'>About</p></span>
            </a>
          </div>

          {/* Right Side: Cart & Menu */}
          <div className="flex items-center space-x-6">
            {/* Cart */}
            <div className="hidden md:flex items-center space-x-1 cursor-pointer hover:text-walmart-yellow">
              <a href="/linkpage">
              <span className="text-sm">Link Your Portfolio</span>
              </a>
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
            {/* Optional Search Bar if needed */}
            

            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              <a href="/" className="block py-2 text-sm transition duration-300 transform hover:scale-110 hover:text-cyan-400">Home</a>
              <a href="/newspage" className="block py-2 text-sm transition duration-300 transform hover:scale-110 hover:text-cyan-400">Latest News</a>
              <button
                onClick={() => {
                  if (formSubmission) {
                    window.location.href = '/yournewspage'
                  } else {
                    alert('You should first link your portfolio')
                  }
                }}
                className="block w-full text-left py-2 text-sm transition duration-300 transform hover:scale-110 hover:text-cyan-400 bg-transparent border-none outline-none"
              >
                News for You
              </button>
              <a href="/about" className="block py-2 text-sm transition duration-300 transform hover:scale-110 hover:text-cyan-400">About</a>
              <a href="/linkpage" className="block py-2 text-sm transition duration-300 transform hover:scale-110 hover:text-cyan-400">Link Your Portfolio</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
