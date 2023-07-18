import React, { useState } from "react";

const ContactForm = () => {
  const emptyFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(emptyFormValues);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = () => {
    setTimeout(() => {
      setFormValues(emptyFormValues);
    }, 1000);
  }

  return (
    <div>
      <form
        action="https://getform.io/f/fe143c7b-b44f-41c7-b078-0e4995f3bc95"
        method="POST"
      >
        <div className="grid md:grid-cols-2 gap-2 w-full py-2">
          <div className="flex flex-col">
            <input
              className="border-2 rounded-lg p-3 border-gray-300"
              type="text"
              name="firstName"
              value={formValues.firstName}
              placeholder="First name"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <input
              className="border-2 rounded-lg p-3 border-gray-300"
              type="text"
              name="lastName"
              value={formValues.lastName}
              placeholder="Last name"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <input
            className="border-2 rounded-lg p-3 border-gray-300"
            type="text"
            name="email"
            value={formValues.email}
            placeholder="Your email address"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col py-2">
          <input
            className="border-2 rounded-lg p-3 border-gray-300"
            type="text"
            name="subject"
            value={formValues.subject}
            placeholder="Subject"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col py-2">
          <textarea
            className="border-2 rounded-lg p-3 border-gray-300 resize-none"
            rows={10}
            name="message"
            value={formValues.message}
            placeholder="Type a message..."
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex flex-col pt-2">
          <button
            className="mx-auto mt-2 bg-gradient-to-br from-blue-500 to-blue-400 hover:to-blue-500 rounded-lg py-3 px-5 text-lg text-gray-100 font-medium shadow-md shadow-gray-400"
            onClick={handleSubmit}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
