import React from "react";
import heroImg from "../assets/PSHeadshot.jpg";
import ContactForm from "./ContactForm";
import SocialButtons from "./SocialButtons";
import { FaRegEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      name="Contact"
      className="w-full py-12 min-h-fit flex flex-col justify-center items-center sm:px-14 bg-gradient-to-br from-sky-100 to-purple-100"
    >
      <div className="max-w-screen-xl mx-auto py-4 px-8 w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl text-black md:text-5xl lg:text-6xl font-bold inline border-b-4 border-slate-300">
            Contact
          </h2>
          <p className="pt-6 pb-2 text-lg">Let's get in touch! Feel free to reach out via email or use the form provided below</p>
        </div>
        <div className="grid md:grid-cols-5 gap-8">
          <div className="col-span-3 mx-auto md:col-span-2 max-w-[420px] w-full h-full shadow-lg shadow-gray-400 rounded-xl p-4 bg-white">
            <div className="p-4 h-full">
              <div>
                <img
                  src={heroImg}
                  alt="my professional headshot"
                  className="rounded-xl w-full max-h-80 object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl text-black md:text-3xl lg:text-4xl font-medium pt-4">
                  Nicholas Tse
                </h2>
                <p className="lg:text-lg pt-1"><span className="text-violet-500 font-semibold">Full-Stack Software Developer</span></p>
                <div className="py-2">
                  <div className="flex items-center md:text-xs lg:text-base">
                    <FaRegEnvelope size={20} className="mr-1 flex-shrink-0"/> nicholashtse@gmail.com
                  </div>
                  <p>
                    {/* Feel free to get in touch using the form below or connect with me through LinkedIn, GitHub, or email. Whether you have an
                    exciting project idea, a potential collaboration, or just
                    want to chat about technology and web development, I'm
                    always eager to hear from fellow developers, clients, and
                    enthusiasts alike! */}
                  </p>
                </div>
              </div>
              <div>
                <SocialButtons exclude={4} />
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4 bg-gray-200">
            <div className="p-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
