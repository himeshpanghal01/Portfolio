import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-10  border-t border-slate-700">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">
          © {new Date().getFullYear()} <span className="text-white font-semibold">Himesh Panghal</span>. Built with ❤️ using React & Tailwind CSS.
        </p>

        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="w-5 h-5 hover:text-purple-400 transition-colors duration-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 hover:text-purple-400 transition-colors duration-300" />
          </a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
