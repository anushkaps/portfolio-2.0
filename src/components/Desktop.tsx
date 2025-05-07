import React from 'react';
import { useAppContext, WindowType } from '../context/AppContext';
import FolderIcon from './FolderIcon';

const Desktop: React.FC = () => {
  const { openWindow, closeStartMenu } = useAppContext();
  
  const handleDesktopClick = () => {
    closeStartMenu();
  };

  return (
    <div 
      className="absolute inset-0 bg-pink-bg flex flex-wrap content-start p-4"
      onClick={handleDesktopClick}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-lg md:text-3xl mb-2 text-pink-primary text-outline">Hi, I'm Anushka</h1>
        <h2 className="text-xl md:text-4xl mb-4 text-pink-primary text-outline">Web Developer</h2>
        <p className="text-xs md:text-sm text-pink-dark">I build dreamy things ✨</p>
      </div>
      
      <div className="absolute left-4 top-4 bottom-4 flex flex-col justify-evenly">
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
      
      {/* Decorative pixels */}
      <div className="absolute bottom-12 right-12 w-4 h-4 bg-pink-bright animate-float" style={{ animationDelay: '0.2s' }}></div>
      <div className="absolute bottom-16 right-16 w-3 h-3 bg-pink-primary animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-20 right-8 w-2 h-2 bg-pink-dark animate-float" style={{ animationDelay: '0.8s' }}></div>
    </div>
  );
};

export default Desktop;