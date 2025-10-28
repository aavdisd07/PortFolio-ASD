import {
  IconBrandGithub,
  IconBrandHackerrank,
  IconBrandLeetcode,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Image from "../src/assets/SS.png";
import Image2 from "../src/assets/SSM.png";
import Image3 from "../src/assets/home.png"
import Image4 from "../src/assets/image.png"
import Image5 from "../src/assets/image5.png";

const Info = {
  stack: ["Software Developer","Full Stack Developer", "UI/UX Enthusiast"],
  bio: "with a B.Tech in Information Technology from SGGSIE&T,Nanded. I enjoy crafting clean, responsive, and user-friendly web applications using React, JavaScript, and modern UI/UX principles. With hands-on experience in both frontend and backend development, I aim to build meaningful digital solutions that solve real-world problems and enhance user experience",
};

const SocialLinks = [
  { link: "https://github.com/aavdisd07", icon: IconBrandGithub },
  {
    link: "https://www.linkedin.com/in/avantikadeshmukh/",
    icon: IconBrandLinkedin,
  },
  { link: "https://leetcode.com/u/2021bit153/", icon: IconBrandLeetcode },

  {
    link: "https://www.hackerrank.com/profile/2021bit153",
    icon: IconBrandHackerrank,
  }

];

const ProjectInfo = [
  {
    "title": "Movies Mania",
    "desc": "Developed a responsive website using JavaScript and API integration for real-time movie information retrieval, implementing search functionality to quickly access detailed movie data, and designed a dynamic user interface to ensure better user engagement and experience.",
    "image": Image2,
    "live": true,
    "technologies": ["JavaScript", "API","HTML", "CSS", "Responsive Design", "GitHub Pages"],
    "link": "https://aavdisd07.github.io/Movies-Mania-/",
    "github": "https://github.com/aavdisd07/Movies-Mania-"
},
{
    "title": "FreshCart",
    "desc": "Developed and deployed an intuitive online grocery store website using React JS and Tailwind CSS. The site features a user-friendly interface with dynamic product listings, interactive shopping cart functionality, and efficient state management. Implemented responsive design principles to ensure a seamless experience across various devices and integrated essential features such as product search, filters, and checkout processes.",
    "image": Image,
    "live": true,
    "technologies": ["ReactJS", "Tailwind CSS","Framer Motion","React Icons","Vite","ESLint PostCSS","GitHub Pages"],
    "link": "https://aavdisd07.github.io/FreshCart/",
    "github": "https://github.com/aavdisd07/FreshCart"
},
{
    "title": "SkyStore",
    "desc": "SkyStore is a secure cloud-based file storage application built with Node.js, Express, MongoDB, and Cloudinary. It allows users to upload, manage, and download files efficiently.",
    "image": Image3,
    "live": true,
    "technologies": [
      "Express.js", "MongoDB", "Node.js", "Cloudinary", "JWT Authentication","bcrypt.js"
    ],
    "link": "https://skystore-t48b.onrender.com/user/signup",
    "github": "https://github.com/aavdisd07/SKYSTORE"
},
{
    "title": "SecondBrain",
    "desc": "A full-stack web application designed to streamline content organization by allowing users to save, categorize, and share links from platforms like YouTube, Instagram, LinkedIn, and Twitter. The app enhances content accessibility and organization by 80% through intuitive categorization and sharing features. Secure authentication is implemented using JWT and bcrypt, ensuring 100% encrypted password protection. Shareable link generation boosts user engagement by 40%, making it easier to distribute curated content across platforms.",
    "image": Image4,
    "live": true,
    "technologies": ["React.js", "TypeScript","Node.js", "Express.js", "MongoDB", "JWT", "bcrypt", "Zod", "Tailwind CSS"],
    "link": "https://second-brain-llb9.vercel.app/",
    "github": "https://github.com/aavdisd07/SecondBrain"
},
{
    "title": "Evently",
    "desc": "A scalable full-stack web application built with modern architecture, offering seamless event creation, discovery, and management. Integrated Clerk for secure and efficient user authentication, supporting full CRUD operations for events with dynamic control over titles, dates, locations, and more.✨ Key Features:Event CRUD: Create, read, update, and delete events with an intuitive interface.Related & Organized Events: Display of related events and user-created event tracking via profile pages.Advanced Search & Filter: Quickly locate events through a robust search and category-based filtering system.Category Management: Dynamically add and manage event categories for flexibility and scalability.Stripe Payments: Secure checkout system with Stripe for smooth transactions.Order Management: Track event orders and use search functionality for efficient order monitoring.Designed with clean code architecture and reusable components to ensure maintainability and scalability, this project delivers a professional-grade event experience for both users and administrators.",
    "image": Image5,
    "live": true,
    "technologies": ["Next.js 14","TypeScript","Tailwind CSS","Clerk","Prisma","MongoDB","Stripe","Zod","React Hook Form","Shadcn UI","Vercel"],
    "link": "https://evently2-0.vercel.app/",
    "github": "https://github.com/aavdisd07/Evently2.0"
},

];

const SkillInfo = [
  {
    "title": "Frontend Development",
    "skills": [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJs",
      "NextJs",
      "TailwindCSS",
      "Bootstrap",
      "TypeScript"
    ]
},
{
    "title": "Backend Development",
    "skills": [
      "Java",
      "C",
      "SQL",
      "Django",
      "SpringBoot",
      "Firebase"
    ]
},
{
    "title": "Full Stack Development",
    "skills": [
      "ReactJs",
      "Django",
      "Java",
      "SpringBoot",
      "MySQL",
      "Firebase",
      "TypeScript"
    ]
},
{
    "title": "Other Technologies",
    "skills": [
      "Python",
      "CPP",
      "Flutter",
      "WordPress",
      "Linux"
    ]
}

];

const ExperienceInfo = [
  {
    role: "Web developer",
    company: "airtel",
    date: "oct-34",
    desc: "lorem3  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloribus at nobis deleniti quis pariatur blanditiis magnam repudiandae assumenda atque?",
    skills: [
      "Html",
      "css",
      "Html",
      "css",
      "Html",
      "css",
      "Html",
      "css",
      "Html",
      "css",
      "Html",
      "css",
    ],
  },

  {
    role: "Web developer",
    company: "airtel",
    date: "oct-34",
    desc: "lorem3  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloribus at nobis deleniti quis pariatur blanditiis magnam repudiandae assumenda atque?",
    skills: ["Html", "css", "Html", "css", "Html", "css", "Html", "css"],
  },
  {
    role: "Web developer",
    company: "airtel",
    date: "oct-34",
    desc: "lorem3  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloribus at nobis deleniti quis pariatur blanditiis magnam repudiandae assumenda atque?",
    skills: [
      "Html",
      "css",
      "Html",
      "css",
      "Html",
      "css",
      "Html",
      "css",
      "Html",
      "css",
      "Html",
      "css",
    ],
  },
];

const Slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export { Info, ProjectInfo, SkillInfo, SocialLinks, ExperienceInfo, Slugs };
