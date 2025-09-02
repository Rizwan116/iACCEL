// import React from 'react';
// import Slider from "react-slick";
// import { Link } from 'react-router-dom';
// import './SliderSection.css'


// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block"}}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block"}}
//       onClick={onClick}
//     />
//   );
// }

// function SliderSection({Header,Text,Images}) {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//      nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />
//   };

 

//   return (
//     <section className="pt-20 px-4 sm:px-8 md:px-16 lg:px-[150px] slider-container bg-blue-900 h-auto min-h-[525px]">
//       <div className='flex flex-col items-start'>
//         <div>
//       <h1 style={{color:'#eb2935'}} className="text-lg md:text-xl mb-4 max-w-2xl font-bold">{Header}</h1>
//         </div>

//         <div>
//           {/* className='text-2xl sm:text-4xl md:text-6xl text-white mt-2' */}
//             <p  className="text-6xl md:text-6xl mb-6 animate-fade-in-down text-white" >{Text}</p>
//         </div>
//         <div style={{backgroundColor:'#eb2935'}} className="h-4 w-1/12 mt-3 mb-10"></div>
//       </div>
//       <Slider {...settings} >
//         <div style={{color:'red', width:'50px'}}>
//           <div className='w-1/1'>
//           {/* <img src={Images[0]} alt="" /> */}
//           <Link> 
//               <img src={Images[0]} alt="" className='w-2/3 h-auto' />
//           </Link>
//         </div>
//         </div>
//          <div className=' w-1/4'>
//           {/* <img src={Images[0]} alt="" /> */}
//           <Link> 
//               <img src={Images[1]} alt="" className='w-2/3 h-auto' />
//           </Link>
//         </div>
//          <div className=' w-1/4'>
//           {/* <img src={Images[0]} alt="" /> */}
//           <Link> 
//               <img src={Images[2]} alt="" className='w-2/3 h-auto' />
//           </Link>
//         </div>
//          <div className=' w-1/4'>
//           {/* <img src={Images[0]} alt="" /> */}
//           <Link> 
//               <img src={Images[3]} alt="" className='w-2/3 h-auto' />
//           </Link>
//         </div>
//          <div className=' w-1/4'>
//           {/* <img src={Images[0]} alt="" /> */}
//           <Link> 
//               <img src={Images[4]} alt="" className='w-2/3 h-auto' />
//           </Link>
//         </div>
//          <div className=' w-1/4'>
//           {/* <img src={Images[5]} alt="" /> */}
//           <Link> 
//               <img src={Images[5]} alt="" className='w-2/3 h-auto' />
//           </Link>
//         </div>
//       </Slider>
//     </section>
//   );
// }

// export default SliderSection;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react"; // for icons

const SliderSection = ({ Images,Header,Text }) => {
  return (
    <div className="bg-[#0a1a44] py-10 px-5 relative">


 <section style={{backgroundColor:'#0a1a44'
 }} className="pt-20 px-4 sm:px-8 md:px-16 lg:px-[150px] slider-container h-auto min-h-[525px] pb-20">
      <div className='flex flex-col items-start'>
        <div>
      <h1 style={{color:'#eb2935'}} className="text-lg md:text-xl mb-4 max-w-2xl font-bold">{Header}</h1>
        </div>

        <div>
           {/* className='text-2xl sm:text-4xl md:text-6xl text-white mt-2' */}
             <p  className="text-6xl md:text-6xl mb-6 animate-fade-in-down text-white" >{Text}</p>
         </div>
         <div style={{backgroundColor:'#eb2935'}} className="h-4 w-1/12 mt-3 mb-10"></div>
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
            <div className="bg-white rounded-xl shadow-md flex items-center justify-center h-auto transition-transform duration-300 hover:scale-105">
              <img src={Image.src} alt={Image.name} className="w-2/2 h-auto" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      <div className="absolute bottom-20 right-44 flex space-x-2">
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
