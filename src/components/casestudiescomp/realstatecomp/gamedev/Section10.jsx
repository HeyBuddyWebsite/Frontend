"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const Section10 = ({ testimonal }) => {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  if (!testimonal) return null;

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
          }}
          className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 lg:p-20 shadow-2xl overflow-hidden"
        >
          {/* Quote Mark */}
          <div className="absolute top-10 left-12 text-8xl text-blue-500/10 font-serif leading-none select-none">
            “
          </div>

          <div className="relative z-10 text-center">
            <h2 className="text-blue-400 font-bold uppercase tracking-[0.2em] mb-8 text-sm md:text-base">
              Client Feedback
            </h2>

            <p className="text-2xl md:text-4xl text-white font-medium leading-relaxed italic mb-12">
              {testimonal}
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="h-[2px] w-12 bg-blue-500/50" />
              <p className="text-gray-400 font-semibold tracking-wider">
                SUCCESSFUL COLLABORATION
              </p>
              <div className="h-[2px] w-12 bg-blue-500/50" />
            </div>
          </div>

          {/* Bottom Quote Mark */}
          <div className="absolute bottom-4 right-12 text-8xl text-blue-500/10 font-serif leading-none rotate-180 select-none">
            “
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section10;
