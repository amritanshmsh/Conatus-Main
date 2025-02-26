"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Hamburger / Close Button */}
      <button
        className="text-white text-2xl bg-purple-600 p-3 rounded-full shadow-md hover:bg-purple-700 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-40 
                     transition-opacity duration-300"
        >
          {/* Menu Container */}
          <div
            className="relative bg-[#1E1F3B] p-8 rounded-xl text-center w-80 sm:w-96 shadow-2xl 
                       transform scale-100 transition-transform duration-300"
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-200 text-2xl hover:text-gray-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </button>

            {/* Menu Title */}
            <h2 className="text-2xl font-extrabold text-white mb-8">Menu</h2>

            {/* Menu Links */}
            <div className="space-y-3 text-lg font-medium">
              <Link
                href="/aboutus"
                className="block py-3 rounded-lg text-gray-200 relative overflow-hidden
                           hover:text-white hover:bg-purple-700/30 transition-colors
                           after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0
                           after:bg-purple-400 hover:after:w-full after:transition-all after:duration-300"
              >
                About Us
              </Link>
              <Link
                href="/connect"
                className="block py-3 rounded-lg text-gray-200 relative overflow-hidden
                           hover:text-white hover:bg-purple-700/30 transition-colors
                           after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0
                           after:bg-purple-400 hover:after:w-full after:transition-all after:duration-300"
              >
                Connect
              </Link>
              <Link
                href="/faq"
                className="block py-3 rounded-lg text-gray-200 relative overflow-hidden
                           hover:text-white hover:bg-purple-700/30 transition-colors
                           after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0
                           after:bg-purple-400 hover:after:w-full after:transition-all after:duration-300"
              >
                FAQ
              </Link>
              <Link
                href="/services"
                className="block py-3 rounded-lg text-gray-200 relative overflow-hidden
                           hover:text-white hover:bg-purple-700/30 transition-colors
                           after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0
                           after:bg-purple-400 hover:after:w-full after:transition-all after:duration-300"
              >
                Services
              </Link>
              <Link
                href="/social"
                className="block py-3 rounded-lg text-gray-200 relative overflow-hidden
                           hover:text-white hover:bg-purple-700/30 transition-colors
                           after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0
                           after:bg-purple-400 hover:after:w-full after:transition-all after:duration-300"
              >
                Social
              </Link>

              {/* Dropdown Menu */}
              <div className="relative mt-2">
                <button
                  className="w-full py-3 flex items-center justify-center rounded-lg text-gray-200 
                             bg-purple-800/30 hover:bg-purple-700/40 transition-colors
                             relative overflow-hidden
                             after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0
                             after:bg-purple-400 hover:after:w-full after:transition-all after:duration-300"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Members <FaChevronDown className="ml-2" />
                </button>
                {dropdownOpen && (
                  <div className="mt-2 bg-[#2D2E5A] rounded-lg shadow-md overflow-hidden text-base">
                    <Link
                      href="/Directors"
                      className="block py-2 px-4 text-gray-200 relative overflow-hidden
                                 hover:bg-purple-700/30 transition-colors
                                 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0
                                 after:bg-purple-400 hover:after:w-full after:transition-all after:duration-300"
                    >
                      Directors
                    </Link>
                    <Link
                      href="/Team"
                      className="block py-2 px-4 text-gray-200 relative overflow-hidden
                                 hover:bg-purple-700/30 transition-colors
                                 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0
                                 after:bg-purple-400 hover:after:w-full after:transition-all after:duration-300"
                    >
                      Team
                    </Link>
                    <Link
                      href="/Mentors"
                      className="block py-2 px-4 text-gray-200 relative overflow-hidden
                                 hover:bg-purple-700/30 transition-colors
                                 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0
                                 after:bg-purple-400 hover:after:w-full after:transition-all after:duration-300"
                    >
                      Mentors
                    </Link>
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
