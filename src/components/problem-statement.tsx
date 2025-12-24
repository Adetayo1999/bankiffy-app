"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const ProblemStatement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-10"
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div
        className="flex flex-col gap-y-6 lg:gap-y-10"
        variants={staggerContainer}
      >
        <motion.div className="flex-1 flex flex-col" variants={cardVariants}>
          <motion.h3
            className="text-lg md:text-xl lg:text-[1.938rem] text-[#979797] mb-4 md:mb-7.5"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            PROBLEM WE ARE SOLVING
          </motion.h3>
          <motion.div
            className="text-white text-base md:text-lg lg:text-[1.813rem] flex-1 bg-[#20293F] rounded-2xl md:rounded-[3.125rem]"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <ul className="list-disc flex flex-col gap-y-4 md:gap-y-8 py-8 md:py-12 px-8 md:px-15">
              <li>
                Over 400 million Africans remain unbanked, limiting economic
                growth and entrepreneurship.
              </li>
              <li>
                Fintech startups face barriers: High upfront capital, lack of
                training, and monitoring.
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div className="shrink-0" variants={cardVariants}>
          <motion.h3
            className="text-lg md:text-xl lg:text-[1.938rem] text-[#979797] mb-4 md:mb-7.5"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            OUR SOLUTION
          </motion.h3>
          <motion.div
            className="py-8 md:py-12 px-6 md:px-8 text-white text-2xl md:text-3xl lg:text-[3.5rem] font-bold list-disc flex flex-col gap-y-4 md:gap-y-8 bg-[#0147FF] rounded-2xl md:rounded-[3.125rem]"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 60px rgba(1, 71, 255, 0.4)",
              transition: { duration: 0.3 },
            }}
          >
            <p className="leading-tight lg:leading-[100%]">
              $10m for financial inclusion for founders in Africa
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div variants={cardVariants}>
        <motion.h3
          className="text-lg md:text-xl lg:text-[1.938rem] text-[#979797] mb-4 md:mb-7.5"
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          OUR APPROACH
        </motion.h3>
        <motion.div
          className="bg-[#1A1A1A] text-white text-base md:text-lg lg:text-[1.813rem] p-6 md:p-9 rounded-2xl md:rounded-[3.125rem]"
          whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
        >
          <p>
            Bankiffy Financial Inclusion Program support founders with pre-built
            digital finance app to deliver financial services in their
            communities.
            <br />
            <br />
            Bankiffy reduces launch times from years to minutes, allowing
            founders to focus on user acquisition and impact—directly aligning
            with Bankiffy&apos;s KPI-driven $25,000 grants for signups and
            transactions.
            <br />
            <br /> Imagine launching your fintech venture with enterprise-grade
            tools at zero cost, backed by Fuspay&apos;s $10 million commitment
            to Africa&apos;s financial ecosystem. This isn&apos;t just
            support—it&apos;s a launchpad for sustainable success, driving
            community-level change and positioning your startup for exponential
            growth.{" "}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
