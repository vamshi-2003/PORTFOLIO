import React from "react";
import ProjectCards from "../components/Project/ProjectCards";
import ecommerce from "../assets/ecommerce.png";
import blog from "../assets/blog.png";

function Projects() {
  return (
    <div className="z-10relative text-center bg-gray-100 dark:bg-gray-900 text-black dark:text-white pt-[150px] pb-[30px] bg-[var(--section-background-color)]">
      <div className="container mx-auto items-center px-4 md:px-0">
        <h1 className="text-[2.3em] font-medium pt-[10px]">
          My Recent <strong className="text-purple-800 dark:text-purple-300">Works</strong>
        </h1>
        <p className="mt-2 text-2xl mb-6">
          Here are a few projects I've worked on recently.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-full md:w-1/3 px-4 mb-6 flex">
            <ProjectCards
              imgPath={blog}
              isBlog={false}
              title="Mern Blog"
              description="This blog website, built with Vite, React, and Tailwind CSS, offers a modern and responsive user experience. It uses MongoDB for storing blog content and integrates Firebase for Google authentication and profile picture management. Admins have access to an exclusive dashboard for managing posts and overseeing site content, providing a seamless and secure platform for both users and administrators."
              ghLink="https://github.com/vamshi-2003/blog-website"
              demoLink="https://blog-website-040b.onrender.com/"
              className="bg-transparent opacity-90 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl h-full"
            />
          </div>

          <div className="w-full md:w-1/3 px-4 mb-6 flex">
            <ProjectCards
              imgPath={ecommerce}
              isBlog={false}
              title="AR-commerce"
              description="AR-Ecommerce is an innovative platform transforming online shopping with advanced features like 3D visualization and augmented reality. Using Google Model Viewer, customers can interact with products in 3D, gaining confidence before purchase, while AR lets them virtually place items in their space for a realistic preview. The standout feature is a 3D T-shirt designer powered by OpenAI's DALLE model, allowing users to customize apparel with real-time previews and lifelike images. With seamless Clerk SDK authentication and secure Stripe payment processing, AR-Ecommerce offers a personalized, engaging, and secure shopping experience."
              ghLink="https://github.com/krishnasainakka/AREcommerce"
              demoLink="https://arecommerce.onrender.com"
              className="bg-transparent opacity-90 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
