import { e } from "maath/dist/index-0332b2ed.esm";
import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
  cc, 
  mvj,
  ws,
} from "../assets";
import { m } from "framer-motion";
import { p, w } from "maath/dist/misc-19a3ec46.esm";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "javasript", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "National Level Hackathon ",
    company_name: "TechXcelerate Hackathon 2024 | E-Cell BITS Hyderabad",
    icon: edunet,
    iconBg: "#161329",
    date: "09th - 10th November 2024",
    points: [
    "Successfully completed a 20-hour National Level Hackathon hosted by Birla Institute of Technology and Science, Pilani.",
    "Awarded as the 34th National Level Winner for the project presented during the hackathon.",
    "Collaborated with a team to develop innovative solutions, showcasing skills in coding, problem-solving, and project execution.",
    ],
    },
    {
      title: "2nd Place in Creative Convrs",
      company_name: "MVJ College of Engineering | VertechX 12.0",
      icon: mvj,
      iconBg: "#161329",
      date: "20th - 21st December 2024",
      points: [
      "Secured 2nd place in the event 'Creative Convrs' during VertechX 12.0, an Inter-Collegiate National Level Technical Fest.",
      "Demonstrated creativity and technical skills in a competitive environment, contributing to the success of the team.",
      "Participated in a prestigious event that showcased innovative ideas and solutions from various institutions.",
      ],
      },
      {
        "title": "CMRIT Ideathon 2024 - Second Prize",
        "company_name": "CMR Institute of Technology",
        "icon": eduskill,
        "iconBg": "#161329",
        "date": " 27th - 28th Nov 2024",
        "points": [
          "Won Second Prize in CMRIT Ideathon 2024 for the project 'Food 360'.",
          "Presented an innovative idea focused on food safety and compliance monitoring.",
          "Collaborated with a team to develop a solution for analyzing food product labels using AI.",
          "Participated in the hackathon hosted by CMRIT, Bengaluru, and gained hands-on experience in pitching and technical innovation."
        ]
    }
    ,
    {
      "title": "First Prize - Pet Food Website Design",
      "company_name": "CMR Institute of Technology",
      "icon": mathwork,
      "iconBg": "#161329",
      "date": "Jan 2025",
      "points": [
        "Developed a pet food website using HTML, CSS, and JavaScript as part of a mini-project in the 1st semester.",
        "Collaborated with a team to design an interactive and user-friendly web interface for showcasing pet food products.",
        "Implemented responsive design techniques to ensure optimal viewing across different devices.",
        "Secured First Prize in the Project Exhibition organized by CMR Institute of Technology, Bangalore."
      ]
  }
  ,{
    "title": "Participation - CraftNCode Hackathon",
    "company_name": "IIIT Bhubaneswar",
    "icon": cc,
    "iconBg": "#161329",
    "date": "Oct 2024",
    "points": [
      "Participated in the CraftNCode hackathon as part of Team Digital Detective.",
      "Developed solutions and contributed to problem-solving in a competitive coding and development event.",
      "Organized by the International Institute of Information Technology (IIIT), Bhubaneswar.",
      "Gained hands-on experience in collaboration, coding, and rapid software development."
    ]
},{
  "title": "Workshop on Artificial Intelligence",
  "company_name": "BITS Hyderabad - E-CELL",
  "icon": ws,
  "iconBg": "#161329",
  "date": "Nov 2024",
  "points": [
      "Successfully completed a workshop on Artificial Intelligence.",
      "Organized by E-CELL, BITS Hyderabad in collaboration with Code Beat, BharatVersity, and ATMOS.",
      "Venue: Birla Institute of Technology and Science, Pilani.",
      "Gained insights into AI concepts, problem-solving, and real-world applications.",
      "Engaged in hands-on sessions and discussions led by industry experts."
  ]
}


];

export const projects = [
  {
    "name": "InstaScan",
    "description": "A web app that allows users to scan packed food products, medicines, and cosmetics to easily retrieve relevant product information.",
    "tags": [
        { "name": "HTML", "color": "green-text-gradient" },
        { "name": "Tailwind CSS", "color": "blue-text-gradient" },
        { "name": "Node.js", "color": "pink-text-gradient" },
        { "name": "Vercel Deployment", "color": "yellow-text-gradient" }
    ],
    "image": weatherpedia,
    "source_code_link": "https://drive.google.com/file/d/1TIfYH1IspYR-OSOyfodTCkJLquoY6P0T/view?usp=sharing"
},
{
    "name": "CineSnap",
    "description": "A user-friendly platform for movie enthusiasts, offering detailed insights into movies, cast, and crew. The standout CineShot feature allows users to effortlessly download high-quality images like wallpapers, logos, and posters, enhancing their cinematic experience.",
    "tags": [
        { "name": "HTML", "color": "green-text-gradient" },
        { "name": "Tailwind CSS", "color": "blue-text-gradient" },
        { "name": "TMDB", "color": "pink-text-gradient" },
        { "name": "Vercel Deployment", "color": "yellow-text-gradient" }
    ],
    "image": termpw,
    "source_code_link": "https://github.com/Kethanvr/CineSnap"
}
,
{
  "name": "InstaSearch",
  "description": "A sleek and modern web application that lets you discover stunning images from Unsplash. With a clean and responsive design, you can search for high-quality images, hover to reveal a download button, and load more results seamlessly.",
  "tags": [
      { "name": "HTML", "color": "green-text-gradient" },
      { "name": "Tailwind CSS", "color": "blue-text-gradient" },
      { "name": "Unsplash API", "color": "pink-text-gradient" },
      { "name": "Vercel Deployment", "color": "yellow-text-gradient" }
  ],
  "image": mhft,
  "source_code_link": "https://github.com/Kethanvr/InstaSearch"
}
,
{
  "name": "Petty",
  "description": "An award-winning eCommerce platform for pet food, featuring filters, multi-image selection, and shopping options. Built as a 1st Semester Mini Project at CMRIT Bangalore, it won 1st Prize in a project competition. 🐾🎉",
  "tags": [
      { "name": "HTML", "color": "green-text-gradient" },
      { "name": "CSS", "color": "blue-text-gradient" },
      { "name": "JavaScript", "color": "pink-text-gradient" },
      { "name": "Vercel Deployment", "color": "yellow-text-gradient" }
  ],
  "image": payloadmaster,
  "source_code_link": "https://github.com/Kethanvr/Petty"
}
,
];
