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
      icon: "🏛️",
      color: "from-amber-600/20 to-yellow-500/20",
      borderColor: "from-[#F8E1C6] to-[#D4AF37]",
    },
    {
      title: "Our Vision",
      text: "Our vision is simple: to craft an atmosphere where warmth meets character, where every visit feels like coming home. We blend the classic charm of a traditional pub with a modern twist.",
      icon: "✨",
      color: "from-orange-600/20 to-amber-500/20",
      borderColor: "from-[#D4AF37] to-[#F8E1C6]",
    },
    {
      title: "Our Values",
      text: "At The Black Hound, we value authenticity, quality, and connection. From locally sourced brews to our welcoming staff, every detail reflects our commitment to delivering a heartfelt experience.",
      icon: "❤️",
      color: "from-yellow-600/20 to-orange-500/20",
      borderColor: "from-[#F8E1C6] to-[#D4AF37]",
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
        <div className="text-center max-w-3xl px-6">
          <motion.h2
            ref={titleRef}
            className="text-6xl text-[#F8E1C6] font-light leading-relaxed"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={isTitleInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{
              WebkitClipPath: "inset(0 100% 0 0)",
              textShadow: "0 0 2px #fff, 0 0 5px #f8e1c6aa",
            }}
          >
            Our Story, Vision and Values
          </motion.h2>
          <p className="mt-6 text-lg text-[#F8E1C6]/60">
            Scroll down to explore our journey
          </p>
        </div>
      </div>

      {/* Stacking Cards Section */}
      <div
        ref={containerRef}
        className="relative -mt-130"
style={{ height: `${(cardData.length - 1) * 100 + 80}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="relative w-full max-w-xl min-h-[600px] overflow-visible">
            {cardData.map((card, index) => {
              const total = cardData.length;
            const spread = 1; // Make cards transition faster
         let start, end;
              

if (index === 1) {
  // Widen scroll range for the second card
  start = 0.26;
  end = 0.56;
} else {
  start = (index / total) * spread;
  end = ((index + 1) / total) * spread;
}

                let progress = 0;
            if (scrollProgress < start) {
              progress = index === 0 ? scrollProgress * 5 : 0; // this fades in the first card faster
            } else if (scrollProgress < end) {
              progress = (scrollProgress - start) / (end - start);
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
                    className={`absolute inset-0 bg-gradient-to-r ${card.borderColor} rounded-xl p-[2px]`}
                  >
                    <div
                      className={`h-full w-full bg-gradient-to-br ${card.color} backdrop-blur-sm rounded-xl border border-[#F8E1C6]/20`}
                    />
                  </div>

                  {/* Card content */}
                  <div className="relative p-8 h-[500px] flex flex-col items-center justify-center text-center space-y-6 bg-black/70 rounded-xl shadow-2xl ring-1 ring-[#F8E1C6]/30">
                    <div className="text-5xl mb-4">{card.icon}</div>
                    <h3 className="text-3xl text-[#F8E1C6] font-semibold">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[#F8E1C6] font-light leading-relaxed opacity-90">
                      {card.text}
                    </p>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#F8E1C6] to-transparent mt-4" />
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
            Now that you've learned about our story, vision, and values, we
            invite you to experience The Black Hound for yourself. Come join us
            for an unforgettable evening.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
