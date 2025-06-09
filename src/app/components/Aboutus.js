'use client';

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Aboutus = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Add a base delay so paragraphs start appearing later
  const baseDelay = 1.5;

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: baseDelay + i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <div className="relative w-full h-screen text-white min-h-screen flex items-center justify-center bg-black ">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-lg w-full h-auto z-10">
        {/* Left side - Text */}
        <div className="flex flex-col justify-center px-4 py-30 z-20 ">
          <motion.h2
            ref={ref}
            className="mt-4 text-4xl font-[Merriweather] text-[#F8E1C6] font-light leading-loose max-w-2xl"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{
              WebkitClipPath: "inset(0 100% 0 0)",
              textShadow: "0 0 2px #fff, 0 0 5px #f8e1c6aa",
            }}
          >
            Our Story, Vision and Values
          </motion.h2>

          {[
            "Nestled in the heart of the city, The Black Hound has been a gathering place for friends and strangers alike — a haven where stories are shared over timeless pints and laughter fills the air. Our story is steeped in tradition but fueled by the spirit of community.",
            "Our vision is simple: to craft an atmosphere where warmth meets character, where every visit feels like coming home. We blend the classic charm of a traditional pub with a modern twist, creating a space that’s as inviting as it is unforgettable.",
            "At The Black Hound, we value authenticity, quality, and connection. From locally sourced brews to our welcoming staff, every detail reflects our commitment to delivering an experience that’s honest, heartfelt, and uniquely ours.",
          ].map((text, i) => (
            <motion.p
              key={i}
              className="mt-8 text-md font-[Merriweather] text-[#F8E1C6] font-light leading-relaxed max-w-lg"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={i}
              variants={paragraphVariants}
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Right side - Full height/width image */}
        <motion.div
          initial={{ clipPath: "circle(0% at 50% 50%)" }}
          animate={isInView ? { clipPath: "circle(150% at 50% 50%)" } : {}}
          transition={{ duration: 5, ease: "easeOut" }}
          className="order-1 md:order-2 flex justify-end items-center w-[100%]  md:h-auto relative"
        >
          <img
            src="assets/Pub-drink.jpg"
            alt="Hand holding a drink"
            className="absolute w-[70%] h-[90%] object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Aboutus;
