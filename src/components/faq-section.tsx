"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type FaqItem = {
  question: string;
  paragraphs: string[];
  bullets?: string[];
};

const faqItems: FaqItem[] = [
  {
    question: "What is the Bankiffy Accelerator Program?",
    paragraphs: [
      "The Bankiffy Accelerator Program is a selection-based fintech acceleration initiative designed to help founders launch and scale digital financial products faster by removing infrastructure, compliance, and licensing barriers.",
      "The program provides a pre-built, enterprise-grade platform, regulatory support, and structured execution guidance so founders can focus on traction, users, and revenue.",
    ],
  },
  {
    question: "Who is the program designed for?",
    paragraphs: [
      "The program is built for serious fintech founders who meet the following criteria:",
    ],
    bullets: [
      "A clear, validated use case in financial services",
      "Operation or intent to operate in underserved or emerging markets",
      "Full-time commitment to execution",
      "A minimum of three full-time team members",
      "Readiness to launch, acquire users, and hit measurable KPIs",
    ],
  },
  {
    question: "How many startups are accepted?",
    paragraphs: [
      "Capacity is limited to 100 selected startups per eligible country. Applications are reviewed on a rolling basis, and once slots are filled, remaining applicants may be placed on a waitlist for future cohorts.",
    ],
  },
  {
    question: "What does Bankiffy provide to selected founders?",
    paragraphs: [
      "Selected teams receive access to infrastructure, regulatory support, execution guidance, and performance-based grants.",
    ],
  },
  {
    question: "Does Bankiffy take equity?",
    paragraphs: [
      "No. Bankiffy does not take equity from participating startups. Support and grants are performance-based and tied to real execution milestones rather than ownership.",
    ],
  },
  {
    question: "Is there an upfront cost to join the program?",
    paragraphs: [
      "There is no upfront program fee to participate. Selection is competitive, and continued support is tied to execution quality and KPI performance during the program.",
    ],
  },
  {
    question: "What kind of fintech solutions are eligible?",
    paragraphs: [
      "Eligible solutions include digital banking, payments, lending, savings, investment, and embedded finance solutions that comply with applicable regulations.",
    ],
    bullets: [
      "Digital banking and wallet solutions",
      "Payments and collections platforms",
      "Lending and credit products",
      "Savings, investment, and wealth tools",
      "Embedded finance solutions for businesses or communities",
    ],
  },
  {
    question: "What are the selection criteria?",
    paragraphs: [
      "Applications are evaluated based on use case clarity, team strength, market relevance, execution readiness, and the ability to launch and acquire users quickly.",
    ],
  },
  {
    question: "What is expected from founders during the program?",
    paragraphs: [
      "Founders are expected to commit full-time, execute against KPIs, launch within agreed timelines, acquire users, and participate in structured reviews.",
    ],
  },
  {
    question: "How long does the accelerator run?",
    paragraphs: [
      "The accelerator follows a structured execution timeline aligned with launch, user acquisition, and traction milestones. Specific timelines are communicated after acceptance.",
    ],
  },
  {
    question: "What happens if a startup does not meet performance KPIs?",
    paragraphs: [
      "Support and grant access are performance-based. Teams that fail to meet agreed milestones may have support reduced or discontinued.",
    ],
  },
  {
    question: "Can I apply if my startup is already live?",
    paragraphs: [
      "Yes. Existing fintech startups may apply if they are in early growth stages and can benefit from Bankiffy's infrastructure and regulatory support.",
    ],
  },
  {
    question: "Which countries are eligible?",
    paragraphs: [
      "Eligibility is limited to selected countries where Bankiffy can provide effective infrastructure, compliance, and operational support.",
    ],
  },
  {
    question: "How does the application process work?",
    paragraphs: [
      "Founders submit an application online, shortlisted teams are evaluated further, and final selections are made until country capacity is filled.",
    ],
  },
  {
    question: "When should founders apply?",
    paragraphs: [
      "Founders are encouraged to apply as early as possible due to strict capacity limits per country.",
    ],
  },
  {
    question: "Where can I apply?",
    paragraphs: [
      "Applications are accepted exclusively through the official Bankiffy website during the open application window.",
    ],
  },
];

const supportLists = [
  {
    title: "Founder Requirements Include:",
    items: [
      "A clear, validated use case in financial services",
      "Operation or intent to operate in underserved or emerging markets",
      "Full-time commitment to execution",
      "A minimum of three full-time team members",
      "Readiness to launch, acquire users, and hit measurable KPIs",
    ],
  },
  {
    title: "Eligible Fintech Solution Categories:",
    items: [
      "Digital banking and wallet solutions",
      "Payments and collections platforms",
      "Lending and credit products",
      "Savings, investment, and wealth tools",
      "Embedded finance solutions for businesses or communities",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <motion.section
      className="text-white flex flex-col gap-y-5 md:gap-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="bg-[#1A1A1A] rounded-2xl md:rounded-[3.125rem] py-10 md:py-20 px-6 md:px-14 relative overflow-hidden"
        variants={itemVariants}
      >
        <div className="relative z-10 max-w-5xl">
          <p className="text-sm md:text-base lg:text-xl text-brand-muted font-bold uppercase mb-4">
            Bankiffy Accelerator Program
          </p>
          <h1 className="font-bold text-4xl sm:text-5xl md:text-4xl lg:text-6xl xl:text-[6.25rem] leading-[100%] mb-6 md:mb-8">
            Frequently Asked Questions
          </h1>
          <p className="text-sm md:text-base lg:text-[1.375rem] max-w-3xl text-white/80">
            Answers to common questions about eligibility, selection,
            infrastructure, support, and what founders should expect during the
            program.
          </p>
        </div>

        <motion.div
          className="absolute right-4 md:right-15 bottom-4 md:bottom-8 hidden sm:block"
          initial={{ opacity: 0, scale: 0.5, rotate: 20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <motion.svg
            width="280"
            height="280"
            viewBox="0 0 280 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ rotate: [0, 4, 0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
            className="w-32 md:w-48 lg:w-[280px]"
          >
            <path
              d="M139.999 0L165.139 106.033L256.243 46.297L196.507 137.401L280 139.999L196.507 142.598L256.243 233.702L165.139 173.966L139.999 280L114.86 173.966L23.756 233.702L83.492 142.598L0 139.999L83.492 137.401L23.756 46.297L114.86 106.033L139.999 0Z"
              fill="url(#faqPaint)"
            />
            <defs>
              <linearGradient
                id="faqPaint"
                x1="260"
                y1="72"
                x2="-18"
                y2="210"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="var(--brand-primary)" />
                <stop offset="1" stopColor="var(--brand-primary)" stopOpacity="0" />
              </linearGradient>
            </defs>
          </motion.svg>
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-[#DEDEE0] text-[#1C1A1A] rounded-2xl md:rounded-[3.125rem] px-4 md:px-8 lg:px-12 py-4 md:py-8"
        variants={containerVariants}
      >
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          const contentId = `faq-answer-${index}`;

          return (
            <motion.div
              key={item.question}
              className="border-b border-[#1C1A1A]/15 last:border-b-0"
              variants={itemVariants}
            >
              <button
                type="button"
                className="w-full py-5 md:py-7 flex items-center justify-between gap-4 text-left"
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span className="text-base md:text-xl lg:text-[1.625rem] font-bold">
                  {item.question}
                </span>
                <span className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-[#1C1A1A] text-white flex items-center justify-center shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <path
                      d="M9 3V15M3 9H15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={contentId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-5 md:pb-7 max-w-4xl text-sm md:text-base lg:text-xl text-[#1C1A1A]/75 space-y-4">
                      {item.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}

                      {item.bullets && (
                        <ul className="grid gap-2 md:gap-3">
                          {item.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-3">
                              <span className="mt-2 w-2 h-2 rounded-full bg-brand shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5"
        variants={containerVariants}
      >
        {supportLists.map((list, index) => (
          <motion.div
            key={list.title}
            className="bg-[#DEDEE0] text-[#1C1A1A] rounded-2xl md:rounded-[3.125rem] p-6 md:p-8 lg:p-12"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "var(--brand-hover-shadow)",
              transition: { duration: 0.3 },
            }}
          >
            <h2 className="text-xl md:text-2xl lg:text-[2.5rem] leading-tight font-bold mb-6 md:mb-8">
              {list.title}
            </h2>
            <ul className="grid gap-4 md:gap-5">
              {list.items.map((item) => (
                <li key={item} className="flex gap-3 md:gap-4">
                  <span className="mt-2.5 w-3 h-3 rounded-full bg-brand shrink-0" />
                  <span className="text-sm md:text-base lg:text-xl text-[#1C1A1A]/75">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div
              className={`mt-8 h-1 w-24 rounded-full ${
                index === 0 ? "bg-brand" : "bg-[#1C1A1A]"
              }`}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
