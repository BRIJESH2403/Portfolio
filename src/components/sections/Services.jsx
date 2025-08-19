// src/components/sections/Services.jsx
import React from 'react';
import { Monitor, Smartphone, Palette, Search } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { services } from '../../data/services';

const ServiceCard = ({ service, index }) => {
  const icons = {
    'Web Development': Monitor,
    'Frontend Development': Monitor,
    'UI/UX Design': Palette,
    'SEO Optimization': Search
  };

  const IconComponent = icons[service.title] || Monitor;

  return (
    <div className={`group relative bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl ${
      index % 2 === 0 ? 'hover:shadow-blue-500/20' : 'hover:shadow-purple-500/20'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
        <div className={`w-full h-full bg-gradient-to-br ${
          index % 2 === 0 ? 'from-blue-500 to-blue-700' : 'from-purple-500 to-purple-700'
        } rounded-2xl`}></div>
      </div>

      <div className="relative z-10">
        <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${
          index % 2 === 0 ? 'bg-blue-600/20 text-blue-400' : 'bg-purple-600/20 text-purple-400'
        }`}>
          <IconComponent className="w-8 h-8" />
        </div>

        <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

        <div className="space-y-2">
          {service.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-center text-sm text-gray-300">
              <div className={`w-2 h-2 rounded-full mr-3 ${
                index % 2 === 0 ? 'bg-blue-400' : 'bg-purple-400'
              }`}></div>
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="What I Do"
          subtitle="I help brands and individuals create amazing digital experiences"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;