import React from "react";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import useDraggable from "../hooks/useDraggable"; // Import the custom hook

function ContactToggle() {
  const { position, elementRef } = useDraggable({ x: 15, y: 15 }); // Use the hook

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
          to="/"
        >
          <FaPhone />
        </Link>
      </div>
    </>
  );
}

export default ContactToggle;
