import React, { useRef, useEffect } from 'react';
import { Rnd } from 'react-rnd';
import { useAppContext, Window as WindowType } from '../context/AppContext';
import { Minimize2, Maximize2, X, Minimize } from 'lucide-react';

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
  const isMaximized = window.isMaximized;

  return (
    <Rnd
      className={`window ${isActive ? 'window-active' : 'window-inactive'} ${window.isNew ? 'window-open' : ''}`}
      style={{ 
        zIndex: window.zIndex,
        border: '2px solid var(--dark-contrast)',
        outline: isActive ? '2px solid var(--pink-bright)' : 'none',
      }}
      position={{
        x: window.position.x,
        y: window.position.y,
      }}
      size={{
        width: window.size.width,
        height: window.size.height,
      }}
      minWidth={300}
      minHeight={200}
      dragHandleClassName="window-header"
      disableDragging={isMaximized}
      resizeHandleClasses={{
        top: 'react-resizable-handle react-resizable-handle-top',
        right: 'react-resizable-handle react-resizable-handle-right',
        bottom: 'react-resizable-handle react-resizable-handle-bottom',
        left: 'react-resizable-handle react-resizable-handle-left',
        topRight: 'react-resizable-handle react-resizable-handle-top-right',
        bottomRight: 'react-resizable-handle react-resizable-handle-bottom-right',
        bottomLeft: 'react-resizable-handle react-resizable-handle-bottom-left',
        topLeft: 'react-resizable-handle react-resizable-handle-top-left',
      }}
      enableResizing={!isMaximized ? {
        top: true,
        right: true,
        bottom: true,
        left: true,
        topRight: true,
        bottomRight: true,
        bottomLeft: true,
        topLeft: true,
      } : false}
      onDragStop={(e, d) => {
        if (!isMaximized) {
          updateWindowPosition(window.id, { x: d.x, y: d.y });
        }
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        if (!isMaximized) {
          updateWindowSize(window.id, {
            width: parseInt(ref.style.width),
            height: parseInt(ref.style.height),
          });
          updateWindowPosition(window.id, position);
        }
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
              {isMaximized ? <Minimize size={10} /> : <Maximize2 size={10} />}
            </button>
            <button 
              className="window-button bg-pink-light"
              onClick={() => closeWindow(window.id)}
            >
              <X size={10} />
            </button>
          </div>
        </div>
        <div className="window-body flex-1 scanline">
          {children}
        </div>
      </div>
    </Rnd>
  );
};

export default Window;