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
            className="text-white text-base md:text-lg lg:text-[1.813rem] flex-1 bg-[#20293F] rounded-2xl md:rounded-[3.125rem] py-8 md:py-12 px-6 md:px-8"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            Bankiffy solves the problem of limited access to financial services
            in underserved communities by removing the high cost, technical, and
            regulatory barriers that prevent local founders from launching
            fintech solutions. <br /> <br /> It equips entrepreneurs with
            ready-to-use technology, banking infrastructure, training, and
            performance-based funding—enabling them to deliver affordable
            financial services in their communities.
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
          className="bg-[#1A1A1A] text-white text-base md:text-lg lg:text-[1.5rem] p-6 md:p-9 rounded-2xl md:rounded-[3.125rem]"
          whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
        >
          <p>
            Bankiffy removes the traditional barriers to building fintech in
            Africa by providing founders with ready-to-use, enterprise-grade
            financial infrastructure. <br />
            <br /> Instead of spending years building core systems, founders
            launch functional digital financial products in minutes and focus
            immediately on customer acquisition, revenue growth, and real
            financial inclusion impact. <br />
            <br /> Capital support is performance-based. Founders access
            KPI-driven grants of up to $25,000, tied directly to verified user
            adoption and transaction activity—ensuring funding follows traction,
            not promises. <br />
            <br /> With zero upfront infrastructure costs and technology backed
            by <b>Fuspay’s</b> $10 million commitment to Africa’s financial
            ecosystem, Bankiffy reduces execution risk, accelerates
            time-to-market, and enables founders to build scalable, sustainable
            fintech businesses.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
