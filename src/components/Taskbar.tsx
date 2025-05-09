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
  const [date, setDate] = useState<string>('');

  useEffect(() => {
    const updateTimeAndDate = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);
      
      const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
      setDate(now.toLocaleDateString(undefined, options));
    };

    updateTimeAndDate();
    const interval = setInterval(updateTimeAndDate, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="taskbar-container">
      <button 
        className={`taskbar-button flex items-center ${isStartMenuOpen ? 'active' : ''}`}
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
              className={`taskbar-button truncate max-w-xs ${activeWindow === window.id ? 'active' : ''}`}
              onClick={() => restoreWindow(window.id)}
            >
              {window.title}
            </button>
          ))}
      </div>

      <div className="h-8 border-r border-pink-primary mx-2"></div>

      <div className="text-xs text-white px-2">
        <div>{date}</div>
      </div>

      <div className="taskbar-button flex items-center">
        <div className="mr-1 w-2 h-2 bg-mint-accent rounded-full animate-pulse"></div>
        {time}
      </div>
    </div>
  );
};

export default Taskbar;