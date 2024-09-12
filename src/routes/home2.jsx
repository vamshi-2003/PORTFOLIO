import React from "react";
import myImg from "../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <div className="bg-gray-900 py-10" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-2/3 text-white mb-10 md:mb-0">
            <h1 className="text-4xl font-bold">
              LET ME <span className="text-purple-500">INTRODUCE</span> MYSELF
            </h1>
            <p className="mt-4 text-lg">
              I love competitive programming. I am a Full Stack Developer.
              <br />
              <br />
              I am fluent in classics like
              <i>
                <b className="text-purple-500"> C++, Javascript and Python.</b>
              </i>
              <br />
              <br />
              My field of interest is in&nbsp;
              <i>
                <b className="text-purple-500">
                  Web Development, Artificial Intelligence, Computing
                </b>
                , and also in areas related to{" "}
                <b className="text-purple-500">Blockchain.</b>
              </i>
              <br />
              <br />
              Whenever possible, I apply my passion for developing products
              with <b className="text-purple-500">Node.js</b> and
              <i>
                <b className="text-purple-500">
                  {" "}
                  Modern Javascript Libraries and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="text-purple-500"> React.js and Next.js.</b>
              </i>
            </p>
          </div>
          <div className="md:w-1/3">
            <Tilt>
              <img src={myImg} className="rounded-full w-full" alt="avatar" />
            </Tilt>
          </div>
        </div>
        <div className="text-center mt-10">
          <h1 className="text-3xl font-bold text-white">FIND ME ON</h1>
          <p className="text-white mt-4">
            Feel free to <span className="text-purple-500">connect</span> with me
          </p>
          <ul className="flex justify-center space-x-4 mt-4">
            <li className="social-icons">
              <a
                href="https://github.com/vamshi-2003"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-purple-500"
              >
                <AiFillGithub size={30} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/vamshivardhane"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-purple-500"
              >
                <AiOutlineTwitter size={30} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/vamshi-vardhan-emmadi/"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-purple-500"
              >
                <FaLinkedinIn size={30} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/_vamshi_2003_/"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-purple-500"
              >
                <AiFillInstagram size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home2;
