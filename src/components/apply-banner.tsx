"use client";

import { motion } from "framer-motion";

export const ApplyBanner = () => {
  return (
    <motion.div
      className="bg-[#1A1A1A] rounded-2xl md:rounded-[3.125rem] py-10 md:py-20 px-6 md:px-14 text-white relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="relative z-100">
        <motion.h1
          className="mb-4 md:mb-8 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[5.875rem] leading-tight lg:leading-[100%]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Are you passionate <br /> about impacting your <br /> community?
        </motion.h1>
        <motion.p
          className="text-sm md:text-base lg:text-[1.375rem] max-w-full md:max-w-[70%] mb-8 md:mb-[3.688rem]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Join the community of diverse founders across different regions in
          Africa, driving change in their region through financial inclusive
          program of bankiffy.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.button
            style={{
              backgroundImage:
                "linear-gradient(84.77deg, #0147FF 1.59%, rgba(1, 71, 255, 0) 121.45%)",
            }}
            className="rounded-full flex justify-center items-center gap-x-3 md:gap-x-4 py-3 md:py-4 px-8 md:px-16"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 40px rgba(1, 71, 255, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-base md:text-[1.2rem] font-medium">
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
        </motion.div>
      </div>

      <motion.div
        className="absolute right-4 md:right-15 bottom-4 md:bottom-8 z-50 hidden sm:block"
        initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <motion.svg
          width="405"
          height="405"
          viewBox="0 0 405 405"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ rotate: [0, 5, 0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="w-32 md:w-48 lg:w-[405px]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M396.295 145L386.17 117.993L266.595 162.825L360.669 76.4644L341.164 55.2179L244.654 143.816L298.874 24.5513L272.618 12.615L220.651 126.924L227.329 1.53396L198.528 1.1886e-05L191.462 132.678L144.818 8.2687L117.811 18.394L164.455 142.803L71.9043 47.4745L51.2106 67.5651L138.679 157.657L24.3695 105.69L12.434 131.945L131.698 186.166L0.727791 182.856L0.000124175 211.688L127.661 214.915L8.08704 259.746L18.2124 286.752L137.787 241.921L43.7137 328.281L63.2169 349.527L159.729 260.931L105.509 380.194L131.763 392.13L183.731 277.82L177.053 403.212L205.854 404.744L212.92 272.069L259.564 396.477L286.57 386.351L239.926 261.941L332.478 357.27L353.171 337.18L265.703 247.087L380.012 299.055L391.949 272.8L272.685 218.58L403.653 221.889L404.382 193.057L276.72 189.831L396.295 145Z"
            fill="url(#paint0_linear_1_924)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_924"
              x1="391.232"
              y1="131.496"
              x2="-71.1034"
              y2="271.388"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0147FF" />
              <stop offset="1" stopColor="#0147FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>
    </motion.div>
  );
};
