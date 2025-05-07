import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce site with React, Node.js, and Stripe integration',
    link: '#'
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    description: 'Real-time weather application with beautiful visualizations and 5-day forecast',
    link: '#'
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'Full-stack task management application with drag-and-drop interfaces',
    link: '#'
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Creative portfolio site with animations and interactive elements',
    link: '#'
  }
];

const ProjectsWindow: React.FC = () => {
  return (
    <div className="p-2 h-full overflow-auto">
      <div className="bg-pink-light p-4 border-2 border-pink-dark h-full">
        <h2 className="text-pink-primary text-lg mb-4 glow-text">My Projects</h2>
        
        <div className="space-y-4">
          {projects.map(project => (
            <div 
              key={project.id} 
              className="bg-pink-bg p-3 border-2 border-pink-dark hover:border-pink-primary transition-colors"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-sm text-pink-dark mb-2">{project.title}</h3>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pink-primary hover:text-pink-bright"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
              <p className="text-xs">{project.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <button className="pixel-button text-xs">
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsWindow;