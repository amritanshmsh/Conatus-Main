"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        className="text-white text-2xl bg-gray-900 p-3 rounded-full hover:bg-gray-700 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-40">
          <div className="relative bg-gray-900 p-8 rounded-lg text-center w-96 shadow-xl transform scale-100 transition-transform duration-300">
            
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-400 transition"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </button>

            <h2 className="text-2xl font-bold text-purple-400 mb-6">Menu</h2>
            <div className="space-y-4">
              <Link href="/aboutus" className="block py-3 text-lg hover:bg-purple-600 rounded-lg transition">About Us</Link>
              <Link href="/connect" className="block py-3 text-lg hover:bg-purple-600 rounded-lg transition">Connect</Link>
              <Link href="/faq" className="block py-3 text-lg hover:bg-purple-600 rounded-lg transition">FAQ</Link>
              <Link href="/services" className="block py-3 text-lg hover:bg-purple-600 rounded-lg transition">Services</Link>
              <Link href="/social" className="block py-3 text-lg hover:bg-purple-600 rounded-lg transition">Social</Link>
              
              <div className="relative mt-4">
                <button
                  className="w-full py-3 text-lg flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-lg transition"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Members <FaChevronDown className="ml-2" />
                </button>
                {dropdownOpen && (
                  <div className="mt-2 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <Link href="/directors" className="block py-2 hover:bg-gray-700 transition">Directors</Link>
                    <Link href="/team" className="block py-2 hover:bg-gray-700 transition">Team</Link>
                    <Link href="/mentors" className="block py-2 hover:bg-gray-700 transition">Mentors</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;