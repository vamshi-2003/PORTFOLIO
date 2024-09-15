import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 justify-center pb-12">
      <div className="flex items-center justify-center 
           p-4 text-7xl m-4  opacity-90
           border-2 border-purple-600 dark:border-purple-300 
           rounded-md shadow-md align-middle text-center transition-all duration-400 ">
        <CgCPlusPlus className="text-7xl" />
      </div>
      <div className="flex items-center justify-center 
           p-4 text-7xl m-4  opacity-90
           border-2 border-purple-600 dark:border-purple-300 
           rounded-md shadow-md align-middle text-center transition-all duration-400 ">
        <DiJavascript1 className="text-7xl" />
      </div>
      <div className="flex items-center justify-center 
           p-4 text-7xl m-4  opacity-90
           border-2 border-purple-600 dark:border-purple-300 
           rounded-md shadow-md align-middle text-center transition-all duration-400 ">
        <TbBrandGolang className="text-7xl" />
      </div>
      <div className="flex items-center justify-center 
           p-4 text-7xl m-4  opacity-90
           border-2 border-purple-600 dark:border-purple-300 
           rounded-md shadow-md align-middle text-center transition-all duration-400 ">
        <DiNodejs className="text-7xl" />
      </div>
      <div className="flex items-center justify-center 
           p-4 text-7xl m-4  opacity-90
           border-2 border-purple-600 dark:border-purple-300 
           rounded-md shadow-md align-middle text-center transition-all duration-400 ">
        <DiReact className="text-7xl" />
      </div>
      <div className="flex items-center justify-center 
           p-4 text-7xl m-4  opacity-90
           border-2 border-purple-600 dark:border-purple-300 
           rounded-md shadow-md align-middle text-center transition-all duration-400 ">
        <SiSolidity className="text-7xl" />
      </div>
      <div className="flex items-center justify-center 
           p-4 text-7xl m-4  opacity-90
           border-2 border-purple-600 dark:border-purple-300 
           rounded-md shadow-md align-middle text-center transition-all duration-400 ">
        <DiMongodb className="text-7xl" />
      </div>
      <div className="flex items-center justify-center 
           p-4 text-7xl m-4  opacity-90
           border-2 border-purple-600 dark:border-purple-300 
           rounded-md shadow-md align-middle text-center transition-all duration-400 ">
        <SiNextdotjs className="text-7xl" />
      </div>
      <div className="flex items-center justify-center 
           p-4 text-7xl m-4  opacity-90
           border-2 border-purple-600 dark:border-purple-300 
           rounded-md shadow-md align-middle text-center transition-all duration-400 ">
        <DiGit className="text-7xl" />
      </div>
      <div className="flex items-center justify-center 
           p-4 text-7xl m-4  opacity-90
           border-2 border-purple-600 dark:border-purple-300 
           rounded-md shadow-md align-middle text-center transition-all duration-400 ">
        <SiFirebase className="text-7xl" />
      </div>
      <div className="flex items-center justify-center 
           p-4 text-7xl m-4  opacity-90
           border-2 border-purple-600 dark:border-purple-300 
           rounded-md shadow-md align-middle text-center transition-all duration-400 ">
        <SiRedis className="text-7xl" />
      </div>
      <div className="flex items-center justify-center 
           p-4 text-7xl m-4  opacity-90
           border-2 border-purple-600 dark:border-purple-300 
           rounded-md shadow-md align-middle text-center transition-all duration-400 ">
        <SiPostgresql className="text-7xl" />
      </div>
      <div className="flex items-center justify-center 
           p-4 text-7xl m-4  opacity-90
           border-2 border-purple-600 dark:border-purple-300 
           rounded-md shadow-md align-middle text-center transition-all duration-400 ">
        <DiPython className="text-7xl" />
      </div>
      <div className="flex items-center justify-center 
           p-4 text-7xl m-4  opacity-90
           border-2 border-purple-600 dark:border-purple-300 
           rounded-md shadow-md align-middle text-center transition-all duration-400 ">
        <DiJava className="text-7xl" />
      </div>
    </div>
  );
}

export default Techstack;
