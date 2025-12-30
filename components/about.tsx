"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
I’m a full-stack developer and Computer Science undergraduate at IIIT Kota, with a strong foundation in building scalable, user-focused web applications. I enjoy solving complex problems and turning ideas into clean, efficient solutions across both frontend and backend systems.      </p>

      <p>
I work with technologies like React, Next.js, Node.js, MongoDB, TypeScript, and have experience building AI-powered applications using tools such as Google Gemini, Cloudinary, and Hugging Face. I’ve developed real-world projects involving authentication, media handling, recommendation systems, and semantic search.      </p>
      <p>
Alongside development, I actively practice DSA and competitive programming, and enjoy collaborating in hackathons to rapidly experiment, learn, and ship impactful solutions. I’m driven by curiosity, consistency, and a constant desire to grow as an engineer.      </p>
      
    </motion.section>
  );
}