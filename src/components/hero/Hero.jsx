// import React from 'react';
import { Link } from 'react-router-dom';
import '../home/Home.css'

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion } from "framer-motion";


import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";


const slides = [
  {
    
    image: "/3.png",
    // title: "Welcome to Our Website",
    // subtitle: "Discover amazing features with us",
      direction: "left",
  },
  {
    image: "/2.jpg",
    // title: "Build Your Dreams",
    // subtitle: "We create solutions that inspire",
        direction: "left",

  },
  {
    image: "/4.jpg",
    // title: "Innovation & Technology",
    // subtitle: "Experience next-level design",
        direction: "left",

  },
   {
    image: "/1.jpg",
    // title: "Innovation & Technology",
    // subtitle: "Experience next-level design",
        direction: "left",

  },
];

function Hero({ backgroundImage, title, text, subtext }) {

    const [activeIndex, setActiveIndex] = useState(0);

   
  return (


    <>
      <style>
       {

         `@media (max-width: 768px) {
           .swiper-slide {
             width: 100% !important;
             }
             .hv50 {
              height: 65vh !important;
             }
          }`
       }
        
      </style>

      <div className="bg-black bg-opacity-50 relative w-full hv50 md:h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Background Zoom */}
            <motion.div
              key={`bg-${activeIndex}`} // re-trigger zoom every time
              className="absolute inset-0 bg-cover bg-top"
              style={{ backgroundImage: `url(${slide.image})` }}
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 4, ease: "easeInOut" }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-white/15"></div>

            {/* Text Animation */}
            {/* justify-center text-center max-w-6xl */}
            <div className=" relative flex items-center h-full px-5 md:px-48">
              <motion.div
                key={`text-${activeIndex}`} // important for re-trigger
                initial={{
                  x: slide.direction === "left" ? -200 : 200,
                  opacity: 0,
                }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="p-6 rounded-xl max-w-xl text-white"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {title}
                </h1>
                <p className="text-lg md:text-xl ">{text}</p>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>

      
  );
}

export default Hero;

