import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Each particle can be a 'trail' (normal follow) or 'ripple' (created on click).
 */
type Particle = {
  id: number;
  x: number;
  y: number;
  type: "trail" | "ripple";
};

export default function MouseTrailRipple() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    /**
     * Mouse moves create a small "trail" particle
     */
    const handleMouseMove = (e: MouseEvent) => {
      setCounter((prev) => {
        const newId = prev + 1;
        const newParticle: Particle = {
          id: newId,
          x: e.clientX,
          y: e.clientY,
          type: "trail",
        };
        setParticles((old) => [...old, newParticle]);
        return newId;
      });
    };

    /**
     * Mouse clicks create a larger "ripple" particle
     */
    const handleClick = (e: MouseEvent) => {
      setCounter((prev) => {
        const newId = prev + 1;
        const newParticle: Particle = {
          id: newId,
          x: e.clientX,
          y: e.clientY,
          type: "ripple",
        };
        setParticles((old) => [...old, newParticle]);
        return newId;
      });
    };

    // Attach listeners at the document or window level
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  /**
   * Prune old particles so the array doesn't grow infinitely
   */
  useEffect(() => {
    const interval = setInterval(() => {
      if (particles.length > 150) {
        setParticles((prev) => prev.slice(30));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [particles]);

  /**
   * Framer Motion variants for 'trail' vs. 'ripple'
   */
  const variants = {
    trailInitial: { opacity: 1, scale: 1 },
    trailAnimate: {
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.5 },
    },
    rippleInitial: {
      opacity: 0.5,
      scale: 0,
    },
    rippleAnimate: {
      opacity: 0,
      scale: 2,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <AnimatePresence>
        {particles.map((p) => {
          const isTrail = p.type === "trail";
          return (
            <motion.div
              key={p.id}
              initial={isTrail ? "trailInitial" : "rippleInitial"}
              animate={isTrail ? "trailAnimate" : "rippleAnimate"}
              exit={{ opacity: 0 }}
              variants={variants}
              className="absolute rounded-full bg-blue-500"
              style={{
                top: p.y,
                left: p.x,
                width: isTrail ? 10 : 50,
                height: isTrail ? 10 : 50,
                marginTop: isTrail ? -5 : -25,
                marginLeft: isTrail ? -5 : -25,
                backgroundColor: isTrail ? "rgba(218, 165, 32, 0.8)" : "rgba(192,192,192,0.4)",
              }}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
}
