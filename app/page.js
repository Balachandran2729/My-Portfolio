"use client"
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const animationData = require("@/animation/Animation - 1750141948196.json");

export default function Home() {
  return (
    <div className="flex-col font-[family-name:var(--font-geist-sans)] w-full h-screen">
      
      {/* Responsive layout for heading and animation */}
      <div className="flex flex-col md:flex-row z-1 md:mt-[-60px] items-center md:items-start justify-center md:justify-start">
        <div className="flex flex-col text-white md:ms-40 md:mt-50 items-center md:items-start mt-10">
          <p className="font-bold text-l">Welcome to </p>
          <h1 className="font-bold text-5xl md:text-7xl ps-0 md:ps-5">Balachandran</h1>
          <p className="font-bold text-l">Portfolio</p>
        </div>
        <div className="mt-10 md:mt-20 md:ms-20">
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-60 h-60 md:w-96 md:h-96"
          />
        </div>
      </div>

      {/* Animated text */}
      <div className="flex justify-center items-center mt-5">
        <motion.p
          className="font-bold text-accent text-xl text-center"
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        >
          click here to know about me
        </motion.p>
      </div>

      {/* Responsive links layout */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-10 z-0 gap-5 md:gap-20 text-center">
        {[
          { href: "/about", label: "About Me" },
          { href: "/skills", label: "Skills" },
          { href: "/pro", label: "Projects" },
          { href: "/contact", label: "Contact" },
        ].map((item, i) => (
          <div className="relative group" key={i}>
            <Link
              href={item.href}
              className="font-bold px-5 py-2 
                text-black bg-white rounded-full 
                md:text-accent md:bg-transparent md:rounded-none 
                flex items-center gap-2 md:text-white
                md:hover:bg-white md:hover:text-black md:hover:rounded-full 
                transition duration-150"
            >
              {item.label}
              <span className="transform transition-transform duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
