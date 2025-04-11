import React from "react";
import { motion } from "framer-motion";

const Navbar = ({ user, setUser }) => {
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/40 dark:bg-white/10 shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-sky-500 via-pink-400 to-fuchsia-500 bg-clip-text text-transparent">
          E-Portfolio Builder
        </h1>

        {user && (
          <div className="flex items-center gap-4">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-800">
              Hello, {user.name}
            </p>
            <button
              onClick={handleLogout}
              className="px-4 py-1 bg-gradient-to-r from-red-500 to-pink-600 text-white text-sm rounded-lg shadow hover:opacity-90 transition-all duration-300"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
