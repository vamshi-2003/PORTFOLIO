import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg p-6  ">
      <blockquote className="dark:text-gray-200 text-xl text-gray-800">
        <p className="text-justify mb-4">
          Hi Everyone, I am <span className="dark:text-purple-300 text-purple-600">Vamshi Vardhan </span> 
          from <span className=""> Hyderabad, India.</span>
          I am currently studying Computer Science and Technology at NIT AP.
          <br />
          <br />
          Apart from coding, some other activities that I love to do!
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="flex items-center">
            <ImPointRight className="mr-2" /> Playing Games & Gym
          </li>
          <li className="flex items-center">
            <ImPointRight className="mr-2" /> Reading Research Papers
          </li>
          <li className="flex items-center">
            <ImPointRight className="mr-2" /> Doomscrolling Twitter
          </li>
        </ul>
        <p className=" dark:text-purple-300 text-purple-600 italic mb-2">
          "Be curious and creative at the same time"
        </p>
        <footer className="text-gray-600 dark:text-gray-300 text-sm">
          - Vamshi
        </footer>
      </blockquote>
    </div>
  );
}

export default AboutCard;
