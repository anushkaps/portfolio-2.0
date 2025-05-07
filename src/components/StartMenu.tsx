import React from 'react';
import { useAppContext, WindowType } from '../context/AppContext';
import { Github, Twitter, Mail, FileText, Heart } from 'lucide-react';

const StartMenu: React.FC = () => {
  const { isStartMenuOpen, openWindow, closeStartMenu } = useAppContext();
  
  if (!isStartMenuOpen) return null;
  
  const handleOpenWindow = (type: WindowType) => {
    openWindow(type);
    closeStartMenu();
  };
  
  const handleOutsideClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    closeStartMenu();
  };

  return (
    <div 
      className="absolute inset-0 z-50"
      onClick={handleOutsideClick}
    >
      <div 
        className="absolute left-2 bottom-12 w-48 bg-pink-light border-2 border-pink-dark shadow-lg pixel-border"
        onClick={e => e.stopPropagation()}
      >
        <div className="window-header bg-pink-primary px-2 py-1">
          <span>Anushka.OS</span>
        </div>
        
        <div className="p-2">
          <MenuItem
            icon={<Heart size={16} />}
            label="About"
            onClick={() => handleOpenWindow('about')}
          />
          <MenuItem
            icon={<FileText size={16} />}
            label="Projects"
            onClick={() => handleOpenWindow('projects')}
          />
          <MenuItem
            icon={<FileText size={16} />}
            label="Skills"
            onClick={() => handleOpenWindow('skills')}
          />
          <MenuItem
            icon={<Mail size={16} />}
            label="Contact"
            onClick={() => handleOpenWindow('contact')}
          />
          
          <div className="border-t border-pink-dark my-2"></div>
          
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <MenuItem
              icon={<Github size={16} />}
              label="GitHub"
            />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <MenuItem
              icon={<Twitter size={16} />}
              label="Twitter"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, onClick }) => {
  return (
    <div 
      className="flex items-center px-2 py-1 hover:bg-pink-primary cursor-pointer group"
      onClick={onClick}
    >
      <div className="w-5 h-5 mr-2 text-pink-dark group-hover:text-white flex items-center justify-center">
        {icon}
      </div>
      <span className="text-xs group-hover:text-white">{label}</span>
    </div>
  );
};

export default StartMenu;