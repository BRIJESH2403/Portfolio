// src/components/common/SectionTitle.jsx
import React from 'react';

const SectionTitle = ({ title, subtitle, alignment = 'center' }) => {
  const alignmentClasses = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right'
  };

  return (
    <div className={`${alignmentClasses[alignment]} mb-12`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;