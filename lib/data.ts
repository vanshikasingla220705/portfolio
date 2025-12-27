import React from "react";
import { FaSchool } from "react-icons/fa";

import { LuGraduationCap } from "react-icons/lu";
import mytmsg from "@/public/Screenshot 2025-12-27 183349.png";
import myntraai from "@/public/Screenshot 2025-12-27 183517.png";
import stream from "@/public/white-abstract-background-design_665257-26.avif"
import mynt from "@/public/WhatsApp Image 2025-12-27 at 9.06.30 PM.jpeg"
import odoo from "@/public/WhatsApp Image 2025-12-27 at 9.08.00 PM.jpeg"
import leet from "@/public/Screenshot 2025-12-27 211934.png"
import gfg from "@/public/Screenshot 2025-12-27 212106.png"
import cf from "@/public/Screenshot 2025-12-27 212140.png"
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
  {
    name:"Achievements",
    hash:"#achievements",
  },
  {
    name:"codingplatform",
    hash:"#codingplatform",
  },
] as const;

export const education = [
  {
    title: "Indian Institute of Information Technology, Kota, Rajasthan ",
    location: "Bachelor of Technology (CSE)",
    description:
      "CGPA: 7.57",
    icon: React.createElement(LuGraduationCap),
    date: "2023-2027",
  },
  {
    title: "DAV Pubic School, Kurukshetra, Harayana",
    location: "Senior Secondary",
    description:
      "Percentage: 92%",
    icon: React.createElement(FaSchool),
    date: "2021 - 2022",
  },
  
] as const;

export const projectsData = [
  {
    title: "MYNTRA AI",
    description:
      "Built an AI-powered e-commerce platform that enables intelligent search for fashion and home décor items. The system understands user intent through text and images, delivering accurate, context-aware product recommendations beyond traditional keyword-based search.",
    tags: [ "MERN", "Gemini API", "Sentence-Transformers", "PyTorch", "Hugging Face Spaces"],
    imageUrl: myntraai,
  },
  {
    title: "MYSTRY MESSAGE",
    description:
      "Developed a full-stack anonymous messaging application with secure user authentication, allowing users to receive and manage anonymous messages through a shareable URL. Integrated AI-based message suggestions to enhance the sender experience.",
    tags: ["Next.js", "NextAuth.js", "Shadcn/UI", "Zod", "Google Gemini API", "Typescript"],
    imageUrl: mytmsg,
  },
  {
    title: "STREAM NEST",
    description:
      "Built the complete backend for a video-sharing platform supporting user authentication, video uploads, likes, comments, playlists, and watch history. Implemented secure JWT-based auth, Cloudinary media storage, and optimized data retrieval using Mongoose aggregations.",
    tags: [" Node.js" ,"Express.js", "MongoDB", "Cloudinary", "JWT", "Multer"],
    imageUrl: stream,
  },
] as const;

export const coding=[
    {
    title: "LEETCODE",
    description:"",
    imageUrl: leet,
  },
  {
    title: "CODEFORCES",
    description:"",
    imageUrl: cf,
  },
  {
    title: "GFG",
    description:"",
    imageUrl: gfg,
  },
]

export const achievements=[
    {
    title: " Top 6 Finalist in Myntra HackerRamp- WeForShe 2025.",
    description:
      "",
    imageUrl: mynt,
  },
  {
    title: "Ranked 271 out of 6,300+ teams in the Odoo Hackathon",
    description:"",
    imageUrl: odoo,
  },
] as const;

export const skillsData = [
    "C++",
    "C",
    "VS Code",
    "Postman",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  
  "MongoDB",
  "Redux",
  
  "Express",
  
] as const;