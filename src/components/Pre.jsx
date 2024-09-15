import React, { useEffect } from "react";

function Pre({ load }) {
  useEffect(() => {
    // Toggle the no-scroll class on the body element
    if (load) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [load]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-[#0c0513] ${
        load ? "bg-preloader-image bg-no-repeat bg-center" : "opacity-0 pointer-events-none"
      } transition-opacity duration-500 z-50`}
    ></div>
  );
}

export default Pre;
