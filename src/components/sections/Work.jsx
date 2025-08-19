// src/components/sections/Work.jsx
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Button from '../ui/Button';
import SectionTitle from '../common/SectionTitle';
import { projects } from '../../data/projects';

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
            <Button
              onClick={() => window.open(project.liveUrl, '_blank')}
              size="sm"
              className="bg-blue-600 hover:bg-blue-700"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Live
            </Button>
            <Button
              onClick={() => window.open(project.repoUrl, '_blank')}
              variant="outline"
              size="sm"
              className="border-gray-600"
            >
              <Github className="w-4 h-4 mr-1" />
              Code
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <span className="px-3 py-1 text-xs bg-blue-600/20 text-blue-400 rounded-full">
            {project.category}
          </span>
        </div>

        <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              {project.features.slice(0, 2).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <section id="work" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="My Creative Work"
          subtitle="Recent projects showcasing my skills in modern web development"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={() => window.open('https://github.com/BRIJESH2403', '_blank')}
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Work;