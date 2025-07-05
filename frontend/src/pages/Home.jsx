// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Chatbot from '../components/Chatbot';
import Footer from '../components/Footer'; // Importing Footer component



const Home = () => {
  return (
    <div className="absolute bg-black top-0 left-0 w-full h-full z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[80px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-[80px] opacity-20 animate-pulse delay-1000"></div>
      
      <Header />
      <main>
        <Hero />
        <Chatbot />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
