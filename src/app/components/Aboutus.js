'use client';
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// A new component for individual cards to manage their own animations
const Card = ({ card, index }) => {
  const cardRef = useRef(null);
  // Trigger the animation when the card is 50% in view, and only play it once.
  const isInView = useInView(cardRef, { once: true, amount: 0.5 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        // Stagger the animation of each card slightly
        delay: index * 0.2
      }
    },
  };

  return (
    <motion.div
      ref={cardRef}
      className="w-full max-w-3xl h-[500px] my-8" // Added margin for spacing
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div
        className="h-full w-full bg-gradient-to-br from-black/70 to-black/70 backdrop-blur-md 
                   rounded-xl border border-[#F8E1C6]/20 p-8 flex flex-col items-center 
                   justify-center text-center space-y-8 shadow-2xl"
      >
        <h1 className="text-5xl text-[#F8E1C6] font-semibold">
          {card.title}
        </h1>
        <p className="text-lg text-[#F8E1C6] font-light leading-relaxed opacity-90 max-w-md">
          {card.text}
        </p>
        <div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-[#F8E1C6]/80 to-transparent" />
      </div>
    </motion.div>
  );
};

const Aboutus = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });

  const cardData = [
    {
      title: "Our Heritage",
      text: "Nestled in the heart of the city, The Black Hound has been a gathering place for friends and strangers alike — a haven where stories are shared over timeless pints and laughter fills the air.",
    },
    {
      title: "Our Vision",
      text: "Our vision is simple: to craft an atmosphere where warmth meets character, where every visit feels like coming home. We blend the classic charm of a traditional pub with a modern twist.",
    },
    {
      title: "Our Values",
      text: "At The Black Hound, we value authenticity, quality, and connection. From locally sourced brews to our welcoming staff, every detail reflects our commitment to delivering a heartfelt experience.",
    },
  ];

  return (
    <div className="bg-black text-white font-[Merriweather]">
      {/* Hero Section */}
      <div ref={titleRef} className="h-screen flex items-center justify-center">
        <motion.div
          className="text-center max-w-3xl px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2
            className="text-6xl text-[#F8E1C6] font-light leading-relaxed"
            style={{ textShadow: "0 0 2px #fff, 0 0 5px #f8e1c6aa" }}
          >
            Our Story, Vision and Values
          </h2>
          <motion.p
            className="mt-6 text-lg text-[#F8E1C6]/60"
            initial={{ opacity: 0 }}
            animate={isTitleInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Scroll down to explore our journey
          </motion.p>
        </motion.div>
      </div>

      {/* ✨ FIX: Removed the sticky container and useScroll hooks. */}
      {/* Each card now handles its own animation in a normal document flow. */}
      <div className="flex flex-col items-center py-20">
        {cardData.map((card, index) => (
          <Card key={index} card={card} index={index} />
        ))}
      </div>
      
       {/* A spacer div for after the cards */}
       <div className="h-screen" />
    </div>
  );
};

export default Aboutus;
