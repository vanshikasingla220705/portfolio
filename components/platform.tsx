"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { coding } from "@/lib/data";
import { LuExternalLink } from "react-icons/lu"; // Import a profile/link icon

type codingprops = (typeof coding)[number];

export default function Codings({
  title,
  description,
  imageUrl,
  url, // Added url prop
}: codingprops) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      whileHover={{ scale: 1.05 }}   // 👈 ADD THIS
  transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group relative h-[14rem] w-full sm:w-[22rem] overflow-hidden rounded-xl border border-black/5 bg-gray-100 transition shadow-lg"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={`${title} background`}
          fill
          className="object-cover transition duration-500 group-hover:scale-110 group-hover:blur-sm opacity-90 dark:opacity-60"
        />
      </div>

      {/* Default Bottom Title (Visible when not hovered) */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-gradient-to-t from-black/80 to-transparent text-white transition duration-300 group-hover:opacity-0">
        <h3 className="text-xl font-bold tracking-wider">{title}</h3>
      </div>

      {/* Hover Overlay Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-6 text-center">
        {/* <h6 className="text-xl font-bold text-white mb-2"></h6> */}
        {/* <p className="text-white/80 text-sm mb-4 line-clamp-2">
           Active contributor showcasing projects and problem-solving skills.
        </p> */}
        
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-800 border-b border-transparent hover:border-white transition-all font-medium"
        >
          Visit Profile <LuExternalLink className="text-lg" />
        </a>
      </div>
    </motion.div>
  );
}