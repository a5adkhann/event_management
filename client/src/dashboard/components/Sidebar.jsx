import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaCalendarAlt, FaChartBar, FaSignOutAlt, FaChevronDown, FaUserCircle } from 'react-icons/fa';

const Sidebar = ({ closeSidebar, logoutUser }) => {
  const [isExpoOpen, setIsExpoOpen] = useState(false);
  const [isExhibitorManageOpen, setIsExhibitorManageOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);

  const [isExhibitorPortalOpen, setIsExhibitorPortalOpen] = useState(false);
  const [isAttendeeOpen, setIsAttendeeOpen] = useState(false);

  const toggle = (setter) => setter((prev) => !prev);

  const storedUser = localStorage.getItem('user');
  const loggedUser = storedUser ? JSON.parse(storedUser) : null;

  return (
    <div className="h-full p-6 bg-gradient-to-br from-[#080000] to-[#0a0638] text-white overflow-y-auto">
      <h2 className="text-2xl font-bold mb-8 text-center">EMS Panel</h2>

      <nav className="space-y-4">
        {/* Admin Sidebar */}
        {loggedUser?.role === 'Admin' && (
          <>
            {/* Expo Management */}
            <div>
              <div onClick={() => toggle(setIsExpoOpen)} className="flex justify-between items-center cursor-pointer hover:bg-[#1a1a40] px-2 py-2 rounded">
                <div className="flex items-center gap-2">
                  <FaHome /> Expo Management
                </div>
                <FaChevronDown className={`transition-transform ${isExpoOpen ? 'rotate-180' : ''}`} />
              </div>

              {isExpoOpen && (
                <div className="ml-8 mt-1 flex flex-col gap-1">
                  <Link to="/dashboard/addexpo" onClick={closeSidebar} className="hover:bg-[#2e2e6f] px-2 py-1 rounded text-sm">
                    Add / Manage Expo Events
                  </Link>
                  <Link to="/dashboard/viewexpos" onClick={closeSidebar} className="hover:bg-[#2e2e6f] px-2 py-1 rounded text-sm">
                    Manage Event Details
                  </Link>
                  <Link to="/dashboard/booth-allocation" onClick={closeSidebar} className="hover:bg-[#2e2e6f] px-2 py-1 rounded text-sm">
                    Booth Allocation
                  </Link>
                </div>
              )}
            </div>

            {/* Exhibitor Management */}
            <div>
              <div onClick={() => toggle(setIsExhibitorManageOpen)} className="flex justify-between items-center cursor-pointer hover:bg-[#1a1a40] px-2 py-2 rounded">
                <div className="flex items-center gap-2">
                  <FaUsers /> Exhibitor Management
                </div>
                <FaChevronDown className={`transition-transform ${isExhibitorManageOpen ? 'rotate-180' : ''}`} />
              </div>

              {isExhibitorManageOpen && (
                <div className="ml-8 mt-1 flex flex-col gap-1">
                  <Link to="/dashboard/exhibitor-applications" onClick={closeSidebar} className="hover:bg-[#2e2e6f] px-2 py-1 rounded text-sm">
                    View Applications
                  </Link>
                  <Link to="/dashboard/registration-approval" onClick={closeSidebar} className="hover:bg-[#2e2e6f] px-2 py-1 rounded text-sm">
                    Approve / Reject Registrations
                  </Link>
                  <Link to="/dashboard/manage-exhibitor-booths" onClick={closeSidebar} className="hover:bg-[#2e2e6f] px-2 py-1 rounded text-sm">
                    Manage Booths
                  </Link>
                </div>
              )}
            </div>

            {/* Schedule Management */}
            <div>
              <div onClick={() => toggle(setIsScheduleOpen)} className="flex justify-between items-center cursor-pointer hover:bg-[#1a1a40] px-2 py-2 rounded">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt /> Schedule Management
                </div>
                <FaChevronDown className={`transition-transform ${isScheduleOpen ? 'rotate-180' : ''}`} />
              </div>

              {isScheduleOpen && (
                <div className="ml-8 mt-1 flex flex-col gap-1">
                  <Link to="/dashboard/manage-schedule" onClick={closeSidebar} className="hover:bg-[#2e2e6f] px-2 py-1 rounded text-sm">
                    Create / Manage Schedules
                  </Link>
                  <Link to="/dashboard/schedule-updates" onClick={closeSidebar} className="hover:bg-[#2e2e6f] px-2 py-1 rounded text-sm">
                    Real-Time Schedule Updates
                  </Link>
                </div>
              )}
            </div>

            {/* Analytics */}
            <div>
              <div onClick={() => toggle(setIsAnalyticsOpen)} className="flex justify-between items-center cursor-pointer hover:bg-[#1a1a40] px-2 py-2 rounded">
                <div className="flex items-center gap-2">
                  <FaChartBar /> Analytics & Reporting
                </div>
                <FaChevronDown className={`transition-transform ${isAnalyticsOpen ? 'rotate-180' : ''}`} />
              </div>

              {isAnalyticsOpen && (
                <div className="ml-8 mt-1 flex flex-col gap-1">
                  <Link to="/dashboard/attendee-engagement" onClick={closeSidebar} className="hover:bg-[#2e2e6f] px-2 py-1 rounded text-sm">
                    Attendee Engagement
                  </Link>
                  <Link to="/dashboard/booth-stats" onClick={closeSidebar} className="hover:bg-[#2e2e6f] px-2 py-1 rounded text-sm">
                    Booth Visit Statistics
                  </Link>
                  <Link to="/dashboard/session-popularity" onClick={closeSidebar} className="hover:bg-[#2e2e6f] px-2 py-1 rounded text-sm">
                    Session Popularity
                  </Link>
                  <Link to="/dashboard/real-time-analytics" onClick={closeSidebar} className="hover:bg-[#2e2e6f] px-2 py-1 rounded text-sm">
                    Real-Time Analytics
                  </Link>
                </div>
              )}
            </div>
          </>
        )}

        {/* Exhibitor Portal */}
        {loggedUser?.role === 'Exibiter' && (
          <div>
            <div onClick={() => toggle(setIsExhibitorPortalOpen)} className="flex justify-between items-center cursor-pointer hover:bg-[#1a1a40] px-2 py-2 rounded">
              <div className="flex items-center gap-2">
                <FaUserCircle /> Exhibitor Portal
              </div>
              <FaChevronDown className={`transition-transform ${isExhibitorPortalOpen ? 'rotate-180' : ''}`} />
            </div>

            {isExhibitorPortalOpen && (
              <div className="ml-8 mt-1 flex flex-col gap-1">
                <Link to="exhibitor-register" onClick={closeSidebar} className="hover:bg-[#2e2e6f] px-2 py-1 rounded text-sm">
                  Register & Manage Profile
                </Link>
                <Link to="/exhibitor/booth-management" onClick={closeSidebar} className="hover:bg-[#2e2e6f] px-2 py-1 rounded text-sm">
                  Booth Management
                </Link>
                <Link to="/exhibitor/communication" onClick={closeSidebar} className="hover:bg-[#2e2e6f] px-2 py-1 rounded text-sm">
                  Communication Tools
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Attendee Interface */}
        {loggedUser?.role === 'Attendee' && (
          <div>
            <div onClick={() => toggle(setIsAttendeeOpen)} className="flex justify-between items-center cursor-pointer hover:bg-[#1a1a40] px-2 py-2 rounded">
              <div className="flex items-center gap-2">
                <FaUsers /> Attendee Interface
              </div>
              <FaChevronDown className={`transition-transform ${isAttendeeOpen ? 'rotate-180' : ''}`} />
            </div>

            {isAttendeeOpen && (
              <div className="ml-8 mt-1 flex flex-col gap-1">
                <Link to="/attendee/event-info" onClick={closeSidebar} className="hover:bg-[#2e2e6f] px-2 py-1 rounded text-sm">
                  View Event Info & Register
                </Link>
                <Link to="/attendee/search-interaction" onClick={closeSidebar} className="hover:bg-[#2e2e6f] px-2 py-1 rounded text-sm">
                  Search & Interaction
                </Link>
                <Link to="/attendee/schedule-management" onClick={closeSidebar} className="hover:bg-[#2e2e6f] px-2 py-1 rounded text-sm">
                  Schedule Management
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Logout */}
        <button onClick={logoutUser} className="flex items-center gap-3 text-red-500 px-2 py-2 hover:bg-[#2e2e6f] rounded w-full text-left">
          <FaSignOutAlt /> Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
