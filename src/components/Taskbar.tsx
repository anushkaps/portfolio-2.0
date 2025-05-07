import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { Heart } from 'lucide-react';

const Taskbar: React.FC = () => {
  const { 
    windows, 
    activeWindow, 
    isStartMenuOpen,
    toggleStartMenu, 
    restoreWindow 
  } = useAppContext();

  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="taskbar-container">
      <button 
        className={`taskbar-button flex items-center ${isStartMenuOpen ? 'bg-pink-bright' : ''}`}
        onClick={toggleStartMenu}
      >
        <Heart size={12} className="mr-1" />
        Start
      </button>

      <div className="h-8 border-r border-pink-primary mx-2"></div>

      <div className="flex-1 flex overflow-x-auto py-1">
        {windows
          .filter(window => window.isOpen)
          .map(window => (
            <button
              key={window.id}
              className={`taskbar-button truncate max-w-xs ${activeWindow === window.id ? 'bg-pink-bright' : ''}`}
              onClick={() => restoreWindow(window.id)}
            >
              {window.title}
            </button>
          ))}
      </div>

      <div className="h-8 border-r border-pink-primary mx-2"></div>

      <div className="taskbar-button">
        {time}
      </div>
    </div>
  );
};

export default Taskbar;
