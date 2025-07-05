import React from 'react';
import Header from '../components/Header';
import SoapNews from '../components/SoapNews'; // Importing SoapNews component

const News = () => {
  return (
    <div className="min-h-screen bg-[#05081c]">
      <Header />
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-white mb-6">Latest News</h1>
          <SoapNews /> {/* Using the SoapNews component to display news */}
        </div>
      </main>
    </div>
  );
};

export default News;
