import React, { useState } from 'react'
import { Search, MapPin, User, ShoppingCart, Menu } from 'lucide-react'
import { Link } from 'react-router-dom'
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
            <Link to="/" className="flex items-center space-x-1 cursor-pointer hover:text-walmart-yellow ">
              <span className="text-sm"> <p className='transition duration-300 transform hover:scale-110 hover:text-cyan-400'>Home</p></span>
            </Link>
            <Link to="/newspage" className="flex items-center space-x-1 cursor-pointer hover:text-walmart-yellow">
              <span className="text-sm"><p className='transition duration-300 transform hover:scale-110 hover:text-cyan-400'>Latest News</p></span>
            </Link>

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


            <Link to="/about" className="flex items-center space-x-1 cursor-pointer hover:text-walmart-yellow">
              <span className="text-sm"><p className='transition duration-300 transform hover:scale-110 hover:text-cyan-400'>About</p></span>
            </Link>
          </div>

          {/* Right Side: Cart & Menu */}
          <div className="flex items-center space-x-6">
            {/* Cart */}
            <div className="hidden md:flex items-center space-x-1 cursor-pointer hover:text-walmart-yellow">
              <Link to="/linkpage">
              <span className="text-sm"><p className='transition duration-300 transform hover:scale-110 hover:text-cyan-400'>Link Your Portfolio</p></span>
              </Link>
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
              <Link to="/" className="block py-2 text-sm transition duration-300 transform hover:scale-110 hover:text-cyan-400">Home</Link>
              <Link to="/newspage" className="block py-2 text-sm transition duration-300 transform hover:scale-110 hover:text-cyan-400">Latest News</Link>
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
              <Link to="/about" className="block py-2 text-sm transition duration-300 transform hover:scale-110 hover:text-cyan-400">About</Link>
              <Link to="/linkpage" className="block py-2 text-sm transition duration-300 transform hover:scale-110 hover:text-cyan-400">Link Your Portfolio</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
