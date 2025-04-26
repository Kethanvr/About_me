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
      title: "Full-Stack Web Development",
      source: "Udemy - Dr. Angela Yu",
      period: "Advancing",
      description:
        "Mastering full-stack web development with a focus on scalable, responsive web apps using React, Node.js, and cloud platforms for hosting and scaling.",
      topics: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "Cloud Hosting (AWS, Azure, Firebase)",
        "Scalable App Architecture",
        "Performance Optimization",
      ],
    },
    {
      title: "Backend Development & Scalability",
      source: "YouTube - Code with Chai",
      period: "Advancing",
      description:
        "Delving deeper into backend development with a focus on scalable architecture, API optimization, and performance improvements for handling large-scale apps.",
      topics: [
        "Node.js",
        "Express.js",
        "JWT Authentication",
        "API Design & Optimization",
        "Database Scalability (MongoDB, PostgreSQL)",
        "Microservices",
      ],
    },

    {
      title: "AI & AI Model APIs",
      source: "YouTube - Various Channels & Internet Resources",
      period: "Learning",
      description:
        "Exploring the use of AI APIs and models, understanding how to integrate AI functionalities into apps, and learning how to work with various AI platforms.",
      topics: [
        "AI APIs (GPT, Gemini, OpenAI, etc.)",
        "Natural Language Processing (NLP)",
        "Machine Learning Model Integration",
        "Building AI Chatbots",
        "AI for Development",
        "AI in Web Development",
      ],
    },
    {
      title: "Running Local LLMs & Fine-Tuning Models",
      source: "YouTube - Various Tutorials & Articles",
      period: "Learning",
      description:
        "Learning how to run local Large Language Models (LLMs) on my machine, fine-tuning them, and utilizing them for specific tasks like chatbots and automating tasks.",
      topics: [
        "Running Local LLMs",
        "Model Fine-Tuning",
        "Training Custom Models",
        "Working with Hugging Face",
        "Running AI Models Locally (Docker, TensorFlow, PyTorch)",
      ],
    },
    {
      title: "AI for Development & Automation",
      source: "YouTube - Various Channels & Internet Resources",
      period: "Advancing",
      description:
        "Delving into using AI for automating development tasks, improving app functionality, and optimizing code with AI-driven tools and services.",
      topics: [
        "Automating Development with AI",
        "AI-Assisted Coding (GitHub Copilot)",
        "AI in Web and App Development",
        "Optimizing Code with AI",
        "Integrating AI with CI/CD Pipelines",
        "AI for Code Review and Testing",
      ],
    },
    {
      title: "Cybersecurity & Ethical Hacking",
      source: "YouTube - Various Channels",
      period: "Learning",
      description:
        "Exploring penetration testing, network security, and ethical hacking using tools like Nmap, Hydra, and Metasploit, with a focus on securing web apps.",
      topics: [
        "Kali Linux",
        "Parrot OS",
        "Nmap",
        "Hydra",
        "Metasploit",
        "Bug Bounty",
        "Web App Security",
        "OWASP Top 10",
      ],
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
