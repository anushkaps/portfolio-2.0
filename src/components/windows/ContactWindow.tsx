import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const ContactWindow: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // In a real app, you'd send this data to a server
  };

  return (
    <div className="p-2 h-full overflow-auto">
      <div className="bg-pink-light p-4 border-2 border-pink-dark h-full">
        <h2 className="text-pink-primary text-lg mb-4 glow-text">Contact Me</h2>
        
        {isSubmitted ? (
          <div className="bg-pink-bg p-4 border-2 border-pink-dark mb-4">
            <p className="text-xs mb-2">Thanks for your message!</p>
            <p className="text-xs">I'll get back to you soon.</p>
            <button 
              className="pixel-button mt-4 text-xs"
              onClick={() => setIsSubmitted(false)}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="mb-3">
              <label htmlFor="name" className="block text-xs mb-1">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 text-xs bg-pink-bg border-2 border-pink-dark focus:border-pink-primary"
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="email" className="block text-xs mb-1">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 text-xs bg-pink-bg border-2 border-pink-dark focus:border-pink-primary"
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="message" className="block text-xs mb-1">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 text-xs bg-pink-bg border-2 border-pink-dark focus:border-pink-primary min-h-[100px]"
              />
            </div>
            
            <button type="submit" className="pixel-button text-xs">
              Send Message
            </button>
          </form>
        )}
        
        <div>
          <h3 className="text-pink-primary text-sm mb-2">Connect With Me</h3>
          
          <div className="space-y-2">
            <a 
              href="mailto:anushka@example.com" 
              className="flex items-center text-xs text-pink-dark hover:text-pink-primary"
            >
              <Mail size={14} className="mr-2" />
              anushka@example.com
            </a>
            
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-xs text-pink-dark hover:text-pink-primary"
            >
              <Github size={14} className="mr-2" />
              github.com/anushka
            </a>
            
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-xs text-pink-dark hover:text-pink-primary"
            >
              <Linkedin size={14} className="mr-2" />
              linkedin.com/in/anushka
            </a>
            
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-xs text-pink-dark hover:text-pink-primary"
            >
              <Twitter size={14} className="mr-2" />
              @anushka_dev
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactWindow;