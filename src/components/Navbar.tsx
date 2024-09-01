
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black text-green-500 p-4 font-mono relative">
         <div className="flex flex-col md:flex-row items-center justify-between">
         <div className="text-xs mb-2 md:mb-0 flex items-center">
            <span className="text-lg font-bold mr-2 animate-typewriter">GustavoInTech</span>
            {/*<span className="text-green-500 animate-blink">_</span>*/}
            {/*<span className="text-sm text-gray-400">Explorando o futuro da tecnologia</span>*/}
         </div>
      <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        <li>
          <Link href="/home" className="command">
           Home
          </Link>
        </li>
        <li>
          <Link href="/projects" className="command">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/about" className="command">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="command">
            Contact
          </Link>
        </li>
      </ul>
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-green-500 h-1 animate-progress"></div>
    </nav>
  );
};

export default Navbar;