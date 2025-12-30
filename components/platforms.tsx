"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { coding } from "@/lib/data";
import Codings from "./platform";
import { useSectionInView } from "@/lib/hooks"; 
import {motion} from "framer-motion"
export default function Platforms() {
  const { ref } = useSectionInView("Coding_Platforms", 0.5);
  return (
    <motion.section id="codingplatform" ref={ref} className="scroll-mt-28 mb-28 max-w-[50rem] mx-auto text-center">
      <SectionHeading>Coding Platforms</SectionHeading>
      
      {/* Horizontal Flex Container */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {coding.map((Coding, index) => (
          <React.Fragment key={index}>
            <Codings {...Coding} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}