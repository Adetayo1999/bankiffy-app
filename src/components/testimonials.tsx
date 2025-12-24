"use client";

import Image, { StaticImageData } from "next/image";
import avatar1 from "@/images/avatar1.png";
import avatar2 from "@/images/avatar2.png";
import avatar3 from "@/images/avatar3.jpg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface TestimonialType {
  id: number;
  title: string;
  description: string;
  role: string;
  fullname: string;
  img: StaticImageData;
}

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
  hidden: { opacity: 0, y: 50, rotateY: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export const Testimonials = () => {
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
        window.innerWidth < 768 ? 280 : window.innerWidth < 1024 ? 400 : 500;
      const gap = 20;
      const scrollAmount = cardWidth + gap;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div ref={ref}>
      <motion.div
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-23.5"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-2xl md:text-3xl lg:text-[3.125rem] text-white font-bold"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
        >
          What Past Attendees Say
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

      <motion.div
        ref={scrollContainerRef}
        className="flex gap-4 md:gap-x-5 overflow-x-auto scrollbar-hide"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        onScroll={checkScrollPosition}
      >
        {testimonials.map((item, index) => (
          <TestimonialCard {...item} key={item.id} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

const TestimonialCard: React.FC<TestimonialType & { index: number }> = (
  props
) => {
  return (
    <motion.div
      className="bg-[#0147FF] h-72 md:h-80 lg:h-[27.688rem] w-72 sm:w-80 md:w-96 lg:w-125 shrink-0 rounded-2xl md:rounded-[3.125rem] px-6 md:px-10 lg:px-15 py-8 md:py-12 lg:py-17.5 flex flex-col justify-between text-white"
      variants={cardVariants}
      whileHover={{
        y: -10,
        scale: 1.02,
        boxShadow: "0 25px 60px rgba(1, 71, 255, 0.4)",
        transition: { duration: 0.3 },
      }}
    >
      <motion.h2
        className="uppercase text-lg md:text-xl lg:text-3xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 + props.index * 0.1 }}
      >
        {props.title}
      </motion.h2>
      <p className="text-sm md:text-base lg:text-xl line-clamp-3">
        &quot;{props.description}&quot;
      </p>

      <motion.div
        className="flex items-center gap-x-4 md:gap-x-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 + props.index * 0.1, duration: 0.4 }}
      >
        <motion.div
          className="w-10 h-10 md:w-12 md:h-12 lg:w-12.5 lg:h-12.5 rounded-full overflow-hidden border border-white"
          whileHover={{ scale: 1.1 }}
        >
          <Image
            src={props.img}
            alt={props.fullname}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="">
          <h4 className="text-sm md:text-base">{props.fullname}</h4>
          <p className="text-xs md:text-sm">{props.role}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const testimonials: TestimonialType[] = [
  {
    id: 1,
    title: "GAME-CHANGING INSIGHTS",
    description:
      "This summit opened my eyes to the future of AI and how it will shape industries.",
    fullname: "Mark Vandenberg",
    role: "CTO, NeuralTech",
    img: avatar1,
  },
  {
    id: 2,
    title: "THE BEST AI EVENT!",
    description:
      "Incredible speakers, top-tier networking, and cutting-edge discussions all in one place.",
    fullname: "Elena Rojas",
    role: "AI Researcher, DeepMind",
    img: avatar2,
  },
  {
    id: 3,
    title: "UNMATCHED OPPORTUNITIES",
    description:
      "From hands-on workshops to visionary talks, this summit is a must-attend for AI professionals.",
    fullname: "David Laurent",
    role: "CEO, FutureAI Labs",
    img: avatar3,
  },
  {
    id: 4,
    title: "INSPIRING CONNECTIONS",
    description:
      "Met incredible people and learned about cutting-edge AI developments that will shape the future.",
    fullname: "Sarah Chen",
    role: "VP Engineering, TechFlow",
    img: avatar1,
  },
  {
    id: 5,
    title: "TRANSFORMATIVE EXPERIENCE",
    description:
      "The workshops and networking opportunities exceeded all my expectations.",
    fullname: "James Wilson",
    role: "Founder, AIStartup",
    img: avatar2,
  },
];
