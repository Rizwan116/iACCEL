import React from 'react';
import { Link } from 'react-router-dom';
import "sal.js/dist/sal.css";
import sal from "sal.js";
import { useEffect } from "react";


function Data({ BackGroundImage, Header, Text, Para, Cta, Stats1, Stats2, Stats3, Stats4,Line, Head1, Head2, Head3, Head4,Line2 }) {
useEffect(() => {
    sal({
      threshold: 0.1,  // 10% of element visible before animation starts
      once: true,      // animate only once
    });
  }, []);

  return (
    
    <div
      className="flex flex-col justify-center items-center  bg-cover bg-center text-white pb-10 md:pb-0 min-h-[92vh]"
      style={{
        backgroundImage:
          `url('${BackGroundImage}')`,
      }}
    >
      {/* gap-6 lg:gap-10 max-w-6xl */}
      <div 
         className='flex flex-col lg:flex-row gap-8 md:gap-72 '>
        {/* p-4 md:p-8 lg:p-9 */}
        <div data-sal="slide-right"
        data-sal-delay="400"
        data-sal-duration="800" className="rounded-lg text-left">
          <p style={{color:'#ea2935'}} className="text-lg md:text-xl mb-4 max-w-2xl font-bold mt-12 md:mt-0 px-10 md:px-0">
            <span className='text-black'></span>
            {Header}
          </p>
          {/* w-1/2  */}
          <h1 className="text-4xl md:text-6xl mb-6 animate-fade-in-down px-10 md:px-0">
          <span style={{color:'#1e295c'}} className=''>{Text}</span>
          </h1>

          

          <div className='pl-4 md:pl-0'>
            {Line}
          </div>

          <p className="md-0 md:mb-9 max-w-2xl px-10 md:px-0">
            {/* fontSize:'21px' */}
          <span style={{}} className='text-black text-xl md:text-xl '>{Para}</span>
            
          </p>

          
           <div className='pl-4 md:pl-0 mt-10 md:mt-0'>
             {Cta}
           </div>
          
        </div>

        {/* <div className="bg-black bg-opacity-50 p-10 rounded-lg shadow-2xl text-center mt-24"></div> */}
{/* style={{alignItems:'center'}} */}
        <div data-sal="zoom-in"
        data-sal-delay="400"
        data-sal-duration="800"  className='flex md:flex-row gap-4 md:gap-14 p-10 justify-center'>
          <div  className="text-center flex justify-evenly flex-col animate-fadeInRight duration-2000 delay-300">
          <div  style={{textAlign:'left'}}>
            <span  style={{color:'#eb2935'}} className='text-6xl md:text-8xl font-extrabold delay-300'>{Stats1}</span>
            <br />
            <span style={{color:'#1e295c',fontSize:'18px',lineHeight:'5px'}} className=' delay-300'><b>{Head1}</b></span>

         
          </div>
          <div  style={{textAlign:'left'}}>
            <span  style={{color:'#eb2935'}} className='text-6xl md:text-7xl font-extrabold'>{Stats2}</span>
            <br />
            <span style={{color:'#1e295c',fontSize:'18px',lineHeight:'5px'}} className=''><b>{Head2}</b></span>

          </div>
        </div>

        {/* <div className="bg-black bg-opacity-50 p-10 rounded-lg shadow-2xl text-center mt-24"></div> */}

         {Line2}

       

        <div className="text-center flex justify-evenly flex-col pl-5 animate-fadeInRight duration-2000 delay-300">
          <div style={{textAlign:'left'}}>
            <span  style={{color:'#eb2935'}} className='text-6xl md:text-8xl font-extrabold'>{Stats3}<br /></span>
            <span style={{color:'#1e295c',fontSize:'18px',lineHeight:'5px'}} className=''><b>{Head3}</b></span>
          </div>
          <div style={{textAlign:'left'}}>
            <span   style={{color:'#eb2935'}} className='text-6xl md:text-8xl font-extrabold'>{Stats4}</span>
            <br />
            <span style={{color:'#1e295c',fontSize:'18px',lineHeight:'5px'}} className=''><b>{Head4}</b></span>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
