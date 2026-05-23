import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Skills from '../pages/skills/Skills';
import Portfolio from '../pages/portfolio/Portfolio';
import Contact from '../pages/contact/Contact';

const AppRouting = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME ROUTE */}
        <Route path="/" element={<Home />} />

        {/* ABOUT ROUTE */}
        <Route path="/about" element={<About />} />

        {/* SKILLS ROUTE */}
        <Route path="/skills" element={<Skills />} />

        {/* PORTFOLIO ROUTE */}
        <Route path="/portfolio" element={<Portfolio />} />

        {/* CONTACT ROUTE */}
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouting;