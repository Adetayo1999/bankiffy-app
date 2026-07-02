"use client";

import { motion } from "framer-motion";

export const ContactPageBanner = () => {
  return (
    <motion.section
      className="bg-[#1A1A1A] rounded-2xl md:rounded-[3.125rem] py-10 md:py-20 px-6 md:px-14 text-white relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="relative z-10 max-w-5xl">
        <motion.p
          className="text-sm md:text-base lg:text-xl text-brand-muted font-bold uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Contact Bankiffy
        </motion.p>
        <motion.h1
          className="mb-4 md:mb-8 font-bold text-4xl sm:text-5xl md:text-4xl lg:text-6xl xl:text-[6.25rem] leading-[100%]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Let&apos;s build financial inclusion together
        </motion.h1>
        <motion.p
          className="text-sm md:text-base lg:text-[1.375rem] max-w-full md:max-w-[70%] text-white/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Reach out to partner, mentor, volunteer, or ask questions about the
          Bankiffy Accelerator Program.
        </motion.p>
      </div>

      <motion.div
        className="absolute right-4 md:right-15 bottom-4 md:bottom-8 hidden sm:block"
        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <motion.svg
          width="360"
          height="360"
          viewBox="0 0 360 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ rotate: [0, 4, 0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          className="w-32 md:w-48 lg:w-[360px]"
        >
          <path
            d="M180 0L211.345 118.655L315.885 54.115L251.345 158.655L360 180L251.345 201.345L315.885 305.885L211.345 241.345L180 360L148.655 241.345L44.115 305.885L108.655 201.345L0 180L108.655 158.655L44.115 54.115L148.655 118.655L180 0Z"
            fill="url(#contactBannerPaint)"
          />
          <defs>
            <linearGradient
              id="contactBannerPaint"
              x1="340"
              y1="96"
              x2="-36"
              y2="256"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--brand-primary)" />
              <stop
                offset="1"
                stopColor="var(--brand-primary)"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>
    </motion.section>
  );
};
