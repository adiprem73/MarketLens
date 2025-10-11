import React from 'react';
import Header from '../components/Header';
import YourSoapNews from '../components/YourSoapNews'; // Assuming you have a YourSoapNews component for displaying personalised news
import Chatbot from '../components/Chatbot'; // Importing Chatbot component
import Footer from '../components/Footer'; // Importing Footer component from components


const YourNews = () => {
  return (
    <div className="min-h-screen  bg-black">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[80px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-[80px] opacity-20 animate-pulse delay-1000"></div>

      <Header />
      <main>
        <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-6xl my-10 text-center  md:text-7xl lg:text-8xl font-bold tracking-wider mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Personalised News</h1>
          <YourSoapNews />
        </div>
        <Chatbot />
      </main>
        <Footer />
    </div>
  );
};

export default YourNews;
