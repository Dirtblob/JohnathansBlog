import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Johnathan's Blogs",
    description:
      "Johnathan's Blogs is my personal website where I blog and reflect on my own experiences and share insights that I've learned",
    image: "/website.png",
    github: "https://github.com/AnomalousIdentity/JohnathansBlog",
  },
  {
    name: "Counterfactual Data Analysis",
    description: "CDA is a data science research project that is able to extract data from medical data and use the counterfactual method to predict the populations most affected based off 3 attributes using the wilcoxon sign-ranked test",
    image: "/cda.jpg",
    github: "https://github.com/AnomalousIdentity/counterfactual-data-analysis",
  },
]

export default function ProjectsHome() {
    return (
        <section id="Projects">
          <h1 style={{marginTop: 100}} className="my-10 text-center font-bold text-4xl">
            Projects
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
          </h1>
    
          <div style={{marginLeft:100, marginRight:100}}className="flex flex-col space-y-28">
            {projects.map((project, idx) => {
              return (
                <div key={idx}>
                  <SlideUp offset="-300px 0px -300px 0px">
                    <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                      <div className=" md:w-1/2">
                        <Link href={project.github}>
                          <Image
                            src={project.image}
                            alt=""
                            width={1000}
                            height={1000}
                            className="rounded-xl shadow-xl hover:opacity-70 object-cover"
                          />
                        </Link>
                      </div>
                      <div className="mt-8 md:w-1/2">
                        <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                        <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                          {project.description}
                        </p>
                        <div className="flex flex-row align-bottom space-x-4">
                          <Link href={project.github} target="_blank">
                            <BsGithub
                              size={30}
                              className="hover:-translate-y-1 transition-transform cursor-pointer"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SlideUp>
                </div>
              )
            })}
            
          </div>
        </section>
      )
}
  