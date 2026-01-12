"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

export const UserImageCard: React.FC<{
  image: StaticImageData;
  index?: number;
}> = (props) => {
  return (
    <motion.div
      className="rounded-2xl md:rounded-[3.125rem] relative overflow-hidden h-64 md:h-80 lg:h-113 bg-[#DEDEE0]"
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
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.3 },
      }}
    >
      <Image
        src={props.image}
        alt="User Profile Image"
        className="w-full h-full object-cover grayscale"
      />

      {/* <div className="absolute top-0 left-0 w-full h-full bg-red-500" /> */}
    </motion.div>
  );
};
