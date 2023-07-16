import React from "react";
import { skillsList } from "../data.js";

const Skills = () => {
  return (
    <section name="Skills" className="w-full min-h-fit bg-gradient-to-br from-black to-gray-800 py-12 px-2">
      <div className="pb-12 flex justify-center">
        <h2 className="text-4xl text-white md:text-5xl lg:text-6xl font-bold inline border-b-4 border-white">
          Skills & Tech Stack
        </h2>
      </div>
      <div className="container mx-auto justify-cente max-w-screen-2xl">
        <div className="grid grid-cols-9 md:grid-flow-row">
          {skillsList.map(({ id, src, skillName }) => {
            return (
              <div key={id} className="p-2 flex justify-center">
                <img src={src} alt={`${skillName} logo`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
