"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const Aboutus = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const [scrollProgress, setScrollProgress] = useState(0);

  const cardData = [
    {
      title: "Our Heritage",
      text: "Nestled in the heart of the city, The Black Hound has been a gathering place for friends and strangers alike — a haven where stories are shared over timeless pints and laughter fills the air.",

      color: "from-black/60 to-black/60",
      borderColor: "from-[#1b1b1b] to-[#2b2b2b]",
    },
    {
      title: "Our Vision",
      text: "Our vision is simple: to craft an atmosphere where warmth meets character, where every visit feels like coming home. We blend the classic charm of a traditional pub with a modern twist.",

      color: "from-black/60 to-black/60",
      borderColor: "from-[#1b1b1b] to-[#2b2b2b]",
    },
    {
      title: "Our Values",
      text: "At The Black Hound, we value authenticity, quality, and connection. From locally sourced brews to our welcoming staff, every detail reflects our commitment to delivering a heartfelt experience.",
      color: "from-black/60 to-black/60",
      borderColor: "from-[#1b1b1b] to-[#2b2b2b]",
    },
  ];

  useEffect(() => {
    const scrollWrapper = document.getElementById("scroll-wrapper");
    const container = containerRef.current;
    if (!scrollWrapper || !container) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const wrapperRect = scrollWrapper.getBoundingClientRect();

      const visibleTop = Math.max(containerRect.top, wrapperRect.top);
      const visibleBottom = Math.min(containerRect.bottom, wrapperRect.bottom);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const totalScrollable = container.offsetHeight - wrapperRect.height;

      let progress = 0;
      if (visibleHeight > 0 && totalScrollable > 0) {
        const scrolled = wrapperRect.top - containerRect.top;
        progress = Math.min(1, Math.max(0, scrolled / totalScrollable));
      }
      setScrollProgress(progress);
    };

    scrollWrapper.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => scrollWrapper.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white font-[Merriweather]">
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center">
  <motion.div
    ref={titleRef}
    className="text-center max-w-3xl px-6"
    initial={{ opacity: 0, y: 50 }}
    animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <motion.h2
      className="text-6xl text-[#F8E1C6] font-light leading-relaxed"
      style={{
        textShadow: "0 0 2px #fff, 0 0 5px #f8e1c6aa",
      }}
    >
      Our Story, Vision and Values
    </motion.h2>
    <motion.p
      className="mt-6 text-lg text-[#F8E1C6]/60"
      initial={{ opacity: 0, y: 20 }}
      animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      Scroll down to explore our journey
    </motion.p>
  </motion.div>
</div>

      {/* Stacking Cards Section */}
      <div
        ref={containerRef}
        className="relative -mt-130"
style={{ height: `${(cardData.length - 1) * 100 + 300}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="relative w-full max-w-3xl min-h-[600px] overflow-visible">
            {cardData.map((card, index) => {
              const total = cardData.length;
            const spread = 1; // Make cards transition faster
         let start, end;
       const linger = 0.15; // how long to "pause" at full visibility

      if (index === 1) {
        start = 0.33;
        end = 0.58;
      } else if (index === 2) {
        start = 0.59;
        end = 0.85;
      } else {
        // First card
        start = 0;
        end = 0.32;
      }


        let progress = 0;

        if (scrollProgress < start) {
          progress = index === 0 ? scrollProgress * 10 : 0; // faster fade in for first
        } else if (scrollProgress < end) {
          let raw = (scrollProgress - start) / (end - start);
          // simulate a longer hold at 100% (flatten progress curve near end)
          progress = Math.min(1, raw + Math.pow(raw, 3) * linger);
        } else {
          progress = 1;
        }


                  const translateY = (1 - progress) * 120;
              const scale = 1 - (cardData.length - index - 1) * 0.03 + progress * 0.02;
              const opacity = progress === 0 ? 0 : Math.min(1, progress + 0.2);

              return (
                <motion.div
                  key={index}
                  layout
                  className="absolute top-0 left-0 right-0 mx-auto group rounded-xl"
                  animate={{ y: translateY, scale, opacity }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ zIndex: index }}// ✅ Reversed Z-index
                >
                  {/* Border wrapper */}
                  <div
                    className={`absolute inset-0  ${card.borderColor} rounded-xl p-[2px]`}
                  >
                    <div
                      className={`h-full w-full ${card.color} backdrop-blur-sm rounded-xl border border-[#F8E1C6]/20`}
                    />
                  </div>

                  {/* Card content */}
                  <div className="relative p-8 h-[500px] flex flex-col items-center justify-center text-center space-y-20 bg-black/70 rounded-xl shadow-2xl ring-1 ring-[#F8E1C6]/30">
                    <h1 className="text-5xl text-[#F8E1C6] font-semibold">
                      {card.title}
                    </h1>
                    <p className="text-lg  text-[#F8E1C6] font-light leading-relaxed opacity-90">
                      {card.text}
                    </p>
                    <div className="w-50 h-[2px] bg-gradient-to-r from-transparent via-[#F8E1C6] to-transparent mt-4" />
                    <div className="absolute bottom-4 right-4 text-xs text-[#F8E1C6]/50 font-mono">
                      {Math.round(progress * 100)}%
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Closing Section */}
      <div className="min-h-screen bg-black text-[#F8E1C6] p-8 flex items-center justify-center">
        <div className="max-w-4xl text-center space-y-6">
          <h2 className="text-4xl font-light">Welcome to The Black Hound</h2>
          <p className="text-lg text-[#F8E1C6]/80 font-light leading-relaxed">
            Now that you&apos;ve learned about our story, vision, and values, we
            invite you to experience The Black Hound for yourself. Come join us
            for an unforgettable evening.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
