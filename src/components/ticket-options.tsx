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
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const amountVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export const TicketOptions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tickets = [
    {
      amount1: "$25,000",
      title1: "performance grant",
      desc1:
        "Each startup is eligible for the Performance Grant, disbursed at $1 per new user completing up to two transactions, with a maximum award of $25,000.",
      title2: "Training",
      amount2: "$15,000",
      desc2:
        "Learn to launch, grow, and scale your fintech venture with guidance from highly successful founders.",
      isPrimary: true,
    },
    {
      amount1: "$50,000",
      title1: "White label solution",
      desc1:
        "All participating teams are provided with a fully funded, end-to-end white-label fintech solution valued at $50,000, enabling customization to achieve targeted financial inclusion outcomes. World-class technical support, operational assistance, banking license coverage, and hosting credits ensure your venture is ready to scale from day one.",
      isPrimary: false,
    },
    {
      amount1: "$15,000",
      title1: "Hosting, ongoing support",
      desc1: (
        <>
          Every team is provided with $15,000 in hosting credits for two years,
          backed by an expert tech, operations, and customer support team.
          <br /> <br />
          This support allows founders to focus on delivering measurable social
          impact while building a sustainable and profitable fintech venture.
        </>
      ),
      isPrimary: false,
    },
  ];

  return (
    <div className="text-white" ref={ref}>
      <motion.div
        className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-x-6 lg:gap-x-8 mb-8 md:mb-14.5"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-2xl md:text-3xl lg:text-[3.125rem] font-bold leading-tight lg:leading-[0%]"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
        >
          BENEFITS →
        </motion.h1>
        <motion.p
          className="text-base md:text-xl lg:text-[2.25rem] uppercase text-[#8092C1] font-bold"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Combined benefit of <span className="text-white">$100,000</span> per
          team
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {tickets.map((ticket, index) => (
          <motion.div
            key={index}
            className={`${
              ticket.isPrimary ? "bg-[#0147FF]" : "border border-white"
            } rounded-2xl md:rounded-[3.125rem] min-h-80 md:min-h-96 lg:min-h-123.5 p-6 md:p-10 lg:p-15 text-white flex flex-col ${
              ticket.isPrimary ? "justify-between" : ""
            } group`}
            variants={cardVariants}
            whileHover={{
              y: -15,
              scale: 1.02,
              boxShadow: ticket.isPrimary
                ? "0 30px 60px rgba(1, 71, 255, 0.4)"
                : "0 30px 60px rgba(255, 255, 255, 0.1)",
              transition: { duration: 0.3 },
            }}
          >
            <motion.h1
              className="font-bold text-3xl md:text-4xl lg:text-[3.75rem] leading-[100%] mb-4 md:mb-6"
              variants={amountVariants}
            >
              {ticket.amount1}
            </motion.h1>

            <motion.h2
              className="uppercase text-lg md:text-xl lg:text-[1.625rem] font-bold mb-2 md:mb-3.5"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              {ticket.title1}
            </motion.h2>
            <p className="text-sm md:text-base lg:text-xl">{ticket.desc1}</p>

            {ticket.title2 && (
              <>
                <motion.h4
                  className="uppercase text-lg md:text-xl lg:text-[1.625rem] font-bold my-2 md:my-3"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {ticket.title2}
                </motion.h4>

                <motion.h1
                  className="font-bold text-3xl md:text-4xl lg:text-[3.75rem] leading-[100%] mb-4 md:mb-6"
                  variants={amountVariants}
                >
                  {ticket.amount2}
                </motion.h1>

                <p className="text-sm md:text-base lg:text-xl">
                  {ticket.desc2}
                </p>
              </>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
