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
import gb from "@/public/Screenshot 2025-12-30 165342.png"
import { title } from "node:process";
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
    name:"Achievements",
    hash:"#achievements",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name:"Coding_Platforms",
    hash:"#codingplatform",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
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
      "Built an AI-powered e-commerce platform that enables intelligent search for fashion and home décor items.",
    tags: [ "MERN", "Gemini API", "Sentence-Transformers", "PyTorch", "Hugging Face Spaces"],
    imageUrl: myntraai,
    githuburl:"https://github.com/vanshikasingla220705/myntra-project",
    liveurl:"https://myntra-project-3.onrender.com/"
  },
  {
    title: "MYSTRY MSG",
    description:
      "Developed a full-stack anonymous messaging app with secure authentication and shareable message links.",
    tags: ["Next.js", "NextAuth.js", "Shadcn/UI", "Zod", "Google Gemini API", "Typescript"],
    imageUrl: mytmsg,
    githuburl:"https://github.com/vanshikasingla220705/mystrymessage",
    liveurl:"https://mystrymessage-eight.vercel.app/"
  },
  {
    title: "STREAM NEST",
    description:
      " Built the backend for a video-sharing platform with JWT auth, Cloudinary media storage, and optimized Mongoose queries.",
    tags: [" Node.js" ,"Express.js", "MongoDB", "Cloudinary", "JWT", "Multer"],
    imageUrl: stream,
    githuburl:"https://github.com/vanshikasingla220705/megaproject-backend",
    liveurl:"https://github.com/vanshikasingla220705/megaproject-backend"
  },
] as const;

export const coding=[
    {
    title: "LEETCODE",
    description:"",
    imageUrl: leet,
    url:"https://leetcode.com/u/vanshikasingla22/"
  },
  {
    title:"GITHUB",
    description:"",
    imageUrl:gb,
    url:"https://github.com/vanshikasingla220705"
  },
  {
    title: "CODEFORCES",
    description:"",
    imageUrl: cf,
    url:"https://codeforces.com/profile/Vanshikasingla"
  },

  {
    title: "GFG",
    description:"",
    imageUrl: gfg,
    url:"https://www.geeksforgeeks.org/profile/vanshikasj3bo"
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