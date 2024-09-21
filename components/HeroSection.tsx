"use client" // this is a client component
import React from "react"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import { useEffect } from 'react';

import Stars from "@/components/Particles.js"

const HeroSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      {
        threshold: 0.3,
      }
    );
    const fadeElements = document.querySelectorAll('.fade');
    fadeElements.forEach((el) => observer.observe(el));
  }, []);  

  return (
    <section id="home">
      <div className="particles">
        <Stars />
      </div>
      <div className="fade content flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-6xl font-bold mt-6 md:mt-0 md:text-6xl text-center grad overflow-hidden"> Greetings, Traveler</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl text-center" style={{color: 'white'}}>
            Take a break from your journey
          </p>
        </div>
      </div>
      <div className="content flex flex-row items-center text-center justify-center" style={{color: 'white'}}>
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
      <div className="content flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-3/5">
          <p className="fade text-lg mt-4 mb-6 md:text-2xl text-center" style={{color: 'white', marginTop: 300}}>
            A question that I often ask myself is 
          </p>
          <h1 className="fade text-4xl font-bold mt-6 md:mt-0 md:text-6xl text-center grad">
            Who am I and what is my purpose here?
          </h1>
          <p className="fade text-lg mt-4 mb-6 md:text-2xl text-center" style={{color: 'white', marginTop:800}}>
            For me... 
          </p>
          <p className="fade text-lg mt-4 mb-6 md:text-2xl text-center" style={{color: 'white', marginTop:800}}>
            I&#39;ve come to realize that life is simply an experience.
          </p>
          <p className="fade text-lg mt-4 mb-6 md:text-2xl text-center" style={{color: 'white', marginTop:800}}>
            After all, no success or failures can withstand the test of time after thousands of years.
          </p>
          <p className="fade text-lg mt-4 mb-6 md:text-2xl text-center" style={{color: 'white', marginTop:800}}>
            And for the time being, I want to enjoy my experience by putting creativity and passion in what I do.
          </p>
          <p className="fade text-lg mt-4 mb-6 md:text-2xl text-center" style={{color: 'white', marginTop:800}}>
            To mutually help improve the experiences of memebers in my community.
          </p>
          <p className="fade text-lg mt-4 mb-6 md:text-2xl text-center" style={{color: 'white', marginTop:800}}>
            To control the outcome of my experience.
          </p>
          <p className="fade text-lg mt-4 mb-6 md:text-2xl text-center" style={{color: 'white', marginTop:800}}>
            To choose whether I want a good
          </p>
          <p className="fade text-lg mt-4 mb-6 md:text-2xl text-center" style={{color: 'white', marginTop:800}}>
            or bad experience.
          </p>
        </div>
      </div>
      <div className="content flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-3/5"  style={{marginTop:500, marginBottom:200}}>
          <p className="fade text-lg mt-4 mb-6 md:text-2xl text-center" style={{color: 'white' }}>
            So Traveler, 
          </p>
          <h1 className="fade text-4xl font-bold mt-6 md:mt-0 md:text-6xl text-center grad">
            What is your destiny?
          </h1>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
