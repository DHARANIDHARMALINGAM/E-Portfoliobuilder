import React from "react";

const Skills = ({ skills }) => {
  return (
    <section className="py-6">
      <h3 className="text-2xl font-semibold bg-gradient-to-r from-sky-500 to-pink-500 bg-clip-text text-transparent mb-4">
        Skills
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.length > 0 ? (
          skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded-full text-sm font-medium bg-white/30 dark:bg-white/10 text-indigo-800 dark:text-black backdrop-blur-md shadow-md border border-white/30 dark:border-white/20 hover:scale-105 transition-transform duration-300"
            >
              {skill}
            </span>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-800">No skills added yet.</p>
        )}
      </div>
    </section>
  );
};

export default Skills;
