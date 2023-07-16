import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaRegEnvelope,
  FaUser,
  FaUserTie,
  FaFileLines,
  FaRegIdBadge,
  FaRegFileLines,
} from "react-icons/fa6";

const SocialLinks = () => {
  const socialLinks = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={35} />
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
          Email <FaEnvelope size={35} />
        </>
      ),
      href: "mailto:nicholashtse@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <FaUserTie size={35} />
        </>
      ),
      href: "/NicholasTse_Resume.32326.pdf",
      customStyle: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[30%] left-0 fixed z-50">
      <ul>
        {socialLinks.map(({ id, child, href, customStyle }) => {
          return (
          <li key={id} className={"flex justify-between items-center text-lg font-medium w-40 h-14 pl-7 pr-3 bg-gradient-to-tr from-slate-400 to-slate-200 hover:rounded-e-lg ml-[-100px] hover:ml-[-10px] duration-300" + " " + customStyle}>
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
