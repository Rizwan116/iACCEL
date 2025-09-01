import React from 'react';
import { Link } from 'react-router-dom';


function Data() {

  const BackGroundImage= "https://img.freepik.com/free-photo/beautiful-shot-mountain-covered-by-green-trees-with-beautiful-blue-sky-clouds-background_181624-16423.jpg";
  const Header = "Home";
  const Text = "Your Gateway to MENA Growth";
  const Para = 'Explore how our services can help you achieve your goals and connect with like-minded individuals.';
  const Cta = "KNOW MORE";
  const Stats1 = "25+";
  const Stats2 = "25+";
  const Stats3 = "25+";
  const Stats4 = "25+";

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          `url('${BackGroundImage}')`,
      }}
    >
      <div className='flex gap-10'>
        <div className="bg-black bg-opacity-50 p-10 rounded-lg shadow-2xl text-left">
         <p className="text-lg md:text-xl mb-4 max-w-2xl">
         {Header}
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-down">
         {Text}
        </h1>
        <p className="text-lg md:text-xl mb-4 max-w-2xl">
         {Para}
        </p>
        
        <Link
          to="/contactus"
          className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:bg-gradient-to-l text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition hover:scale-105"
        >
          {Cta}
        </Link>
      </div>

       <div className="bg-black bg-opacity-50 p-10 rounded-lg shadow-2xl text-center">
          <div>
           {Stats1}
           <br />
           starresdf
          </div>
           <div>
            {Stats2}
            <br />
            lksjdfkls
          </div>
      </div>
       <div className="bg-black bg-opacity-50 p-10 rounded-lg shadow-2xl text-center">
          <div>
            {Stats3}<br />
            sdfsfsf
          </div>
           <div>
            {Stats4}
            <br />
            sjdflksdjf
          </div>
      </div>
      </div>
    </div>
  );
}

export default Data;
