"use client"
import dynamic from "next/dynamic";
import Link from "next/link";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const aboutAnimation = require("@/animation/about.json");

export default function About() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black font-[family-name:var(--font-geist-sans)]">
      <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center px-8 py-10 w-full max-w-lg transition-transform duration-300 group hover:scale-105 origin-center ">
        <div className="w-80 h-auto mb-6">
          <Lottie animationData={aboutAnimation} loop={true} />
        </div>
        <p className="text-black font-semibold text-center mb-8">
          Hi! I'm Balachandar,I am a motivated and detail-oriented developer with a strong passion for building practical and user-focused digital solutions. I have experience working on real-time systems and full-stack applications, combining problem-solving skills with a clear understanding of user needs.My approach to development is centered on delivering efficient, reliable, and meaningful solutions. I enjoy taking on new challenges, learning continuously, and contributing to projects that create a positive impact.
        </p>
        <div className="w-full flex flex-col items-center mt-4">
          <Link
  href="/"
  className="font-bold px-5 py-2 flex items-center gap-2 
    rounded-full transition duration-150
    text-white bg-black opacity-100 pointer-events-auto 
    md:text-accent md:bg-transparent md:opacity-0 md:pointer-events-none 
    group-hover:opacity-100 group-hover:pointer-events-auto 
    group-hover:bg-black group-hover:text-white"
>
  <span className="transform transition-transform duration-300 opacity-100 translate-x-1 md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-x-1">
    →
  </span>
  Home
</Link>
        </div>
      </div>
    </div>
  );
}
