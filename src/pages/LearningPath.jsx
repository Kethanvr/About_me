import { FaBookOpen, FaCalendar } from "react-icons/fa";

function LearningPathCard({ title, source, period, description, topics }) {
  const colorMap = [
    { bg: "bg-[rgb(63,23,25)]", text: "text-[rgb(255,180,186)]" },
    { bg: "bg-[rgb(29,42,69)]", text: "text-[rgb(173,216,230)]" },
    { bg: "bg-[rgb(18,60,36)]", text: "text-[rgb(144,238,144)]" },
    { bg: "bg-[rgb(67,55,18)]", text: "text-[rgb(255,236,139)]" },
    { bg: "bg-[rgb(55,25,69)]", text: "text-[rgb(216,191,216)]" },
  ];

  return (
    <div className="bg-dark rounded-lg w-full sm:w-[90%] p-4 sm:p-6 border border-gray-800 hover:border-blue-500 transition-all">
      <div className="flex justify-between items-start mb-3 sm:mb-4">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-white">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-gray-400 mt-1 text-xs sm:text-sm">
            <FaBookOpen className="text-sm" />
            <span>{source}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
          <FaCalendar className="text-sm" />
          <span>{period}</span>
        </div>
      </div>

      <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {topics.map((topic, index) => {
          const randomColor = colorMap[index % colorMap.length]; // Assign colors cyclically
          return (
            <span
              key={index}
              className={`px-3 py-1 text-xs sm:text-sm rounded-full shadow-md transition-all hover:scale-105 
                            ${randomColor.bg} ${randomColor.text}`}
            >
              {topic}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function LearningPath() {
  const learningSteps = [
    {
      title: "Cybersecurity & Ethical Hacking",
      source: "YouTube - Various Channels",
      period: "Learning",
      description:
        "Exploring penetration testing, network security, and ethical hacking using tools like Nmap, Hydra, and Metasploit.",
      topics: [
        "Kali Linux",
        "Parrot OS",
        "Nmap",
        "Hydra",
        "Metasploit",
        "Bug Bounty",
      ],
    },
    {
      title: "Backend Development",
      source: "YouTube - Code with Chai",
      period: "Advancing",
      description:
        "Dived deeper into backend development, learning Express.js, authentication, API design, and database optimization.",
      topics: ["Node.js", "Express.js", "jwt", "Authentication", "MongoDB", ],
    },
    {
      title: "Web Development",
      source: "Udemy - Dr. Angela Yu",
      period: "Advancing",
      description:
        "Learned full-stack web development, covering HTML, CSS, JavaScript, React, Node.js, and databases.",
      topics: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    },
  ];

  return (
    <div className="w-full my-30 py-6 sm:py-8 px-4 sm:px-18">
      <div className="w-full border-b border-[#474747] flex items-center mb-8 sm:mb-10 hover:cursor-pointer">
        <div className="px-4 py-2 bg-[rgb(64,64,64)] border border-[#373737] flex items-center space-x-4 group">
          <span className="text-[#d8d8d8] text-xs sm:text-sm font-extralight">
            learningPath.jsx
          </span>
          <div className="w-2 h-2 rounded-full bg-[rgb(115,115,115)] group-hover:bg-transparent relative flex items-center justify-center transition-all">
            <span className="hidden group-hover:block text-[16px] text-[#d8d8d8] absolute">
              ×
            </span>
          </div>
        </div>
      </div>

      {/* Learning Path Cards with Vertical Timeline */}
      <div className="relative space-y-6 ml-4 sm:ml-6 pl-6 sm:pl-10 border-l border-[#474747]">
        {learningSteps.map((step, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[30px] sm:-left-[44px] top-1/2 -translate-y-1/2 w-1.5 sm:w-2 h-0.5 bg-[#616161]"></div>
            <LearningPathCard {...step} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LearningPath;
