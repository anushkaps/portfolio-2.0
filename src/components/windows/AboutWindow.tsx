import React from 'react';

const AboutWindow: React.FC = () => {
  return (
    <div className="p-2 h-full overflow-auto">
      <div className="bg-pink-light p-4 border-2 border-pink-dark h-full">
        <h2 className="text-pink-primary text-lg mb-4 glow-text">Hello World!</h2>
        
        <div className="mb-4 space-y-3">
          <p className="text-xs">
            I'm Anushka, a web developer with a passion for creating beautiful, interactive experiences.
          </p>
          
          <p className="text-xs">
            My journey in web development started 5 years ago, and I've been building dreamy digital things ever since.
          </p>
          
          <p className="text-xs">
            I specialize in front-end development, with expertise in React, TypeScript, and creating pixel-perfect UI.
          </p>
        </div>
        
        <div className="mb-4">
          <h3 className="text-pink-primary text-sm mb-2">Experience</h3>
          <div className="space-y-3">
            <div>
              <p className="text-xs font-bold">Senior Frontend Developer at DreamTech</p>
              <p className="text-xs">2021 - Present</p>
            </div>
            <div>
              <p className="text-xs font-bold">Web Developer at PixelPerfect Agency</p>
              <p className="text-xs">2018 - 2021</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-pink-primary text-sm mb-2">Education</h3>
          <p className="text-xs font-bold">BS in Computer Science</p>
          <p className="text-xs">University of Digital Arts, 2018</p>
        </div>
      </div>
    </div>
  );
};

export default AboutWindow;