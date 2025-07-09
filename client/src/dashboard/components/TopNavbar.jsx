import React from 'react';
import { FaBars } from 'react-icons/fa';

const TopNavbar = ({ toggleSidebar }) => {
  return (
    <header className="shadow-md px-6 py-4 flex items-center justify-between bg-gradient-to-br from-[#080000] to-[#0a0638]">
      {/* Sidebar Toggle for Mobile */}
      <button className="md:hidden text-2xl text-white" onClick={toggleSidebar}>
        <FaBars />
      </button>

      {/* Page Title */}
      <h1 className="text-xl font-semibold text-white">EventSphere Admin</h1>

      {/* User Info (optional) */}
      <div className="text-white hidden md:block">Welcome, Admin</div>
    </header>
  );
};

export default TopNavbar;
