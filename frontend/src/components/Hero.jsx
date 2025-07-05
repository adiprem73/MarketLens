import React, { useState } from 'react'
import Orb from '../../Reacbits/Orb/Orb'

export default function Hero() {
    return(
        <div className='flex relative items-center justify-center min-h-screen'>
            {/* Orb in the background */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                <div className="py-10 h-full w-full relative flex items-center justify-center">
                    <Orb />
                </div>
            </div>

            {/* Arrow on top */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce z-30">
                <i className="ri-arrow-down-line text-2xl"></i>
            </div>

            {/* Main content on top of Orb */}
            <div className="relative z-20 text-center max-w-4xl mx-auto w-full">
                <div className="backdrop-blur-md bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Smart Market
                        <span className="block bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
                            Intelligence
                        </span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Get real-time market insights, personalized news, and intelligent analysis to make informed investment decisions with cutting-edge AI technology.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all cursor-pointer whitespace-nowrap transform hover:scale-105">
                            <i className="ri-newspaper-line mr-2"></i>
                            Get Latest Stock Market News
                        </button>
                        
                        <button className="bg-gradient-to-r from-slate-700 to-gray-600 px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-gray-500/25 transition-all cursor-pointer whitespace-nowrap transform hover:scale-105">
                            <i className="ri-user-heart-line mr-2"></i>
                            Get Personalized Portfolio News
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};