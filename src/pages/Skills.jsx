function SkillBar({ name, percentage, color }) {
  return (
    <div className="mb-3 sm:mb-4">
      <div className="flex justify-between mb-1 px-1 font-extralight text-xs sm:text-sm text-[rgba(220,220,220,0.9)]">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="bg-gray-800 rounded-full">
        <div
          className="h-1 rounded-full bg-gradient-to-r"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
            opacity: 0.7
          }}
        />
      </div>
    </div>
  );
}

function SkillSection({ title, skills, color }) {
  return (
    <div className="rounded-lg p-3 sm:p-4 bg-[rgb(23,23,23)] border border-[rgb(55,55,55)] hover:border-[rgb(65,65,65)] transition-all">
      <h3 className="text-sm sm:text-lg font-thin text-gray-300 mb-3 sm:mb-4">{title}</h3>
      <div className="space-y-1 sm:space-y-2">
        {skills.map((skill, index) => (
          <SkillBar key={index} name={skill.name} percentage={skill.level} color={color} />
        ))}
      </div>
    </div>
  );
}

function Skills() {
  const frontendSkills = [
    { name: "HTML & CSS", level: 95 },
    { name: "JavaScript (ES6+)", level: 84 },
    { name: "React.js", level: 82 },
    { name: "Tailwind CSS", level: 81 },
    { name: "Next.js (Learning)", level: 65 },
  ];

  const backendSkills = [
    { name: "Node.js", level: 88 },
    { name: "Express.js", level: 85 },
    { name: "MongoDB", level: 85 },
    { name: "Supabase", level: 80 },
  ];

  const developerTools = [
    { name: "Git & GitHub", level: 90 },
    { name: "VS Code", level: 95 },
    { name: "Postman", level: 84 },
    { name: "Figma", level: 80 },
    { name: "Canva", level: 85 },
  ];

  const aiMlSkills = [
  { name: "Prompt Engineering", level: 93 },
  { name: "AI Tools (Gemini, OpenAI, Claude)", level: 93 },
  { name: "Machine Learning Basics", level: 70 },
  { name: "Using Gemini API for AI apps", level: 90 },
  { name: "Building AI Chatbots (basic)", level: 85 },
  { name: "Data Handling (basic JSON)", level: 85 },
];

 

  return (
    <div className="w-[100vw] my-20 py-6 sm:py-8 px-8 sm:px-15">
      <div className="w-full border-b border-[#474747] flex items-center mb-6 sm:mb-10 hover:cursor-pointer">
        <div className="px-3 sm:px-4 py-1 sm:py-2 bg-[rgb(64,64,64)] border border-[#373737] flex items-center space-x-3 sm:space-x-4 group">
          <span className="text-[#d8d8d8] text-xs font-extralight">skills.jsx</span>
          <div className="w-2 h-2 rounded-full bg-[rgb(115,115,115)] group-hover:bg-transparent relative flex items-center justify-center transition-all">
            <span className="hidden group-hover:block text-[14px] sm:text-[16px] text-[#d8d8d8] absolute">×</span>
          </div>
        </div>
      </div>

      <div className="bg-[rgb(38,38,38)] p-5 sm:p-8 rounded-lg">
        {/* Text Section */}
        <div className="text-[#ababab] text-xs sm:text-sm font-extralight mb-5 sm:mb-6 leading-relaxed">
          <p>interface Skill &#123;</p>
          <div className="px-3 sm:px-5">
            <p>name: string;</p>
            <p>level: number;</p>
            <p>experience: string;</p>
            <p>tools: string[];</p>
          </div>
          <p>&#125;</p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7 px-4 sm:px-15">
          <SkillSection title="Frontend Development" skills={frontendSkills} color="#3b82f6" />
          <SkillSection title="Backend Development" skills={backendSkills} color="#22c55e" />
          <SkillSection title="Developer Tools" skills={developerTools} color="#f59e0b" />
          <SkillSection title="AI & Machine Learning" skills={aiMlSkills} color="#8b5cf6" />
          
        </div>
      </div>
    </div>
  );
}

export default Skills;
