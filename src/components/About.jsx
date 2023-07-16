import React from "react";

const About = () => {
  return (
    <section name="About" className="w-full min-h-fit flex flex-col justify-center items-center pb-20 md:pb-0 md:h-screen sm:px-14">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit">
        <div className="pb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold inline border-b-4 border-slate-300">
            About
          </h2>
        </div>
        <p className="text-lg mb-3">
          Hello! I'm Nick, a Full-Stack Software Developer with a passion for
          creating engaging web applications and user experiences. My interest
          in software development began in an unexpected way. As someone who
          loves cooking, I discovered a similar creative outlet in coding. Just
          like combining different ingredients and spices to create delicious
          dishes, I found myself thrilled by the process of blending various
          technologies and elements to build web pages that others could use and
          enjoy.
        </p>
        <p className="text-lg mb-3">
          Since then, I've come a long way from my first "Hello World" webpage.
          From developing a full-stack chat application called "Chatterbox" using
          technologies like React, Redux, Socket.io, Bcrypt, Node.js, and
          MongoDB, to crafting my MERN job application tracking app "GreatJob,"
          I've gained invaluable experience and honed my skills along the way.
        </p>
        <p className="text-lg mb-3">
          My techstack includes: JavaScript, React, HTML, CSS, Node.js, Express,
          MongoDB, C#, MySql, .NET, React Redux, WebSockets, Socket.io,
          AWS S3, Bootstrap, MUI, TailwindCSS, and Postman. Recently, I've been exploring
          TypeScript and delving into mobile development using Flutter and Dart.
        </p>
        {/* <p>
            Drawing on my background in Communications and Sociology, as well as
            my experience in Sales and Marketing, I prioritize effective
            communication and thrive in supportive and collaborative work
            environments. I firmly believe that a positive atmosphere fosters
            productivity, innovative problem-solving, and overall team
            satisfaction.
          </p> */}
        <p className="text-lg mb-3">
          I'm excited to continue expanding my skills, creating innovative
          applications, and contributing to meaningful projects. Let's connect
          and explore how we can work together!
        </p>
      </div>
    </section>
  );
};

export default About;
