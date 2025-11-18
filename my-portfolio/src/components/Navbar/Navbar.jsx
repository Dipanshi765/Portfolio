

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    
    <nav className="flex items-center h-8 text-gray-500 leading-none justify-between mt-8 sm:justify-end lg:gap-3 md:gap-3 sm:gap-3">
      
          <Link to="/" className="hover:text-black transition-colors">
            Home
          </Link>
        

      <div className="w-1 h-1 rounded-full bg-gray-500"></div>

          <Link to="/projects" className="hover:text-black transition-colors">
            Projects
          </Link>

      <div className="w-1 h-1 rounded-full bg-gray-500"></div>

          <a href="/#contact" className="hover:text-black transition-colors">
            Contact
          </a>

      <div className="w-1 h-1 rounded-full bg-gray-500"></div>

          <a
            href="https://drive.google.com/file/d/1B4SlJoQ1vugzpIHSzkIqJoGoUtHroSui/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            Resume
          </a>
    </nav>
    
  );
};

export default Navbar;
