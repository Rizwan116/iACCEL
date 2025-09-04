// import React from 'react';
import { Link } from 'react-router-dom';
import '../home/Home.css'

import React from "react";

function Hero({ backgroundImage, title, text, subtext }) {
   
  return (
    <div  data-sal="fade"
        data-sal-delay="400"
        data-sal-duration="800"
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center text-white relative mobile "
  style={{ backgroundImage: `url(${backgroundImage})` }}
    >
     
      <div className="bg-black bg-opacity-50  shadow-2xl w-full h-full flex flex-col absolute inset 0 z-10 z-0 items-center justify-center animate-fadeInDown">
         
        <h1 className="pl-10 md:pl-0 text-4xl sm:text-5xl md:text-6xl mb-6 animate-fadeInDown w-full max-w-6xl pt-28">
          <span style={{color:'red',}} className="text-3xl md:text-1xl leading-[3rem] animate-fadeInDown w-full max-w-6xl ">{subtext}</span><br />
          {title}
        </h1>
        
        <p style={{textAlign:'left'}} className="'text-3xl sm:text-2xl md:text-1xl mb-6 animate-fadeInDown w-full max-w-6xl pl-10 md:pl-0 pr-5 md:pr-0 ">{text}</p>
        
      </div>
    </div>
  );
}

export default Hero;

