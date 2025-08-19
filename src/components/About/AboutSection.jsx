import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <div className="text-center space-y-4">
              <h2 className="text-6xl font-bold text-blue-600">6</h2>
              <h3 className="text-2xl font-bold text-gray-900">Months Experience as Frontend Developer</h3>
              <p className="text-gray-600">
                Completed a comprehensive 6-month internship at Hexacoders, where I gained hands-on experience in modern web development technologies and built several real-world projects.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mb-6 flex items-center justify-center">
                <div className="text-blue-600 text-4xl">⚛️</div>
              </div>
              <h4 className="text-xl font-bold text-gray-900">React & Next.js Development</h4>
              <p className="text-gray-600 mt-2">Building modern, responsive web applications with React.js and Next.js</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl mb-6 flex items-center justify-center">
                <div className="text-purple-600 text-4xl">🎨</div>
              </div>
              <h4 className="text-xl font-bold text-gray-900">UI/UX Design & Frontend</h4>
              <p className="text-gray-600 mt-2">Creating beautiful user interfaces with modern design principles and best practices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
