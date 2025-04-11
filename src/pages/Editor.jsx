import React, { useState } from "react";

const Editor = ({ onChange }) => {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    about: "",
    skills: "",
    projects: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    github: "",
    linkedin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);

    onChange({
      name: updatedForm.name,
      tagline: updatedForm.tagline,
      about: updatedForm.about,
      skills: updatedForm.skills.split(",").map((s) => s.trim()),
      projects: updatedForm.projects
        .split(";")
        .map((p) => {
          const [title, description] = p.split(":").map((s) => s.trim());
          return { title, description };
        }),
      email: updatedForm.email,
      phone: updatedForm.phone,
      location: updatedForm.location,
      website: updatedForm.website,
      github: updatedForm.github,
      linkedin: updatedForm.linkedin,
    });
  };

  const fields = [
    "name",
    "tagline",
    "about",
    "skills",
    "projects",
    "email",
    "phone",
    "location",
    "website",
    "github",
    "linkedin",
  ];

  return (
    <div className="bg-white/30 dark:bg-white/10 backdrop-blur-lg border border-white/20 dark:border-white/10 p-6 rounded-2xl shadow-xl space-y-6 transition duration-300">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent mb-4">
        ✏️ Live Resume Editor
      </h2>

      {fields.map((field) => (
        <div key={field}>
          <label className="block mb-1 text-sm font-semibold capitalize text-gray-700 dark:text-black tracking-wide">
            {field}
          </label>
          <textarea
            name={field}
            value={formData[field]}
            onChange={handleChange}
            rows={field === "about" || field === "projects" ? 3 : 1}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700 text-gray-800 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            placeholder={
              field === "skills"
                ? "e.g. HTML, CSS, JavaScript"
                : field === "projects"
                ? "Project1: Description1; Project2: Description2"
                : `Enter your ${field}`
            }
          />
        </div>
      ))}
    </div>
  );
};

export default Editor;
