import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCog, FaChevronDown } from 'react-icons/fa';

const Sidebar = ({ closeSidebar }) => {
  const [isExpoOpen, setIsExpoOpen] = useState(false);

  const toggleExpoDropdown = () => setIsExpoOpen(!isExpoOpen);

  const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem("user")));

  const {role} = loggedUser;

  return (
    <div className="h-full p-6 bg-gradient-to-br from-[#080000] to-[#0a0638]">
      <h2 className="text-2xl font-bold text-white mb-8 text-center">EMS</h2>

      <nav className="space-y-4">
        {/* Home */}
        {/* Expo Management Dropdown */}
        <div className="text-white">
          {role == "Admin" &&
          <div
            onClick={toggleExpoDropdown}
            className="flex items-center justify-between gap-3 cursor-pointer px-2 py-2 hover:bg-[#1a1a40] rounded"
          >
            <div className="flex items-center gap-3">
              <FaHome />
              Expo Management
            </div>
            <FaChevronDown className={`transition-transform ${isExpoOpen ? 'rotate-180' : ''}`} />
          </div> 
        }

          {isExpoOpen && (
            <div className="ml-8 mt-1 flex flex-col gap-1">
              <Link
                to="/dashboard/addexpo"
                onClick={closeSidebar}
                className="px-2 py-1 rounded hover:bg-[#2e2e6f] text-sm"
              >
                Add Expo Event
              </Link>
              <Link
                to="/dashboard/viewexpos"
                onClick={closeSidebar}
                className="px-2 py-1 rounded hover:bg-[#2e2e6f] text-sm"
              >
                View Expo Events
              </Link>
            </div>
          )}
        </div>

        {/* Settings */}
        <Link to="/dashboard/settings" onClick={closeSidebar} className="flex items-center gap-3 text-white">
          <FaCog /> Settings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
