import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";

const projects = [
  {
    name: "Johnathan's Blogs",
    description:
      "Johnathan's Blogs is my personal website where I blog and reflect on my own experiences and share insights that I've learned.",
    image: "/website.png",
    github: "https://github.com/Dirtblob/JohnathansBlog",
  },
  {
    name: "Counterfactual Data Analysis",
    description:
      "CDA is a data science research project that is able to extract data from medical data and use the counterfactual method to predict the populations most affected based off 3 attributes using the Wilcoxon sign-ranked test.",
    image: "/cda.jpg",
    github: "https://github.com/Dirtblob/counterfactual-data-analysis",
  },
];

export default function ProjectsHome() {
  return (
    <section id="Projects">
      <div style={{marginTop: 50, marginLeft: 100, marginRight: 100 }} className="pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>
        {projects.map((project, idx) => (
          // Animate each project
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="my-10 flex flex-col md:flex-row md:space-x-12">
              <div className="md:w-1/2">
                <Link href={project.github}>
                  <Image
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    width={1000}
                    height={1000}
                    className="rounded-xl shadow-xl hover:opacity-70 object-cover"
                  />
                </Link>
              </div>

              {/* Project info */}
              <div className="mt-8 md:w-1/2">
                <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>
                <div className="flex flex-row align-bottom space-x-4">
                  {/* GitHub link */}
                  <Link href={project.github} target="_blank">
                    <BsGithub
                      size={30}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
