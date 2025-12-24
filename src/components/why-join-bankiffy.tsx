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
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const iconVariants = {
  rest: { rotate: -45 },
  hover: {
    rotate: 0,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

export const WhyJoinBankiffy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-12 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div
        className="lg:col-span-5 text-white flex flex-col"
        variants={cardVariants}
      >
        <motion.h4
          className="text-lg md:text-xl lg:text-[1.813rem] mb-6 md:mb-10"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.5 }}
        >
          WHY JOIN BANKIFFY PROGRAM?
        </motion.h4>

        <motion.div
          className="bg-[#0147FF] rounded-2xl md:rounded-[3.125rem] px-6 md:px-12 py-8 md:py-14 flex-1"
          whileHover={{
            scale: 1.02,
            boxShadow: "0 25px 60px rgba(1, 71, 255, 0.35)",
          }}
          transition={{ duration: 0.3 }}
          initial="rest"
        >
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Technologies
            </h4>

            <motion.div
              className="bg-[#D9D9D9] flex justify-center items-center rounded-full w-12 h-12 md:w-18.5 md:h-18.5 cursor-pointer"
              whileHover="hover"
              initial="rest"
            >
              <motion.svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                variants={iconVariants}
                className="w-4 h-4 md:w-[23px] md:h-[23px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.62556 1.52081C6.62556 0.680891 7.32474 0 8.18722 0H21.4383C22.3008 0 23 0.680891 23 1.52081V14.4253C23 15.2652 22.3008 15.9461 21.4383 15.9461C20.5759 15.9461 19.8767 15.2652 19.8767 14.4253V5.19238L2.66592 21.953C2.05605 22.5469 1.06727 22.5469 0.4574 21.953C-0.152467 21.359 -0.152467 20.3961 0.4574 19.8022L17.6682 3.04162H8.18722C7.32474 3.04162 6.62556 2.36073 6.62556 1.52081Z"
                  fill="#0147FF"
                />
              </motion.svg>
            </motion.div>
          </div>

          <p className="text-sm md:text-base lg:text-[1.375rem]">
            Building on Bankiffy's commitment to financial inclusion, Fuspay
            offers selected startup founders an unparalleled opportunity: a
            fully featured digital banking suite—complete with white-label
            financial applications and robust administrative controls—valued at
            a $50,000 licensing fee and provided entirely at no cost.
            <br />
            <br />
            This initiative removes traditional barriers to entry for
            entrepreneurs in underserved African markets, enabling the rapid
            deployment of customized neo-banking solutions tailored to local
            needs.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="lg:col-span-7 flex flex-col gap-y-6"
        variants={containerVariants}
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">
            Hands on support
          </h2>
          <div className="flex flex-col gap-y-3 md:gap-y-4">
            <p className="text-sm md:text-base lg:text-[1.375rem]">
              Launching a startup requires more than an idea—it demands the
              ability to navigate complex technical, regulatory, and funding
              challenges.
            </p>
            <p className="text-sm md:text-base lg:text-[1.375rem]">
              Through this initiative, each selected startup receives year-round
              customer and technical support, full license coverage, regulatory
              and compliance assistance, and ongoing, team-specific training
              programs.
            </p>
            <p className="text-sm md:text-base lg:text-[1.375rem]">
              In addition, founders benefit from structured investment-readiness
              coaching, equipping them to successfully raise capital, scale
              sustainably, and deliver measurable impact within their
              communities.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-[#DEDEE0] text-[#000000] rounded-2xl md:rounded-[3.125rem] px-6 md:px-12 py-8 md:py-14"
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.15)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">
            $25,000 Grant
          </h2>
          <p className="text-sm md:text-base lg:text-[1.375rem]">
            The Performance Grant Program incentivizes fintech founders to
            deliver measurable community impact. Grants are evaluated monthly
            and disbursed at $1 per qualifying new user, defined as users who
            successfully sign up and complete a minimum of three transactions on
            the Fuspay platform.
            <br />
            Each startup is eligible to receive up to $25,000, ensuring rewards
            are directly tied to real adoption, sustained usage, and inclusive
            financial access.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
