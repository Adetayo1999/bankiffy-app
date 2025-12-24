"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { UsernameCardDetailed } from "./user-name-card";
import avatar1 from "@/images/avatar1.png";
import avatar2 from "@/images/avatar2.png";
import { UserImageCard } from "./user-image-card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export const ALumniNetwork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const alumniData = [
    { image: null, name: "Helen Howard" },
    { image: avatar1 },
    { image: null, name: "Helen Howard" },
    { image: avatar2 },
    { image: null, name: "Helen Howard" },
    { image: avatar1 },
    { image: null, name: "Helen Howard" },
    { image: avatar2 },
    { image: null, name: "Helen Howard" },
    { image: avatar1 },
    { image: null, name: "Helen Howard" },
    { image: avatar2 },
    { image: null, name: "Helen Howard" },
    { image: avatar1 },
    { image: null, name: "Helen Howard" },
    { image: avatar2 },
    { image: null, name: "Helen Howard" },
    { image: avatar1 },
    { image: null, name: "Helen Howard" },
    { image: avatar2 },
  ];

  return (
    <div ref={ref}>
      <motion.div
        className="mb-8 md:mb-14 flex flex-col md:flex-row justify-between gap-6 text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[6.25rem] font-bold leading-[100%]"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Alumni <br /> Network
        </motion.h1>

        <motion.div
          className="md:w-64 lg:w-[20rem]"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-sm md:text-base lg:text-[1.25rem] mb-5">
            Join alumni of action oriented founders that have joined the
            Bankiffy community to drive financial inclusion in their community.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {alumniData.map((item, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            {item.image ? (
              <UserImageCard image={item.image} index={idx} />
            ) : (
              <UsernameCardDetailed
                company="Gettycash"
                country="Nigeria"
                link=""
                name={item.name || "Helen Howard"}
                title="CEO"
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
