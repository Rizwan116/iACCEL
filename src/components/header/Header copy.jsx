import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header style={{backgroundColor: "#1e295c",}} className="fixed top-0 left-0 right-0 shadow-lg py-4 z-50">
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-6">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <NavLink to="/home">
            <img
              src="../../../public/LogoAcl.png" // Replace with your logo URL
              alt="Logo"
              className="h-10 object-contain transition-transform duration-500 transform hover:scale-105"
            />
          </NavLink>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-white font-semibold text-lg ">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `transition-transform duration-300 transform ${
                  isActive
                    ? 'text-yellow-300 scale-110'
                    : 'text-white hover:text-yellow-300'
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-transform duration-300 transform ${
                  isActive
                    ? 'text-yellow-300 scale-110'
                    : 'text-white hover:text-yellow-300'
                }`
              }
            >
              About
            </NavLink>
          </li>
         

               <li>
            <NavLink
              to="/Services"
              className={({ isActive }) =>
                `transition-transform duration-300 transform ${
                  isActive
                    ? 'text-yellow-300 scale-110'
                    : 'text-white hover:text-yellow-300'
                }`
              }
            >
              Services
            </NavLink>
          </li>

           <li>
            <NavLink
              to="/Media"
              className={({ isActive }) =>
                `transition-transform duration-300 transform ${
                  isActive
                    ? 'text-yellow-300 scale-110'
                    : 'text-white hover:text-yellow-300'
                }`
              }
            >
              Media
            </NavLink>
          </li>

           <li>
            <NavLink
              to="/Community"
              className={({ isActive }) =>
                `transition-transform duration-300 transform ${
                  isActive
                    ? 'text-yellow-300 scale-110'
                    : 'text-white hover:text-yellow-300'
                }`
              }
            >
              Community
            </NavLink>
          </li>

           <li>
            <NavLink
              to="/contactus"
              className={({ isActive }) =>
                `transition-transform duration-300 transform ${
                  isActive
                    ? 'text-yellow-300 scale-110'
                    : 'text-white hover:text-yellow-300'
                }`
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

      </nav>
    </header>
  );
}

export default Header;
