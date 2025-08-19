// src/components/ui/ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ service, index }) => {
  const icons = {
    'Web Development': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    'SEO Optimization': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    'Mobile Development': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
      </svg>
    ),
    'UI/UX Design': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
      </svg>
    )
  };

  const gradients = [
    'from-blue-500 to-purple-600',
    'from-green-500 to-teal-600',
    'from-orange-500 to-red-600',
    'from-purple-500 to-pink-600'
  ];

  return (
    <div className="group">
      <div className={`relative p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1`}>
        
        {/* Icon */}
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-r ${gradients[index % gradients.length]} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
          {icons[service.name] || icons['Web Development']}
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {service.name}
        </h3>
        
        <p className="text-gray-600 leading-relaxed">
          {service.description}
        </p>
        
        {/* Hover Effect Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl -z-10"></div>
        
        {/* Decorative Element */}
        <div className={`absolute -right-4 -bottom-4 w-20 h-20 bg-gradient-to-r ${gradients[index % gradients.length]} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-300`}></div>
      </div>
    </div>
  );
};

export default ServiceCard;