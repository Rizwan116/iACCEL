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
    
      <Hero backgroundImage="./HeroBannerImage.jpg"
      
      title={
      <> Collaboration <br /> Fueling <br /> Global Growth.
      <img src="public/Homeicon1.png" alt="arrow" className="inline w-6 h-6 ml-2 align-middle" />
       </>
      }
      text={<>iACCEL is a go-to-market accelerator designed <br /> to support global tech startups to expand into the <br />Middle East using Dubai as its launchpad</>}
      // subtext="Explore how our services can help you achieve your goals and connect with like-minded individuals."
     />


     <Data BackGroundImage="public/HomeBanner.png" Header="ABOUT US" Text={<>Your Gateway <br /> to MENA  <br />Growth</>} Para={<>Using Dubai as your strategic launchpad, <br /> we offer comprehensive services including <br /> company formation, office space, a <br /> high-touch market access model, <br /> government engagement, enterprise <br /> partnerships, and investor connectivity.</>} Cta={<><Link style={{backgroundColor:'#1e295c',fontSize:'14px'}}
                 to="/contactus"
                 className="inline-bloc text-white font-bold py-3 px-8 rounded-lg transform transition hover:scale-105 mt-10 ml-5 md:ml-0"
               >
                Know More
               </Link></>} Stats1={<>25<sup style={{top:'-0.8em', fontSize:'61%'}}>+</sup></>} Stats2={<>500<sup style={{top:'-0.8em', fontSize:'61%'}}>+</sup></>} Stats3={<>06</>} Stats4={<>22</>} Line={<><div style={{color:'#ea2935', backgroundColor:'#ea2935'}} className="h-3 w-1/3 mb-5  ml-5 md:ml-0"></div></>} Head1={<>Startups <br /> Launched</>} Head2={<>Industries <br /> Experts</>} Line2={ <>
    <div
      style={{ borderRight: "1.5px solid #1e295c", height: "70%" }}
      className="mt-16"
    ></div>
  </>} Head3={<>Locations <br /> across Asia</>} Head4={<>Member <br />companies</>}/>

      <Info BackgroundImage1 = "/HomeServiceIcons2.png"
      BackgroundImage2 = "/HomeServiceIcons3.png"
      BackgroundImage3 = "/HomeServiceIcons4.png"
      BackgroundImage4 = "/HomeServiceIcons5.png"
      BackgroundImage5 = "/HomeServiceIcons.png"

      Header = "SERVICES" 
   
      Text = {<>Strategic Entry.<br />Seamless Growth.</> }

      Line = {<><div style={{color:'#ea2935', backgroundColor:'#ea2935'}} className="h-3 w-1/4 mb-5 "></div></>}

      Para = {<>Through targeted matchmaking, we connect <br /> founders with high-impact mentors, enterprise <br /> partners, and capital providers, accelerating <br /> growth, market entry, and operational <br /> efficency.</>} 

      // CardText1 = 'Market Acess'
      // CardText2 = 'Network of Experts'
      // CardText3 = 'Investor Connects'
      // CardText4 = 'Business Support'
      // CardText5 = 'Entity Setup'
      
      />

      <SliderSection Header = {<><div class="pt-0 md:pt-20">STARTUPS</div></>} 

      
      Text = {<>Where Startups<br />Meet Opportunity</>} 

      Line ={<> <div style={{backgroundColor:'#eb2935'}} className="h-4 w-2/4 md:w-1/12 mt-3 mb-10"></div></>}
      
      // Images = {['/HomeIconSlider1.png', '/HomeIconSlider2.png', '/HomeIconSlider3.png', '/HomeIconSlider4.png', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc']}
      
      
      Images = {[
  { src: "/HomeIconSlider1.png", name: "Trustn" },
  { src: "/HomeIconSlider2.png", name: "Trezi" },
  { src: "/HomeIconSlider3.png", name: "We Work" },
  { src: "/HomeIconSlider4.png", name: "Dozee" },
  { src: "/HomeIconSlider4.png", name: "Dozee" },
  { src: "/HomeIconSlider4.png", name: "Dozee" },
  { src: "/HomeIconSlider4.png", name: "Dozee" },
]}
      />



      <News 
      BackroundImage = "MediaNewsBanner1.png"
      BackroundImage2 = "MediaNewsBanner2.png" 
      Header = "Media" 
      Date = {<>Date: <b className='font-medium'>12 March 2025</b></>} 
      Time = {<>Time: <b className='font-medium'>08:30 AM - 1:00 PM</b> </>}

      EventDetails = {<>IAN Group and <br /> iACCEL GBI partnership</>} 
      
      News1Header = "News" 
      News2Header = "EVENTS" 
      New2Text = {<>iACCEL GBI showcases <br /> 7 startups at expand <br /> North Star 2024 in Dubai</>}  News2Date = {<>Date: <b>12 March 2025</b></>} />

      <Crousel  Header = "What People say about us" Para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." Name = "John Doe" Role = "CEO, Company" Image = "https://img.freepik.com/free-photo/young-handsome-office_23-2148474918.jpg?w=740&t=st=1696545721~exp=1696546321~hmac=3a5f0d1e3e2e4f0f5f6e8e6c6e8e6c6e8e6c6e8e6c6e8e6c6e8e6c6e8e6c6e8"/>
      <br />
    
    </div>
   
  );
}

export default Home;
