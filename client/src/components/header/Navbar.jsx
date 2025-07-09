import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-900">EventSphere</div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/events" className="hover:text-blue-900">Events</Link></li>
          <li><Link to="/services" className="hover:text-blue-900">Services</Link></li>
          <li><Link to="/contact" className="hover:text-blue-900">Contact</Link></li>
          <li><Link to="/dashboard" className="hover:text-blue-900">Dashboard</Link></li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <Link to="/login">
            <button className="px-4 py-2 border border-blue-900 text-blue-900 rounded-full hover:bg-blue-50 transition">Login</button>
          </Link>
          <Link to="/register">
            <button className="px-4 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-900 transition">Register</button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/events" onClick={closeMenu}>Events</Link></li>
            <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            <li><Link to="/dashboard" onClick={closeMenu}>Dashboard</Link></li>
          </ul>
          <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
            <Link to="/login" onClick={closeMenu}>
              <button className="w-full border border-blue-600 text-blue-600 rounded-full py-2">Login</button>
            </Link>
            <Link to="/register" onClick={closeMenu}>
              <button className="w-full bg-blue-600 text-white rounded-full py-2">Register</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
