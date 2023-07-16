import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaUserTie,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <section
      name="Contact"
      className="bg-gradient-to-bl from-green-200 to-blue-200 w-full h-fit"
    >
      <div className="max-w-[1280px] m-auto px-4 py-16 w-full">
        <h2 className="text-4xl text-black md:text-5xl lg:text-6xl font-bold inline border-b-4 border-purple-800">
          Contact
        </h2>
        <p className="py-4">Let's get in touch!</p>
        <div className="grid md:grid-cols-5 gap-8">
          <div className="col-span-3 mx-auto md:col-span-2 max-w-[480px] w-full h-full shadow-lg shadow-gray-400 rounded-xl p-4 bg-white">
            <div className="p-4 h-full">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                  alt="computer screen with VS Code"
                  className="rounded-xl w-full max-h-72 object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl text-black md:text-3xl lg:text-4xl font-medium py-4">
                  Nicholas Tse
                </h2>
                <p>Full-Stack Software Developer</p>
              </div>
              <div>
                <div className="flex items-center justify-evenly py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 bg-gradient-to-br from-blue-300 to-slate-300 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                    <FaLinkedin size={25} />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 bg-gradient-to-br from-blue-300 to-slate-300 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                    <FaGithub size={25} />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 bg-gradient-to-br from-blue-300 to-slate-300 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                    <FaEnvelope size={25} />
                  </div>
                  {/* <div className="rounded-full shadow-lg shadow-gray-400 bg-gradient-to-br from-blue-300 to-slate-300 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                    <FaUserTie size={25} />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4 bg-gray-200">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-2 w-full py-2">
                  <div className="flex flex-col">
                    <input
                      className="border-2 rounded-lg p-3 border-gray-300"
                      type="text"
                      placeholder="First name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      className="border-2 rounded-lg p-3 border-gray-300"
                      type="text"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <input
                    className="border-2 rounded-lg p-3 border-gray-300"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <input
                    className="border-2 rounded-lg p-3 border-gray-300"
                    type="email"
                    placeholder="Subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300 resize-none"
                    rows={10}
                    placeholder="Type a message..."
                  ></textarea>
                </div>
                <div className="flex flex-col pt-2">
                  <button className="mx-auto mt-2 bg-gradient-to-br from-blue-500 to-blue-400 hover:to-blue-500 rounded-lg py-3 px-5 text-lg text-gray-100 font-medium shadow-md shadow-gray-400">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
