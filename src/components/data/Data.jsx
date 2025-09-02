import React from 'react';
import { Link } from 'react-router-dom';


function Data({ BackGroundImage, Header, Text, Para, Cta, Stats1, Stats2, Stats3, Stats4 }) {

  // const BackGroundImage= "https://img.freepik.com/free-photo/beautiful-shot-mountain-covered-by-green-trees-with-beautiful-blue-sky-clouds-background_181624-16423.jpg";
  // const Header = "Home";
  // const Text = "Your Gateway to MENA Growth";
  // const Para = 'Explore how our services can help you achieve your goals and connect with like-minded individuals.';
  // const Cta = "KNOW MORE";
  // const Stats1 = "25+";
  // const Stats2 = "25+";
  // const Stats3 = "25+";
  // const Stats4 = "25+";

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          `url('${BackGroundImage}')`,
      }}
    >
      <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 px-4 md:px-8'>
        <div className="p-4 md:p-8 lg:p-10 rounded-lg text-left">
          <p className="text-lg md:text-xl mb-4 max-w-2xl text-red-500 font-bold">
            <span className='text-black'></span>
            {Header}
          </p>
          <h1 className="text-5xl md:text-6xl mb-6 animate-fade-in-down w-1/2">
          <span className='text-black'>{Text}</span>
          </h1>

          <div className="h-3 w-1/6 bg-red-500 mb-5 "></div>

          <p className="text-lg md:text-xl mb-4 max-w-2xl">
          <span className='text-black'>{Para}</span>
            
          </p>

          <Link
            to="/contactus"
            className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:bg-gradient-to-l text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition hover:scale-105"
          >
            {Cta}
          </Link>
        </div>

        {/* <div className="bg-black bg-opacity-50 p-10 rounded-lg shadow-2xl text-center mt-24"></div> */}

        <div className="p-10 text-center mt-24">
          <div>
            <span className='text-7xl font-bold text-red-500'>{Stats1}</span>
            <br />
            <span className='text-black text-2xl'>Startups Launched</span>

          </div>
          <div>
            <span className='text-7xl font-bold text-red-500'>{Stats2}</span>
            <br />
            <span className='text-black text-2xl'>Industries Experts</span>

          </div>
        </div>

        {/* <div className="bg-black bg-opacity-50 p-10 rounded-lg shadow-2xl text-center mt-24"></div> */}

        <div className="p-10 text-center mt-24">
          <div>
            <span className='text-7xl font-bold text-red-500'>{Stats3}<br /></span>
            <span className='text-black text-2xl'>Locations across Asia</span>
          </div>
          <div>
            <span className='text-7xl font-bold text-red-500'>{Stats4}</span>
            <br />
            <span className='text-black text-2xl'>Member companies</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
