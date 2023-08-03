import React from "react";
import heroImg from "../assets/PSHeadshot.jpg";
import { Link } from "react-scroll";
import SocialButtons from "./SocialButtons";

const Hero = () => {
  return (
    <section name="Home" className="min-h-fit w-full my-12 lg:my-20 xl:mb-28 xl:mt-32 sm:px-14">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center px-8 lg:flex-row">
        <div className="flex flex-col justify-center items-center h-full lg:items-start md:w-4/5 lg:w-3/5 xl:w-[72%]">
          <h2 className="text-4xl text-center md:text-5xl lg:text-start lg:text-6xl font-bold">
            Hi there! I'm Nick - Welcome to my Portfolio!
          </h2>
          <p className="py-4 text-lg md:text-xl lg:w-[85%] text-justify lg:text-start">
            <span className="text-violet-500 font-semibold">Full-Stack Developer</span> specializing in building dynamic SPA web apps using React, JavaScript, Node.js, Express, and MongoDB
          </p>
          <div className="flex flex-row mb-4">
            <Link
              to={"Contact"}
              smooth
              duration={500}
              offset={-80}
              className="text-xl text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl rounded-lg px-6 py-3 my-2 text-center cursor-pointer"
            >
              {/* hover:to-purple-600 */}
              Get Connected
            </Link>
            <Link
              to={"Projects"}
              smooth
              duration={500}
              offset={-80}
              className="text-xl flex items-center justify-center p-0.5 my-2 ml-2 overflow-hidden rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 hover:text-white font-medium cursor-pointer"
            >
              <span className="px-5 py-2.5 transition-all ease-in duration-100 bg-white rounded-md text-center group-hover:bg-opacity-0">
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
            className="rounded-full mx-auto my-4 w-full min-w-fit"
          />
        </div>
      </div>
      <div className="mx-auto mt-2 pb-6 w-[340px] lg:hidden">
        <SocialButtons />
      </div>
    </section>
  );
};

export default Hero;
