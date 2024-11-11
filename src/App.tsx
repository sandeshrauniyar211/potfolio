import React, { useState } from 'react';
import ProjectCard from './components/ProjectCard';
import Navbar from './components/Navbar';
import Billboard from './components/Billboard';
import ProjectModal from './components/ProjectModal';
import SkillsSection from './components/SkillsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import { Project } from './types';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600",
      tags: ["React", "Node.js", "MongoDB", "Redux"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 2,
      title: "AI Image Generator",
      description: "DALL-E powered image generation app with social sharing features",
      image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?auto=format&fit=crop&q=80&w=1600",
      tags: ["OpenAI", "React", "TypeScript", "Tailwind"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 3,
      title: "Real-time Chat App",
      description: "WebSocket-based chat application with real-time messaging",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1600",
      tags: ["WebSocket", "React", "Node.js", "MongoDB"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#141414] via-[#1a1a1a] to-[#0D0D0D] text-white">
      <Navbar />
      
      <Billboard />

      <main className="container mx-auto px-4 py-8">
        {/* Featured Projects */}
        <section id="projects" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-red-600">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard 
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </section>

        <SkillsSection />
        <AboutSection />
      </main>

      <Footer />

      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default App;