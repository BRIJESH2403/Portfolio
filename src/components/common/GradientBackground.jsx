// src/components/common/GradientBackground.jsx
import React from 'react';

const GradientBackground = ({ children, variant = 'default' }) => {
  const variants = {
    default: 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50',
    hero: 'bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900',
    dark: 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900',
    light: 'bg-gradient-to-br from-white via-blue-50 to-indigo-50'
  };

  return (
    <div className={`relative ${variants[variant]}`}>
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GradientBackground;