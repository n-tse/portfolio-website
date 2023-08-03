import React from "react";
import { projectsList } from "../data.js";
// import WestBuyScreenshot from "../assets/ProjectScreenshots/WestBuyScreenshot.png";
// import PawsitivePetCareScreenshot from "../assets/ProjectScreenshots/PawsitivePetCareScreenshot.png";
// import GreatJobScreenshot from "../assets/ProjectScreenshots/GreatJobScreenshot.png";
// import FlutterRecipeListScreenshot from "../assets/ProjectScreenshots/FlutterRecipeListScreenshot.png";
// import ChatterboxScreenshot from "../assets/ProjectScreenshots/ChatterboxScreenshot.png";
// import ChihirosSushiScreenshot from "../assets/ProjectScreenshots/ChihirosSushiScreenshot.png";

// images should be 16:9

const Projects = () => {
  return (
    <section
      name="Projects"
      className="w-full py-12 min-h-fit flex flex-col justify-center items-center sm:px-14"
    >
      <div className="max-w-screen-xl py-4 px-8 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold inline border-b-4 border-gray-300">
            Projects
          </h2>
          <p className="pt-6 pb-2 text-lg">
            Feel free to check out some of my work below. You can view
            additional details about the projects by hovering or tapping
            on the project cards.
          </p>
          <p className="text-lg mt-3">
            Technologies I've worked with include: React, JavaScript, Node.js, Express, MongoDB,
            C#, .NET, and MySQL. Recently, I've been exploring TypeScript and
            delving into mobile development using Flutter and Dart.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map(
            ({
              id,
              projectName,
              projectDescription,
              src,
              hasDemo,
              demoLink,
              repoLink,
            }) => {
              return (
                <div
                  key={id}
                  className="bg-gray-700 text-white shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 overflow-hidden group"
                >
                  <div className="relative">
                    <div className="absolute top-0 left-0 text-white text-center bg-black bg-opacity-60 h-full w-full flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 px-2">
                      <div className="font-medium pb-2 text-4xl sm:text-3xl">
                        {projectName}
                      </div>
                      <div>{projectDescription}</div>
                    </div>
                    <img
                      src={src}
                      alt={`screenshot of ${projectName}`}
                      className="rounded-tr-lg rounded-tl-lg"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    {hasDemo && (
                      <>
                        <button className="w-1/2 text-lg hover:bg-gray-600">
                          <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center py-4"
                          >
                            Demo
                          </a>
                        </button>
                        <span className="py-4 border-l-2"></span>
                      </>
                    )}
                    <button
                      className={
                        demoLink
                          ? "w-1/2 text-lg hover:bg-gray-600"
                          : "w-full text-lg hover:bg-gray-600"
                      }
                    >
                      <a
                        href={repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center py-4"
                      >
                        {hasDemo ? "Repo" : "View Repo"}
                      </a>
                    </button>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
