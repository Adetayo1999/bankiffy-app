"use client";

import Image from "next/image";
import bannerImg from "@/images/banner-img.png";
import { motion } from "framer-motion";

import nitaImg from "@/images/nita-logo.svg";
import itexImg from "@/images/itex.svg";
import nuMoniImg from "@/images/numoni.svg";
import fuspayImg from "@/images/fuspay.svg";

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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export const HeroSection = () => {
  const logos = [nitaImg, itexImg, nuMoniImg, fuspayImg];

  return (
    <div className="">
      <div className="bg-[#1A1A1A] flex flex-col lg:flex-row justify-between gap-6 lg:gap-x-20 rounded-2xl md:rounded-[3.125rem] py-8 md:py-12.5 px-5 md:px-11 mb-6 md:mb-10 overflow-hidden">
        <motion.div
          className="flex-1 lg:flex-[0.6] text-white"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-x-6 lg:gap-x-10 mb-6 md:mb-11"
            variants={itemVariants}
          >
            <p className="font-bold text-base md:text-lg lg:text-[1.375rem]">
              Welcome to
            </p>
            <motion.button
              className="bg-[linear-gradient(84.77deg,#0147FF_1.59%,rgba(1,71,255,0)_121.45%)] font-medium rounded-full px-6 md:px-12 py-2.5 md:py-3.5 text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Bankiffy 2026 → Cohort 01
            </motion.button>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5.063rem] leading-tight lg:leading-22.5 font-bold mb-4 md:mb-[2.063rem]"
            variants={itemVariants}
          >
            Fintech <br className="hidden md:inline" /> Accelerator{" "}
            <br className="hidden md:inline" /> for Africa
          </motion.h1>

          <motion.p
            className="text-sm md:text-base lg:text-lg xl:text-[1.375rem] mb-6 md:mb-[2.438rem]"
            variants={itemVariants}
          >
            Bankiffy Accelerator empowers bold entrepreneurs with the tools,
            training, and support to launch fintech solutions that drive
            meaningful change in their communities.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-x-6 lg:gap-x-10 mb-6 md:mb-13.5"
            variants={itemVariants}
          >
            <motion.button
              style={{
                backgroundImage:
                  "linear-gradient(84.77deg, #0147FF 1.59%, rgba(1, 71, 255, 0) 121.45%)",
              }}
              className="rounded-full flex justify-center items-center gap-x-3 md:gap-x-4 py-3 md:py-4 px-8 md:px-12"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 40px rgba(1, 71, 255, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="text-base md:text-lg lg:text-[1.4rem] font-medium">
                APPLY NOW
              </span>
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

            <motion.button
              className="text-base md:text-lg lg:text-[1.4rem] font-bold"
              whileHover={{ scale: 1.05 }}
            >
              Equity Free
            </motion.button>
          </motion.div>

          <motion.p
            className="text-sm md:text-base lg:text-lg xl:text-[1.375rem] font-bold"
            variants={itemVariants}
          >
            Opens → Feb 15th- March 10th, 2026
          </motion.p>
        </motion.div>

        <motion.div
          className="w-full lg:flex-[0.4] rounded-xl md:rounded-[1.375rem] h-64 sm:h-80 md:h-96 lg:h-175 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <Image
            src={bannerImg}
            alt="Banner Image"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p className="mb-4 md:mb-8 text-[#979797] text-sm md:text-base lg:text-[1.375rem]">
          POWERED BY
        </p>

        <motion.div
          className="grid grid-cols-4 sm:grid-cols-4 gap-4 md:gap-x-5"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.9 },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              variants={logoVariants}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              // className={index >= 3 ? "hidden sm:block" : ""}
            >
              <Image
                src={logo}
                alt={`Partner logo ${index + 1}`}
                className="h-6 md:h-8 lg:h-auto w-auto"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
