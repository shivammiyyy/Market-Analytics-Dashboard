import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { DashboardDir } from "./DashboardDir";

const activeLinkClasses = "bg-gray-300 text-white px-3 py-1 rounded";
const inactiveLinkClasses = "text-gray-800 hover:bg-gray-200 px-3 py-1 rounded";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Desktop Navigation Links */}
        <div className="flex items-center space-x-6">
          <NavLink to="/" className="text-xl font-bold">
            Analyzer
          </NavLink>
          <ul className="hidden md:flex space-x-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLinkClasses : inactiveLinkClasses
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  isActive ? activeLinkClasses : inactiveLinkClasses
                }
              >
                News
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeLinkClasses : inactiveLinkClasses
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? activeLinkClasses : inactiveLinkClasses
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Desktop - Dashboard and Auth Links */}
        <div className="hidden md:flex space-x-4 items-center">
          <SignedIn>
            <DashboardDir />
            <UserButton />
          </SignedIn>
          <SignedOut>
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive ? activeLinkClasses : inactiveLinkClasses
              }
            >
              Sign In
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? activeLinkClasses : inactiveLinkClasses
              }
            >
              Sign Up
            </NavLink>
          </SignedOut>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? activeLinkClasses : inactiveLinkClasses
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/news"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? activeLinkClasses : inactiveLinkClasses
                }
              >
                News
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? activeLinkClasses : inactiveLinkClasses
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? activeLinkClasses : inactiveLinkClasses
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <SignedIn>
                <DashboardDir />
                <UserButton />
              </SignedIn>
            </li>
            <li>
              <SignedOut>
                <NavLink
                  to="/signin"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive ? activeLinkClasses : inactiveLinkClasses
                  }
                >
                  Sign In
                </NavLink>
              </SignedOut>
            </li>
            <li>
              <SignedOut>
                <NavLink
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive ? activeLinkClasses : inactiveLinkClasses
                  }
                >
                  Sign Up
                </NavLink>
              </SignedOut>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
