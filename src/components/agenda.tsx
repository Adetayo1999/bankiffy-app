"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const weekVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export const Agenda = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const weeks = [
    {
      week: "Week 1",
      classes: "2 Classes",
      title: "Business Model & Growth",
      description:
        "Learn to build scalable fintech ventures with practical tools like the Business Model Canvas, marketing strategies, and growth planning—empowering sustainable expansion and economic impact.",
    },
    {
      week: "Week 2",
      classes: "2 Classes",
      title: "Fintech Mastery",
      description:
        "Learn to build scalable fintech ventures with practical tools like Gain hands-on insights into running a fintech: niche selection, pricing, sales, user acquisition, and scaling",
    },
    {
      week: "Week 3",
      classes: "2 Classes",
      title: "Investment Readiness",
      description:
        "Prepare to attract funding with strategies for local investment, traction-building, non-equity funding, and effective investor pitching.",
    },
    {
      week: "Week 4",
      classes: "2 Classes",
      title: "Platform Setup & Workshop",
      description:
        "Get your white-label fintech live on Fuspay with guided setup, customization, user management, and operational training to start onboarding users and earning KPI-driven grants.",
      hasButton: true,
    },
  ];

  return (
    <div className="text-white" ref={ref}>
      <motion.div
        className="mb-8 md:mb-14 flex flex-col md:flex-row justify-between gap-6"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[6.25rem] font-bold leading-[100%]"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          AGENDA
        </motion.h1>

        <motion.div
          className="md:w-80 lg:w-120"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <p className="text-sm md:text-base lg:text-[1.25rem]">
            A 1-month intensive journey for each team—turning fintech ideas into
            fully operational, financially inclusive ventures.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-[#1C1A1A] px-6 md:px-12 lg:px-[6.438rem] py-8 md:py-12 lg:py-19 flex flex-col gap-y-8 md:gap-y-12 lg:gap-y-15 rounded-2xl md:rounded-[3.125em] relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <motion.div
          className="absolute left-0 -bottom-10 hidden md:block"
          initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
          animate={
            isInView
              ? { opacity: 1, rotate: 0, scale: 1 }
              : { opacity: 0, rotate: -20, scale: 0.8 }
          }
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <svg
            width="370"
            height="266"
            viewBox="0 0 370 266"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-48 md:w-64 lg:w-[370px]"
          >
            <path
              d="M211.85 117.054L211.857 116.886L211.986 116.948L211.85 117.054ZM349.978 109.99L347.163 104.56C336.212 83.4212 321.443 64.4928 303.602 48.7299L300.345 45.8555L211.981 116.958C227.896 124.591 245.162 129.004 262.788 129.945C280.414 130.886 298.052 128.335 314.69 122.439L349.978 109.99ZM211.852 116.896L211.764 3.47575L207.483 2.74373C184.015 -1.25674 160.008 -0.879881 136.68 3.85889L130.685 5.07394L143.138 40.3538C148.989 57.006 158.071 72.3409 169.863 85.4745C181.656 98.6081 195.927 109.284 211.857 116.886L211.852 116.896ZM259.114 369.082L264.534 366.263C285.678 355.318 304.611 340.55 320.373 322.707L323.248 319.449L252.083 231.212C244.48 247.114 240.087 264.361 239.158 281.963C238.228 299.565 240.779 317.178 246.664 333.794L259.114 369.082ZM365.626 230.867L366.357 226.586C370.36 203.115 369.978 179.108 365.232 155.777L364.026 149.787L328.738 162.236C312.11 168.078 296.797 177.143 283.676 188.91C270.555 200.678 259.883 214.919 252.273 230.815L365.626 230.867ZM252.083 231.212L252.273 230.815L251.776 230.809L252.083 231.212ZM103.343 54.4008L90.893 19.1124L85.4627 21.9281C64.3252 32.8769 45.3965 47.6476 29.634 65.4886L26.7604 68.7446L97.8341 157.171C105.477 141.247 109.899 123.97 110.842 106.334C111.785 88.6944 109.235 71.0455 103.334 54.3967L103.343 54.4008ZM-16.3504 161.609C-20.3505 185.077 -19.9726 209.083 -15.2345 232.413L-14.0191 238.408L21.2603 225.954C37.9246 220.099 53.2695 211.009 66.4105 199.204C79.5532 187.401 90.2311 173.116 97.8341 157.171L-15.6177 157.327L-16.3504 161.609ZM138.012 271.242L138.141 271.303L138.133 271.141L138.012 271.242ZM0.0152735 278.209L2.83553 283.63C13.7794 304.774 28.5465 323.707 46.3914 339.47L49.6471 342.344L138.012 271.242C122.093 263.613 104.826 259.203 87.2001 258.264C69.5739 257.325 51.9356 259.875 35.2983 265.77L0.0152735 278.209ZM138.141 271.303L138.228 384.724L142.511 385.456C165.98 389.459 189.988 389.077 213.319 384.331L219.309 383.125L206.859 347.837C201.006 331.185 191.923 315.852 180.13 302.719C168.338 289.585 154.069 278.909 138.141 271.303ZM138.123 271.136L138.284 271.03C172.097 248.085 211.244 234.223 251.962 230.777L251.851 230.626C228.902 196.813 215.039 157.665 211.597 116.945L211.451 117.046C177.641 139.999 138.492 153.862 97.7724 157.3L97.8686 157.456C120.822 191.263 134.686 230.409 138.128 271.126L138.123 271.136Z"
              fill="url(#paint0_linear_1_18)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_18"
                x1="-7.00528"
                y1="258.31"
                x2="418.103"
                y2="147.123"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0147FF" />
                <stop offset="1" stopColor="#0147FF" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <motion.div
          className="flex flex-col gap-y-8 md:gap-y-12 lg:gap-y-15"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {weeks.map((week, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row justify-between gap-4 md:gap-x-16 lg:gap-x-64"
              variants={weekVariants}
              whileHover={{ x: 10, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="shrink-0"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <h1 className="text-xl md:text-2xl lg:text-[2.5rem] font-bold mb-1 md:mb-2">
                  {week.week}
                </h1>
                <p className="text-sm md:text-base lg:text-[1.563rem]">
                  {week.classes}
                </p>
              </motion.div>
              <div className="flex-1">
                <motion.h2
                  className="text-xl md:text-2xl lg:text-[2.5rem] font-bold mb-3 md:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  {week.title}
                </motion.h2>
                <motion.p
                  className={`text-sm md:text-base lg:text-[1.563rem] ${
                    week.hasButton ? "mb-6 md:mb-10" : ""
                  }`}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                >
                  {week.description}
                </motion.p>

                {week.hasButton && (
                  <motion.button
                    style={{
                      backgroundImage:
                        "linear-gradient(84.77deg, #0147FF 1.59%, rgba(1, 71, 255, 0) 121.45%)",
                    }}
                    className="rounded-full flex justify-center items-center gap-x-3 md:gap-x-4 w-full py-3 md:py-4 px-6 md:px-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: 1.2, duration: 0.5 }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 40px rgba(1, 71, 255, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-base md:text-lg lg:text-[1.4rem] font-medium">
                      View detailed schedule
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
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
