"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
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

export const EventProgramComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref}>
      <motion.div
        className="text-white flex flex-col md:flex-row justify-between gap-6 mb-10 md:mb-27.5"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[6.25rem] leading-[100%]"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Event
          <br /> Program
        </motion.h1>

        <motion.p
          className="md:w-64 lg:w-100 text-sm md:text-base lg:text-xl"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our program hosts three cohorts annually, with applications accepted
          throughout the year and swift decision-making to ensure rapid
          onboarding.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <WhyAttendCard
          idx={1}
          description="Application opens. Submit your application for review. Early submission is advised."
          title="Jan 15-30th"
        />
        <WhyAttendCard
          idx={2}
          description="You can expect to hear from us within 1–2 weeks after submitting your application."
          title="Stage 1  →  EVALUATION"
        />
        <WhyAttendCard
          idx={3}
          description="Shortlisted candidates will participate in an online interview as part of the final selection process for the program."
          title="Stage 2  →  Live interview"
        />
        <WhyAttendCard
          idx={4}
          description="4 weeks immersion training and onboarding, setting up and readiness"
          title="stage 3  → Program starts"
        />
      </motion.div>
    </div>
  );
};

const WhyAttendCard: React.FC<{
  idx: number;
  title: string;
  description: string;
}> = (props) => {
  return (
    <motion.div
      className="bg-[#1C1A1A] h-auto md:h-[18.063rem] text-white rounded-2xl md:rounded-[3.125rem] relative overflow-hidden p-8 md:p-12.5"
      variants={cardVariants}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 50px rgba(1, 71, 255, 0.2)",
        transition: { duration: 0.3 },
      }}
    >
      <motion.h1
        className={clsx(
          "text-lg md:text-xl font-bold uppercase mb-5 md:mb-10",
          props.idx % 2 === 0 && "md:text-end"
        )}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 + props.idx * 0.1, duration: 0.4 }}
      >
        {props.title}
      </motion.h1>
      <div className={clsx("flex", props.idx % 2 !== 0 && "md:justify-end")}>
        <motion.p
          className={clsx("w-full md:w-60 text-base md:text-xl")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 + props.idx * 0.1, duration: 0.4 }}
        >
          {props.description}
        </motion.p>
      </div>
      <motion.div
        className={clsx(
          "absolute right-0 -bottom-16",
          props.idx % 2 === 0 ? "right-0" : "left-0"
        )}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.4 + props.idx * 0.1,
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <motion.p
          className="bg-[linear-gradient(184.55deg,#0147FF_35.34%,rgba(1,71,255,0)_79.91%)] text-transparent bg-clip-text leading-[100%] text-[10rem] md:text-[18.75rem]"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
            delay: props.idx * 0.2,
          }}
        >
          0{props.idx}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};
