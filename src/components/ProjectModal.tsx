import React from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/80"
        onClick={onClose}
      />
      <div className="relative bg-[#181818] rounded-lg w-full max-w-3xl mx-4">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

        <div className="aspect-video w-full">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
          <p className="text-gray-300 mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className="text-sm bg-red-600 px-3 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex space-x-4">
            <a 
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition"
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </a>
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 px-6 py-2 rounded hover:bg-gray-600 transition"
            >
              <Github size={20} />
              <span>Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;