import React from 'react';
import { Play, Info } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div 
      className="relative group cursor-pointer transition-transform duration-300 hover:scale-105"
      onClick={onClick}
    >
      <div className="aspect-video rounded-md overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 p-4 w-full">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="text-xs bg-red-600 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex items-center gap-1 bg-white text-black px-4 py-1 rounded-sm text-sm hover:bg-gray-200 transition">
                <Play className="w-4 h-4" />
                <span>Demo</span>
              </button>
              <button className="flex items-center gap-1 bg-gray-500/70 px-4 py-1 rounded-sm text-sm hover:bg-gray-500/90 transition">
                <Info className="w-4 h-4" />
                <span>More Info</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;