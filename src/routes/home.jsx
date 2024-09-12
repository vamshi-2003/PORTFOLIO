import React from "react";
import homeLogo from "../assets/home-main.svg";
import Particle from "../components/particle";
import Home2 from "./home2";
// import Type from "./Type";

function Home() {
  return (
    <section>
      <div className="w-full h-screen bg-gray-100" id="home">
        <Particle />
        <div className="flex flex-col items-center justify-center h-full px-4">
          <div className="flex flex-wrap max-w-screen-lg mx-auto">
            <div className="w-full md:w-7/12 p-4 flex flex-col items-start">
              <h1 className="text-4xl font-bold mb-4">
                Hi There!{" "}
                <span role="img" aria-labelledby="wave">
                👋🏼
                </span>
              </h1>

              <h1 className="text-4xl font-bold">
                I'M
                <strong className="text-indigo-600"> VAMSHI VARDHAN</strong>
              </h1>

              <div className="mt-12 text-left">
                {/* <Type /> */}
              </div>
            </div>

            <div className="w-full md:w-5/12 p-4 flex justify-center items-center">
              <img
                src={homeLogo}
                alt="home pic"
                className="max-h-[450px] w-auto"
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
