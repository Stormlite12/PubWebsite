import React from 'react';
import { motion } from 'framer-motion';

const BarSections = () => {
  return (
    <section className="mx-auto min-h-screen z-10 flex flex-col md:flex-row justify-around items-center px-4 py-16">

      {/* Card Variants */}
      {[
        {
      
          subtitle: "Proper Pub Traditions",
          desc: "We honor centuries of pub culture with perfectly poured pints, proper glassware, and time-tested recipes. Our barkeeps train in the old ways.",
          imgSize: "w-[60px]",
          bgImg: "/assets/Heritage1.png",
        },
        {
   
          subtitle: "Liquid Artistry",
          desc: "From cask-conditioned ales to rare whiskies and craft cocktails with a twist, our menu rewards the curious drinker.",
          imgSize: "w-[90px]",
           bgImg: "/assets/wine.png",
        },
        {
          subtitle: "Dark & Lively",
          desc: "The Black Hound hums with crackling firelight, the clink of glasses, and nightly live folk music. Every corner tells a story.",
          imgSize: "w-[30px] mt-10",
          bgImg: "/assets/music.png",
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
              backgroundImage: `url(${section.bgImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <img src={section.img} alt={section.alt} className={`${section.imgSize} mb-4`} />
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
