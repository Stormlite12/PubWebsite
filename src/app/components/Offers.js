'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';


const Offers = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);
  const videoRef = useRef(null);

  const duration = 6000;

  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  useEffect(() => {
    if (!isInView) return;

    let start = null;
    let animationFrame;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const t = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(t);

      setProgress(Math.floor(easedProgress * 100));

      if (elapsed < duration) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setShowText(true);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView]);

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play().catch((err) =>
        console.warn('Video autoplay failed:', err)
      );
    }
  }, [isInView]);

  const marqueeContent = (
    <>
      GUINNESS • IPA • OLD FASHIONED • ESPRESSO MARTINI • MOJITO • WHISKEY SOUR •
      PINA COLADA • MARGARITA • STOUT • CRAFT BEER • NEGRONI • BLOODY MARY • RUM & COKE •
      SANGRIA • MOSCOW MULE • GUINNESS • IPA • OLD FASHIONED • ESPRESSO MARTINI • MOJITO •
      WHISKEY SOUR • PINA COLADA • MARGARITA • STOUT • CRAFT BEER • NEGRONI • BLOODY MARY •
      RUM & COKE • SANGRIA • MOSCOW MULE
    </>
  );

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex flex-col"
    >
      {/* Top Marquee */}
<div className="relative bg-black py-6 overflow-hidden border-t border-b border-cream z-35">
  <div className="whitespace-nowrap animate-marquee text-cream tracking-widest uppercase text-2xl font-bold select-none">
    {marqueeContent}
  </div>
</div>


      {/* Video container with overlay and loader */}
      <div className="relative h-full items-center my-auto">
        {/* Background Video */}
        <video
          ref={videoRef}
          muted
          playsInline
          className="w-full h-full object-cover my-auto"
          src="assets/drink3.mp4"
          preload="auto"
        />

        {/* Constant Black/60 Overlay */}
        <div className="absolute inset-0 bg-black/60 " />

        {/* Progress Loader */}
        {!showText && (
          <div className="absolute inset-0 flex flex-col justify-center items-center z-40 bg-transparent transition-opacity duration-1000">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 border-4 border-t-4 border-cream border-t-transparent rounded-full animate-spin"></div>
              <p className="text-3xl font-bold text-cream font-[Slackey]">
                Offers Loading... {progress}%
              </p>
            </div>
          </div>
        )}

        {/* Content Section */}
       {showText && (
  <div className="absolute inset-0 flex justify-center items-center z-50">
    <motion.div
      className="max-w-4xl mx-auto text-center px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <motion.h2
        className="text-4xl font-medium uppercase mb-6 tracking-wider text-cream font-[Slackey]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Pub Specials
      </motion.h2>

      <motion.p
        className="text-lg mb-8 leading-relaxed text-cream font-body"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Don&apos;t miss our exclusive pub promotions at Black Hound.
        <br />
        From happy hour pints to seasonal ale discounts,
        <br />
        there&apos;s always something brewing at our tavern.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="bg-[#B87333] text-[#5C3A21] px-8 py-3 font-bold uppercase hover:bg-[#C49E63] transition-colors tracking-wider rounded-sm"
      >
        View Pub Deals
      </motion.button>
    </motion.div>
  </div>
)}

      </div>

     {/* Bottom Marquee */}
<div className="relative bg-black py-6 overflow-hidden border-t border-b border-cream z-30">
  <div className="whitespace-nowrap animate-marquee text-cream tracking-widest uppercase text-2xl font-bold select-none">
    {marqueeContent}
  </div>
</div>

    </section>
  );
};

export default Offers;
