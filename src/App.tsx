import React, { useState } from 'react';import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import { AppProvider } from './context/AppContext';
import StartMenu from './components/StartMenu';
import Windows from './components/Windows';
import Loading from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Loading onComplete={() => setIsLoading(false)} />;
  }

  return (
    <AppProvider>
      <div className="min-h-screen w-screen flex items-center justify-center bg-[#f3d9f6]">
        <div className="os-container pixel-border scanline">
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