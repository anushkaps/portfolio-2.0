import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

const TerminalWindow: React.FC = () => {
  const [isTyping, setIsTyping] = useState(true);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  
  useEffect(() => {
    // Focus on the window when it opens
    const timer = setTimeout(() => {
      setIsTyping(false);
    }, 9000); // Adjust timing based on typewriter duration
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentCommand.trim()) {
      processCommand(currentCommand);
      setCurrentCommand('');
    }
  };
  
  const processCommand = (command: string) => {
    let response = '';
    
    // Simple command processing
    const cmd = command.toLowerCase().trim();
    
    if (cmd === 'help') {
      response = `
Available commands:
- about: Learn about me
- skills: See my technical skills
- projects: View my portfolio
- contact: Get in touch
- clear: Clear the terminal
- help: Show this help menu
      `;
    } else if (cmd === 'about') {
      response = "I'm Anushka, a web developer specializing in creating beautiful, interactive web experiences.";
    } else if (cmd === 'skills') {
      response = "My skills include React, TypeScript, Node.js, UI/UX Design, and more.";
    } else if (cmd === 'projects') {
      response = "I've worked on e-commerce platforms, dashboards, and creative portfolio sites.";
    } else if (cmd === 'contact') {
      response = "Email: anushka@example.com\nGitHub: github.com/anushka";
    } else if (cmd === 'clear') {
      setCommandHistory([]);
      return;
    } else {
      response = `Command not found: ${command}. Type 'help' for available commands.`;
    }
    
    setCommandHistory([...commandHistory, `&gt; ${command}`, response]);
  };

  return (
    <div className="p-2 h-full flex flex-col">
      <div className="bg-black text-green-400 p-2 flex-1 font-mono text-xs overflow-auto">
        {isTyping ? (
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("&gt; Hello, welcome to my portfolio!")
                .pauseFor(500)
                .typeString("<br />")
                .typeString("&gt; I'm Anushka.")
                .pauseFor(500)
                .typeString("<br />")
                .typeString("&gt; I build dreamy things for the web.")
                .pauseFor(500)
                .typeString("<br />")
                .typeString("&gt; Type 'help' to see available commands.")
                .start();
            }}
          />
        ) : (
          <>
            <div className="mb-4">
              <div>&gt; Hello, welcome to my portfolio!</div>
              <div>&gt; I'm Anushka.</div>
              <div>&gt; I build dreamy things for the web.</div>
              <div>&gt; Type 'help' to see available commands.</div>
            </div>
            
            {commandHistory.map((line, index) => (
              <div key={index} className="whitespace-pre-wrap">{line}</div>
            ))}
            
            <div className="flex">
              <span className="mr-1">&gt;</span>
              <input
                type="text"
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent outline-none border-none flex-1 text-green-400"
                autoFocus
              />
              <span className="typing-cursor">|</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TerminalWindow;