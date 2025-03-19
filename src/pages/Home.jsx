import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Mail, Coffee } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ResumePopUp from '../components/ResumePopUp';
import resumePDF from "../assets/Resume_Prateek.pdf";

function Home() {
  const [isToggled, setIsToggled] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="min-h-[calc(100vh-3.5rem)] w-full flex flex-col md:flex-row items-center justify-around px-5 md:mt-10 md:px-10 py-25 space-y-5 md:space-y-0"
    >
      {/* Left Content */}
      <div className="space-y-6 text-center md:text-left">
        <div className="flex items-center ml-10 md:ml-0 justify-start gap-3.5">
          <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
          <div className="px-2 py-1 text-sm rounded-full bg-green-500/20 text-green-500">
            Available for hire
          </div>
        </div>

        <h1 className="text-3xl justify-self-center md:text-6xl font-bold flex gap-3 select-none">
          <span className="text-blue-500">&lt;</span>
          <span
            className="hover:cursor-pointer"
            onClick={() => setIsToggled(!isToggled)}
          >
            {isToggled ? (
              <span className="text-gray-400 transition-opacity duration-300">Hello World!</span>
            ) : (
              "Prateek Bisht"
            )}
          </span>
          <span className="text-blue-500">/&gt;</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto md:mx-0">
          I'm a full-stack developer specializing in building exceptional digital experiences!!
        </p>

        <div className="flex gap-4 justify-center md:justify-start">
          <a href="#projects" className="px-6 py-3 bg-[rgb(29,42,69)] text-[rgb(85,159,255)] rounded-lg border border-[rgb(36,51,84)] hover:bg-[rgb(25,36,61)] hover:border-[rgb(44,59,91)] hover:text-[rgb(100,167,255)] transition-colors">View My Work</a>
          <a href="#contact" className="px-6 py-3 border border-gray-700 rounded-lg hover:border-[rgb(52,71,111)] hover:bg-[rgb(25,25,25)] transition-colors">Contact Me</a>
        </div>

        <div className="hidden md:block font-mono text-gray-600">
          <div className="text-sm">class Developer extends Human {'{'}</div>
          <div className="pl-4 text-sm">
            const skills = ['JavaScript', 'React', 'Node.js', 'Python'];
            <br />
            const passion = 'Building exceptional digital experiences';
          </div>
          <div className="text-sm">{'}'}</div>
        </div>
        <div className="hidden md:block text-gray-400 font-mono">
          <p>
            <span className="text-gray-500">// Reminder to CODE...</span>
          </p>
          <p>
            <span className="text-purple-400">const</span> quote =
            <span className="text-green-400"> "Code! Create! Conquer!"</span>;
          </p>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex flex-col items-center gap-6 bg-[rgb(20,20,20)] border border-[#292929] shadow-sm shadow-[rgba(85,159,255,0.3)] px-6 py-8 rounded-xl w-full max-w-xs md:max-w-sm">
        {/* Profile Picture */}
        <div className="bg-[rgb(24,24,24)] rounded-full w-32 md:w-40 h-32 md:h-40 p-1 hover:p-1.5 border border-gray-800 hover:border-gray-600 transition-all duration-300 shadow-lg">
          <img src="./profile-pic.png" alt="Profile" className="rounded-full w-full h-full object-cover" />
        </div>

        {/* Bio Section */}
        <div className="bg-[rgb(24,24,24)] w-full rounded-xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300 shadow-lg space-y-2">
          <p className="text-sm text-gray-500">STUDENT</p>
          <h4 className="font-medium text-gray-300 md:text-lg">Computer Science, B.Tech.</h4>
          <p className="text-gray-400 text-base">GGSIPU, Delhi</p>
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <p className="italic">2022 - 2026</p>
            <a href={resumePDF} download="Prateek_Bisht_Resume.pdf"
              onClick={(e) => {
                if (window.innerWidth >= 768) {
                  e.preventDefault();
                  setPopupContent(true);
                }
              }} className="hover:text-gray-300 cursor-pointer">
              Resume
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-[rgb(24,24,24)] w-full rounded-lg p-4 border border-gray-800 hover:border-gray-700 transition-colors text-center">
          <div className="flex justify-evenly">
            <a href="https://github.com/prateekbisht23" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/prateek-bisht-7a062a258/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:prateekbisht04@gmail.com" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
            <a href="https://www.instagram.com/__prateek.23_/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="https://x.com/PrateekB04" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://buymeacoffee.com/prateekbisht" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <Coffee size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Resume Popup */}
      <AnimatePresence>
        {popupContent && <ResumePopUp onClose={() => setPopupContent(false)} />}
      </AnimatePresence>
    </motion.div>
  );
}

export default Home;

