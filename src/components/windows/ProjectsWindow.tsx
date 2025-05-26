import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'TradeHub',
    description: 'Public codebase for a cloud-based job platform with Supabase, role-based auth, and real-time dashboards.',
    link: 'https://www.tradehub24.com/'
  },
  {
    id: 2,
    title: 'Dynamic Event Calendar',
    description: 'Event calendar built with ReactJS, ShadCN, and Tailwind — supports localStorage and interactive UI.',
    link: 'https://dynamic-event-calendar-beta.vercel.app/'
  },
  {
    id: 3,
    title: 'Tenzies Game',
    description: 'Fun dice game built with React, offering interactive gameplay and sleek UI.',
    link: 'https://tenzies-game-aps.vercel.app/'
  },
  {
    id: 4,
    title: 'Scraping Call Center Info',
    description: 'Script to scrape call center data across the US for structured research and analysis.',
    link: 'https://github.com/anushkaps/scraping-call-center-info-US'
  }
];

const ProjectsWindow: React.FC = () => {
  return (
    <div className="p-2 h-full overflow-auto">
      <div className="bg-pink-light p-4 border-2 border-pink-dark min-h-full">
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
          <a 
            href="https://github.com/anushkaps" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="pixel-button text-xs">
              View All Projects
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsWindow;
