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
          <> Collaboration <br className='hidden md:block' /> Fueling <br /> Global Growth.
            <img src="public/Homeicon1.png" alt="arrow" className="inline w-6 h-6 ml-2 align-middle" />
          </>
        }
        text={<>iACCEL is a go-to-market accelerator designed <br className='hidden md:block' /> to support global tech startups to expand into the <br className='hidden md:block' />Middle East using Dubai as its launchpad</>}
      // subtext="Explore how our services can help you achieve your goals and connect with like-minded individuals."
      />


      <Data BackGroundImage="public/HomeBanner.png" Header="ABOUT US" Text={<>Your Gateway <br className='hidden md:block' /> to MENA  <br />Growth</>} Para={<>Using Dubai as your strategic launchpad, <br className='hidden md:block' /> we offer comprehensive services including <br className='hidden md:block' /> company formation, office space, a <br className='hidden md:block' /> high-touch market access model, <br className='hidden md:block' /> government engagement, enterprise <br className='hidden md:block' /> partnerships, and investor connectivity.</>} Cta={<><Link style={{ backgroundColor: '#1e295c', fontSize: '14px' }}
        to="/contactus"
        className="inline-bloc text-white font-bold py-3 px-8 rounded-lg transform transition hover:scale-105 mt-10 ml-5 md:ml-0"
      >
        Know More
      </Link></>} Stats1={<>25<sup style={{ top: '-0.8em', fontSize: '61%' }}>+</sup></>} Stats2={<>500<sup style={{ top: '-0.8em', fontSize: '61%' }}>+</sup></>} Stats3={<>06</>} Stats4={<>22</>} Line={<><div style={{ color: '#ea2935', backgroundColor: '#ea2935' }} className="h-3 w-1/3 mb-5  ml-5 md:ml-0"></div></>} Head1={<>Startups <br /> Launched</>} Head2={<>Industries <br /> Experts</>} Line2={<>
        <div
          style={{ borderRight: "1.5px solid #1e295c", height: "70%" }}
          className="mt-16"
        ></div>
      </>} Head3={<>Locations <br className='hidden md:block' /> across Asia</>} Head4={<>Member <br className='hidden md:block' />companies</>} />

      <Info BackgroundImage1="/MArket-access.png"
        BackgroundImage2="/Network.png"
        BackgroundImage3="/Investor-Connect.png"
        BackgroundImage4="/Business-Support.png"
        BackgroundImage5="/Entity-Setup.png"

        Header="SERVICES"

        Text={<>Strategic Entry.<br />Seamless Growth.</>}

        Line={<><div style={{ color: '#ea2935', backgroundColor: '#ea2935' }} className="h-3 w-1/4 mb-5 "></div></>}

        Para={<>Through targeted matchmaking, we connect <br className='hidden md:block' /> founders with high-impact mentors, enterprise <br className='hidden md:block' /> partners, and capital providers, accelerating <br className='hidden md:block' /> growth, market entry, and operational <br className='hidden md:block' /> efficency.</>}

      // CardText1 = 'Market Acess'
      // CardText2 = 'Network of Experts'
      // CardText3 = 'Investor Connects'
      // CardText4 = 'Business Support'
      // CardText5 = 'Entity Setup'

      />

      <SliderSection Header={<><div class="pt-0 md:pt-20">STARTUPS</div></>}


        Text={<>Where Startups<br className='hidden md:block' /> Meet Opportunity</>}

        Line={<> <div style={{ backgroundColor: '#eb2935' }} className="h-4 w-2/4 md:w-1/12 mt-3 mb-10"></div></>}

        // Images = {['/HomeIconSlider1.png', '/HomeIconSlider2.png', '/HomeIconSlider3.png', '/HomeIconSlider4.png', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc']}


        Images={[
          { src: "/logo/dozee.png", name: "Dozee", hyperlinks:'https://www.dozeehealth.ai/'},
          { src: "/logo/TrustInLogo.jpg", name: "TrustIn" , hyperlinks:'#' },
          { src: "/logo/XSquare.jpg", name: "XSquare" , hyperlinks:'https://www.xsquare.biz/' },
          { src: "/logo/WizerLogo.jpeg", name: "Wizer Logo" , hyperlinks:'#' },
          { src: "/logo/TreziOnlyLightNoBG.png", name: "Trezi Only Light" , hyperlinks:'https://trezi.com/' },
          { src: "/logo/REVERSE-ERTICAL.png", name: "REVERSE ERTICAL" , hyperlinks:'' },
          { src: "/logo/ReflowXLogo.png", name: "Reflow X" , hyperlinks:'https://www.reflowx.com/'},
          { src: "/logo/iaccel_client3.png", name: "iaccel" , hyperlinks:'https://tasktracker.in/'},
          { src: "/logo/iaccel_client1.png", name: "klubworks" , hyperlinks:'https://klubworks.com/'},
          { src: "/logo/Hexitime.jpeg", name: "Hexitime" , hyperlinks:''},
          { src: "/logo/GosuAcademyLogo.png", name: "Gosu Academy", hyperlinks:'https://gosuacademy.com/' },
          { src: "/logo/AyatiDevices.jpg", name: "Ayati Devices", hyperlinks:'' },
          { src: "/logo/eg.jpeg", name: "EG HealthCare Center" , hyperlinks:'https://eshealthcarecentre.in/'},
          { src: "/logo/AuraFinancelogo.png", name: "Aura Finance" , hyperlinks:'https://aurafinance.me/'},
        ]}
      />



      <News
        BackroundImage="MediaNewsBanner1.png"
        BackroundImage2="MediaNewsBanner2.png"
        Header="Media"
        Date={<>Date: <b className='font-medium'>12 March 2025</b></>}
        Time={<>Time: <b className='font-medium'>08:30 AM - 1:00 PM</b> </>}

        EventDetails={<>IAN Group and <br /> iACCEL GBI partnership</>}

        News1Header="News"
        News2Header="EVENTS"
        New2Text={<>iACCEL GBI showcases <br className='hidden md:block' /> 7 startups at expand <br className='hidden md:block' /> North Star 2024 in Dubai</>}
         News2Date={<>Date: <b>12 March 2025</b></>} />

      <Crousel Header="What People say about us" Para={<>
        </>} Name="John Doe" Role="CEO, Company" Image="https://img.freepik.com/free-photo/young-handsome-office_23-2148474918.jpg?w=740&t=st=1696545721~exp=1696546321~hmac=3a5f0d1e3e2e4f0f5f6e8e6c6e8e6c6e8e6c6e8e6c6e8e6c6e8e6c6e8e6c6e8" />
      <br />

    </div>

  );
}

export default Home;
