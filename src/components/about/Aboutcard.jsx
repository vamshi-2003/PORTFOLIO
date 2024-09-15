import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg p-6  ">
      <blockquote className="dark:text-gray-200 text-xl text-gray-800">
        <p className="text-justify mb-4">
          Hi Everyone, I am <span className="dark:text-purple-300 text-purple-600">Soumyajit Behera</span> 
          from <span className=""> Bhubaneswar, India.</span>
          <br />
          I am currently employed as a software developer at Juspay.
          <br />
          I have completed Integrated MSc (IMSc) in Maths and Computing at BIT Mesra.
          <br />
          <br />
          Apart from coding, some other activities that I love to do!
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="flex items-center">
            <ImPointRight className="mr-2" /> Playing Games
          </li>
          <li className="flex items-center">
            <ImPointRight className="mr-2" /> Writing Tech Blogs
          </li>
          <li className="flex items-center">
            <ImPointRight className="mr-2" /> Travelling
          </li>
        </ul>
        <p className=" dark:text-purple-300 text-purple-600 italic mb-2">
          "Strive to build things that make a difference!"
        </p>
        <footer className="text-gray-600 text-sm">
          - Soumyajit
        </footer>
      </blockquote>
    </div>
  );
}

export default AboutCard;
