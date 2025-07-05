import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="relative bg-black px-4 ">
              <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"/>
              
              <div className="relative backdrop-blur-md bg-white/5 rounded-3xl border border-white/10">
                <div className="container mx-auto max-w-6xl p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-2 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                          <i className="ri-line-chart-line text-white text-xl"></i>
                        </div>
                        <span className="text-3xl font-bold text-white font-pacifico">MarketLens</span>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                        Empowering investors with intelligent market insights and personalized financial news powered by cutting-edge AI technology.
                      </p>
                      
                      <div className="flex space-x-4">
                        <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer">
                          <i className="ri-twitter-line"></i>
                        </a>
                        <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer">
                          <i className="ri-linkedin-line"></i>
                        </a>
                        <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer">
                          <i className="ri-facebook-line"></i>
                        </a>
                        <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer">
                          <i className="ri-instagram-line"></i>
                        </a>
                      </div>
                    </div>
        
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-6">Platform</h4>
                      <ul className="space-y-3">
                        <li>
                          <Link to="/" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                            Market News
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                            Personalized Feed
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                            Portfolio Analysis
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                            Smart Alerts
                          </Link>
                        </li>
                      </ul>
                    </div>
        
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-6">Company</h4>
                      <ul className="space-y-3">
                        <li>
                          <Link to="/" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                            Contact
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                            Privacy Policy
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                            Terms of Service
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
        
                  <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                      © 2024 MarketLens. All rights reserved.
                    </p>
                    <p className="text-gray-400 text-sm mt-4 md:mt-0">
                      Made with ❤️ by Aditya Prem
                    </p>
                  </div>
                </div>
              </div>
            </footer>
    )
};

export default Footer;