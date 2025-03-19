import { FaBriefcase, FaCalendar } from 'react-icons/fa';

function ExperienceCard({ role, company, period, description, technologies }) {
  return (
    <div className="bg-dark rounded-lg p-6 border border-gray-800 hover:border-blue-500 transition-all">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{role}</h3>
          <div className="flex items-center gap-2 text-gray-400 mt-1">
            <FaBriefcase className="text-sm" />
            <span>{company}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <FaCalendar className="text-sm" />
          <span>{period}</span>
        </div>
      </div>
      
      <p className="text-gray-400 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function Experience() {
  const experiences = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description: "Led development of multiple high-impact web applications, mentored junior developers, and implemented best practices for code quality and performance.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"]
    },
    {
      role: "Full Stack Developer",
      company: "Digital Solutions Ltd",
      period: "2019 - 2021",
      description: "Developed and maintained various client projects, implemented responsive designs, and optimized application performance.",
      technologies: ["Vue.js", "Python", "Django", "PostgreSQL"]
    },
    {
      role: "Frontend Developer",
      company: "WebCraft Agency",
      period: "2017 - 2019",
      description: "Created responsive and interactive user interfaces, collaborated with designers, and implemented pixel-perfect designs.",
      technologies: ["JavaScript", "React", "SASS", "Redux"]
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-8">Professional Experience</h2>
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} {...exp} />
      ))}
    </div>
  );
}

export default Experience;