import { FaGithub, FaRegFolder } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import ProjectPopUp from "../components/ProjectPopUp";
import React, { useState } from "react";

function ProjectCard({
  title,
  description,
  technologies,
  number,
  link,
  openPopup,
}) {
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
      title: "MediScan - AI Health Assistant",
      description:
        "MediScan is a mobile-first web app that allows users to scan medicine and get detailed information such as usage, side effects, and dosage. The app also features a health-related AI chatbot for user interaction. Built with a focus on security, MediScan stores user history and provides personalized health insights. 🚀",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Supabase",
        "Gemini API",
      ],
      link: "https://mediscan.kethanvr.me/", // If you have a live link, provide it here
    },
    {
      title: "InstaScan - AI Label Scanner",
      description:
        "InstaScan is an AI-powered label scanner that extracts ingredient details from food, medicine, and cosmetic products, providing a health score to help users make informed choices. It uses OCR, AI, and APIs to analyze ingredients, highlight harmful additives, and offer recommendations. 🚀",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "OpenFoodFacts API",
        "Machine Learning",
      ],
      link: "https://instascan.kethanvr.me/",
    },
    {
      title: "Shūn.AI - Revolutionizing the Future of Intelligence.",
      description:
      "Shūn.AI is not just another AI model—it's a revolution in artificial intelligence, pushing the boundaries of what machines can understand and achieve. Shūn.AI will reshape how we interact with technology. The project is currently in its early stages",
      //  "Shūn.AI is not just another AI model—it's a revolution in artificial intelligence, pushing the boundaries of what machines can understand and achieve. With a focus on advanced problem-solving and innovative solutions, Shūn.AI will reshape how we interact with technology. The project is currently in its early stages, with only a landing page available, built using Next.js, TypeScript, and an accessibility-first UI powered by ShadCN components. The goal is to build an AI that breaks conventions, eventually tailored to the Indian context. 🚀",
      technologies: [
        "Next.js",
        "TypeScript",
        "ShadCN",
        "Accessibility UI",
        "AI Model (Future Plan)",
      ],
      link: "https://ai.kethanvr.me", // Replace with live link if available
    },
    {
      title: "InstaSearch - Image Search App",
      description:
        "InstaSearch allows users to search for high-quality images from Unsplash based on keywords. The app integrates the Unsplash API, providing a seamless search experience with options to load more results and an intuitive user interface. 💡",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Tailwind CSS",
        "Unsplash API",
      ],
      link: "https://instasearch.kethanvr.me/", // If you have a live link, provide it here
    },
    {
      title: "CineSnap - Movie Hub & CineShot",
      description:
        "CineSnap is a user-friendly platform for movie enthusiasts, offering detailed insights into movies, cast, and crew. The standout CineShot feature lets users effortlessly download high-quality images like wallpapers, logos, and posters, elevating your cinematic experience! 🚀",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "TMDB API"],
      link: "https://cinesnap.kethanvr.me/",
    },
    
  ];

  return (
    <div className="w-full my-20 py-10 sm:py-15 px-6 sm:px-15 bg-[rgb(38,38,38)]">
      <div className="w-full border-b border-[#474747] flex items-center mb-8 sm:mb-10 hover:cursor-pointer">
        <div className="px-3 sm:px-4 py-1 sm:py-2 bg-[rgb(64,64,64)] border border-[#373737] flex items-center space-x-3 sm:space-x-4 group">
          <span className="text-[#d8d8d8] text-xs font-extralight">
            projects.jsx
          </span>
          <div className="w-2 h-2 rounded-full bg-[rgb(115,115,115)] group-hover:bg-transparent relative flex items-center justify-center transition-all">
            <span className="hidden group-hover:block text-[14px] sm:text-[16px] text-[#d8d8d8] absolute">
              ×
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            number={index + 1}
            openPopup={setPopupContent}
          />
        ))}
      </div>

      <AnimatePresence>
        {popupContent && (
          <ProjectPopUp
            content={popupContent}
            onClose={() => setPopupContent(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;
