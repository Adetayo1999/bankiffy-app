"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import appLogo from "@/images/logo.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const AppHeader = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <div className="pt-4 md:pt-7.5">
      <header className="flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link href="/">
            <Image
              src={appLogo}
              alt="Bankiffy Logo"
              className="w-32 md:w-40 lg:w-auto"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center text-white font-medium text-base xl:text-[1.2rem] gap-x-6 xl:gap-x-10">
          {navLinks.map((item, index) => {
            const active = isActive(item.path);
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 + index * 0.08,
                  ease: "easeOut",
                }}
              >
                <Link
                  href={item.path}
                  className={`relative py-2 px-4 xl:px-5 rounded-full transition-all duration-300 ${
                    active ? "border border-white" : "hover:text-[#0147FF]"
                  }`}
                >
                  <motion.span
                    initial={false}
                    animate={{
                      scale: active ? 1 : 1,
                    }}
                  >
                    {item.title}
                  </motion.span>
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </motion.button>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="lg:hidden mt-4 bg-[#1A1A1A] rounded-2xl p-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-y-2">
              {navLinks.map((item, index) => {
                const active = isActive(item.path);
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-3 px-4 rounded-xl text-white font-medium text-lg transition-all duration-300 ${
                        active ? "bg-[#0147FF]" : "hover:bg-white/10"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Schedule",
    path: "/schedule",
  },
  {
    title: "Team",
    path: "/team",
  },
  {
    title: "About",
    path: "/about-us",
  },
  // {
  //   title: "Alumni",
  //   path: "/alumni",
  // },
  {
    title: "Contact",
    path: "/contact",
  },
];
