"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { UserImageCard } from "./user-image-card";
import { UserNameCard } from "./user-name-card";
import boardMember1 from "@/images/advisory-board/board-member-1.png";
import boardMember2 from "@/images/advisory-board/board-member-2.png";
import boardMember3 from "@/images/advisory-board/board-member-3.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
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

export const AdvisoryBoard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref}>
      <motion.h1
        className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[6.25rem] leading-[100%] mb-10 md:mb-28"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        ADVISORY <br /> BOARD
      </motion.h1>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-x-4 gap-y-4 md:gap-y-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants}>
          <UserNameCard
            name={
              <h1>
                Charles <br /> Avis
              </h1>
            }
            title={
              <p>
                Founder, <br /> Director
              </p>
            }
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <UserImageCard image={boardMember1} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <UserNameCard
            name={
              <h1>
                Fredrick <br /> Igbinedion
              </h1>
            }
            title={
              <p>
                Chairman, <br /> Director
              </p>
            }
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <UserImageCard image={boardMember2} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <UserImageCard image={boardMember3} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <UserNameCard
            name={
              <h1>
                Francis <br /> Ekeng
              </h1>
            }
            title={
              <p>
                CEO, <br /> Director
              </p>
            }
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
