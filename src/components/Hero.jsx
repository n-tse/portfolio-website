import React from "react";
import heroImg from "../assets/PSHeadshot.jpg";
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section name="Home" className="h-screen w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-4/5 px-4 md:flex-row sm:h-5/6 md:h-3/4 md:w-4/5">
        <div className="flex flex-col justify-center items-center h-full md:items-start">
          <h2 className="text-4xl text-center md:text-5xl sm:w-3/4 md:text-start md:w-full lg:text-6xl max-w-screen-lg font-bold">
            Hi there! I'm Nick - Welcome to my Portfolio!
          </h2>
          <p className="py-4 text-lg md:text-xl max-w-xl">
            Full-Stack Software Developer with 1.5 years of experience building
            dynamic SPA web apps using React, JavaScript, HTML/CSS, Node.js,
            Express, and MongoDB
          </p>
          <div className="flex flex-row">
            <button className="text-xl text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl rounded-lg px-6 py-3 my-2 text-center">
              {/* hover:to-purple-600 */}
              Get Connected
            </button>
            <Link to={"Projects"} smooth duration={500} className="text-xl flex items-center justify-center p-0.5 my-2 ml-2 overflow-hidden rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 hover:text-white font-medium cursor-pointer">
              <span className="px-5 py-2.5 transition-all ease-in duration-100 bg-white rounded-md group-hover:bg-opacity-0">
                <span className="bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:text-white transition-all ease-in duration-100">
                  See My Work
                </span>
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={heroImg}
            alt="my professional screenshot"
            // className="rounded-2xl mx-auto w-4/5 md:w-full"
            className="rounded-2xl mx-auto w-full min-w-fit md:ml-8"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
