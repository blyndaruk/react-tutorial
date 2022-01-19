import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './pages/About';
import PostsPage from './pages/Posts';
import Home from './pages/Home';
import Header from './components/Header/Header';

function App () {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
