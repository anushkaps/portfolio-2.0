import React, { useRef, useEffect } from 'react';
import { Rnd } from 'react-rnd';
import { useAppContext, Window as WindowType } from '../context/AppContext';
import { Minimize2, Maximize2, X } from 'lucide-react';

interface WindowProps {
  window: WindowType;
  children: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({ window, children }) => {
  const { 
    activeWindow, 
    setActiveWindow, 
    closeWindow, 
    minimizeWindow, 
    maximizeWindow,
    updateWindowPosition,
    updateWindowSize
  } = useAppContext();

  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (windowRef.current && activeWindow === window.id) {
      windowRef.current.focus();
    }
  }, [activeWindow, window.id]);

  if (window.isMinimized) return null;

  const isActive = activeWindow === window.id;

  return (
    <Rnd
      className={`window ${isActive ? 'window-active' : 'window-inactive'}`}
      style={{ 
        zIndex: window.zIndex,
        border: '2px solid #8C4F6F',
        outline: isActive ? '2px solid #FF8AC3' : 'none',
      }}
      default={{
        x: window.position.x,
        y: window.position.y,
        width: window.size.width,
        height: window.size.height,
      }}
      minWidth={300}
      minHeight={200}
      dragHandleClassName="window-header"
      onDragStop={(e, d) => {
        updateWindowPosition(window.id, { x: d.x, y: d.y });
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        updateWindowSize(window.id, {
          width: parseInt(ref.style.width),
          height: parseInt(ref.style.height),
        });
        updateWindowPosition(window.id, position);
      }}
      onClick={() => setActiveWindow(window.id)}
    >
      <div 
        ref={windowRef}
        className="flex flex-col h-full focus:outline-none"
        tabIndex={-1}
      >
        <div className="window-header">
          <div className="window-title truncate flex-1">
            {window.title}
          </div>
          <div className="flex">
            <button 
              className="window-button bg-pink-light"
              onClick={() => minimizeWindow(window.id)}
            >
              <Minimize2 size={10} />
            </button>
            <button 
              className="window-button bg-pink-light"
              onClick={() => maximizeWindow(window.id)}
            >
              <Maximize2 size={10} />
            </button>
            <button 
              className="window-button bg-pink-light"
              onClick={() => closeWindow(window.id)}
            >
              <X size={10} />
            </button>
          </div>
        </div>
        <div className="window-body flex-1">
          {children}
        </div>
      </div>
    </Rnd>
  );
};

export default Window;