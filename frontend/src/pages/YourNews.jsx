import React from 'react';
import Header from '../components/Header';


const YourNews = () => {
  return (
    <div className="min-h-screen bg-[#05081c]">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[80px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-[80px] opacity-20 animate-pulse delay-1000"></div>

      <Header />
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-white mb-6">Latest News</h1>
          
        </div>
      </main>
    </div>
  );
};

export default YourNews;
