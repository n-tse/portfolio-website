import React from "react";
import { projectScreenshots } from "../data.js";
// import WestBuyScreenshot from "../assets/ProjectScreenshots/WestBuyScreenshot.png";
// import PawsitivePetCareScreenshot from "../assets/ProjectScreenshots/PawsitivePetCareScreenshot.png";
// import GreatJobScreenshot from "../assets/ProjectScreenshots/GreatJobScreenshot.png";
// import FlutterRecipeListScreenshot from "../assets/ProjectScreenshots/FlutterRecipeListScreenshot.png";
// import ChatterboxScreenshot from "../assets/ProjectScreenshots/ChatterboxScreenshot.png";
// import ChihirosSushiScreenshot from "../assets/ProjectScreenshots/ChihirosSushiScreenshot.png";

// images should be 16:9

const Projects = () => {
  return (
    <section name="projects" className="w-full md:h-screen bg-slate-400">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work!</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projectScreenshots.map(({ id, src, hasDemo }) => {
            return (
              <div
                key={id}
                className="bg-slate-500 text-white shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105"
              >
                <img src={src} alt="" className="rounded-tr-lg rounded-tl-lg" />
                <div className="flex items-center justify-center">
                  {hasDemo && (
                    <>
                      <button className="w-1/2 py-4 text-lg">Demo</button>
                      <span className="py-4 border-l-2"></span>
                    </>
                  )}
                  <button className="w-1/2 py-4 text-lg">
                    {hasDemo ? "Repo" : "View Repo"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
