"use client";

import { UserImageCard } from "./user-image-card";
import { UserNameCard } from "./user-name-card";
import boardMember1 from "@/images/advisory-board/avis-charles.png";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const OurMentors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref}>
      <motion.div
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-x-10 text-white mb-10 md:mb-28"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[6.25rem] leading-[100%]"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          OUR <br /> MENTORS
        </motion.h1>
        <motion.p
          className="text-sm md:text-base lg:text-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Meet the industry leaders shaping <br className="hidden md:block" />{" "}
          the future of AI.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-x-4 gap-y-4 md:gap-y-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <UserNameCard
          name={
            <h1>
              Opeoluwa <br /> Oroboade
            </h1>
          }
          title={
            <p>
              VP Impact, Growth &
              <br /> Partnership
            </p>
          }
          index={0}
        />
        <UserImageCard image={boardMember1} index={1} />

        <UserNameCard
          name={<h1>Elon Park</h1>}
          title={<p>CTO, DeepMind</p>}
          index={2}
        />
        <UserImageCard image={boardMember1} index={3} />
        <UserImageCard image={boardMember1} index={4} />
        <UserNameCard
          name={
            <h1>
              Chima <br /> Emmanuel
            </h1>
          }
          title={<p>Program Manager</p>}
          index={5}
        />
        <UserImageCard image={boardMember1} index={6} />
        <UserNameCard
          name={
            <h1>
              Dr. Alan <br /> Foster
            </h1>
          }
          title={<p>Stanford AI Lab</p>}
          index={7}
        />
      </motion.div>
    </div>
  );
};
