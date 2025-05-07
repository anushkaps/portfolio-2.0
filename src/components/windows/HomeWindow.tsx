import React from 'react';

const HomeWindow: React.FC = () => {
  return (
    <div className="p-2 h-full overflow-auto">
      <div className="bg-pink-light p-4 border-2 border-pink-dark h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-lg md:text-2xl mb-2 text-pink-primary glow-text">Hi, I'm Anushka</h1>
        <h2 className="text-xl md:text-3xl mb-4 text-pink-dark glow-text">Web Developer</h2>
        <p className="text-xs md:text-sm text-pink-dark">I build dreamy things ✨</p>
      </div>
    </div>
  );
};

export default HomeWindow;