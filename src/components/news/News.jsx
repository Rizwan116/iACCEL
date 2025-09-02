import React from 'react';
import { Link } from 'react-router-dom';
import './News.css'

function News({BackroundImage, BackroundImage2,Header,Date,Time,EventDetails,News1Header,New2Text,News2Date}) {
  // const BackroundImage = "https://img.freepik.com/free-photo/beautiful-shot-mountain-covered-by-green-trees-with-beautiful-blue-sky-clouds-background_181624-16423.jpg";
  // const Header = "Media";
  // const Date = "Date: 12 March 2025";
  // const Time = "Time: 08:30 AM - 1:00 PM";
  // const EventDetails = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
  // const News1Header = "News";
  // const New2Text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
  // const News2Date = "22 March 2203";
  
  return (
   

   <div className='w-full px-4 md:px-12 mx-auto'>
    <h1 className='text-red-500 text-2xl sm:text-3xl md:text-4xl uppercase pl-2 sm:pl-8 md:pl-14 mb-8'>{Header}</h1>
     <div className='flex flex-col md:flex-row justify-center items-stretch gap-6'>
      
      <div style={{backgroundImage: `url(${BackroundImage})`}} className='w-full md:w-1/2 lg:w-1/3 h-60 bg-cover bg-center text-white p-4 md:p-5 rounded-lg shadow'>
        <p className='text-black mt-24 md:mt-40 lg:mt-48 text-base md:text-lg font-semibold'>{EventDetails}</p>
        <p className='text-black text-sm md:text-base'>{Date} {Time}</p>
      </div>

      <div style={{backgroundImage: `url(${BackroundImage2})`}} className='w-full md:w-1/2 lg:w-1/3 h-60 md:h-72 lg:h-80 bg-cover bg-center p-4 md:p-5 text-white rounded-lg shadow'>
        <p className='mt-20 md:mt-32 lg:mt-40 text-base md:text-lg font-semibold'>{News1Header} </p>

        <p className='text-sm md:text-base'>
          {New2Text} <br />
        </p>

        <p className='text-sm md:text-base'>
          {News2Date} <br />
        </p>

      </div>
    </div>
   </div>

  );
}

export default News;
