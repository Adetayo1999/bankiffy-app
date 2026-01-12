"use client";

import Link from "next/link";
import Image from "next/image";
import directionImage from "@/images/direction.png";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SupportedCountriesMap from "./supported-countries-map";

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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const formItemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const socialIconVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.2, transition: { duration: 0.2 } },
};

export const GetInTouch = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialIcons = [
    {
      href: "https://www.tiktok.com/@bankiffyaccelerat?_r=1&_t=ZS-930UZTfC3qD",
      icon: (
        <svg
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 md:w-[23px] md:h-[22px]"
        >
          <path
            d="M22.4359 10.9908C22.4359 4.92041 17.414 0 11.2179 0C5.0219 0 0 4.92041 0 10.9908C0 16.4778 4.10128 21.0246 9.46496 21.849V14.1684H6.61709V10.9901H9.46496V8.5692C9.46496 5.81476 11.1394 4.29261 13.7024 4.29261C14.9288 4.29261 16.2137 4.50746 16.2137 4.50746V7.21237H14.798C13.4047 7.21237 12.9709 8.06011 12.9709 8.92971V10.9908H16.0821L15.5847 14.1677H12.9709V21.849C18.3346 21.0246 22.4359 16.4778 22.4359 10.9908Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      href: "https://www.linkedin.com/in/bankiffy-accelerator-4946b03a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: (
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 md:w-[21px] md:h-[21px]"
        >
          <path
            d="M20.641 1.47802V18.6231C20.641 19.0151 20.4811 19.391 20.1965 19.6682C19.9119 19.9454 19.5258 20.1011 19.1233 20.1011H1.51772C1.1152 20.1011 0.729159 19.9454 0.444531 19.6682C0.159902 19.391 0 19.0151 0 18.6231L0 1.47802C0 1.08603 0.159902 0.710086 0.444531 0.432903C0.729159 0.15572 1.1152 0 1.51772 0L19.1233 0C19.5258 0 19.9119 0.15572 20.1965 0.432903C20.4811 0.710086 20.641 1.08603 20.641 1.47802ZM6.07089 7.68572H3.03544V17.1451H6.07089V7.68572ZM6.34408 4.43407C6.34568 4.21047 6.30204 3.98875 6.21565 3.78158C6.12926 3.5744 6.00181 3.38583 5.84058 3.22662C5.67935 3.06741 5.4875 2.94069 5.27598 2.85369C5.06446 2.76669 4.83741 2.72111 4.60781 2.71956H4.55317C4.08624 2.71956 3.63843 2.9002 3.30826 3.22173C2.9781 3.54326 2.79261 3.97936 2.79261 4.43407C2.79261 4.88879 2.9781 5.32488 3.30826 5.64641C3.63843 5.96794 4.08624 6.14858 4.55317 6.14858C4.78279 6.15408 5.01128 6.11547 5.22557 6.03494C5.43986 5.95442 5.63576 5.83357 5.80208 5.67929C5.96839 5.52501 6.10186 5.34033 6.19486 5.1358C6.28786 4.93127 6.33857 4.7109 6.34408 4.48728V4.43407ZM17.6056 11.3985C17.6056 8.5548 15.7479 7.44924 13.9023 7.44924C13.2981 7.41977 12.6964 7.54511 12.1574 7.81275C11.6184 8.08039 11.1609 8.48098 10.8305 8.97456H10.7455V7.68572H7.89216V17.1451H10.9276V12.1139C10.8837 11.5986 11.0504 11.0873 11.3914 10.691C11.7324 10.2947 12.2202 10.0454 12.7489 9.99735H12.8642C13.8295 9.99735 14.5459 10.5886 14.5459 12.0784V17.1451H17.5813L17.6056 11.3985Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      href: "https://www.instagram.com/bankiffyaccelerator?igsh=MW9vdzZ3eWpwMDFocg==",
      icon: (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 md:w-[21px] md:h-[20px]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.56949 6.1195C7.56432 5.19281 8.91361 4.6722 10.3205 4.6722C11.7274 4.6722 13.0767 5.19281 14.0715 6.1195C15.0664 7.04619 15.6253 8.30305 15.6253 9.61358C15.6253 10.9241 15.0664 12.181 14.0715 13.1077C13.0767 14.0344 11.7274 14.555 10.3205 14.555C8.91361 14.555 7.56432 14.0344 6.56949 13.1077C5.57466 12.181 5.01577 10.9241 5.01577 9.61358C5.01577 8.30305 5.57466 7.04619 6.56949 6.1195ZM9.0027 12.5771C9.4205 12.7383 9.86829 12.8213 10.3205 12.8213C11.2338 12.8213 12.1097 12.4834 12.7555 11.8818C13.4013 11.2802 13.7641 10.4643 13.7641 9.61358C13.7641 8.76284 13.4013 7.94694 12.7555 7.34538C12.1097 6.74381 11.2338 6.40585 10.3205 6.40585C9.86829 6.40585 9.4205 6.48882 9.0027 6.65003C8.5849 6.81123 8.20528 7.04751 7.88551 7.34538C7.56574 7.64324 7.31209 7.99686 7.13903 8.38604C6.96597 8.77522 6.8769 9.19234 6.8769 9.61358C6.8769 10.0348 6.96597 10.452 7.13903 10.8411C7.31209 11.2303 7.56574 11.5839 7.88551 11.8818C8.20528 12.1797 8.5849 12.4159 9.0027 12.5771Z"
            fill="white"
          />
          <path
            d="M16.8012 5.40841C17.0364 5.18936 17.1685 4.89226 17.1685 4.58248C17.1685 4.27269 17.0364 3.97559 16.8012 3.75654C16.5661 3.53749 16.2471 3.41443 15.9146 3.41443C15.582 3.41443 15.2631 3.53749 15.0279 3.75654C14.7927 3.97559 14.6606 4.27269 14.6606 4.58248C14.6606 4.89226 14.7927 5.18936 15.0279 5.40841C15.2631 5.62746 15.582 5.75053 15.9146 5.75053C16.2471 5.75053 16.5661 5.62746 16.8012 5.40841Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.06571 0.0576814C7.16656 0.0108954 7.51746 0 10.3205 0C13.1243 0 13.4745 0.0115362 14.5746 0.0576814C15.6734 0.104468 16.4248 0.267899 17.0811 0.504392C17.7695 0.745923 18.3931 1.12429 18.9086 1.61316C19.4335 2.0934 19.8398 2.67454 20.0989 3.31604C20.3541 3.92747 20.5289 4.6267 20.5791 5.65022C20.6293 6.67567 20.641 7.00253 20.641 9.61358C20.641 12.2246 20.6293 12.5515 20.5791 13.5769C20.5289 14.6005 20.3541 15.2997 20.0995 15.9111C19.8403 16.5523 19.4341 17.1332 18.9092 17.6134C18.3932 18.103 17.7692 18.4811 17.0811 18.7221C16.4248 18.9599 15.6741 19.1227 14.5753 19.1695C13.4745 19.2163 13.1236 19.2272 10.3205 19.2272C7.51746 19.2272 7.16656 19.2163 6.06571 19.1695C4.96692 19.1227 4.21627 18.9599 3.55989 18.7228C2.87152 18.4812 2.24791 18.1029 1.73247 17.614C1.20681 17.1333 0.800872 16.552 0.542171 15.9111C0.28691 15.2997 0.11215 14.6005 0.061923 13.5769C0.0116966 12.5515 0 12.2253 0 9.61358C0 7.00189 0.0123845 6.67567 0.061923 5.65086C0.11215 4.62734 0.287598 3.92747 0.541483 3.31604C0.800774 2.67482 1.20696 2.09392 1.73178 1.6138C2.24781 1.12415 2.87186 0.746014 3.55989 0.505033C4.21627 0.267258 4.96692 0.104468 6.06571 0.0576814ZM14.4914 1.78813C13.4029 1.74198 13.0761 1.73237 10.3205 1.73237C7.56494 1.73237 7.23812 1.74198 6.14965 1.78813C5.14374 1.83107 4.59744 1.98745 4.23347 2.11947C3.78516 2.27328 3.37958 2.51879 3.04662 2.83793C2.68609 3.1744 2.46179 3.49486 2.27533 3.94349C2.13291 4.28253 1.96571 4.79141 1.91962 5.72841C1.87008 6.74233 1.85976 7.04675 1.85976 9.61358C1.85976 12.1804 1.87008 12.4848 1.91962 13.4987C1.96571 14.4358 2.13359 14.9446 2.27533 15.2837C2.44055 15.7012 2.7041 16.079 3.04662 16.3892C3.37963 16.7083 3.78519 16.9538 4.23347 17.1077C4.59744 17.2404 5.14374 17.3961 6.14965 17.439C7.23812 17.4852 7.56425 17.4948 10.3205 17.4948C13.0768 17.4948 13.4029 17.4852 14.4914 17.439C15.4973 17.3961 16.0436 17.2397 16.4076 17.1077C16.8559 16.9539 17.2615 16.7084 17.5944 16.3892C17.937 16.079 18.2005 15.7013 18.3657 15.2837C18.5081 14.9446 18.6753 14.4358 18.7214 13.4987C18.7709 12.4848 18.7813 12.1804 18.7813 9.61358C18.7813 7.04675 18.7709 6.74233 18.7214 5.72841C18.6753 4.79141 18.5074 4.28253 18.3657 3.94349C18.1792 3.49486 17.9556 3.1744 17.5944 2.83793C17.2332 2.50209 16.8892 2.29316 16.4076 2.11947C16.0436 1.98681 15.4973 1.83107 14.4914 1.78813Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      href: "https://youtube.com/@bankiffyaccelerator?si=fp5yB9wD49pmQQEM",
      icon: (
        <svg
          width="23"
          height="15"
          viewBox="0 0 23 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-4 md:w-[23px] md:h-[15px]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.959 0.448984C20.9239 0.693884 21.6871 1.41499 21.9463 2.32656C22.4215 3.98645 22.4359 7.42867 22.4359 7.42867C22.4359 7.42867 22.4359 10.8845 21.9607 12.5308C21.7015 13.4424 20.9383 14.1635 19.9734 14.4084C18.231 14.8574 11.2179 14.8574 11.2179 14.8574C11.2179 14.8574 4.20493 14.8574 2.46248 14.4084C1.49765 14.1635 0.734424 13.4424 0.475215 12.5308C0 10.8709 0 7.42867 0 7.42867C0 7.42867 0 3.98645 0.460814 2.34017C0.720022 1.42859 1.48325 0.707495 2.44808 0.462595C4.19053 0.0136023 11.2035 0 11.2035 0C11.2035 0 18.2166 0 19.959 0.448984ZM14.7893 7.42868L8.97148 10.6124V4.24496L14.7893 7.42868Z"
            fill="white"
          />
        </svg>
      ),
    },
  ];

  return (
    <motion.div
      ref={ref}
      className="bg-[#1A1A1A] rounded-2xl md:rounded-[3.125rem] p-6 md:p-12 text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-x-20 mb-10 md:mb-22.5 ">
        <motion.div
          className="lg:col-span-12 flex flex-col md:flex-row justify-between md:gap-x-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="md:flex-[0.45]">
            <motion.h2
              className="text-2xl md:text-3xl lg:text-[3.125rem] font-bold leading-[100%] mb-4 md:mb-7"
              variants={itemVariants}
            >
              We&apos;re Here To <br /> Connect
            </motion.h2>
            <motion.p
              className="text-sm md:text-base lg:text-xl mb-10 md:mb-24"
              variants={itemVariants}
            >
              Have questions about the summit? Need help with registration or
              travel? Our team is ready to assist you.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-2 gap-6 md:gap-10 lg:gap-20 md:flex-[0.5] shrink-0"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h4 className="uppercase text-base md:text-lg lg:text-[1.625rem] font-bold mb-2 md:mb-5">
                Contact Us
              </h4>
              <div>
                <p className="text-sm md:text-base lg:text-xl">
                  +1(213) 905 7434
                </p>
                <p className="text-sm md:text-base lg:text-xl">
                  +234 818 1118 885
                </p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h4 className="uppercase text-base md:text-lg lg:text-[1.625rem] font-bold mb-2 md:mb-5">
                address
              </h4>
              <div>
                <p className="text-sm md:text-base lg:text-xl">Delaware, USA</p>
                <p className="text-sm md:text-base lg:text-xl">
                  Lagos, Nigeria
                </p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h4 className="uppercase text-base md:text-lg lg:text-[1.625rem] font-bold mb-2 md:mb-5">
                email
              </h4>
              <p className="text-sm md:text-base lg:text-xl break-all">
                f.inclusion@bankiffy.com
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h4 className="uppercase text-base md:text-lg lg:text-[1.625rem] font-bold mb-2 md:mb-5">
                Follow Us
              </h4>
              <div className="flex items-center gap-x-3 md:gap-x-5">
                {socialIcons.map((social, index) => (
                  <motion.div
                    key={index}
                    variants={socialIconVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <Link href={social.href} target="_blank">
                      {social.icon}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* 
        <motion.div
          className="bg-[#DEDEE0] text-[#1C1A1A] px-6 md:px-10 lg:px-15 py-8 md:py-12 lg:py-[4.688rem] rounded-2xl md:rounded-[3.125rem] lg:col-span-6"
          initial={{ opacity: 0, x: 50, scale: 0.98 }}
          animate={
            isInView
              ? { opacity: 1, x: 0, scale: 1 }
              : { opacity: 0, x: 50, scale: 0.98 }
          }
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ boxShadow: "0 25px 60px rgba(0, 0, 0, 0.2)" }}
        >
          <motion.h2
            className="text-[#1C1A1A] font-bold uppercase text-base md:text-lg lg:text-[1.625rem] mb-2 md:mb-4"
            variants={formItemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            get in touch
          </motion.h2>
          <motion.p
            className="text-sm md:text-base lg:text-xl mb-6 md:mb-11.5"
            variants={formItemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
          >
            Reach out with inquiries about tickets, partnerships, or event
            details.
          </motion.p>

          <form>
            <motion.div
              className="flex gap-y-4 md:gap-y-8 flex-col mb-6 md:mb-10"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {["Name", "Email", "Subject"].map((placeholder, index) => (
                <motion.input
                  key={placeholder}
                  type="text"
                  placeholder={placeholder}
                  className="border-b border-[#7E7E7E] text-base md:text-lg lg:text-xl pb-1.5 w-full text-[#7E7E7E] placeholder:text-[#7E7E7E] px-2 bg-transparent focus:border-[#0147FF] transition-colors duration-300 outline-none"
                  variants={formItemVariants}
                  whileFocus={{ scale: 1.01 }}
                  custom={index}
                />
              ))}

              <motion.textarea
                className="border-b border-[#7E7E7E] text-base md:text-lg lg:text-xl pb-1.5 w-full text-[#7E7E7E] placeholder:text-[#7E7E7E] px-2 bg-transparent focus:border-[#0147FF] transition-colors duration-300 outline-none resize-none"
                rows={3}
                placeholder="Message"
                variants={formItemVariants}
                whileFocus={{ scale: 1.01 }}
              />
            </motion.div>

            <motion.button
              className="bg-[linear-gradient(84.82deg,#0147FF_15.74%,rgba(1,71,255,0)_204.53%)] rounded-full font-medium text-base md:text-lg lg:text-xl text-white py-3 md:py-4 px-8 md:px-13"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 30px rgba(1, 71, 255, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Send message
            </motion.button>
          </form>
        </motion.div> */}
      </div>

      <motion.div
        className="h-80 sm:h-96 md:h-[420px] lg:h-[500px] xl:h-[600px] w-full rounded-2xl md:rounded-[3.125rem] overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        whileHover={{ scale: 1.01 }}
      >
        {/* <Image
          src={directionImage}
          alt="direction"
          className="w-full h-full object-cover"
        /> */}

        <SupportedCountriesMap />
      </motion.div>
    </motion.div>
  );
};
