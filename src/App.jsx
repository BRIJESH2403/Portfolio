// src/App.jsx
import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Work from './components/sections/Work';
import Testimonials from './components/sections/Testimonials';
import Services from './components/sections/Services';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import CallToAction from './components/sections/CallToAction';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <Testimonials />
        <CallToAction />
        <Services />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;