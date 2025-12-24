"use client";

import { motion } from "framer-motion";

export const UserNameCard: React.FC<{
  name: React.ReactNode;
  title: React.ReactNode;
  index?: number;
}> = (props) => {
  return (
    <motion.div
      className="bg-[#DEDEE0] rounded-2xl md:rounded-[3.125rem] flex flex-col justify-between px-6 md:px-10 py-8 md:py-12 h-64 md:h-80 lg:h-113"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: (props.index || 0) * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.3 },
      }}
    >
      <motion.div
        className="text-[#1C1A1A] text-xl md:text-2xl lg:text-[1.875rem] leading-[100%]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 + (props.index || 0) * 0.1 }}
      >
        {props.name}
      </motion.div>
      <motion.div
        className="text-sm md:text-base lg:text-xl text-[#1C1A1A]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + (props.index || 0) * 0.1 }}
      >
        {props.title}
      </motion.div>
    </motion.div>
  );
};

export const UsernameCardDetailed: React.FC<{
  name: React.ReactNode;
  title: React.ReactNode;
  company: string;
  country: string;
  link: string;
  index?: number;
}> = (props) => {
  return (
    <motion.div
      className="bg-[#DEDEE0] flex flex-col justify-between text-[#1C1A1A] rounded-2xl md:rounded-[3.125rem] px-6 md:px-10 py-6 md:py-8 h-64 md:h-80 lg:h-113"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: (props.index || 0) * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.3 },
      }}
    >
      <div>
        <motion.div
          className="mb-2 md:mb-4"
          initial={{ opacity: 0, rotate: -20 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <svg
            width="81"
            height="81"
            viewBox="0 0 81 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 md:w-16 md:h-16 lg:w-[81px] lg:h-[81px]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M78.6062 28.7611L76.5978 23.4043L52.8799 32.2968L71.5396 15.1669L67.6708 10.9526L48.5277 28.5262L59.2825 4.86985L54.0746 2.50223L43.7667 25.1758L45.0913 0.30429L39.3786 2.61665e-05L37.9769 26.317L28.725 1.64014L23.3682 3.64853L32.6202 28.3254L14.2624 9.41672L10.1578 13.4017L27.5073 31.2718L4.83375 20.9639L2.46631 26.1717L26.1225 36.9265L0.144348 36.27L1.79592e-05 41.9889L25.322 42.6289L1.60408 51.5213L3.61246 56.8781L27.3303 47.9857L8.67073 65.1154L12.5392 69.3296L31.6826 51.7563L20.9279 75.4125L26.1355 77.78L36.4435 55.1065L35.1189 79.9781L40.8316 80.2822L42.2333 53.9656L51.4852 78.6422L56.842 76.6339L47.5899 51.9568L65.9478 70.8655L70.0524 66.8807L52.7028 49.0104L75.3764 59.3184L77.7441 54.1107L54.0878 43.356L80.0657 44.0123L80.2103 38.2935L54.8882 37.6535L78.6062 28.7611Z"
              fill="url(#paint0_linear_1_722)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_722"
                x1="77.602"
                y1="26.0827"
                x2="-14.1036"
                y2="53.8306"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0147FF" />
                <stop offset="1" stopColor="#0147FF" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        <motion.h2
          className="font-semibold mb-1 md:mb-2 text-xl md:text-2xl lg:text-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {props.company}
        </motion.h2>
        <motion.p
          className="text-sm md:text-base lg:text-xl mb-4 md:mb-7"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >
          {props.country}
        </motion.p>

        <motion.button
          className="bg-[linear-gradient(84.77deg,#0147FF_49.99%,rgba(1,71,255,0)_121.45%)] flex justify-center items-center text-white gap-x-3 md:gap-x-5 rounded-full px-6 md:px-8 py-2"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(1, 71, 255, 0.3)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-sm md:text-base">Visit</span>
          <motion.span
            animate={{ x: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-2 h-2 md:w-[10px] md:h-[10px]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.86646 0.675631C2.86646 0.30249 3.16895 0 3.54209 0H9.27501C9.64815 0 9.95064 0.30249 9.95064 0.675631V6.40855C9.95064 6.78169 9.64815 7.08418 9.27501 7.08418C8.90187 7.08418 8.59938 6.78169 8.59938 6.40855V2.30675L1.15337 9.75276C0.889524 10.0166 0.461738 10.0166 0.197888 9.75276C-0.0659626 9.48891 -0.0659626 9.06112 0.197888 8.79727L7.6439 1.35126H3.54209C3.16895 1.35126 2.86646 1.04877 2.86646 0.675631Z"
                fill="white"
              />
            </svg>
          </motion.span>
        </motion.button>
      </div>
      <div className="text-sm md:text-base lg:text-xl flex flex-col gap-y-1">
        <p>{props.name}</p>
        {props.title}
      </div>
    </motion.div>
  );
};
