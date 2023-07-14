import React from "react";
import heroImg from "../assets/PSHeadshot.jpg";

const Hero = () => {
  return (
    <section name="hero" className="h-screen w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold">
            Hi there! I'm Nick - Welcome to my Portfolio!
          </h2>
          <p className="py-4 max-w-md">
            Full-Stack Software Developer with 1.5 years of experience building
            dynamic SPA web apps using React, JavaScript, HTML/CSS, Node.js,
            Express, and MongoDB
          </p>
          <div className="flex flex-row">
            <button className="text-xl text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl rounded-lg px-6 py-3 my-2 text-center">
              {/* hover:to-purple-600 */}
              Get Connected
            </button>
            <button className="text-xl inline-flex items-center justify-center p-0.5 my-2 ml-2 overflow-hidden  rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 hover:text-white">
              <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                <span className="bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:text-white">
                  See My Work
                </span>
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={heroImg}
            alt="my professional screenshot"
            className="rounded-2xl mx-auto w-4/5 md:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
