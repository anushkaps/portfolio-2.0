import React from 'react';
import { WindowType } from '../context/AppContext';

interface FolderIconProps {
  type: WindowType;
  label: string;
  onClick: () => void;
}

const FolderIcon: React.FC<FolderIconProps> = ({ type, label, onClick }) => {
  return (
    <div 
      className="pixel-folder flex flex-col items-center"
      onClick={onClick}
    >
      <div className="w-12 h-12 mb-1 icon-wrapper">
        <img 
          src={`/icons/${type}.svg`} 
          alt={`${type} icon`} 
          className="w-full h-full object-contain"
        />
      </div>
      <span className="text-[8px] text-center text-dark-contrast leading-tight glow-text">{label}</span>
    </div>
  );
};

export default FolderIcon;