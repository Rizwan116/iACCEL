import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from '../../../public/LogoAcl.png'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const navLinks = [
    { path: "/home", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/media", label: "Media" },
    { path: "/community", label: "Community" },
    { path: "/contactus", label: "Contact Us" },
  ];

  return (
    <header
      style={{ backgroundColor: "#1e295c", textTransform: "uppercase" }}
      className="fixed top-0 left-0 right-0 shadow-lg py-7 z-50"
    >
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-6">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <NavLink to="/home">
            <img
              src={Logo}
              alt="Logo"
              className="h-10 object-contain transition-transform duration-500 transform hover:scale-105"
            />
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-white font-semibold text-md">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition-transform duration-300 transform ${
                    isActive
                      ? "red font-bold scale-110"
                      : "text-white hover:text-yellow-300"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white cursor-pointer z-50">
          {menuOpen ? (
            <CloseIcon fontSize="large" onClick={() => setMenuOpen(false)}/>
          ) : (
            <MenuIcon fontSize="large" onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </nav>

      {/* Background Overlay */}
      {menuOpen && (
        // fixed inset-0
        <div className="fixed opacity bg-black bg-opacity-50 z-40"></div>
      )}

      {/* Mobile Navigation */}
      {menuOpen && (
        <ul
          ref={menuRef}
          className="md:hidden fixed top-22 left-0 right-0 flex flex-col items-center space-y-6 bg-[#1e295c] text-white font-semibold text-lg py-6 z-50"
        >
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                onClick={() => setMenuOpen(false)} // close when link clicked
                className={({ isActive }) =>
                  `transition-transform duration-300 transform ${
                    isActive
                      ? "text-yellow-300 scale-110"
                      : "text-white hover:text-yellow-300"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Header;
