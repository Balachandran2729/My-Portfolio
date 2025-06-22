"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const contactAnimation = require("@/animation/contact.json");

export default function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black font-[family-name:var(--font-geist-sans)] px-4 py-6">
      <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row w-full max-w-4xl min-h-[400px] transition-transform duration-300 group origin-center hover:scale-105">
        
        {/* Animation First in Mobile */}
        <div className="flex-1 flex items-center justify-center p-6 md:p-10">
          <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80">
            <Lottie animationData={contactAnimation} loop={true} />
          </div>
        </div>

        {/* Contact Content */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start p-6 md:p-10">
          {/* Gmail Link */}
          <div className="mb-6 flex items-center justify-center md:justify-start gap-4 w-full">
            <a
              href="mailto:balachandran2729@gmail.com"
              className="font-bold text-accent px-5 py-2 text-black flex items-center gap-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl hover:z-10 origin-center hover:bg-black hover:text-white bg-white"
              style={{ width: "fit-content" }}
            >
              balachandran2729@gmail.com
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-8 mt-4 md:mt-8 justify-center md:justify-start">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 transform hover:-translate-y-2"
            >
              <FaWhatsapp className="w-10 h-10 text-[#25D366]" />
            </a>
            <a
              href="https://github.com/orgs/Balachandran2729/repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 transform hover:-translate-y-2"
            >
              <FaGithub className="w-10 h-10 text-[#000000]" />
            </a>
            <a
              href="https://linkedin.com/in/balachandran2729"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 transform hover:-translate-y-2"
            >
              <FaLinkedin className="w-10 h-10 text-[#0077B5]" />
            </a>
          </div>

          {/* Home Button (Desktop hover visible only) */}
          <div className="w-full flex flex-col items-center md:items-start mt-6 md:mt-8">
            <Link
              href="/"
              className="font-bold text-accent px-5 py-2 flex items-center gap-2 rounded-full transition duration-150 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto group-hover:bg-black group-hover:text-white"
            >
              <span className="transform transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1">
                →
              </span>
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
