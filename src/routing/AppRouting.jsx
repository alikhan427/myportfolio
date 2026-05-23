import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home.jsx';
import About from '../pages/about/About.jsx';
import Skills from '../pages/skills/Skills.jsx';
import Portfolio from '../pages/portfolio/Portfolio.jsx';
import Contact from '../pages/contact/Contact.jsx';

const AppRouting = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouting;