import React from 'react';
import Slider from "react-slick";
import './SliderSection.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function SliderSection({Header,Text,Images}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
     nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  // const Header = "Startups";
  // const Text = "Where Startups Meet Success";
  // const Images = ['https://imgs.search.brave.com/mK7JRffijLaxpK-CJAdR7BHXnEWq316kd3S6-zsgtYc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbGFj/ZWl0LWltZy0xLXAu/Y2RuLmF3cy5wbGFj/ZWl0Lm5ldC91cGxv/YWRzL3N0YWdlL3N0/YWdlX2ltYWdlLzU3/ODA2L29wdGltaXpl/ZF9sYXJnZV90aHVt/Yl9zdGFnZS5qcGc', 'https://imgs.search.brave.com/h_MIoNSGirjfVZXrQbK_eto3brTBYrBWi2wxKKbtJaQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2Rlc2lnbi5u/ZXQvaW1hZ2VzL2hv/bWUtbG9nb3MvQ2xl/YW5pbmctbG9nby0t/LXdhdGVyLWRyb3At/aW4tYS1oZXhhZ29u/LXNoYXBlLmpwZw', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc'];

  return (
    <section className="slider-container">
      <div className='flex'>
        <div>
      <h1>{Header}</h1>
        </div>

        <div>
            <p>{Text}</p>
        </div>
      </div>
      <Slider {...settings}>
        <div className='cards'>
          <img src={Images[0]} alt="" />
        </div>
        <div className='cards'>
          <img src={Images[1]} alt="" />
        </div>
        <div className='cards'>
          <img src={Images[3]} alt="" />
        </div>
        <div className='cards'>
          <img src={Images[4]} alt="" />
        </div>
        <div className='cards'>
          <img src={Images[5]} alt="" />
        </div>
        <div className='cards'>
          <img src={Images[6]} alt="" />
        </div>
        <div className='cards'>
          <img src={Images[7]} alt="" />
        </div>
       <div className='cards'>
          <img src={Images[8]} alt="" />
        </div>
      </Slider>
    </section>
  );
}

export default SliderSection;
