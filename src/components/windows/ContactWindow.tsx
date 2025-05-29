import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const ContactWindow: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="p-2 h-full overflow-auto">
      <div className="bg-pink-light p-4 border-2 border-pink-dark min-h-full">
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
          <form
            action="https://formspree.io/f/xkgbwwjv" // ⬅️ Replace this
            method="POST"
            onSubmit={() => setIsSubmitted(true)}
            className="mb-6"
          >
            <div className="mb-3">
              <label htmlFor="name" className="block text-xs mb-1">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
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
                required
                className="w-full p-2 text-xs bg-pink-bg border-2 border-pink-dark focus:border-pink-primary"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="block text-xs mb-1">Message:</label>
              <textarea
                id="message"
                name="message"
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
              href="mailto:anushkasinghpratap@gmail.com"
              className="flex items-center text-xs text-pink-dark hover:text-pink-primary"
            >
              <Mail size={14} className="mr-2" />
              anushkasinghpratap@gmail.com
            </a>

            <a
              href="https://github.com/anushkaps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xs text-pink-dark hover:text-pink-primary"
            >
              <Github size={14} className="mr-2" />
              github.com/anushkaps
            </a>

            <a
              href="http://www.linkedin.com/in/anushka-pratap-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xs text-pink-dark hover:text-pink-primary"
            >
              <Linkedin size={14} className="mr-2" />
              linkedin.com/in/anushka-pratap-singh
            </a>

            <a
              href="https://x.com/anushkapspsps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xs text-pink-dark hover:text-pink-primary"
            >
              <Twitter size={14} className="mr-2" />
              @anushkapspsps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactWindow;
