import React from "react";

import Image from 'next/image';

const Footer=()=>{
    return(
       <section className="flex flex-col h-screen items-center justify-center px-4  bg-[#000000]">
                <div className="text-white text-4xl font-normal font-['Playfair_Display']  ">Find your way to us</div>
                <div className="border-b border-[#3a2a1a] border-t w-[90%] translate-y-5 ">
                    <div className="relative w-auto h-[50vh] mt-15 mb-10 mx-auto">
                    <Image
                        src="/assets/mappy.png"
                        alt="Map image"
                        fill
                        className="object-contain"
                    />
                    </div>

                <footer className="text-[#e5cfa2] py-4 ">
                   <div className="max-w-7xl mx-auto py-4 flex items-center">

                    {/* Left: Logo */}
                    <div className="flex-none">
                        <h1 className="text-xl font-semibold font-['Playfair_Display'] text-white">The Black Hound</h1>
                        <p className="text-sm text-[#9c8463]">Serving the finest drinks since 1987</p>
                    </div>

                    {/* Center: Nav */}
                    <nav className="flex-1 flex justify-center  space-x-6 font-['Playfair_Display'] text-sm font-medium text-[#e5cfa2]">
                        <a href="#" className="hover:text-white">Home</a>
                        <a href="#" className="hover:text-white">Events</a>
                        <a href="#" className="hover:text-white">Menu</a>
                        <a href="#" className="hover:text-white">Contact</a>
                        <a href="#" className="hover:text-white">About</a>
                    </nav>

                    {/* Right: Social */}
                    <div className="flex-none flex mr-20 space-x-4">
                        <div className="w-5 h-5">
                            <a href="#"><Image width={100} height={100}  src="/assets/fb.png" alt="social-media"  /></a>
                        </div>
                         <div className="w-5 h-5">
                            <a href="#"><Image width={100} height={100}  src="/assets/fb.png" alt="social-media"  /></a>
                        </div>
                          <div className="w-5 h-5">
                             <a href="#"><Image width={100} height={100}  src="/assets/fb.png" alt="social-media" /></a>
                        </div>
                    </div>

                    </div>

                </footer>
                </div>
                
        <div className="justify-start text-amber-100 text-base font-normal font-['Playfair_Display'] mb-4">© 2023 The Rustic Barrel. All rights reserved. | Privacy Policy | Terms of Service</div>
       </section>
    )
}

export default Footer;