// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News'; // Uncomment if you want to use the News page
import Link from './pages/Link'; // Uncomment if you want to use the Link page
import YourNews from './pages/YourNews'; // Uncomment if you want to use the YourNews page
import About from './pages/About'; // Added About page route


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newspage" element={<News />} />
        <Route path="/linkpage" element={<Link />} />
        <Route path="/yournewspage" element={<YourNews />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
