import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, MapPin } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="space-y-4">
              <p className="text-blue-600 font-medium">Hello! World</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                I'm Brijesh{' '}
                <span className="text-blue-600">&lt;</span>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Frontend Developer
                </span>
                <span className="text-blue-600">&gt;</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                💻 I'm a passionate Frontend Developer with 6 months of internship experience at Hexacoders. I enjoy turning ideas into responsive, user-friendly websites using React, Next.js, and modern web technologies. Always eager to learn and explore new tools to build better digital experiences.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 text-center font-medium"
              >
                Hire Me
              </a>
              <a 
                href="https://github.com/BRIJESH2403" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 text-center font-medium"
              >
                View GitHub
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-4">
              <a 
                href="https://github.com/BRIJESH2403" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/brijesh-prajapati-636402230/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://x.com/PrajapatiBony" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-100 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-100 rounded-full opacity-60 animate-pulse delay-1000"></div>
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
                <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">B</span>
                    </div>
                    <p className="text-gray-600 font-medium">Frontend Developer</p>
                    <div className="flex items-center justify-center space-x-2 text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">Mehsana, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;