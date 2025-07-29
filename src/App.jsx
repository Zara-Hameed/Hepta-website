import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';

import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import Hotels from './Pages/Hotels';
import Gallery from './Pages/Gallery';
import News from './Pages/News';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
