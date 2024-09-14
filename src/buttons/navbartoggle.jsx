import React, { useState } from "react";
import { FaBars, FaFileAlt, FaHome, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import useDraggable from "../hooks/useDraggable"; // Import the custom hook

function NavbarToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const { position, elementRef } = useDraggable({ x: 5, y: 5 }); // Use the hook

  return (
    <>
      <div
        ref={elementRef}
        style={{
          position: "fixed",
          top: position.y,
          left: position.x,
          cursor: "grab",
          zIndex: 30,
        }}
        className="w-[50px] h-[50px] flex items-center justify-center p-2 rounded-xl
          dark:bg-gray-800 bg-gray-200 dark:text-gray-200 text-gray-800 border-2 dark:border-gray-200 border-gray-400"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl display:center md:text-3xl"
        >
          <FaBars />
        </button>
      </div>

      {isOpen && (
        <div
          className="z-30 top-0 transition-transform duration-300 ease-in-out fixed border-2 dark:border-gray-200 border-gray-400
            dark:bg-gray-800 bg-gray-200 dark:text-gray-200 text-gray-800 rounded-xl"
          style={{
            left: `${position.x + 50}px`,
            top: `${position.y}px`,
          }}
        >
          <div className="flex flex-col p-4">
            <nav>
              <ul className="flex flex-col space-y-2">
                <li>
                  <Link
                    to="/"
                    className="flex items-center py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700 rounded
                      border-b-2 dark:border-gray-200 border-gray-400"
                  >
                    <FaHome className="mr-2 text-2xl" /> Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="flex items-center py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700 rounded
                      border-b-2 dark:border-gray-200 border-gray-400"
                  >
                    <FaUser className="mr-2 text-2xl" /> About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex items-center py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700 rounded
                      border-b-2 dark:border-gray-200 border-gray-400"
                  >
                    <FaFileAlt className="mr-2 text-2xl" /> Resume
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default NavbarToggle;
