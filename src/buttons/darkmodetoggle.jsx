import React, { useState, useEffect, useRef } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import Particle from "../components/particle"; // Ensure correct path

function DraggableDarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("dark-mode") === "true" || false;
  });
  const [position, setPosition] = useState({ x: '5px', y: '90px' });
  const buttonRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("dark-mode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    // Desktop (Mouse Events)
    elmnt.onmousedown = dragMouseDown;
    // Mobile (Touch Events)
    elmnt.ontouchstart = dragTouchStart;

    function dragMouseDown(e) {
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    function dragTouchStart(e) {
      e.preventDefault();
      pos3 = e.touches[0].clientX;
      pos4 = e.touches[0].clientY;
      document.ontouchend = closeDragElement;
      document.ontouchmove = elementDrag;
    }

    function elementDrag(e) {
      e.preventDefault();
      if (e.type === 'mousemove') {
        // Mouse movement
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
      } else if (e.type === 'touchmove') {
        // Touch movement
        pos1 = pos3 - e.touches[0].clientX;
        pos2 = pos4 - e.touches[0].clientY;
        pos3 = e.touches[0].clientX;
        pos4 = e.touches[0].clientY;
      }
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      setPosition({ x: elmnt.offsetLeft, y: elmnt.offsetTop });
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
      document.ontouchend = null;
      document.ontouchmove = null;
    }
  }

  useEffect(() => {
    if (buttonRef.current) {
      dragElement(buttonRef.current);
    }
  }, []);

  return (
    <>
      <Particle darkMode={darkMode} />
      <div
        ref={buttonRef}
        style={{
          position: "fixed",
          top: position.y,
          left: position.x,
          cursor: "grab",
          zIndex: 30,
        }}
        className=" w-[50px] h-[50px] flex items-center 
        justify-center p-2 rounded-xl
        dark:bg-gray-800 bg-gray-200 
        dark:text-gray-200 text-gray-800 
        border-2 dark:border-gray-200 border-gray-400"
      >
        <button
          onClick={toggleDarkMode}
          className="text-3xl" // Adjust button text size for responsiveness
        >
          {darkMode ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </>
  );
}

export default DraggableDarkModeToggle;
