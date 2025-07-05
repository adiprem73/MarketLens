// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form'; // Assuming you have a Form component for linking portfolios

const Link = () => {
  return (
    <div className="min-h-screen bg-[#05081c]">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[80px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-[80px] opacity-20 animate-pulse delay-1000"></div>

      <Header />
      <main>
        <Form />
      </main>
    </div>
  );
};

export default Link;
