"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const SkillsAnimation = require("@/animation/skills.json");

const frontend = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind", "Bootstrap"];
const backend = ["Node.js", "Express"];
const database = ["MongoDB", "Firebase"];
const app = ["React Native"];

const skillGroups = [
  { title: "Front End", skills: frontend },
  { title: "Back End", skills: backend },
  { title: "Database", skills: database },
  { title: "App", skills: app },
];

export default function Skills() {
  const [highlightIndex, setHighlightIndex] = useState(0);

  const allSkills = [...frontend, ...backend, ...database, ...app];

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % allSkills.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [allSkills.length]);

  const getSkillGlobalIndex = (groupIdx, skillIdx) => {
    if (groupIdx === 0) return skillIdx;
    if (groupIdx === 1) return frontend.length + skillIdx;
    if (groupIdx === 2) return frontend.length + backend.length + skillIdx;
    if (groupIdx === 3) return frontend.length + backend.length + database.length + skillIdx;
    return 0;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black font-[family-name:var(--font-geist-sans)] px-4 py-6">
      <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row w-full max-w-6xl min-h-[500px] transition-transform duration-300 group origin-center">
        
        {/* Animation first in mobile view */}
        <div className="flex-1 flex items-center justify-center p-6 md:order-2">
          <div className="w-[18rem] h-[18rem] sm:w-[24rem] sm:h-[24rem] md:w-[28rem] md:h-[28rem] shadow-2xl rounded-2xl bg-white flex items-center justify-center">
            <Lottie animationData={SkillsAnimation} loop={true} />
          </div>
        </div>

        {/* Skills Content */}
        <div className="flex-1 flex flex-col justify-center items-start p-4 sm:p-6 md:p-10 md:order-1 w-full">
          <div className="grid grid-cols-2 gap-4 w-full text-sm">
            {/* Column 1: Front End */}
            <div className="bg-gray-50 rounded-xl shadow-md p-4">
              <h3 className="text-lg font-semibold text-black mb-2">Front End</h3>
              <div className="flex flex-wrap gap-3">
                {frontend.map((skill, i) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-lg text-black bg-gray-100 font-bold transition-all duration-300
                      ${highlightIndex === i ? "scale-110 shadow-xl bg-yellow-400" : ""}
                    `}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Column 2: Back End, Database, App stacked vertically */}
            <div className="flex flex-col gap-4">
              {[backend, database, app].map((group, groupIdx) => {
                const title = skillGroups[groupIdx + 1].title;
                return (
                  <div key={title} className="bg-gray-50 rounded-xl shadow-md p-4">
                    <h3 className="text-lg font-semibold text-black mb-2">{title}</h3>
                    <div className="flex flex-wrap gap-3">
                      {group.map((skill, skillIdx) => {
                        const globalIdx = getSkillGlobalIndex(groupIdx + 1, skillIdx);
                        const isActive = highlightIndex === globalIdx;
                        return (
                          <span
                            key={skill}
                            className={`px-3 py-1 rounded-lg text-black bg-gray-100 font-bold transition-all duration-300
                              ${isActive ? "scale-110 shadow-xl bg-yellow-400" : ""}
                            `}
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Home Button */}
          <div className="w-full flex flex-col items-center mt-6">
            <Link
              href="/"
              className="font-bold text-accent px-5 py-2 flex items-center gap-2 rounded-full transition duration-150 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto group-hover:bg-black group-hover:text-white text-sm sm:text-base"
            >
              <span className="transform transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1">→</span>
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
