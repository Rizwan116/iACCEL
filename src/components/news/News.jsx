import React from 'react';
import { Link } from 'react-router-dom';

function News() {
  const BackroundImage = "https://img.freepik.com/free-photo/beautiful-shot-mountain-covered-by-green-trees-with-beautiful-blue-sky-clouds-background_181624-16423.jpg";
  const Header = "Media";
  const Date = "Date: 12 March 2025";
  const Time = "Time: 08:30 AM - 1:00 PM";
  const EventDetails = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
  const News1Header = "News";
  const New2Text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
  const News2Date = "22 March 2203";
  
  return (
   

   <div>
    <h1>{Header}</h1>
     <div className='flex'>
      
      <div style={{backgroundImage: `url(${BackroundImage})`}} className='w-1/3 h-60 bg-cover bg-center text-white flex flex-col justify-center items-left m-5 p-5'>
        <p>{EventDetails}</p>
        <p>{Date} {Time}</p>
      </div>

      <div style={{backgroundImage: `url(${BackroundImage})`}} className='w-1/3 h-60 bg-cover bg-center text-white flex flex-col justify-center items-left m-5 p-5'>
        <p>{News1Header} </p>

        <p>
          {New2Text} <br />
        </p>

        <p>
          {News2Date} <br />
        </p>

      </div>
    </div>
   </div>

  );
}

export default News;
