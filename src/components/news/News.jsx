import React from 'react';
import { Link } from 'react-router-dom';
import './News.css'

function News({BackroundImage, BackroundImage2,Header,Date,Time,EventDetails,News1Header,New2Text,News2Date}) {
  
  return (


   <div style={{backgroundColor:'#ededed'}} className='w-full pr-80 pl-52 mx-auto pt-24 pb-28'>
    <h1 style={{color:'#ea2935'}} className="text-2xl mb-4 max-w-2xl font-bold">{Header}</h1>
     <div style={{height:'360px'}} className='flex flex-col md:flex-row justify-center items-stretch'>
      {/* shadow */}
      <div style={{backgroundImage: `url(${BackroundImage})`}} className='w-8/12 bg-cover bg-center text-white pl-14 pt-6  flex flex-col'>
       <p className='text-base md:text-lg font-semibold'>{News1Header} </p>
       <div className=''>
         <p style={{fontSize:"20px", color:'#1e295c'}} className=' font-semibold  mt-44'>{EventDetails}</p>
        <p className='text-black text-sm md:text-base mt-3'>{Date} &nbsp;&nbsp;&nbsp;&nbsp; {Time}</p>
       </div>
      </div>

      <div style={{backgroundImage: `url(${BackroundImage2})`,height:'360px' }} className='w-2/6  h-60 md:h-72 lg:h-80 bg-cover bg-center pt-6 pb-10 pl-12 pr-12 text-white shadow'>
        <p className='text-base md:text-lg font-semibold'>{News1Header} </p>

       <div className='mt-36'>
         <p style={{fontSize:"20px", color:'#fff', lineHeight:'26px'}} className='text-sm md:text-base py-2 pb-3'>
          {New2Text} <br />
        </p>

        <p style={{borderTop:'1px solid #fff'}} className='text-sm md:text-base py-2'>
          {News2Date} <br />
        </p>

       </div>
      </div>
    </div>
   </div>

  );
}

export default News;
