import React, { useEffect } from 'react';
import { useAppContext, WindowType } from '../context/AppContext';
import FolderIcon from './FolderIcon';

const Desktop: React.FC = () => {
  const { openWindow, closeStartMenu } = useAppContext();
  
  const handleDesktopClick = () => {
    closeStartMenu();
  };

  // Create random pixel stars for background decoration
  useEffect(() => {
    const createStars = () => {
      const desktopElement = document.querySelector('.desktop-background');
      if (!desktopElement) return;
      
      // Remove existing stars first if any
      const existingStars = document.querySelectorAll('.pixel-star');
      existingStars.forEach(star => star.remove());
      
      // Create new stars
      for (let i = 0; i < 15; i++) {
        const star = document.createElement('div');
        star.className = 'pixel-star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        desktopElement.appendChild(star);
      }
    };
    
    createStars();
    
    // Recreate stars on window resize
    window.addEventListener('resize', createStars);
    return () => window.removeEventListener('resize', createStars);
  }, []);

  return (
    <div 
      className="absolute inset-0 bg-pink-bg pattern-bg flex flex-wrap content-start p-4 desktop-background"
      onClick={handleDesktopClick}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-lg md:text-3xl mb-2 text-pink-primary text-outline fadeIn">
          Hi, I'm Anushka
        </h1>
        <h2 className="text-xl md:text-4xl mb-4 text-pink-primary text-outline fadeIn" style={{animationDelay: '0.3s'}}>
          Web Developer
        </h2>
        <p className="text-xs md:text-sm text-dark-contrast fadeIn" style={{animationDelay: '0.6s'}}>
          Engineer by choice, artist by pixels
          <span className="ml-1 text-purple-accent">🌸</span>
        </p>
        <div className="mt-4 fadeIn" style={{animationDelay: '0.9s'}}>
        </div>
      </div>
      
      <div className="absolute left-4 top-4 bottom-4 desktop-icons">
        <FolderIcon 
          type="home" 
          label="Home.exe"
          onClick={() => openWindow('home')}
        />

        <FolderIcon 
          type="about" 
          label="About.exe"
          onClick={() => openWindow('about')}
        />
        
        <FolderIcon 
          type="projects" 
          label="Projects.exe"
          onClick={() => openWindow('projects')}
        />
        
        <FolderIcon 
          type="skills" 
          label="Skills.exe"
          onClick={() => openWindow('skills')}
        />
        
        <FolderIcon 
          type="contact" 
          label="Contact.exe"
          onClick={() => openWindow('contact')}
        />

        <FolderIcon 
          type="terminal" 
          label="Terminal.exe"
          onClick={() => openWindow('terminal')}
        />
      </div>
      
      {/* Decorative pixels with enhanced animations */}
      <div className="absolute bottom-12 right-12 w-4 h-4 bg-blue-accent animate-float shadow-glow" style={{ animationDelay: '0.2s' }}></div>
      <div className="absolute bottom-16 right-16 w-3 h-3 bg-mint-accent animate-float shadow-glow" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-20 right-8 w-2 h-2 bg-purple-accent animate-float shadow-glow" style={{ animationDelay: '0.8s' }}></div>
    </div>
  );
};

export default Desktop;