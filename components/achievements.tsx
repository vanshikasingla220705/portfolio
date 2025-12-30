"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { achievements } from "@/lib/data";
import Achievement from "./achievement";
import { useSectionInView } from "@/lib/hooks"; 
import {motion} from "framer-motion"
export default function Achievements() {
  const { ref } = useSectionInView("Achievements", 0.5);
  return (
    <motion.section id="achievements" ref={ref} className="scroll-mt-28 mb-28 max-w-[50rem] mx-auto text-center">
      <SectionHeading>Achievements</SectionHeading>
      
      {/* Horizontal Flex Container */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {achievements.map((achievement, index) => (
          <React.Fragment key={index}>
            <Achievement {...achievement} />
          </React.Fragment>
        ))}
      </div>
    

    </motion.section>
    
  );
}