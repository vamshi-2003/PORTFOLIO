import React from "react";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 justify-center pb-12">
      <div className="flex items-center justify-center 
           p-4 text-7xl m-4  opacity-90
           border-2 border-purple-600 dark:border-purple-300 
           rounded-md shadow-md align-middle text-center transition-all duration-400 ">
        <SiMacos />
      </div>
      <div className="flex items-center justify-center 
           p-4 text-7xl m-4  opacity-90
           border-2 border-purple-600 dark:border-purple-300 
           rounded-md shadow-md align-middle text-center transition-all duration-400 ">
        <SiVisualstudiocode />
      </div>
      <div className="flex items-center justify-center 
           p-4 text-7xl m-4  opacity-90
           border-2 border-purple-600 dark:border-purple-300 
           rounded-md shadow-md align-middle text-center transition-all duration-400 ">
        <SiPostman />
      </div>
      <div className="flex items-center justify-center 
           p-4 text-7xl m-4  opacity-90
           border-2 border-purple-600 dark:border-purple-300 
           rounded-md shadow-md align-middle text-center transition-all duration-400 ">
        <SiSlack />
      </div>
      <div className="flex items-center justify-center 
           p-4 text-7xl m-4  opacity-90
           border-2 border-purple-600 dark:border-purple-300 
           rounded-md shadow-md align-middle text-center transition-all duration-400 ">
        <SiVercel />
      </div>
    </div>
  );
}

export default Toolstack;
