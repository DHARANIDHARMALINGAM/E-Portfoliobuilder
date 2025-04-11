import React from "react";
import { motion } from "framer-motion";

const Projects = ({ projects }) => {
  return (
    <section className="py-6">
      <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">Projects</h3>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-white/40 dark:bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-5 border border-gray-800 dark:border-gray-700 hover:scale-[1.02] transition-transform duration-300"
            >
              <h4 className="text-xl font-bold bg-gradient-to-r from-sky-500 to-pink-400 bg-clip-text text-transparent">
                {project.title}
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-800 mt-2">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 dark:text-gray-400 italic">No projects added yet.</p>
      )}
    </section>
  );
};

export default Projects;
