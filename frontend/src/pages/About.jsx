import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[80px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-[80px] opacity-20 animate-pulse delay-1000"></div>

      <Header />
      <main className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          About MarketLens
        </h1>
        <p className="text-lg leading-relaxed text-gray-200">
          MarketLens is a lightweight news and portfolio-insight app that surfaces
          market headlines and personalised news. This page gives a quick overview
          of the project and its goals.
        </p>

        <section className="mt-8 text-gray-300">
          <h2 className="text-2xl font-semibold mb-2">What we do</h2>
          <p>
            We aggregate market news and provide contextual insights to help users
            make sense of market movements. You can link your portfolio to get
            personalised news and suggestions.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default About
