import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Github,
  Info,
} from "lucide-react";

const Contact = ({ email, phone, location, website, linkedin, github }) => {
  return (
    <section className="py-6 px-6 backdrop-blur-md bg-white/30 dark:bg-white/10 rounded-2xl shadow-lg border border-white/20 transition-all mt-4">
      <h3 className="text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-pink-400 to-fuchsia-500 mb-4">
        Contact
      </h3>
      <ul className="text-gray-800 dark:text-gray space-y-3 text-lg font-medium">
        {email && (
          <li className="flex items-center gap-3">
            <Mail size={20} className="text-sky-500 dark:text-sky-400" />
            <span>{email}</span>
          </li>
        )}
        {phone && (
          <li className="flex items-center gap-3">
            <Phone size={20} className="text-pink-500 dark:text-pink-400" />
            <span>{phone}</span>
          </li>
        )}
        {location && (
          <li className="flex items-center gap-3">
            <MapPin size={20} className="text-fuchsia-500 dark:text-fuchsia-400" />
            <span>{location}</span>
          </li>
        )}
        {website && (
          <li className="flex items-center gap-3">
            <Globe size={20} className="text-indigo-500 dark:text-indigo-400" />
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 dark:hover:text-blue-400"
            >
              {website}
            </a>
          </li>
        )}
        {linkedin && (
          <li className="flex items-center gap-3">
            <Linkedin size={20} className="text-blue-500 dark:text-blue-400" />
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 dark:hover:text-blue-400"
            >
              {linkedin}
            </a>
          </li>
        )}
        {github && (
          <li className="flex items-center gap-3">
            <Github size={20} className="text-gray-600 dark:text-gray-300" />
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-800 dark:hover:text-gray-200"
            >
              {github}
            </a>
          </li>
        )}
        {!email && !phone && !location && !website && !linkedin && !github && (
          <li className="flex items-center gap-3 text-sm italic text-gray-500 dark:text-gray-400">
            <Info size={20} />
            No contact info provided.
          </li>
        )}
      </ul>
    </section>
  );
};

export default Contact;
