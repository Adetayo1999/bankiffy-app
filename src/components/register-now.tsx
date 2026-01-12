"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect, useMemo, useCallback } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const numberVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = targetDate.getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

export const RegisterNow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Target date: January 15th, 2026
  const targetDate = useMemo(() => new Date("2026-01-15T00:00:00"), []);

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  const updateTime = useCallback(() => {
    setTimeLeft(calculateTimeLeft(targetDate));
  }, [targetDate]);

  useEffect(() => {
    // Use requestAnimationFrame to avoid synchronous setState warning
    const frameId = requestAnimationFrame(updateTime);

    const timer = setInterval(updateTime, 1000);

    return () => {
      cancelAnimationFrame(frameId);
      clearInterval(timer);
    };
  }, [updateTime]);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  const countdownItems = timeLeft
    ? [
        { value: formatNumber(timeLeft.days), label: "DAYS" },
        { value: formatNumber(timeLeft.hours), label: "HOURS" },
        { value: formatNumber(timeLeft.minutes), label: "MINUTES" },
        { value: formatNumber(timeLeft.seconds), label: "SECONDS" },
      ]
    : [
        { value: "--", label: "DAYS" },
        { value: "--", label: "HOURS" },
        { value: "--", label: "MINUTES" },
        { value: "--", label: "SECONDS" },
      ];

  return (
    <div className="text-white" ref={ref}>
      <motion.div
        className="mb-8 md:mb-14 flex flex-col md:flex-row justify-between gap-6"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[6.25rem] font-bold leading-[100%]"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          REGISTER <br /> NOW
        </motion.h1>

        <motion.div
          className="md:w-64 lg:w-[20rem]"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-sm md:text-base lg:text-[1.25rem] mb-4 md:mb-5">
            Secure your spot at the Next-Gen AI Summit 2052 and join the future
            of AI innovation.
          </p>

          <motion.button
            style={{
              backgroundImage:
                "linear-gradient(84.77deg, #0147FF 1.59%, rgba(1, 71, 255, 0) 121.45%)",
            }}
            className="rounded-full flex justify-center items-center gap-x-3 md:gap-x-4 w-full py-3 md:py-4 px-8 md:px-12"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 40px rgba(1, 71, 255, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
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
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-[#1C1A1A] rounded-2xl md:rounded-[3.125rem] min-h-64 md:h-auto lg:h-110.5 relative p-6 md:p-12 lg:p-[5.938rem] overflow-hidden"
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 50, scale: 0.98 }
        }
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="">
          <motion.p
            className="text-sm md:text-base lg:text-[1rem] text-[#B2ADAD] mb-3"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
            APPLICATION OPENS UNTIL
          </motion.p>
          <motion.p
            className="text-sm md:text-base lg:text-[1.5rem]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
            APPLICATION CLOSES ON 15TH FEBRUARY 2025
          </motion.p>

          <motion.div
            className="flex flex-wrap relative  z-100"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {countdownItems.map((item, index) => (
              <motion.span
                key={item.label}
                className="flex"
                variants={numberVariants}
              >
                <motion.span
                  className="flex flex-col justify-center items-center gap-y-2 md:gap-y-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.span
                    className="font-bold leading-[100%] tracking-[0%] text-4xl sm:text-5xl md:text-7xl lg:text-[10rem] tabular-nums"
                    animate={
                      timeLeft
                        ? {
                            textShadow: [
                              "0 0 20px rgba(1, 71, 255, 0)",
                              "0 0 40px rgba(1, 71, 255, 0.5)",
                              "0 0 20px rgba(1, 71, 255, 0)",
                            ],
                          }
                        : {}
                    }
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      delay: index * 0.3,
                      ease: "easeInOut",
                    }}
                  >
                    {item.value}
                  </motion.span>
                  <motion.span
                    className="text-xs md:text-sm lg:text-base"
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                    }
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {item.label}
                  </motion.span>
                </motion.span>
                {index < countdownItems.length - 1 && (
                  <motion.span
                    className="font-bold leading-[100%] tracking-[0%] text-4xl sm:text-5xl md:text-7xl lg:text-[10rem] mx-1 md:mx-3"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      ease: "easeInOut",
                    }}
                  >
                    :
                  </motion.span>
                )}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-0 right-0 hidden md:block"
          initial={{ opacity: 0, rotate: 45, scale: 0.5 }}
          animate={
            isInView
              ? { opacity: 1, rotate: 0, scale: 1 }
              : { opacity: 0, rotate: 45, scale: 0.5 }
          }
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <motion.svg
            width="364"
            height="321"
            viewBox="0 0 364 321"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
            className="w-48 md:w-64 lg:w-[364px]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M396.295 145L386.169 117.993L266.595 162.825L360.668 76.4645L341.164 55.218L244.653 143.816L298.874 24.5514L272.618 12.615L220.65 126.924L227.329 1.53405L198.528 0.000103439L191.461 132.678L144.817 8.26879L117.811 18.3941L164.455 142.803L71.904 47.4746L51.2104 67.5652L138.678 157.658L24.3693 105.69L12.4338 131.945L131.697 186.166L0.727547 182.856L-0.000119965 211.688L127.661 214.915L8.08679 259.746L18.2121 286.752L137.786 241.921L43.7135 328.281L63.2167 349.527L159.729 260.931L105.509 380.194L131.763 392.13L183.731 277.821L177.053 403.212L205.853 404.745L212.92 272.069L259.564 396.477L286.57 386.351L239.926 261.941L332.477 357.27L353.171 337.181L265.703 247.087L380.012 299.055L391.949 272.8L272.685 218.58L403.653 221.889L404.382 193.057L276.72 189.831L396.295 145Z"
              fill="url(#paint0_linear_1_22)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_22"
                x1="391.232"
                y1="131.496"
                x2="-71.1036"
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
    </div>
  );
};
