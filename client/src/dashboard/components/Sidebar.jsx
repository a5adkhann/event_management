import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCalendar, FaUsers, FaCog } from 'react-icons/fa';

const Sidebar = ({ closeSidebar }) => {
  return (
    <div className="h-full p-6">
      <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">EMS</h2>
      <nav className="space-y-4">
        <Link to="/dashboard" onClick={closeSidebar} className="flex items-center gap-3 text-gray-700 hover:text-slate-900">
          <FaHome /> Home
        </Link>
        <Link to="/dashboard/events" onClick={closeSidebar} className="flex items-center gap-3 text-gray-700 hover:text-slate-900">
          <FaCalendar /> Events
        </Link>
        <Link to="/dashboard/users" onClick={closeSidebar} className="flex items-center gap-3 text-gray-700 hover:text-slate-900">
          <FaUsers /> Users
        </Link>
        <Link to="/dashboard/settings" onClick={closeSidebar} className="flex items-center gap-3 text-gray-700 hover:text-slate-900">
          <FaCog /> Settings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
