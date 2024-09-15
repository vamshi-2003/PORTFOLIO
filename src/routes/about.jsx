import React from "react";
import Github from "../components/about/Github";
import Techstack from "../components/about/Techstack";
import AboutCard from "../components/about/Aboutcard";
import laptopImg from "../assets/about.png";
import Toolstack from "../components/about/Toolstack";

function About() {
  return (
    <div className="z-10relative py-16 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200">
      <div className="container ">
        <div className=" mx-auto px-5 md:px-40">
            
          <div className="flex flex-col md:flex-row items-center justify-center py-8">
            <div className="md:w-7/12 flex flex-col items-center md:items-start  md:text-left py-8">
              <h1 className="text-3xl md:text-4xl text-center font-bold mb-5 ">
                Know Who <strong className="dark:text-purple-300 text-purple-600">I'M</strong>
            </h1>
            <AboutCard />
            </div>
            <div className="md:w-5/12 flex justify-center items-center py-8">
              <img src={laptopImg} alt="about" className="w-full max-w-sm" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Professional <strong className="dark:text-purple-300 text-purple-600">Skillset</strong>
          </h1>
          <Techstack />
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <strong className="dark:text-purple-300 text-purple-600">Tools</strong> I use
          </h1>
          <Toolstack />
          <Github />
        </div>
      </div>
    </div>
  );
}

export default About;
