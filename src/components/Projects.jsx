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
    <section name="Projects" className="w-full md:h-screen bg-slate-400">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work!</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
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
                  className="bg-slate-500 text-white shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 overflow-hidden group"
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
                        <button className="w-1/2 text-lg hover:bg-slate-600">
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
                          ? "w-1/2 text-lg hover:bg-slate-600"
                          : "w-full text-lg hover:bg-slate-600"
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
