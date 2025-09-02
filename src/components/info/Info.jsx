import React from 'react';
import { Link } from 'react-router-dom';
import './Info.css'

function Info({ BackgroundImage1,BackgroundImage2,BackgroundImage3,BackgroundImage4,BackgroundImage5, Header, Text, Para, CardText1, CardText2, CardText3, CardText4, CardText5 }) {
  //  const BackroundImage = "https://img.freepik.com/free-photo/beautiful-shot-mountain-covered-by-green-trees-with-beautiful-blue-sky-clouds-background_181624-16423.jpg";
  // const Header = "Services";
  // const Text = "This is a sample text for the hero section. You can replace it with your own content to make it more relevant to your website or application.";
  // const Para = 'Explore how our services can help you achieve your goals and connect with like-minded individuals.';
  // const CardText1 = 'Market Acess'
  return (
    <div className="w-full px-4 md:px-16 mx-auto">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 justify-center items-start mt-10 mb-10">
        <div className="flex-1">
          <h2 className="text-xl sm:text-2xl md:text-4xl text-red-500 font-bold mb-4">{Header}</h2>
          <h1 className="text-2xl sm:text-4xl md:text-6xl mb-6">{Text}</h1>
          <div className="h-2 w-1/3 bg-red-500 mt-5"></div>
        </div>
        <div className="flex-1">
          <p className="text-base sm:text-lg md:text-2xl mt-8">{Para}</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-5 mb-20">
        <div
          style={{ backgroundImage: `url(${BackgroundImage1})` }}
          className="w-full sm:w-[48%] lg:w-[18%] h-60 bg-cover bg-center text-white flex justify-center items-center rounded-lg shadow"
        >
          <span className="text-red-500 text-lg font-bold">{CardText1}</span>
        </div>
        <div
          style={{ backgroundImage: `url(${BackgroundImage2})` }}
          className="w-full sm:w-[48%] lg:w-[18%] h-60 bg-cover bg-center text-white flex justify-center items-center rounded-lg shadow"
        >
          <span className="text-red-500 text-lg font-bold">{CardText2}</span>
        </div>
        <div
          style={{ backgroundImage: `url(${BackgroundImage3})` }}
          className="w-full sm:w-[48%] lg:w-[18%] h-60 bg-cover bg-center text-white flex justify-center items-center rounded-lg shadow"
        >
          <span className="text-red-500 text-lg font-bold">{CardText3}</span>
        </div>
        <div
          style={{ backgroundImage: `url(${BackgroundImage4})` }}
          className="w-full sm:w-[48%] lg:w-[18%] h-60 bg-cover bg-center text-white flex justify-center items-center rounded-lg shadow"
        >
          <span className="text-red-500 text-lg font-bold">{CardText4}</span>
        </div>
        <div
          style={{ backgroundImage: `url(${BackgroundImage5})` }}
          className="w-full sm:w-[48%] lg:w-[18%] h-60 bg-cover bg-center text-white flex justify-center items-center rounded-lg shadow"
        >
          <span className="text-red-500 text-lg font-bold">{CardText5}</span>
        </div>
      </div>
    </div>
  );
}

export default Info;
