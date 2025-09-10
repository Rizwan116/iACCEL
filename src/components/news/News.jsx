import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';import { Link } from 'react-router-dom';
import './News.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';



function News({BackroundImage, BackroundImage2,Header,Date,Time,EventDetails,News1Header,New2Text,News2Date}) {

  const slides = [
  {
    BackroundImage: "/news/Media1.png",
    BackroundImage2: "/MediaNewsBanner2.png",
    News1Header: "News",
    EventDetails: <>IAN Group and <br /> iACCEL GBI partnership</>,
    Date: <><b className='font-medium'>12 March 2025</b></>,
    Time: <>Time: <b className='font-medium'>08:30 AM - 1:00 PM</b> </>,
    New2Text: <>iACCEL GBI showcases <br className='hidden md:block' /> 7 startups at expand <br className='hidden md:block' /> North Star 2024 in Dubai</>,
    News2Date: <>Date: <b>12 March 2025</b></>,
  },
 {
    BackroundImage: "/news/Media2.png",
    BackroundImage2: "/MediaNewsBanner2.png",
    News1Header: "News",
    EventDetails: <>IAN Group and <br /> iACCEL GBI partnership</>,
    Date: <><b className='font-medium'>12 March 2025</b></>,
    Time: <>Time: <b className='font-medium'>08:30 AM - 1:00 PM</b> </>,
    New2Text: <>iACCEL GBI showcases <br className='hidden md:block' /> 7 startups at expand <br className='hidden md:block' /> North Star 2024 in Dubai</>,
    News2Date: <>Date: <b>12 March 2025</b></>,
  },
 {
    BackroundImage: "/news/Media3.jpg",
    BackroundImage2: "/MediaNewsBanner2.png",
    News1Header: "News",
    EventDetails: <>IAN Group and <br /> iACCEL GBI partnership</>,
    Date: <><b className='font-medium'>12 March 2025</b></>,
    Time: <>Time: <b className='font-medium'>08:30 AM - 1:00 PM</b> </>,
    New2Text: <>iACCEL GBI showcases <br className='hidden md:block' /> 7 startups at expand <br className='hidden md:block' /> North Star 2024 in Dubai</>,
    News2Date: <>Date: <b>12 March 2025</b></>,
  },

   {
    BackroundImage: "/news/Media4.jpg",
    BackroundImage2: "/MediaNewsBanner2.png",
    News1Header: "News",
    EventDetails: <>IAN Group and <br /> iACCEL GBI partnership</>,
    Date: <><b className='font-medium'>12 March 2025</b></>,
    Time: <>Time: <b className='font-medium'>08:30 AM - 1:00 PM</b> </>,
    New2Text: <>iACCEL GBI showcases <br className='hidden md:block' /> 7 startups at expand <br className='hidden md:block' /> North Star 2024 in Dubai</>,
    News2Date: <>Date: <b>12 March 2025</b></>,
  },
];

  
  return (


  <>
<div style={{backgroundColor:'#ededed'}} className='w-full pr-0 md:pr-80 pl-0 md:pl-52 mx-auto pt-14 md:pt-24 pb-60 md:pb-40'>
<h1 style={{color:'#ea2935'}} className="text-2xl mb-0 md:mb-4 font-bold px-5 md:px-0">{Header}</h1>
   <Swiper
  style={{
    "--swiper-navigation-color": "#fff",
    "--swiper-pagination-color": "#fff",
  }}
  lazy={true}
  pagination={{ clickable: true }}
  navigation={true}
  modules={[Pagination, Navigation]}
  className="mySwiper"
>
  {slides.map((slide, index) => (
    <SwiperSlide key={index}>
      <div
        style={{ height: "360px" }}
        className="flex flex-col md:flex-row justify-center items-stretch mt-44 md:mt-auto px-5 md:px-0 "
      >

        
        {/* Left big image */}
        <div
          style={{ backgroundImage: `url(${slide.BackroundImage})` }}
          className="w-full md:w-8/12 bg-cover bg-center text-white pl-3 md:px-14 pt-6 pb-5 md:pb-0 flex flex-col mobile-bg-container "
        >
         
<p className="text-base md:text-lg font-semibold ">{slide.News1Header}</p>
          <div className=''>
            
            <p
              style={{ fontSize: "20px", color: "#1e295c" }}
              className="font-semibold mt-44"
            >
              {slide.EventDetails}
            </p>
            <p className="text-black text-sm md:text-base mt-3">
              {slide.Date} &nbsp;&nbsp;&nbsp;&nbsp; {slide.Time}
            </p>
          </div>
         
          
        </div>

        {/* Right small image */}
        <div
          style={{
            backgroundImage: `url(${slide.BackroundImage2})`,
            height: "360px",
          }}
          className="w-full md:w-2/6 h-60 md:h-72 lg:h-80 bg-cover bg-center pt-6 pb-10 pl-5 md:pl-12 pr-5 md:pr-12 text-white shadow"
        >
          <p className="text-base md:text-lg font-semibold">{slide.News1Header}</p>
          <div className="mt-16 md:mt-36">
            <p
              style={{ fontSize: "20px", color: "#fff", lineHeight: "26px" }}
              className="text-sm md:text-base py-2 pb-3"
            >
              {slide.New2Text}
            </p>
            <p
              style={{ borderTop: "1px solid #fff" }}
              className="text-sm md:text-base py-2"
            >
              {slide.News2Date}
            </p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
   </div>
   {/* <div style={{backgroundColor:'#ededed'}} className='w-full pr-0 md:pr-80 pl-0 md:pl-52 mx-auto pt-14 md:pt-24 pb-60 md:pb-40'>
    <h1 style={{color:'#ea2935'}} className="text-2xl mb-0 md:mb-4 font-bold px-5 md:px-0">{Header}</h1>
     <div style={{height:'360px'}} className='flex flex-col md:flex-row justify-center items-stretch mt-44 md:mt-auto px-5  md:px-0'>
     
      <div data-sal="fade"
        data-sal-delay="400"
        data-sal-duration="800"  style={{backgroundImage: `url(${BackroundImage})`}} className='w-full md:w-8/12 bg-cover bg-center text-white pl-3 md:px-14 pt-6 pb-5 md:pb-0  flex flex-col mobile-bg-container '>
       <p className='text-base md:text-lg font-semibold'>{News1Header} </p>
       <div className=''>
         <p style={{fontSize:"20px", color:'#1e295c'}} className=' font-semibold  mt-44'>{EventDetails}</p>
        <p className='text-black text-sm md:text-base mt-3'>{Date} &nbsp;&nbsp;&nbsp;&nbsp; {Time}</p>
       </div>
      </div>

      <div data-sal="fade"
        data-sal-delay="400"
        data-sal-duration="800" style={{backgroundImage: `url(${BackroundImage2})`,height:'360px' }} className='w-full md:w-2/6 h-60 md:h-72 lg:h-80 bg-cover bg-center pt-6 pb-10 pl-5 md:pl-12 pr-5 md:pr-12 text-white shadow'>
        <p className='text-base md:text-lg font-semibold'>{News1Header} </p>

       <div className='mt-16 md:mt-36'>
         <p style={{fontSize:"20px", color:'#fff', lineHeight:'26px'}} className='text-sm md:text-base py-2 pb-3'>
          {New2Text} <br />
        </p>

        <p style={{borderTop:'1px solid #fff'}} className='text-sm md:text-base py-2'>
          {News2Date} <br />
        </p>

       </div>
      </div>
    </div>
   </div> */}
  </>

  );
}

export default News;
