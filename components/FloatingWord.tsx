import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

/** Random position/rotation. */
function generateRandomPosition() {
  return {
    left: Math.random() * 100, 
    top: Math.random() * 100, 
    rotate: Math.random() * 360,
  };
}

// Duration (in ms) that the word will stay visible.
function randomVisibleDuration() {
  return (2 + Math.random() * 3) * 1000;
}

// State of word
type Phase = "enter" | "leave";

interface Props {
  word: string;
  isDarkMode: boolean;
}

export default function FloatingWord({ word, isDarkMode }: Props) {
  const [phase, setPhase] = useState<Phase>("enter");
  const [position, setPosition] = useState(generateRandomPosition);
  const [visibleDuration, setVisibleDuration] = useState(randomVisibleDuration());

  const variants = {
    enter: {
      opacity: 0.5,
      scale: 1,
      transition: { duration: 0.5 },
    },
    leave: {
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.5 },
    },
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (phase === "enter") {
      timer = setTimeout(() => {
        setPhase("leave");
      }, visibleDuration);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [phase, visibleDuration]);

  function handleAnimationComplete(definition: Phase) {
    if (definition === "leave") {
      setPosition(generateRandomPosition());
      setVisibleDuration(randomVisibleDuration());
      setPhase("enter");
    }
  }

  return (
    <motion.div
      variants={variants}
      initial="leave"
      animate={phase}
      onAnimationComplete={handleAnimationComplete}
      style={{
        position: "absolute",
        left: `${position.left}%`,
        top: `${position.top}%`,
        transform: `rotate(${position.rotate}deg)`,
      }}
      className={`pointer-events-none font-bold ${
        isDarkMode
          ? "text-gray-500"
          : "text-gray-400"
      }`}
    >
      {word}
    </motion.div>
  );
}
