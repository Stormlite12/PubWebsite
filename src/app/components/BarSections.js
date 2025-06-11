import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const BarSections = () => {
  return (
    <section className="mx-auto min-h-screen z-10 flex flex-col md:flex-row justify-around items-center px-4 py-16">

      {/* Card Variants */}
      {[
        {
      
          subtitle: "Proper Pub Traditions",
          desc: "We honor centuries of pub culture with perfectly poured pints, proper glassware, and time-tested recipes. Our barkeeps train in the old ways.",
          ImageSize: "w-[60px]",
          bgImage: "/assets/Heritage1.png",
        },
        {
   
          subtitle: "Liquid Artistry",
          desc: "From cask-conditioned ales to rare whiskies and craft cocktails with a twist, our menu rewards the curious drinker.",
          ImageSize: "w-[90px]",
           bgImage: "/assets/wine.png",
        },
        {
          subtitle: "Dark & Lively",
          desc: "The Black Hound hums with crackling firelight, the clink of glasses, and nightly live folk music. Every corner tells a story.",
          ImageSize: "w-[30px] mt-10",
          bgImage: "/assets/music.png",
        }
      ].map((section, idx) => (
     <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.5 }}
          viewport={{ once: true }}
          className="book"
        >
          <div
            className="cover"
            style={{
              backgroundImage: `url(${section.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Image src={section.bgImage} alt='bgimage' fill className={`${section.ImageSize} mb-4`} />
            <div className="text font-bold text-xl">{section.title}</div>
          </div>

          <div className="inner">
            <h3 className="italic text-lg mb-2">{section.subtitle}</h3>

            {/* Fade in description after card animation */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1 + idx * 0.5, // delay same as card animation duration + index delay
                duration: 0.5,
              }}
            >
              {section.desc}
            </motion.p>
          </div>
</motion.div>

      ))}
    </section>
  );
};

export default BarSections;
