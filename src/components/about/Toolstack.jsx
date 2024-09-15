import React from "react";
import { FaKaggle } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiSlack,
  SiVercel,
  SiInsomnia,
  SiLinux,
  SiGithub,
  SiKaggle,
} from "react-icons/si";

function Toolstack() {
  // Reusable classNames for container and labels
  const containerClasses = "relative group flex items-center justify-center p-4 text-7xl m-4 opacity-90 border-4 border-gray-600 dark:border-gray-300 rounded-md shadow-md align-middle text-center transition-all duration-400";
  const labelClasses = "absolute bottom-0 mb-8 px-4 py-2 md:text-md text-2xl text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300";

  return (
    <div className="grid grid-cols-2 text-purple-800 dark:text-purple-300 md:grid-cols-5 gap-4 justify-center pb-12">
      <div className={containerClasses}>
        <SiLinux />
        <span className={labelClasses}>Linux</span>
      </div>
      <div className={containerClasses}>
        <SiVisualstudiocode />
        <span className={labelClasses}>VS Code</span>
      </div>
      <div className={containerClasses}>
        <SiInsomnia /> 
        <span className={labelClasses}>Insomnia</span>
      </div>
      <div className={containerClasses}>
        <SiSlack />
        <span className={labelClasses}>Slack</span>
      </div>
      <div className={containerClasses}>
        <SiVercel />
        <span className={labelClasses}>Vercel</span>
      </div>
      <div className={containerClasses}>
        <SiGithub />
        <span className={labelClasses}>Github</span>
      </div>
      <div className={containerClasses}>
        <FaKaggle />
        <span className={labelClasses}>Kaggle</span>
      </div>
    </div>
  );
}

export default Toolstack;
