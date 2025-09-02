import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import Data from '../data/Data';
import SliderSection from '../slider/SliderSection';
import Crousel from '../crousel/Crousel';
import News from '../news/News';
import Hero from '../hero/Hero';
import Info from '../info/Info';

function Home() {

  return (
    <div>
    
      <Hero  backgroundImage="public/AboutUsBanner.jpg"
      title=
      <>
      Collaboration <br /> Fueling <br /> Global Growth.
      <img src="public/Homeicon1.png" alt="arrow" className="inline w-6 h-6 ml-2 align-middle" />

      {/* // text="iACCEL is a go-to-market accelerator designed to support global tech startups to expand into the Middle East using Dubai as its launchpad" */}

     <div className='mt-5 text-lg sm:text-xl md:text-2xl lg:text-3xl w-full sm:w-3/4 md:w-1/2 text-gray-300'>iACCEL is a go-to-market accelerator designed to support global tech startups to expand into the Middle East using Dubai as its launchpad</div>

      </>
      // subtext="Explore how our services can help you achieve your goals and connect with like-minded individuals."
     />


     <Data BackGroundImage="public/HomeBanner.png" Header="ABOUT US" Text="Your Gateway to MENA Growth" Para="Using Dubai as your strategic launchpad, we offer comprehensive services including company formation, office space, a high-touch market access model, government engagement, enterprise partnerships, and investor connectivity." Cta="KNOW MORE" Stats1="25+" Stats2="500+" Stats3="06+" Stats4="22+" />

      <Info BackgroundImage1 = "/HomeServiceIcons.png"
      BackgroundImage2 = "/HomeServiceIcons2.png"
      BackgroundImage3 = "/HomeServiceIcons3.png"
      BackgroundImage4 = "/HomeServiceIcons4.png"
      BackgroundImage5 = "/HomeServiceIcons5.png"

      Header = "SERVICES" 
   
      Text = {<>Strategic Entry.<br />Seamless Growth.</>}

      Para = 'Through targeted matchmaking, we connect founders with high-impact mentors, enterprise partners, and capital providers, accelerating growth, market entry, and operational efficency.' 
      CardText1 = 'Market Acess'
      CardText2 = 'Network of Experts'
      CardText3 = 'Investor Connects'
      CardText4 = 'Business Support'
      CardText5 = 'Entity Setup'
      
      
      
      />

      <SliderSection Header = {<>STARTUPS<br /></>} 

      
      Text = {<>Where Startups<br />Meet Opportunity</>} 
      
      Images = {['/HomeIconSlider1.png', '/HomeIconSlider2.png', '/HomeIconSlider3.png', '/HomeIconSlider4.png', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc']} />

      <br />

      <News 
      BackroundImage = "MediaNewsBanner1.png"
      BackroundImage2 = "MediaNewsBanner2.png" 
      Header = "Media" 
      Date = {<>Date: <span className='font-medium'>12 March 2025</span></>} 
      Time = {<>Time: <span className='font-medium'>08:30 AM - 1:00</span> PM</>}

      EventDetails = {<><span className='text-lg text-blue-900 font-medium'>IAN Group adn iACCEL GBI partnership</span></>} 
      
      News1Header = "News" New2Text = "iACCEL GBI showcases 7 startups at expand North Star 2024 in Dubai"  News2Date = "12 March 2025" />

      <Crousel  Header = "What People say about us" Para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." Name = "John Doe" Role = "CEO, Company" Image = "https://img.freepik.com/free-photo/young-handsome-office_23-2148474918.jpg?w=740&t=st=1696545721~exp=1696546321~hmac=3a5f0d1e3e2e4f0f5f6e8e6c6e8e6c6e8e6c6e8e6c6e8e6c6e8e6c6e8e6c6e8"/>
      <br />
      <br />
      <br />
    </div>
   
  );
}

export default Home;
