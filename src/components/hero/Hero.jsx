// import React from 'react';
import { Link } from 'react-router-dom';
import '../home/Home.css'

import React from "react";

function Hero({ backgroundImage, title, text, subtext }) {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center text-white relative"
      style={{ backgroundImage: `url(${backgroundImage})` } }
    >
      <div className="bg-black bg-opacity-50 p-4 sm:p-8 md:p-10 rounded-lg shadow-2xl w-full h-full flex flex-col absolute inset 0 z-10 z-0 items-center justify-center">
        
        <h1 className="text-3xl sm:text-5xl md:text-6xl mb-6 animate-fade-in-down w-full max-w-3xl">
          {title}
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl  mb-4 max-w-2xl">{text}</p>
        <p className="text-base sm:text-lg md:text-xl  mb-8 max-w-2xl">{subtext}</p>
      </div>
    </div>
  );
}

export default Hero;

