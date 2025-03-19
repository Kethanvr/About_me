import { FaGithub, FaRegFolder } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import ProjectPopUp from "../components/ProjectPopUp";
import React, { useState } from "react";

function ProjectCard({ title, description, technologies, number, link, openPopup }) {
  return (
    <div
      className="rounded-xl p-5 sm:p-6 hover:border-primary border border-[rgb(70,70,70)] 
                 transition-all backdrop-blur-2xl bg-[rgb(23,23,23)] 
                 flex flex-col justify-between overflow-hidden"
    >
      {/* Title & Number */}
      <div className="flex justify-between items-center mb-4 sm:mb-5">
        <div className="flex items-center gap-2 sm:gap-3">
          <FaRegFolder className="text-blue-400 text-lg" />
          <h3 className="text-base sm:text-lg font-light text-[rgb(229,229,229)] truncate">
            {title}
          </h3>
        </div>
        <span className="text-gray-500">0{number}</span>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4 sm:mb-5">
        {description}
      </p>

      {/* Technologies */}
      <div className="flex gap-2 flex-wrap mb-4 sm:mb-5">
        {technologies.map((tech, index) => {
          const colorMap = [
            { bg: "bg-red-900", text: "text-red-300" },
            { bg: "bg-blue-900", text: "text-blue-300" },
            { bg: "bg-green-900", text: "text-green-300" },
            { bg: "bg-yellow-900", text: "text-yellow-300" },
            { bg: "bg-purple-900", text: "text-purple-300" },
          ];
          const randomColor = colorMap[index % colorMap.length];

          return (
            <span
              key={index}
              className={`px-3 py-1 text-xs font-extralight ${randomColor.bg} ${randomColor.text} 
                    rounded-full shadow-md transition-all hover:scale-105`}
            >
              {tech}
            </span>
          );
        })}
      </div>

      {/* Footer - View Project Link */}
      <div className="flex justify-between items-center mt-auto">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (window.innerWidth >= 768) {
              e.preventDefault();
              openPopup(link);
            }
          }}
          className="text-[rgb(85,158,254)] hover:underline text-sm"
        >
          View Project →
        </a>
        <FaGithub className="text-gray-400 hover:text-white cursor-pointer" />
      </div>
    </div>
  );
}

function Projects() {
  const [popupContent, setPopupContent] = useState(null);

  const projects = [
    {
      title: "Personal Portfolio",
      description:
        "A personal portfolio website showcasing my projects, skills, and experience.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      link: "https://github.com/Kethanvr/Personal-Portfolio",
    },
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with user authentication, product management, and payment integration.",
      technologies: ["Node.js", "Express", "MongoDB", "React"],
      link: "https://github.com/Kethanvr/E-commerce-Platform",
    },
    {
      title: "Chat Application",
      description:
        "A real-time chat application with support for multiple rooms and private messaging.",
      technologies: ["Socket.io", "Node.js", "React"],
      link: "https://github.com/Kethanvr/Chat-Application",
    },
    {
      title: "Task Manager API",
      description:
        "A RESTful API for managing tasks, with JWT authentication and MongoDB for data storage.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      link: "https://github.com/Kethanvr/Task-Manager-API",
    },
  ];

  return (
    <div className="w-full my-20 py-10 sm:py-15 px-6 sm:px-15 bg-[rgb(38,38,38)]">
      <div className="w-full border-b border-[#474747] flex items-center mb-8 sm:mb-10 hover:cursor-pointer">
        <div className="px-3 sm:px-4 py-1 sm:py-2 bg-[rgb(64,64,64)] border border-[#373737] flex items-center space-x-3 sm:space-x-4 group">
          <span className="text-[#d8d8d8] text-xs font-extralight">projects.jsx</span>
          <div className="w-2 h-2 rounded-full bg-[rgb(115,115,115)] group-hover:bg-transparent relative flex items-center justify-center transition-all">
            <span className="hidden group-hover:block text-[14px] sm:text-[16px] text-[#d8d8d8] absolute">×</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} number={index + 1} openPopup={setPopupContent} />
        ))}
      </div>

      <AnimatePresence>
        {popupContent && <ProjectPopUp content={popupContent} onClose={() => setPopupContent(null)} />}
      </AnimatePresence>
    </div>
  );
}

export default Projects;
