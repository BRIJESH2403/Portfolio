// src/components/sections/About.jsx
import React from 'react';
import { Code, Palette } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          
          {/* Experience Card */}
          <div className="text-center lg:text-left space-y-4">
            <h2 className="text-6xl lg:text-7xl font-bold text-blue-400">6</h2>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Months Experience as Developer
              </h3>
              <p className="text-gray-400">
                {personalInfo.fullDescription}
              </p>
            </div>
          </div>

          {/* Coding Section */}
          <div className="text-center space-y-6">
            <div className="relative">
              <img
                src="/images/coding-illustration.png"
                alt="Coding Illustration"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 px-4 py-2 rounded-lg border border-gray-700">
                <div className="flex items-center space-x-2">
                  <Code className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-medium">Coding & Programming</span>
                </div>
              </div>
            </div>
          </div>

          {/* Design Section */}
          <div className="text-center space-y-6">
            <div className="relative">
              <img
                src="/images/design-illustration.png"
                alt="Design Illustration"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 px-4 py-2 rounded-lg border border-gray-700">
                <div className="flex items-center space-x-2">
                  <Palette className="w-5 h-5 text-purple-400" />
                  <span className="text-white font-medium">UI/UX Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">My Skills</h2>
            <p className="text-gray-400">Technologies and tools I work with</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalInfo.skills.map((skill, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-white font-medium">{skill.name}</h4>
                  <span className="text-blue-400 font-semibold">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;