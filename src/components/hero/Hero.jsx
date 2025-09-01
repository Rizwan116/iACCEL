// import React from 'react';
// import { Link } from 'react-router-dom';

// function Hero() {

//   const BackroundImage = "https://img.freepik.com/free-photo/beautiful-shot-mountain-covered-by-green-trees-with-beautiful-blue-sky-clouds-background_181624-16423.jpg";
//   const Header = "Home";
//   const Text = "This is a sample text for the hero section. You can replace it with your own content to make it more relevant to your website or application.";
//   const Para = 'Explore how our services can help you achieve your goals and connect with like-minded individuals.';

//   return (
//     <div
//       className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center text-white"
//       style={{
//         backgroundImage:
//           `url(${BackroundImage})`,
//       }}
//     >
//       <div className="bg-black bg-opacity-50 p-10 rounded-lg shadow-2xl text-center">
//         <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-down">
//           {Header}
//         </h1>
//         <p className="text-lg md:text-xl mb-4 max-w-2xl">
//           {Text} 
//         </p>
//         <p className="text-lg md:text-xl mb-8 max-w-2xl">
//          {Para}
//         </p>
       
//       </div>
//     </div>
//   );
// }

// export default Hero;


import React from "react";

function Hero({ backgroundImage, title, text, subtext }) {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-lg shadow-2xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-down">
          {title}
        </h1>
        <p className="text-lg md:text-xl mb-4 max-w-2xl">{text}</p>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">{subtext}</p>
      </div>
    </div>
  );
}

export default Hero;

