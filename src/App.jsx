import React from 'react';
import Header from './components/Header';
import HeroSection from './components/Hero';
import AboutSection from './components/About';
import SkillsSection from './components/Skills';
import WorkSection from './components/Work';
import ServicesSection from './components/Services';
import ContactSection from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;