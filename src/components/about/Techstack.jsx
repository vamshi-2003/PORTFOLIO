import React from "react";
import { FaJava, FaNode } from "react-icons/fa";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiCplusplus,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiGit,
  SiPython,
} from "react-icons/si";
function Techstack() {
  // Define reusable className variables for the container and label
  const containerClasses = "relative group flex items-center justify-center p-4 text-7xl m-4 opacity-90 border-4 border-gray-600 dark:border-gray-300 rounded-md shadow-md align-middle text-center transition-all duration-400";
  const labelClasses = "absolute bottom-0 mb-8 px-4 py-2 md:text-md text-2xl text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300";

  return (
    <div className="text-purple-800 dark:text-purple-300 grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-4 justify-center pb-12">
      <div className={containerClasses}>
        <SiCplusplus />
        <span className={labelClasses}>C++</span>
      </div>
      <div className={containerClasses}>
        <SiJavascript />
        <span className={labelClasses}>JavaScript</span>
      </div>
      <div className={containerClasses}>
        <FaNode />
        <span className={labelClasses}>Node.js</span>
      </div>
      <div className={containerClasses}>
        <SiReact />
        <span className={labelClasses}>React</span>
      </div>
      <div className={containerClasses}>
        <SiSolidity />
        <span className={labelClasses}>Solidity</span>
      </div>
      <div className={containerClasses}>
        <SiMongodb />
        <span className={labelClasses}>MongoDB</span>
      </div>
      <div className={containerClasses}>
        <SiNextdotjs />
        <span className={labelClasses}>Next.js</span>
      </div>
      <div className={containerClasses}>
        <SiGit />
        <span className={labelClasses}>Git</span>
      </div>
      <div className={containerClasses}>
        <SiFirebase />
        <span className={labelClasses}>Firebase</span>
      </div>
      <div className={containerClasses}>
        <SiRedis />
        <span className={labelClasses}>Redis</span>
      </div>
      <div className={containerClasses}>
        <SiPostgresql />
        <span className={labelClasses}>PostgreSQL</span>
      </div>
      <div className={containerClasses}>
        <SiPython />
        <span className={labelClasses}>Python</span>
      </div>
      <div className={containerClasses}>
        <FaJava />
        <span className={labelClasses}>Java</span>
      </div>
    </div>
  );
}

export default Techstack;
