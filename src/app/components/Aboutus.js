'use client';
import Image from 'next/image';


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
      <div className="grid grid-cols-1 max-w-screen-2xl px-10  w-full h-full z-10">

        <div className="relative z-20 mx-auto w-full flex flex-col justify-center items-center h-screen rounded-xl backdrop-blur-md shadow-xl">
        <motion.h2
          ref={ref}
          className="text-6xl font-[Merriweather] text-[#F8E1C6] max-w-4xl -translate-y-20 font-light leading-relaxed"
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
          "Nestled in the heart of the city, The Black Hound has been a gathering place for friends and strangers alike — a haven where stories are shared over timeless pints and laughter fills the air.",
          "Our vision is simple: to craft an atmosphere where warmth meets character, where every visit feels like coming home. We blend the classic charm of a traditional pub with a modern twist.",
          "At The Black Hound, we value authenticity, quality, and connection. From locally sourced brews to our welcoming staff, every detail reflects our commitment to delivering a heartfelt experience.",
        ].map((text, i) => (
          <motion.p
            key={i}
            className="mt-6 text-md font-[Merriweather] py-5 max-w-2xl text-[#F8E1C6] font-light leading-relaxed"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={i}
            variants={paragraphVariants}
          >
            {text}
          </motion.p>
        ))}
      </div>

       
      </div>
    </div>
  );
};

export default Aboutus;





 {/* Right side - Full height/width image */}
        {/* <motion.div
          initial={{ clipPath: "circle(0% at 50% 50%)" }}
          animate={isInView ? { clipPath: "circle(150% at 50% 50%)" } : {}}
          transition={{ duration: 5, ease: "easeOut" }}
          className="order-1 md:order-2 flex justify-end items-center w-[80%] h-screen   md:h-auto relative"
        >
          <Image
            src="/assets/Pub-drink.jpg"
            alt="Hand holding a drink"
            className="absolute object-cover rounded-lg"
            fill
          />
        </motion.div> */}