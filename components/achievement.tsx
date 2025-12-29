"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { achievements } from "@/lib/data";

type AchievementProps = (typeof achievements)[number];

export default function Achievement({
  title,
  description,
  imageUrl,
}: AchievementProps) {
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
      className="group relative h-[14rem] w-full sm:w-[22rem] overflow-hidden rounded-xl border border-black/5 bg-gray-100 transition hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20"
    >
      {/* Background Image - Blurred */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt="Achievement background"
          fill
          className="object-cover transition group-hover:scale-110 blur-[-2px] opacity-80 dark:opacity-40"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col justify-end p-4 bg-gradient-to-t from-black/80 via-black/20 to-transparent text-white">
        <h3 className="text-lg font-bold leading-tight">{title}</h3>
        <p className="text-sm mt-1 text-white/90 line-clamp-1">
          {description}
        </p>
      </div>
    </motion.div>
  );
}