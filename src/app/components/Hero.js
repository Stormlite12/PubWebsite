'use client'
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2100); // slightly longer than background animation (2.5s)

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null; // don't render anything until visible

  return (
    <section className=" flex flex-col lg:flex-row justify-between items-center px-[10%] relative mx-auto min-h-screen">
   <div className="text-[3rem] text-[#fcebd2]  absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 animate-slideFadeIn animate-neon-flicker font-slackey">
  Black Hound
</div>

    

<div className="w-full items-center ">
  <h2
    className="absolute bottom-20 right-50 flex items-baseline gap-2 font-['Merriweather'] text-[#fcebd2] xl:text-[3rem] lg:text-[2rem] font-extrabold leading-tight"
    style={{
      animation: 'slideUpFadeIn 1.5s ease forwards',
      animationDelay: '0s',
      textShadow: '2px 2px 6px rgba(0, 0, 0, 0.6)',
    }}
  >


    <div className="text-[3rem] text-[#fcebd2]  absolute -top-5 left-1/2 transform -translate-x-1/2 mt-4 font-slackey">
 Welcome
</div>


    
    
    {/* <p className="">
      <span className="xl:text-[3.5rem] lg:text-[2rem] italic -mt-6 leading-none">&ldquo; </span>
      Where the night&apos;s young <br />
      &nbsp;  &nbsp;and the beer&apos;s cold
       <span className="xl:text-[3.5rem] lg:text-[2rem] italic self-end leading-none">&rdquo;</span>
    </p> */}
   
  </h2>
</div>


    {/* <div>
     <p className=" absolute mx-auto font-['Playfair_Display'] xl:text-[2rem] lg:text-[0.8rem] md:text-[0.6rem] leading-[1.6] mt-5 text-[#fcebd2]">
      Welcome to The Black Hound — where the ale is cold, the food is hearty, and the music never stops.<br /><br />
      Whether you're here for a quiet pint or a night of live bands and laughter, we've got a table waiting just for you.
    </p> */}
    {/* <button className="mt-7 py-2 px-5 bg-[#fcebd2] text-[#963f25] font-bold xl:text-base lg:text-[0.8rem] md:text-[0.7rem] cursor-pointer border-none rounded-sm">
      Explore Menu
    </button> */}
    {/* </div> */}




    </section>
  );
};

export default Hero;




   