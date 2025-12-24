"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export const EligibilityCriteria = () => {
  const ref = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      window.addEventListener("resize", checkScrollPosition);
      return () => {
        container.removeEventListener("scroll", checkScrollPosition);
        window.removeEventListener("resize", checkScrollPosition);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth =
        window.innerWidth < 768 ? 280 : window.innerWidth < 1024 ? 350 : 500;
      const gap = 24;
      const scrollAmount = cardWidth + gap;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const cards = [
    {
      title: "passion & commitment",
      number: "01",
      bg: "bg-[#DEDEE0]",
      textColor: "text-[#1C1A1A]",
      descColor: "text-[#3F3F3F]",
      numberGradient:
        "bg-[linear-gradient(181.83deg,#0147FF_-47.66%,rgba(1,71,255,0)_82.81%)]",
      content: (
        <p className="text-sm md:text-base lg:text-xl">
          Eligible applicants operate a registered business and commit full-time
          to a for-profit financial inclusion initiative.
          <br />
          <br />
          Teams are expected to demonstrate KPI-focused performance and a clear
          dedication to creating impact for underserved groups, including women,
          youth, and rural communities.
        </p>
      ),
    },
    {
      title: "passion & commitment",
      number: "02",
      bg: "bg-[#0147FF]",
      textColor: "text-white",
      descColor: "text-white",
      numberGradient:
        "bg-[linear-gradient(181.83deg,#FFFFFF_-47.66%,rgba(226,234,255,0)_82.81%)]",
      content: (
        <p className="text-sm md:text-base lg:text-xl text-white">
          Applicants must have a minimum educational qualification of a BSc
          degree. <br />
          <br /> For teams with two co-founders, this requirement applies to at
          least one team member.
        </p>
      ),
    },
    {
      title: "Countries",
      number: "03",
      bg: "bg-[#1A1A1A]",
      textColor: "text-white",
      descColor: "text-white",
      numberGradient:
        "bg-[linear-gradient(181.83deg,#FFFFFF_-47.66%,rgba(226,234,255,0)_82.81%)]",
      content: (
        <>
          <p className="text-sm md:text-base lg:text-xl text-white mb-4 md:mb-6">
            Eligible applicants must be nationals and current residents of the
            countries listed below.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {[
              "Nigeria",
              "Kenya",
              "Ghana",
              "Tanzania",
              "Uganda",
              "South Africa",
              "Ivory Coast",
              "Benin",
            ].map((item, idx) => (
              <motion.button
                key={idx}
                className="bg-[linear-gradient(84.77deg,#0147FF_1.59%,rgba(1,71,255,0)_121.45%)] rounded-full text-white font-medium text-xs md:text-sm lg:text-base py-2 md:py-2.5 px-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: 0.5 + idx * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </>
      ),
    },
    {
      title: "area of focus",
      number: "04",
      bg: "bg-[#0147FF]",
      textColor: "text-white",
      descColor: "text-white",
      numberGradient:
        "bg-[linear-gradient(181.83deg,#FFFFFF_-47.66%,rgba(226,234,255,0)_82.81%)]",
      content: (
        <p className="text-sm md:text-base lg:text-xl text-white">
          Each project submission should incorporate at least three of the
          following features, which represent essential financial services for
          promoting inclusion and expanding economic opportunities:
          <br />
          <br />
          (1)Savings accounts, (2) Banking or money transfers, (3) Remittances,
          (4) Bill payments, (5) Virtual cards, (6) Payment links, and (7) P2P
          transactions.
        </p>
      ),
    },
    {
      title: "Team commitment",
      number: "05",
      bg: "bg-[#DEDEE0]",
      textColor: "text-[#1C1A1A]",
      descColor: "text-[#3F3F3F]",
      numberGradient:
        "bg-[linear-gradient(181.83deg,#0147FF_-47.66%,rgba(1,71,255,0)_82.81%)]",
      hasButton: true,
      content: (
        <>
          <p className="text-sm md:text-base lg:text-xl text-[#3F3F3F] mb-4 md:mb-6">
            Every participating startup should have at least three full-time
            team members actively working on the project and willing to commit
            for the program&apos;s full duration.
          </p>
          <motion.button
            style={{
              backgroundImage:
                "linear-gradient(84.77deg, #0147FF 1.59%, rgba(1, 71, 255, 0) 121.45%)",
            }}
            className="rounded-full flex justify-center items-center gap-x-2 md:gap-x-4 w-full py-3 md:py-4 px-4 md:px-8"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(1, 71, 255, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-sm md:text-base lg:text-xl text-white font-medium">
              Download Eligibility Criteria
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
                className="w-3 h-3 md:w-4 md:h-4"
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
        </>
      ),
    },
  ];

  return (
    <div ref={ref}>
      <motion.div
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-23.5"
        variants={headerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-2xl md:text-3xl lg:text-[3.125rem] text-white font-bold"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
        >
          Eligibility Criteria
        </motion.h2>

        <motion.div
          className="flex items-center gap-x-3 md:gap-x-5"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.button
            onClick={() => scroll("left")}
            className={`border rounded-full h-12 w-12 md:h-18.5 md:w-18.5 flex justify-center items-center cursor-pointer transition-all duration-300 ${
              canScrollLeft
                ? "border-white text-white hover:bg-white hover:text-black"
                : "border-gray-600 text-gray-600 cursor-not-allowed"
            }`}
            whileHover={canScrollLeft ? { scale: 1.1 } : {}}
            whileTap={canScrollLeft ? { scale: 0.95 } : {}}
            disabled={!canScrollLeft}
          >
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 md:w-6 md:h-4"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.89611 0.329186C8.44534 -0.109794 7.71449 -0.109794 7.26372 0.329186L0.338103 7.07365C-0.112667 7.51263 -0.112667 8.22436 0.338103 8.66334L7.26372 15.4078C7.71449 15.8468 8.44534 15.8468 8.89611 15.4078C9.34688 14.9688 9.34688 14.2571 8.89611 13.8181L3.94095 8.99258H21.9312C22.5686 8.99258 23.0854 8.48931 23.0854 7.8685C23.0854 7.24769 22.5686 6.74442 21.9312 6.74442L3.94095 6.74442L8.89611 1.91887C9.34688 1.47989 9.34688 0.768166 8.89611 0.329186Z"
                fill="currentColor"
              />
            </svg>
          </motion.button>
          <motion.button
            onClick={() => scroll("right")}
            className={`border rounded-full h-12 w-12 md:h-18.5 md:w-18.5 flex justify-center items-center cursor-pointer transition-all duration-300 ${
              canScrollRight
                ? "border-white text-white hover:bg-white hover:text-black"
                : "border-gray-600 text-gray-600 cursor-not-allowed"
            }`}
            whileHover={canScrollRight ? { scale: 1.1 } : {}}
            whileTap={canScrollRight ? { scale: 0.95 } : {}}
            disabled={!canScrollRight}
          >
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 md:w-6 md:h-4"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.1893 0.329186C14.6401 -0.109794 15.371 -0.109794 15.8217 0.329186L22.7473 7.07365C23.1981 7.51263 23.1981 8.22436 22.7473 8.66334L15.8217 15.4078C15.371 15.8468 14.6401 15.8468 14.1893 15.4078C13.7386 14.9688 13.7386 14.2571 14.1893 13.8181L19.1445 8.99258H1.1543C0.516809 8.99258 2.48596e-05 8.48931 2.59912e-05 7.8685C2.57136e-05 7.24769 0.51681 6.74442 1.1543 6.74442L19.1445 6.74442L14.1893 1.91887C13.7386 1.47989 13.7386 0.768166 14.1893 0.329186Z"
                fill="currentColor"
              />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>

      <div
        ref={scrollContainerRef}
        className="flex gap-4 md:gap-x-6 overflow-x-auto scrollbar-hide"
        onScroll={checkScrollPosition}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`${card.bg} rounded-2xl md:rounded-[3.125rem] shrink-0 w-72 sm:w-80 md:w-96 lg:w-125 min-h-[20rem] md:min-h-[24rem] lg:min-h-[27.688rem] px-6 md:px-10 lg:px-14 py-6 md:py-8 lg:py-10`}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{
              y: -10,
              boxShadow: card.bg.includes("0147FF")
                ? "0 25px 60px rgba(1, 71, 255, 0.35)"
                : "0 25px 60px rgba(0, 0, 0, 0.15)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="flex justify-between items-center gap-x-4 md:gap-x-8 mb-4 md:mb-6">
              <h2
                className={`${card.textColor} uppercase text-lg md:text-xl lg:text-3xl font-bold`}
              >
                {card.title}
              </h2>
              <motion.h1
                className={`shrink-0 ${card.numberGradient} bg-clip-text text-transparent text-5xl md:text-6xl lg:text-[7.869rem] leading-[100%]`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.5 }
                }
                transition={{
                  delay: 0.3 + index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                {card.number}
              </motion.h1>
            </div>
            <div className={card.descColor}>{card.content}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
