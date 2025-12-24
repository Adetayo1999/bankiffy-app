"use client";

import { motion } from "framer-motion";

export const MeetThePeople = () => {
  return (
    <motion.div
      className="bg-[#1A1A1A] rounded-2xl md:rounded-[3.125rem] py-10 md:py-20 px-6 md:px-14 text-white relative overflow-hidden"
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
          MEET THE PEOPLE{" "}
        </motion.h1>
        <motion.p
          className="text-sm md:text-base lg:text-[1.375rem] max-w-full md:max-w-[70%] mb-8 md:mb-[3.688rem]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Join the community of diverse founders across different regions in
          Africa, driving change in their region through financial inclusive
          program of bankiffy.
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
          width="389"
          height="389"
          viewBox="0 0 389 389"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ rotate: [0, 5, 0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="w-32 md:w-48 lg:w-[389px]"
        >
          <path
            d="M230.943 117.053L230.95 116.886L231.079 116.948L230.943 117.053ZM369.071 109.99L366.256 104.56C355.305 83.421 340.536 64.4926 322.695 48.7297L319.438 45.8553L231.074 116.958C246.989 124.591 264.256 129.004 281.881 129.945C299.507 130.886 317.146 128.334 333.783 122.439L369.071 109.99ZM230.945 116.896L230.857 3.47554L226.576 2.74351C203.108 -1.25695 179.101 -0.880094 155.773 3.85867L149.778 5.07373L162.231 40.3536C168.082 57.0058 177.164 72.3407 188.957 85.4743C200.749 98.6079 215.02 109.284 230.95 116.886L230.945 116.896ZM278.207 369.082L283.628 366.262C304.771 355.318 323.704 340.55 339.466 322.706L342.341 319.449L271.176 231.212C263.573 247.114 259.18 264.36 258.251 281.963C257.321 299.565 259.872 317.178 265.757 333.793L278.207 369.082ZM384.719 230.867L385.45 226.586C389.453 203.115 389.071 179.108 384.325 155.777L383.119 149.787L347.831 162.236C331.203 168.077 315.89 177.142 302.769 188.909C289.648 200.678 278.976 214.919 271.366 230.815L384.719 230.867ZM271.176 231.212L271.366 230.815L270.869 230.808L271.176 231.212ZM122.436 54.4006L109.986 19.1122L104.556 21.9279C83.4183 32.8767 64.4896 47.6474 48.7272 65.4884L45.8535 68.7444L116.927 157.171C124.571 141.246 128.992 123.97 129.936 106.333C130.878 88.6942 128.328 71.0453 122.427 54.3965L122.436 54.4006ZM2.74276 161.609C-1.25736 185.077 -0.879509 209.083 3.85866 232.413L5.07409 238.407L40.3534 225.954C57.0177 220.099 72.3626 211.008 85.5037 199.204C98.6464 187.401 109.324 173.115 116.927 157.171L3.47544 157.326L2.74276 161.609ZM157.105 271.242L157.234 271.303L157.226 271.141L157.105 271.242ZM19.1084 278.209L21.9287 283.63C32.8726 304.774 47.6397 323.706 65.4845 339.47L68.7402 342.344L157.105 271.242C141.187 263.613 123.92 259.203 106.293 258.264C88.667 257.325 71.0287 259.875 54.3914 265.769L19.1084 278.209ZM157.234 271.303L157.321 384.724L161.604 385.456C185.073 389.459 209.081 389.077 232.412 384.331L238.402 383.125L225.952 347.837C220.099 331.185 211.016 315.852 199.224 302.718C187.431 289.585 173.162 278.909 157.234 271.303ZM157.216 271.136L157.377 271.03C191.19 248.085 230.337 234.222 271.055 230.777L270.944 230.626C247.996 196.813 234.133 157.665 230.69 116.945L230.544 117.046C196.734 139.999 157.585 153.862 116.866 157.3L116.962 157.456C139.915 191.263 153.779 230.409 157.221 271.126L157.216 271.136Z"
            fill="url(#paint0_linear_1_578)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_578"
              x1="12.0879"
              y1="258.309"
              x2="437.196"
              y2="147.123"
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
