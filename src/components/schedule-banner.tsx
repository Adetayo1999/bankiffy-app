"use client";

import { motion } from "framer-motion";

export const ScheduleBanner = () => {
  return (
    <div className="">
      <motion.div
        className="bg-[#1A1A1A] mb-12 md:mb-36 rounded-2xl md:rounded-[3.125rem] py-10 md:py-20 px-6 md:px-14 text-white relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-x-8 mb-10 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.p
            className="text-sm md:text-base lg:text-[1.375rem] font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            OCTOBER 15-17, 2052
          </motion.p>
          <motion.p
            className="text-sm md:text-base lg:text-[1.375rem] font-bold"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Horizon Convention Center, TechCity, Utopolis
          </motion.p>
        </motion.div>

        <div className="relative z-100">
          <motion.h1
            className="mb-4 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[5.875rem]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            OUR AGENDA
          </motion.h1>
          <motion.p
            className="text-sm md:text-base lg:text-[1.375rem] max-w-full md:max-w-[70%] mb-8 md:mb-[3.688rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Join the community of diverse founders across different regions in
            Africa, driving change in their region through financial inclusive
            program of Bankiffy.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
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

        <motion.div
          className="absolute right-4 md:right-36 bottom-4 md:bottom-8 z-50 hidden sm:block"
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <motion.svg
            width="438"
            height="443"
            viewBox="0 0 438 443"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ rotate: [0, 3, 0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
            className="w-32 md:w-48 lg:w-[438px]"
          >
            <path
              d="M1.0113 141.205L70.6265 268.736C74.1822 275.318 68.4617 283.02 61.3174 281.775L30.139 276.286C25.2746 275.569 20.6077 278.707 19.8916 283.575L12.6399 324.21C11.9238 329.079 15.0596 333.75 19.924 334.467L163.148 359.662C170.614 360.89 173.017 370.108 167.486 375.223L143.773 396.086C140.085 399.496 139.723 404.991 143.131 408.681L170.457 439.492C173.864 443.183 179.354 443.546 183.042 440.136L291.714 343.734C297.245 338.619 306.126 342.352 306.521 350.062L308.151 381.867C308.398 386.686 312.464 390.665 317.6 390.402L358.688 388.297C363.503 388.05 367.479 383.981 367.215 378.841L359.776 233.63C359.397 226.241 367.85 221.62 373.859 225.822L399.58 244.153C403.597 247.168 409.021 246.246 412.033 242.226L436.068 208.784C439.08 204.765 438.158 199.336 434.142 196.321L316.186 111.529C310.162 107.007 311.61 97.5912 318.911 95.6066L349.365 86.96C354.131 85.7495 356.773 80.7826 355.563 76.013L344.197 36.3319C342.987 31.5622 338.024 28.9175 333.258 30.128L193.358 69.8281C186.057 71.8127 179.901 64.7196 182.765 57.8086L195.104 28.5089C197.12 23.8961 194.931 18.8546 190.321 16.8359L152.164 0.752763C147.554 -1.26585 142.517 0.924893 140.5 5.53771L84.2826 139.516C81.4182 146.427 71.7882 146.92 68.2325 140.338L52.9646 112.452C50.4871 108.07 45.2523 106.405 40.8735 108.885L4.55887 128.783C0.196538 131.583 -1.14512 136.806 1.0113 141.205ZM134.886 172.355L165.274 99.6123C168.41 91.7211 179.711 92.4305 182.065 100.685L188.707 123.536C189.917 128.306 194.88 130.951 199.646 129.74L275.46 108.14C283.708 105.785 289.98 115.127 285.173 121.815L271.361 141.205C268.349 145.225 269.27 150.653 273.287 153.669L337.438 199.664C344.442 204.459 341.15 215.58 332.804 216.007L309.049 217.224C304.234 217.471 300.259 221.54 300.522 226.68L304.555 305.39C304.983 313.743 294.587 318.141 288.784 311.674L272.759 294.134C269.352 290.444 263.862 290.081 260.174 293.491L201.364 345.464C194.887 350.95 185.281 345.644 186.779 337.192L191.051 313.782C191.767 308.913 188.632 304.242 183.767 303.525L106.142 289.786C97.6975 288.286 95.8375 277.108 103.361 273.179L124.341 261.797C128.72 259.318 130.383 254.079 127.905 249.696L90.2414 180.44C86.3154 172.911 93.6079 164.484 101.509 167.945L123.543 177.123C127.815 178.837 132.869 176.968 134.886 172.355Z"
              fill="url(#paint0_linear_1_286)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_286"
                x1="425.675"
                y1="154.515"
                x2="-95.2036"
                y2="250.826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0147FF" />
                <stop offset="1" stopColor="#0147FF" stopOpacity="0" />
              </linearGradient>
            </defs>
          </motion.svg>
        </motion.div>
      </motion.div>
    </div>
  );
};
