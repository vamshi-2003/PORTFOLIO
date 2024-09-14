import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import Particle from "../components/particle"; // Ensure correct path
import useDraggable from "../hooks/useDraggable"; // Import the custom hook

function DraggableDarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("dark-mode") === "true" || false;
  });
  const { position, elementRef } = useDraggable({ x: '5px', y: '5px' }); // Use the hook

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

  return (
    <>
      <Particle darkMode={darkMode} />
      <div
        ref={elementRef}
        style={{
          position: "fixed",
          top: position.y,
          right: position.x,
          cursor: "grab",
          zIndex: 30,
        }}
        className="w-[50px] h-[50px] flex items-center justify-center p-2 rounded-xl
          dark:bg-gray-800 bg-gray-200 dark:text-gray-200 text-gray-800 border-2 dark:border-gray-200 border-gray-400"
      >
        <button
          onClick={toggleDarkMode}
          className="text-3xl"
        >
          {darkMode ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </>
  );
}

export default DraggableDarkModeToggle;
