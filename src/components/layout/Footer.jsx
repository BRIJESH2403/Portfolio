// src/components/layout/Footer.jsx
import React from 'react';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Heart, MessageCircle } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      url: personalInfo.contact.github,
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      url: personalInfo.contact.linkedin,
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      url: personalInfo.contact.twitter,
      label: 'Twitter'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
                {personalInfo.name}
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-md">
                {personalInfo.bio}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <a href={`mailto:${personalInfo.contact.email}`} className="hover:text-white transition-colors">
                  {personalInfo.contact.email}
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <a href={`tel:${personalInfo.contact.phone}`} className="hover:text-white transition-colors">
                  {personalInfo.contact.phone}
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                <span>{personalInfo.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-6">Let's Connect</h4>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 rounded-lg border border-gray-700">
              <div className="flex items-center mb-2">
                <MessageCircle className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-white font-medium">Ready to work together?</span>
              </div>
              <button
                onClick={() => scrollToSection('#contact')}
                className="text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200"
              >
                Let's start a conversation →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-2 text-red-500 fill-current" />
              <span>by {personalInfo.name}</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;