import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="relative text-purple-800 dark:text-purple-300 text-3xl font-semibold sm:text-4xl sm:font-medium">
      <Typewriter
        options={{
          strings: [
            "Software Developer",
            "Full Stack Developer",
            "Open Source Contributor",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("Software Developer")
            .pauseFor(2000)
            .deleteAll()
            .typeString("Freelancer")
            .pauseFor(2000)
            .deleteAll()
            .typeString("Full Stack Developer")
            .pauseFor(2000)
            .deleteAll()
            .typeString("Open Source Contributor")
            .pauseFor(2000)
            .start();
        }}
        className="text-purple-800 dark:text-purple-300 text-3xl font-semibold sm:text-4xl sm:font-medium"
        cursorClassName="text-[#b562d6] text-4xl"
      />
    </div>
  );
}

export default Type;
