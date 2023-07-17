import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaUserTie } from "react-icons/fa6";

const SocialButtons = ({ exclude }) => {
  const socialButtons = [
    {
      id: 1,
      icon: <FaLinkedin size={25} />,
      href: "https://www.linkedin.com/in/nicholashtse/",
    },
    {
      id: 2,
      icon: <FaGithub size={25} />,
      href: "https://github.com/n-tse",
    },
    {
      id: 3,
      icon: <FaEnvelope size={25} />,
      href: "mailto:nicholashtse@gmail.com",
    },
    {
      id: 4,
      icon: <FaUserTie size={25} />,
      href: "/NicholasTse_Resume.32326.pdf",
    },
  ];

  const filteredSocialButtons = socialButtons.filter((button) => button.id !== exclude);


  return (
    <div>
      <div className="flex items-center justify-evenly py-4">
        {filteredSocialButtons.map(({ id, icon, href }) => {
          return (
            <div
              key={id}
              className="rounded-full shadow-lg shadow-gray-400 bg-gradient-to-br from-blue-300 to-slate-300 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center w-full h-full"
              >
                {icon}
              </a>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default SocialButtons;
