
import React from "react";

// Capitalize each word properly
const toTitleCase = (str) => {
  if (!str) return "";
  return str
    .split(" ")
    .map(word =>
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");
};

const Hero = ({ name, tagline }) => {
  return (
    <section className="text-center py-10 px-6 backdrop-blur-md bg-white/30 dark:bg-white/10 rounded-2xl shadow-lg border border-white/20 transition-all">
      <h2 className="text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-pink-500 to-purple-500 capitalize">
      {name || "Your Name"}
      </h2>
      <p className="mt-4 text-xl font-medium text-gray-700 dark:text-gray-500 font-body">
        {tagline || "Your Tagline or Career Goal"}
      </p>
    </section>
  );
};

export default Hero;
