import { Link } from 'react-router-dom';
import React from "react";
import Slider from "react-slick";
import './Crousel.css'


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

function Crousel() {
   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
       nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const Header = "What People says about us";
  const Para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const Name = "John Doe";
  const Role = "CEO, Company";
  const Image = "https://img.freepik.com/free-photo/young-handsome-office_23-2148474918.jpg?w=740&t=st=1696545721~exp=1696546321~hmac=3a5f0d1e3e2e4f0f5f6e8e6c6e8e6c6e8e6c6e8e6c6e8e6c6e8e6c6e8e6c6e8";

  return (
    

    <div className="crousel-container">

      <h1>
        {Header}
      </h1>
      
      <Slider {...settings}>
      <div>
        <div className='flex gap-10 justify-center items-left mt-20 mb-20'>
          <div>
            {Image && <img src={Image} alt="Person" className="w-48 h-48 rounded-full object-cover" />}
          </div>
          <div>
            <p>{Para}</p>
             <p>{Name}</p>
              <p>{Role}</p>
          </div>
        </div>
      </div>

      <div>
        <div className='flex gap-10 justify-center items-left mt-20 mb-20'>
          <div>
            {Image && <img src={Image} alt="Person" className="w-48 h-48 rounded-full object-cover" />}
          </div>
          <div>
            <p>{Para}</p>
             <p>{Name}</p>
              <p>{Role}</p>
          </div>
        </div>
      </div>

     <div>
        <div className='flex gap-10 justify-center items-left mt-20 mb-20'>
          <div>
            {Image && <img src={Image} alt="Person" className="w-48 h-48 rounded-full object-cover" />}
          </div>
          <div>
            <p>{Para}</p>
             <p>{Name}</p>
              <p>{Role}</p>
          </div>
        </div>
      </div>


    
    </Slider>

      </div>
  );
}

export default Crousel;
