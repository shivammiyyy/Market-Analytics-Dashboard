import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth',
  //   });
  // };
  return (
    <footer className="bg-gray-400 text-white p-6 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold">Analyzer</h1>
          <p className="text-sm">© All rights reserved</p>
          <p className="text-sm">📞 +91-9560326670</p>
          <p className="text-sm">📧 analyzer@ac.in</p>
        </div>
        {/* Middle Navigation (Hidden on Small Screens) */}
        <ul className="hidden md:flex flex-col md:flex-col space-x-6">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/news" className="hover:underline">News</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
        <div className="text-center md:text-center text-sm mt-4 md:mt-0">
          Created by <b>SHIVAMMIYY</b>
        </div>
    </footer>
    
  );
};

export default Footer;
