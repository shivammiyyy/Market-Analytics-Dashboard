import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'ALL', path: '/dashboard/ALL' },
    { name: 'IT', path: '/dashboard/IT' },
    { name: 'CONSUMER', path: '/dashboard/CONSUMER' },
    { name: 'FINANCE', path: '/dashboard/FINANCE' },
    { name: 'HEALTH', path: '/dashboard/HEALTH' },
    { name: 'COMMUNICATION', path: '/dashboard/COMMUNICATION' },
    { name: 'ENERGY', path: '/dashboard/ENERGY' },
  ];

  return (
    <div className="bg-gray-900 text-white w-full md:w-64 min-h-screen p-4">
      {/* Toggle Button */}
      <div className="flex items-center justify-between md:hidden">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Menu */}
      <ul
        className={`mt-4 space-y-3 md:block ${isOpen ? 'block' : 'hidden'} md:space-y-5`}
      >
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={`block px-4 py-2 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? 'bg-blue-600 font-semibold'
                  : 'hover:bg-gray-700'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
