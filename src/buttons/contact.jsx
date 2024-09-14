import React, { useEffect } from "react";
import { FaPhone } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import useDraggable from "../hooks/useDraggable"; // Import the custom hook

function ContactToggle() {
  const { position, elementRef } = useDraggable({ x: 25, y: 25 }); // Use the hook
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Scroll to the element specified by the hash
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <div
        ref={elementRef}
        style={{
          position: "fixed",
          bottom: position.y,
          right: position.x,
          cursor: "grab",
          zIndex: 30,
        }}
        className="w-[50px] h-[50px] flex items-center justify-center p-2 rounded-xl
          dark:bg-gray-800 bg-gray-200 dark:text-gray-200 text-gray-800 border-2 dark:border-gray-200 border-gray-400"
      >
        <Link
          className="text-2xl display:center md:text-3xl"
          to="/#contact" // Updated link with hash
        >
          <FaPhone />
        </Link>
      </div>
    </>
  );
}

export default ContactToggle;
