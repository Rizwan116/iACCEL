import { Link } from 'react-router-dom';
import React from "react";
import Slider from "react-slick";
import './Crousel.css'
import CrouselCard from './CrouselCard';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

function Crousel({Header}) {
   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
       nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  // const Header = "What People says about us";
  // const Para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  // const Name = "John Doe";
  // const Role = "CEO, Company";
  // const Image = "https://img.freepik.com/free-photo/young-handsome-office_23-2148474918.jpg?w=740&t=st=1696545721~exp=1696546321~hmac=3a5f0d1e3e2e4f0f5f6e8e6c6e8e6c6e8e6c6e8e6c6e8e6c6e8e6c6e8e6c6e8";

  return (
    

    <div className="crousel-container w-full px-0 md:px-16 lg:px-32 mx-auto py-14 md:py-28">

      <h1 style={{color:'#ea2935'}} className='pb font-medium text-2xl uppercase mb-8 text-left px-3 md:px-24'>
        {Header}
      </h1>
      
      <Slider {...settings}>
        
        <CrouselCard 
        Para={<>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Sed do eiusmod tempor incididunt ut
        labore et dolore magna <br />  aliqua.Lorem ipsum dolor sit amet,  consectetur adipiscing elit.  Sed do eiusmod <br />  tempor incididunt ut labore et dolore <br /> magna aliqua" </>}
        Role=" Co-Founder HexiTime"
        Name="HESHAM ABDULLA" Image="CEO.png" />
        

         <CrouselCard 
        Para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" 
        Role=" Co-Founder HexiTime"
        Name="HESHAM ABDULLA" Image="CEO.png" />

         <CrouselCard 
        Para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" 
        Role=" Co-Founder HexiTime"
        Name="HESHAM ABDULLA" Image="CEO.png" />
      
    </Slider>

      </div>
  );
}

export default Crousel;
