import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../../utils/constants';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-6">Brijesh Prajapati</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Frontend Developer passionate about creating beautiful, responsive web applications. 
              Always learning and exploring new technologies to build better digital experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#work" className="block text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="block text-gray-400 hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>Mehsana, Gujarat</p>
              <p>India</p>
              <a href={`mailto:${CONTACT_INFO.email}`} className="block hover:text-white transition-colors">
                {CONTACT_INFO.email}
              </a>
              <a href={`tel:${CONTACT_INFO.phone}`} className="block hover:text-white transition-colors">
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Brijesh Prajapati. All rights reserved.
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">👋</span>
              <span className="text-gray-400">Thanks for visiting!</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;