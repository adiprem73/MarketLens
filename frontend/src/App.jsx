// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News'; // Uncomment if you want to use the News page


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newspage" element={<News />} />
      </Routes>
    </Router>
  );
};

export default App;
