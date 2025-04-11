import React from "react";

const About = ({ about }) => {
  return (
    <section className="py-6 px-6 backdrop-blur-md bg-white/30 dark:bg-white/10 rounded-2xl shadow-lg border border-white/20 transition-all mt-4">
      <h3 className="text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-pink-400 to-fuchsia-500 mb-4">
        About Me
      </h3>
      <p className="text-lg font-body text-gray-800 dark:text-gray-800 leading-relaxed">
        {about || "A brief description about yourself."}
      </p>
    </section>
  );
};

export default About;
