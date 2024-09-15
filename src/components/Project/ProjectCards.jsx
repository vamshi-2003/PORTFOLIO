import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <div className=" bg-gray-100 dark:bg-gray-900 border-2 border-gray-600 dark:border-gray-400 relative p-6 bg-transparent shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform transform hover:shadow-2xl">
      <img
        className="w-full h-auto rounded-t-lg border border-gray-600 dark:border-gray-400"
        src={props.imgPath}
        alt="card-img"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold  mb-2">{props.title}</h3>
        <p className=" text-justify mb-4">{props.description}</p>
        <div className="flex items-center">
          <a
            className="inline-flex items-center px-4 py-2 rounded-md dark:bg-purple-700 bg-purple-300 hover:bg-purple-400 transition-colors duration-300"
            href={props.ghLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className="mr-2" /> {props.isBlog ? "Blog" : "GitHub"}
          </a>
          {!props.isBlog && props.demoLink && (
            <a
              className="inline-flex items-center px-4 py-2 rounded-md dark:bg-purple-700 bg-purple-300 hover:bg-purple-400 transition-colors duration-300 ml-2"
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgWebsite className="mr-2" /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
