// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News'; // Uncomment if you want to use the News page
import Link from './pages/Link'; // Uncomment if you want to use the Link page
import YourNews from './pages/YourNews'; // Uncomment if you want to use the YourNews page


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newspage" element={<News />} />
        <Route path="/linkpage" element={<Link />} />
        <Route path="/yournewspage" element={<YourNews />} />
      </Routes>
    </Router>
  );
};

export default App;
