"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const WhatWeDo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref}>
      <motion.h2
        className="font-bold text-xl md:text-2xl lg:text-[2.5rem] mb-4 md:mb-8 text-center text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Why Africa, why now, & why it matters?
      </motion.h2>
      <motion.div
        className="w-full h-64 sm:h-80 md:h-96 lg:h-[46.563rem] bg-[#1A1A1A] overflow-hidden rounded-2xl md:rounded-[2.5rem]"
        initial={{ opacity: 0, scale: 0.98, y: 30 }}
        animate={
          isInView
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0.98, y: 30 }
        }
        transition={{
          duration: 0.7,
          delay: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
      />
    </div>
  );
};
