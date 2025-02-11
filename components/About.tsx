import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Skill {
  skill: string;
}

const skills: Skill[] = [
  { skill: "C++" },
  { skill: "Java" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "GitHub" },
  { skill: "Jupyter Notebook" },
];

export default function AboutHome() {
  // If your site uses dark mode, you might pass it as a prop or use a global context.
  // For demonstration, let's assume a local isDarkMode = false.
  const isDarkMode = false; // Example placeholder

  return (
    <section id="About">
      <div style={{marginTop: 50, marginLeft: 100, marginRight: 100 }} className="pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>

        <div className="text-center flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          {/* Left column: biography */}
          <div className="md:w-1/2">
            <p>
              Hi, my name is Johnathan and I am an aspiring{" "}
              <span className="font-bold">software engineer</span>,
              <span className="font-bold"> musician</span>, and
              <span className="font-bold"> chef </span>
              based in Bellevue, WA.
            </p>
            <br />
            <p>
              I am currently an undergraduate student at the University of
              Washington studying Computer Science, planning to graduate by
              2026. My current technical interests are artificial intelligence
              and data analysis. I am curious about interdisciplinary research
              involving these fields with biology. I am eager to complete
              projects that have real-world impact.
            </p>
            <br />
            <p>
              I am always seeking new experiences and love to keep myself
              engaged and learning new things. I keep an open mind
              and stay on the lookout for new opportunities to keep up with
              recent technological developments.
            </p>
            <br />
            <p>
              In my free time, I like to listen to music and cook, specializing
              in Chinese pastries. With perfect pitch and having performed in
              Carnegie Hall with piano, I&#39;m also able to play music! I look
              forward to meeting anyone with similar interests.
            </p>
          </div>

          {/* Right column: image + skill tags */}
          <div className="text-center md:w-1/2 md:text-left">
            <Image
              src="/photo.png"
              alt="profile photo"
              width={225}
              height={125}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0 rounded-[20px] object-cover"
            />

            <h1 className="text-2xl font-bold mb-6">Technical Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`px-4 py-2 mr-2 mt-2 rounded font-semibold
                    ${
                      isDarkMode
                        ? "bg-gray-800 text-gray-200"
                        : "bg-gray-200 text-gray-500"
                    }`}
                >
                  {item.skill}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
