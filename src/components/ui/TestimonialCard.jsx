// src/components/ui/TestimonialCard.jsx
import React from 'react';

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div className={`transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-70 scale-95'}`}>
      <div className="bg-white rounded-xl shadow-lg p-8 mx-4">
        
        {/* Quote Icon */}
        <div className="flex justify-center mb-6">
          <svg className="w-12 h-12 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
          </svg>
        </div>
        
        {/* Testimonial Content */}
        <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 text-center italic">
          "{testimonial.content}"
        </blockquote>
        
        {/* Client Info */}
        <div className="flex items-center justify-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xl font-bold">
              {testimonial.name.charAt(0)}
            </span>
          </div>
          
          <div className="text-center">
            <h4 className="text-gray-900 font-semibold text-lg">
              {testimonial.name}
            </h4>
            <p className="text-gray-500 text-sm">
              {testimonial.position}
            </p>
          </div>
        </div>
        
        {/* Star Rating */}
        <div className="flex justify-center mt-6 space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;