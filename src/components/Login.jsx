import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

const Login = ({ setUser, setShowLogin }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const stored = JSON.parse(localStorage.getItem("registeredUser"));
    if (!stored || stored.email !== form.email || stored.password !== form.password) {
      setErrors({ general: "Invalid email or password." });
      return;
    }

    localStorage.setItem("user", JSON.stringify({ name: stored.name }));
    setUser({ name: stored.name });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-pink-100 to-fuchsia-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 sm:px-6">
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        onSubmit={handleSubmit}
        className="backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl w-full max-w-md p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-sky-500 via-pink-400 to-fuchsia-500 bg-clip-text text-transparent">
          Welcome Back!
        </h2>

        {errors.general && (
          <p className="text-center text-red-500 text-sm">{errors.general}</p>
        )}

        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white/50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 pr-10 border border-gray-300 dark:border-gray-600 rounded-xl bg-white/50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 dark:text-gray-300"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </div>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-all duration-300"
        >
          Login
        </button>

        <p className="text-sm text-center text-gray-700 dark:text-gray-300">
          Don’t have an account?{" "}
          <button
            type="button"
            className="text-indigo-600 hover:underline dark:text-indigo-400"
            onClick={() => setShowLogin(false)}
          >
            Sign up
          </button>
        </p>
      </motion.form>
    </div>
  );
};

export default Login;
