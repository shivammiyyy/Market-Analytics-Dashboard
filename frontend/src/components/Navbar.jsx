import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for menu toggle
import { SignInButton, SignUpButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo and Nav Links */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-xl font-bold">Analyzer</Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/news" className="hover:underline">News</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Auth Links (Always Visible) */}
        <div className="hidden md:flex space-x-4">
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign UP</Link>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
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
            <li><Link to="/" className="hover:underline" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/news" className="hover:underline" onClick={() => setIsOpen(false)}>News</Link></li>
            <li><Link to="/about" className="hover:underline" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/contact" className="hover:underline" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign UP</Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
