import React from 'react';

const AboutWindow: React.FC = () => {
  return (
    <div className="p-2 h-full overflow-auto">
      <div className="bg-pink-light p-4 border-2 border-pink-dark min-h-full text-xs space-y-4">
        <h2 className="text-pink-primary text-lg mb-2 glow-text">Hello World!</h2>

        <div>
          <h3 className="text-pink-primary text-sm mb-2">Experience</h3>
          <div className="space-y-2">
            <p><span className="font-bold">SDE Intern</span> — Amazon (June–July 2025)</p>
            <p><span className="font-bold">Web Developer</span> — WatchDen (May 2025–Present)</p>
            <p><span className="font-bold">Full Stack Developer</span> — TradeHub24 (Feb 2025–April 2025)</p>
            <p><span className="font-bold">MERN Stack Teaching Assistant</span> — Stealth Startup (Jan–Mar 2025)</p>
          </div>
        </div>

        <div>
          <h3 className="text-pink-primary text-sm mb-2">Education</h3>
          <p><span className="font-bold">B.Tech. in Computer Science</span></p>
          <p>IIIT Kottayam (2023–2027)</p>
        </div>
      </div>
    </div>
  );
};

export default AboutWindow;
