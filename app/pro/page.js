"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const projects = [
  {
    title: "College Bus Tracking App",
    desc: "Created a real-time bus tracking app using React Native, Firebase, and GPS-enabled ESP32 to display live bus locations. Added geofencing, speed tracking, and push alerts when the bus is within 3KM of stops. Used Firebase and Expo services for location updates, authentication, and notifications",
    tech: {
      Hardware: "ESP32, GPS Module",
      App: "React Native-Expo",
      WebSite: "React",
      Software: "VScode , Arduino IDE",
    },
  },
  {
    title: "Sea Border Detection",
    desc: "Developed a GPS-based system with ESP32 to alert fishermen on sea border crossings. Included GSM SMS alerts, OLED display, and voice warnings via DFPlayer. Built a Dezongo-based dashboard to track boats and view history via MongoDB.",
    tech: {
      Hardware: "ESP32, GPS Module , GSM, OLED Display , DF Player , Speaker",
      WebSite: "Dezongo",
      Software: "VScode , ThinkSpeek",
    },
  },
  {
    title: "DevConnect",
    desc: "Built a full-stack profile management system using React, Node.js/Express, and MongoDB. Enabled live editing of user details and skills with API-driven updates and strong state management. Ensured a responsive, secure experience with form validation and real-time sync..",
    tech: ["React", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Weather_App",
    desc: "Created a responsive weather interface in React.js with real-time data from OpenWeatherMap. Displayed temperature, location, and weather conditions dynamically",
    tech: "React , Tailwind CSS",
  },
  {
    title: "Task Tracker",
    desc: "Built a React-based Task Tracker to manage daily to-dos with add, delete, and complete options. Focused on clean UI and interactive task management",
    tech: "React",
  },
];

// Helper to normalize tech field
function getTechArray(tech) {
  if (typeof tech === "string") {
    return tech.split(",").map((v) => ({ key: "Tech", value: v.trim() }));
  }
  if (Array.isArray(tech)) {
    return tech.map((v) => ({ key: "Tech", value: v }));
  }
  if (typeof tech === "object") {
    return Object.entries(tech).flatMap(([key, value]) =>
      value.split(",").map((v) => ({ key, value: v.trim() }))
    );
  }
  return [];
}

export default function Pro() {
  const [highlightIndexes, setHighlightIndexes] = useState(
    projects.map(() => 0)
  );

  useEffect(() => {
    const intervals = projects.map((project, idx) => {
      const techArr = getTechArray(project.tech);
      if (techArr.length <= 1) return null;
      return setInterval(() => {
        setHighlightIndexes((prev) => {
          const updated = [...prev];
          updated[idx] = (updated[idx] + 1) % techArr.length;
          return updated;
        });
      }, 1000);
    });

    return () =>
      intervals.forEach((interval) => interval && clearInterval(interval));
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4 sm:px-6 md:px-10 lg:px-16 py-8">
      <div className="bg-white rounded-2xl shadow-lg flex flex-col w-full max-w-4xl min-h-[500px] transition-transform duration-300 group origin-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
        {/* Projects List */}
        <div className="w-full flex flex-col gap-6 sm:gap-8">
          {projects.map((project, idx) => {
            const techArr = getTechArray(project.tech);
            return (
              <div
                key={project.title}
                className="bg-white rounded-xl shadow-xl p-4 sm:p-6 md:p-8 w-full flex flex-col items-center"
              >
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 text-center">
                  {project.title}
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-black mb-4 text-center px-2 sm:px-6">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-3 justify-center mt-2 px-2">
                  {techArr.map((t, i) => (
                    <span
                      key={t.key + t.value}
                      className={`px-3 py-1 rounded-lg bg-yellow-100 text-black font-semibold text-sm sm:text-base md:text-lg shadow-md transition-all duration-300
                        ${
                          highlightIndexes[idx] === i
                            ? "scale-110 shadow-xl bg-yellow-400"
                            : ""
                        }`}
                    >
                      <span className="mr-1">{t.key}:</span>
                      <span>{t.value}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Home Button */}
        <div className="w-full flex flex-col items-center mt-6 sm:mt-8">
          <Link
            href="/"
            className="font-bold text-accent px-4 py-2 sm:px-5 sm:py-2 flex items-center gap-2 rounded-full transition duration-150 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto group-hover:bg-black group-hover:text-white text-sm sm:text-base"
          >
            <span className="transform transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1">
              →
            </span>
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
