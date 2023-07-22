import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaUserTie,
} from "react-icons/fa6";

const SocialLinks = () => {
  const socialLinks = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={35} color="#0077b5"/>
        </>
      ),
      href: "https://www.linkedin.com/in/nicholashtse/",
      customStyle: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={35} />
        </>
      ),
      href: "https://github.com/n-tse",
    },
    {
      id: 3,
      child: (
        <>
          Email <FaEnvelope size={35} color="#ADB4A6"/>
        </>
      ),
      href: "mailto:nicholashtse@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <FaUserTie size={35} color="#1D4384"/>
        </>
      ),
      href: "/NicholasTse_Resume.32227.pdf",
      customStyle: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[30%] left-0 fixed z-50">
      <ul>
        {socialLinks.map(({ id, child, href, customStyle }) => {
          return (
          <li key={id} className={"flex justify-between items-center text-lg font-medium w-40 h-14 pl-7 pr-3 bg-gray-100 hover:rounded-e-lg ml-[-100px] hover:ml-[-10px] duration-300 shadow-md shadow-gray-400" + " " + customStyle}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full h-full"
            >
                {child}
            </a>
          </li>)
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
