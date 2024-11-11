import React from 'react';
import { Play, Info } from 'lucide-react';

const Billboard = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/50 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-600">
              Full Stack Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Crafting digital experiences with modern web technologies. 
              Specialized in building scalable applications with React, Node.js, and cloud technologies.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={scrollToProjects}
                className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 px-8 py-3 rounded hover:from-red-700 hover:to-red-800 transition shadow-lg"
              >
                <Play className="w-5 h-5" />
                <span>View Work</span>
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 bg-gradient-to-r from-[#2F2F2F] to-[#1F1F1F] text-white px-8 py-3 rounded hover:from-[#3F3F3F] hover:to-[#2F2F2F] transition shadow-lg"
              >
                <Info className="w-5 h-5" />
                <span>More Info</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;