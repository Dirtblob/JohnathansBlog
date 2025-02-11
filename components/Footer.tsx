import { useGlobalContext } from "@/context/GlobalContext";
import React from "react"
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"

  
export default function Footer() {
  const {
    isDarkMode
  } = useGlobalContext();

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <footer
        className="content mx-auto px-4 sm:px-6
                  transition-colors duration-300 dark:bg-neutral-700"
      >
        <hr className="w-full h-0.5 mx-auto bg-neutral-200 dark:bg-neutral-700 border-0" />
        <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 dark:text-neutral-100 md:flex-row md:justify-between">
          <div className="flex flex-row items-center justify-center space-x-1">
            <span>© Johnathan Zhang</span>
            {/* GitHub Link */}
            <a
              href="https://github.com/Dirtblob"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineGithub
                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100 ml-3"
                size={30}
              />
            </a>
            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/johnathan-zhang/"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineLinkedin
                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                size={30}
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
