import React from 'react';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import { AppProvider } from './context/AppContext';
import StartMenu from './components/StartMenu';
import Windows from './components/Windows';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen w-screen flex items-center justify-center bg-[--pink-bg]">
        <div className="os-container pixel-border">
          <div className="flex flex-col h-full w-full overflow-hidden font-pixel text-sm">
            <div className="flex-1 relative overflow-hidden">
              <Desktop />
              <Windows />
              <StartMenu />
            </div>
            <Taskbar />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;