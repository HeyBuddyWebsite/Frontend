"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const testimonials = [
  {
    content:
      "Partnering with Hey Buddy for our school's robotics lab setup was a turning point for our STEM department. The integration of the robotics and ai lab and hands-on DIY kits has completely revolutionized student engagement. The seamless execution and teacher training they provided saved us immense time and resources. Truly exceptional service!",
    name: "Oxford English School",
  },
  {
    content:
      "We sought Hey Buddy's assistance to enhance our student engagement. They delivered an interactive school robotics lab that responded intelligently to our academic needs and facilitated building activities tailored to individual learning speeds. We highly recommend their robotics and AI lab development services!",
    name: "International Delhi Public School",
  },
  {
    content:
      "Hey Buddy's tangible learning capabilities helped us gain invaluable insights that really made the difference in student retention. The empowered strategic decision-making backed by deep robotics lab setup requirements analysis gave us a competitive edge. Investing in a robotics lab in school was a strategic move that paid off!",
    name: "Atal Utkrisht Rajkiya Inter College",
  },
  {
    content:
      "Hey Buddy's deep automation solutions proved revolutionary for our tech-driven projects. Their expertly implemented robotics lab equipment and 3D models considerably enhanced the capability of our student prototypes. Their prowess in robotics and automation lab setup makes them a trustworthy partner for any organization aiming for excellence.",
    name: "IITIN Truckwala",
  },
  {
    content:
      "Implementing the robotics lab has transformed our approach to complex subjects like physics and mechanics. The hands-on experience provided to our students has bridged the gap between theoretical knowledge and practical understanding, making our school a hub for modern innovation.",
    name: "Nigam Pratibha School, Nand Nagari",
  },
  {
    content:
      "The addition of a robotics virtual lab and physical setup has empowered our faculty and students alike. The quality of the graded curriculum and the ease of use provided by Hey Buddy's team ensure that our school robotics lab is utilized to its full potential every single day.",
    name: "Maharshi Sankrityayan Public School",
  },
];

const TestimonialsSection = () => {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) controls.start("visible");
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
      }}
      className="py-12 lg:py-20 px-6 text-white"
    >
      <h2 className="text-2xl lg:text-4xl font-bold text-center mb-10">
        What Clients Say About Our Robotics Lab Solutions
      </h2>
      <p className="text-center text-lg text-white/90 max-w-3xl mx-auto mb-12">
        We partner with institutions and enterprises to turn technical visions into operational excellence. Our robotics lab setup has consistently transformed how our clients teach, build, and innovate, providing them with a competitive edge in the automation-first era.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <motion.figure
            key={index}
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }
            className="flex flex-col justify-between p-6 rounded-xl bg-gray-900/80 backdrop-blur-md border border-gray-500/50 hover:border-white/30 transition-colors"
          >
            <blockquote className="flex flex-col justify-between h-full">
              <p className="text-left text-white mb-4">{item.content}</p>
              <cite className="text-right font-semibold text-white not-italic">
                — {item.name}
              </cite>
            </blockquote>
          </motion.figure>
        ))}
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
