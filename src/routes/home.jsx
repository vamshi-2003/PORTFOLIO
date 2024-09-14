import React from "react";
import homeLogo from "../assets/home-main.svg";
import Home2 from "./home2";
import Type from "../components/type";

function Home() {
  return (
    <section>
      <div className="bg-gray-100 dark:bg-gray-900 py-10" id="about">
        <div className="relative z-20 container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left">
            <div className="md:w-1/2 text-black dark:text-white mb-10 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">
                Hi There!{" "}
                <span role="img"className="dark:hidden" aria-labelledby="wave">
                  👋🏾
                </span>
                <span role="img"className="hidden dark:inline" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="text-5xl font-bold">
                I'M
                <strong className="text-purple-800 dark:text-purple-300"> VAMSHI VARDHAN</strong>
              </h1>
              <div className="mt-12">
                <Type />
              </div>
            </div>

            <div className="md:w-1/3">
              <img
                src={homeLogo}
                alt="home pic"
                className="max-h-[450px] w-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <Home2 />
    </section>
  );
}

export default Home;
