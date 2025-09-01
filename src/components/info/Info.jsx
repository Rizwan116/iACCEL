import React from 'react';
import { Link } from 'react-router-dom';

function Info() {
   const BackroundImage = "https://img.freepik.com/free-photo/beautiful-shot-mountain-covered-by-green-trees-with-beautiful-blue-sky-clouds-background_181624-16423.jpg";
  const Header = "Services";
  const Text = "This is a sample text for the hero section. You can replace it with your own content to make it more relevant to your website or application.";
  const Para = 'Explore how our services can help you achieve your goals and connect with like-minded individuals.';
  const CardText1 = 'Market Acess'
  return (
    <div>
       <div className='flex gap-10 justify-center items-left mt-20 mb-20'>

      <div>
        <p>
        {Header}
        </p>
        <h1>
        {Text}
        </h1>
      </div>

      <div>
        <p>
        {Para}
        </p>
      </div>

     </div>

     <div className='flex mt-5 mb-20'>
      <div style={{backgroundImage: `url(${BackroundImage})`}} className='w-1/5 h-60 bg-cover bg-center text-white flex justify-center items-center m-5'>
      {CardText1}
      </div>
       <div style={{backgroundImage: `url(${BackroundImage})`}} className='w-1/5 h-60 bg-cover bg-center text-white flex justify-center items-center m-5'>
      {CardText1}
      </div>
       <div style={{backgroundImage: `url(${BackroundImage})`}} className='w-1/5 h-60 bg-cover bg-center text-white flex justify-center items-center m-5'>
      {CardText1}
      </div>
       <div style={{backgroundImage: `url(${BackroundImage})`}} className='w-1/5 h-60 bg-cover bg-center text-white flex justify-center items-center m-5'>
      {CardText1}
      </div>
     <div style={{backgroundImage: `url(${BackroundImage})`}} className='w-1/5 h-60 bg-cover bg-center text-white flex justify-center items-center m-5'>
      {CardText1}
      </div>
     </div>

    </div>
  );
}

export default Info;
