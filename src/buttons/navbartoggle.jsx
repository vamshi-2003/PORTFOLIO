import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa"; // Example icon for the toggle
import { Link } from "react-router-dom"; // Example for navigation links
import {
    AiOutlineHome,
    AiOutlineUser,
} from "react-icons/ai";
import { FaPhone,FaHome } from "react-icons/fa";

function NavbarToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 }); // Initial position set to 50px from the right
  const buttonRef = useRef(null);

  useEffect(() => {
    dragElement(buttonRef.current);
  }, []);

  function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    if (elmnt) {
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      setPosition({ x: elmnt.offsetLeft, y: elmnt.offsetTop });
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  return (
    <>
      <div
        ref={buttonRef}
        style={{
          position: "fixed",
          top: position.y,
          left: position.x, // Use left for initial position
          cursor: "grab",
          zIndex: 30,
        }}
        className=" w-[50px] h-[50px] flex items-center 
        justify-center p-2 rounded-xl
        dark:bg-gray-800 bg-gray-200 
        dark:text-gray-200 text-gray-800 
        border-2 dark:border-gray-200 border-gray-800"
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
          className="z-30  top-0 transition-transform duration-300 ease-in-out fixed
          border-2 dark:border-gray-200 border-gray-400
           dark:bg-gray-800 bg-gray-200
            dark:text-gray-200 text-gray-800 
            rounded-xl"
          style={{
            left: `${position.x+50}px`, // Correctly use `left` for positioning
            top: `${position.y}px`, // Adjust the position to be 50px below the toggle
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
                    <FaHome className="mr-2" /> Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="flex items-center py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700 rounded
                    border-b-2 dark:border-gray-200 border-gray-400"
                  >
                    <AiOutlineUser className="mr-2" /> About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="flex items-center py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700 rounded
                    border-b-2 dark:border-gray-200 border-gray-400"
                  >
                    <FaPhone className="mr-2" /> Contact
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
