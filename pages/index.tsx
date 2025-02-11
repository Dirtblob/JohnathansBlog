import React, { useState } from 'react';
import type { NextPage, GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import FloatingWord from "@/components/FloatingWord";
import Layout from '@/components/layout';
import { useGlobalContext } from '@/context/GlobalContext';
import AboutHome from '@/components/About';
import ProjectsHome from "@/components/Projects";
import BlogHome from "@/components/Blog";
import getPostMetadata, { PostMetadata } from "@/components/getPostMetadata";   
import MouseTrailRipple from '@/components/MouseTrailRipple';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

interface HomePageProps {
    posts: PostMetadata[];
}

export const getStaticProps: GetStaticProps = () => {
    const posts = getPostMetadata();
    return { props: {posts, }, };
};
  
export default function HomePage({ posts }: HomePageProps) {
  const {
    isDarkMode,
    activeSection,
  } = useGlobalContext();

  // Array of tech words for the animated background
  const techWords = [
    "React", "TypeScript", "Next.js", "TailwindCSS",
    "Python", "Java", "JavaScript", 
    "Git", "C++", "Docker", "C"
  ];

  // Hero text animation
  const heroTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Layout title="Johnathan's Blogs">
      {/* We'll wrap the entire page content in a container
          that respects the local isDarkMode or rely on the Navbar's state. */}
      <div
        className={`min-h-screen transition-colors duration-300 ${
          isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
        }`}
      >
        <MouseTrailRipple />
        {/* Navigation can either link to setActiveSection or we can rely on the Navbar's local state. 
            For now, let's keep it local. */}

        {/* Animated Hero section */}
        {activeSection === 'home' && (
          <motion.section
            initial="hidden"
            animate="visible"
            className="py-40 relative overflow-hidden"
          >
            {/* Floating tech words background */}
            <div className="absolute inset-0">
              {techWords.map((word) => (
                <FloatingWord
                  key={word}
                  word={word}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>

            {/* Hero content */}
            <div style={{marginTop: 50}} className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              />
              <motion.h1
                variants={heroTextVariants}
                className="text-5xl font-bold mb-6"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block"
                >
                  Welcome to my
                </motion.span>{' '}
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
                >
                  Website
                </motion.span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className={`text-xl mb-8 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                I am Johnathan, and I strive to craft code with creativity
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex justify-center space-x-4"
              >
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
              </motion.div>
            </div>
          </motion.section>
        )}

        {activeSection === "blog" && (
            <BlogHome posts={posts} />
        )}

        {/* About section */}
        {activeSection === 'about' && (
            <AboutHome />
        )}

        {/* Projects section */}
        {activeSection === 'projects' && (
            <ProjectsHome /> 
        )}

        
      </div>
    </Layout>
  );
};
