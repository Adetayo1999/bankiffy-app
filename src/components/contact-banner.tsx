"use client";

import avatar1 from "@/images/avatar1.png";
import avatar2 from "@/images/avatar2.png";
import avatar3 from "@/images/avatar3.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

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

export const ContactBanner = () => {
  const avatars = [avatar1, avatar2, avatar3, avatar1];

  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-x-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="bg-[#0147FF] text-white rounded-2xl md:rounded-[3.125rem] px-6 md:px-12 py-8 md:py-14"
        variants={cardVariants}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 25px 60px rgba(1, 71, 255, 0.35)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <motion.h2
            className="text-xl md:text-2xl lg:text-[2.5rem] font-bold mb-4 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Partner with us
          </motion.h2>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-x-8 lg:gap-x-14 mb-10 md:mb-32">
            <motion.div
              className="w-12 h-12 md:w-18.5 md:h-18.5 flex justify-center items-center bg-[#D9D9D9] rounded-full shrink-0"
              whileHover={{ scale: 1.1, rotate: 45 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 md:w-[23px] md:h-[23px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.62556 1.52081C6.62556 0.680891 7.32474 0 8.18722 0H21.4383C22.3008 0 23 0.680891 23 1.52081V14.4253C23 15.2652 22.3008 15.9461 21.4383 15.9461C20.5759 15.9461 19.8767 15.2652 19.8767 14.4253V5.19238L2.66592 21.953C2.05605 22.5469 1.06727 22.5469 0.4574 21.953C-0.152467 21.359 -0.152467 20.3961 0.4574 19.8022L17.6682 3.04162H8.18722C7.32474 3.04162 6.62556 2.36073 6.62556 1.52081Z"
                  fill="#0147FF"
                />
              </svg>
            </motion.div>
            <motion.p
              className="text-sm md:text-base lg:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Hear from global AI leaders, researchers, and entrepreneurs who
              are defining the future of artificial intelligence.
            </motion.p>
          </div>
        </div>
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="flex">
            {avatars.map((item, idx) => (
              <motion.div
                key={idx}
                className={`w-12 h-12 md:w-18.5 md:h-18.5 rounded-full border bg-green-200 overflow-hidden ${
                  idx !== 0 && "-ml-4 md:-ml-8"
                }`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + idx * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.1, zIndex: 10 }}
              >
                <Image
                  src={item}
                  alt="Test IMG"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
          <motion.button
            className="text-white border flex items-center gap-x-3 md:gap-x-4 rounded-full py-3 md:py-4 px-8 md:px-12 border-white"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-base md:text-xl font-bold">And more</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 md:w-[17px] md:h-[17px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.89715 1.15427C4.89715 0.516784 5.41394 0 6.05142 0H15.8457C16.4832 0 17 0.516784 17 1.15427V10.9486C17 11.5861 16.4832 12.1028 15.8457 12.1028C15.2082 12.1028 14.6915 11.5861 14.6915 10.9486V3.94092L1.97046 16.6619C1.51969 17.1127 0.788848 17.1127 0.338078 16.6619C-0.112693 16.2112 -0.112693 15.4803 0.338078 15.0295L13.0591 2.30854H6.05142C5.41394 2.30854 4.89715 1.79176 4.89715 1.15427Z"
                  fill="white"
                />
              </svg>
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col gap-y-4 md:gap-y-5"
        variants={containerVariants}
      >
        <motion.div
          className="bg-[#0147FF] text-white rounded-2xl md:rounded-[3.125rem] px-6 md:px-12 py-8 md:py-14 flex-1"
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 25px 60px rgba(1, 71, 255, 0.35)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.h2
            className="text-xl md:text-2xl lg:text-[2.5rem] font-bold mb-4 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Volunteer
          </motion.h2>
          <p className="text-sm md:text-base lg:text-xl">
            Explore advanced machine learning, natural language processing,
            AI-driven automation, and emerging cybersecurity applications.
          </p>
        </motion.div>
        <motion.div
          className="bg-[#DEDEE0] text-[#1C1A1A] rounded-2xl md:rounded-[3.125rem] px-6 md:px-12 py-8 md:py-14 flex-1"
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.15)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.h2
            className="text-xl md:text-2xl lg:text-[2.5rem] font-bold mb-4 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Become a mentor
          </motion.h2>
          <p className="text-sm md:text-base lg:text-xl">
            Enjoy exclusive networking sessions, roundtables, and social events
            to foster collaboration and spark new partnerships.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
