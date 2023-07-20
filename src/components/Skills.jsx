import React from "react";
import { skillsList } from "../data.js";
import { Tooltip } from "@material-tailwind/react";

const Skills = () => {
  return (
    <section
      name="Skills"
      className="w-full min-h-fit bg-gradient-to-br from-black to-gray-700 py-12 px-4 lg:px-14"
    >
      <div className="py-4">
        <div className="pb-12 flex justify-center">
          <h2 className="text-4xl text-white md:text-5xl lg:text-6xl font-bold inline border-b-4 border-white">
            Skills & Tech Stack
          </h2>
        </div>
        <div className="mx-auto max-w-screen-xl">
          {/* <div className="container mx-auto max-w-[1400px]"> */}
          <div className="grid grid-cols-6 sm:grid-cols-9 md:grid-flow-row">
            {skillsList.map(({ id, src, skillName }) => {
              return (
                <div key={id} className="p-2 flex justify-center">
                  <Tooltip content={skillName}>
                    <img src={src} alt={`${skillName} logo`} />
                  </Tooltip>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
