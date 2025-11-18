

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="
        flex items-center gap-3 p-4 text-gray-500 leading-none
        justify-center sm:justify-end sm:mr-60 mt-8
      "
    >
      <div>
        <h2>
          <Link to="/" className="hover:text-black transition-colors">
            Home
          </Link>
        </h2>
      </div>

      <div className="w-1 h-1 rounded-full bg-gray-500"></div>

      <div>
        <h2>
          <Link to="/projects" className="hover:text-black transition-colors">
            Projects
          </Link>
        </h2>
      </div>

      <div className="w-1 h-1 rounded-full bg-gray-500"></div>

      <div>
        <h2>
          <a href="/#contact" className="hover:text-black transition-colors">
            Contact
          </a>
        </h2>
      </div>

      <div className="w-1 h-1 rounded-full bg-gray-500"></div>

      <div>
        <h2>
          <a
            href="https://drive.google.com/file/d/1B4SlJoQ1vugzpIHSzkIqJoGoUtHroSui/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            Resume
          </a>
        </h2>
      </div>
    </nav>
  );
};

export default Navbar;
