import React from "react";
import ContactForm from "./ContactForm";
import SocialButtons from "./SocialButtons";


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
