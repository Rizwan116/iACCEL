

import React from "react";
import './SliderSection.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react"; // for icons
import { NavLink } from "react-router-dom";

const SliderSection = ({ Images,Header,Text,Para,Line,Emp,hyperlinks }) => {
  return (

    
    <div className="bg-[#0a1a44] py-10 px-5 relative">

       <style>{`
        @media (max-width: 768px) {
.swiper-slide {
    width: 280px !important;
    
}
}
      `}</style>

<div>
  {Emp}
</div>
{/* min-h-[525px] */}
 <section 
 
 data-sal="fade"
        data-sal-delay="600"
        data-sal-duration="800"  
        
        style={{backgroundColor:'#0a1a44', overflow:'none'
 }} className="pt-10 md:pt-0 px-4 sm:px-8 md:px-16 lg:px-[150px] slider-container h-auto  pb-20">
      <div className='flex flex-col items-start'>
        <div>
      <h1 style={{color:'#eb2935'}} className="text-lg md:text-xl mb-4 max-w-2xl font-bold">{Header}</h1>
        </div>

        <div>
           {/* className='text-2xl sm:text-4xl md:text-6xl text-white mt-2' */}
             <p  className="text-4xl md:text-6xl mb-6 animate-fade-in-down text-white" >{Text}</p>
         </div>
        {Line}
       </div>

        <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        loop
        className="pb-12"
      >
        {Images.map((Image, index) => (
          <SwiperSlide key={index}>
           <a target="_blank" href={Image.hyperlinks}>
             <div className="bg-white rounded-xl shadow-md flex items-center justify-center h-auto transition-transform duration-300 hover:scale-105 w-full md:w-auto" style={{height: '273px', width: '280px'}}>
              <img src={Image.src} alt={Image.name} className="w-4/5 md:w-auto h-48 md:h-auto" style={{ height: '160px', width: '170px', objectFit: 'contain'}} />
            </div>
           </a>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      <div className="absolute bottom-20 right-36 md:right-44 flex space-x-2">
        <button className="custom-prev border border-red-500 text-red-500 rounded-md w-8 h-8 flex items-center justify-center hover:bg-red-500 hover:text-white transition">
          <ChevronLeft size={18} />
        </button>
        <button className="custom-next border border-red-500 text-red-500 rounded-md w-8 h-8 flex items-center justify-center hover:bg-red-500 hover:text-white transition">
          <ChevronRight size={18} />
        </button>
      </div>
     </section>


     
    </div>
  );
};

export default SliderSection;
