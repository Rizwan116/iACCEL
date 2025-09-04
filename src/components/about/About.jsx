import React from 'react';
import { Link } from 'react-router-dom';
import Data from '../data/Data';
import Members from '../members/Members';
import Hero from '../hero/Hero';
import './About.css'

function About() {
  return (
    <div >
        <Hero backgroundImage="./HeroBannerImage.jpg"
         subtext="ABOUT US"
      title={
      <> Your Gateway <br /> to MENA <br /> Growth
      
       </>
      }
      
      // subtext="Explore how our services can help you achieve your goals and connect with like-minded individuals."
     />

        <Data BackGroundImage="./HomeBanner.png" Para={<>Using Dubai as your strategic launchpad, <br /> we offer comprehensive services including <br /> company formation, office space, a <br /> high-touch market access model, <br /> government engagement, enterprise <br /> partnerships, and investor connectivity.</>}  Stats1={<>25<sup style={{top:'-0.8em', fontSize:'61%'}}>+</sup></>} Stats2={<>500<sup style={{top:'-0.8em', fontSize:'61%'}}>+</sup></>} Stats3={<>06</>} Stats4={<>22</>} Head1={<>Startups <br /> Launched</>} Head2={<>Industries <br /> Experts</>} Line2={ <>
    <div
      style={{ borderRight: "1.5px solid #1e295c", height: "70%" }}
      className="mt-16"
    ></div>
  </>} Head3={<>Locations <br /> across Asia</>} Head4={<>Member <br />companies</>} />

      <Members Header={<><span style={{color:'#1e295c'}}>Our Founding <br /> Member</span></>} Para="Explore how our services can help you achieve your goals and connect with like-minded individuals.Explore how our services can help you achieve your goals and connect with like-minded individuals.Explore how our Explore how our services can help you achieve your goals and connect with like-minded individuals." Members={['/FounderMember1.png', 'FounderMember2.png', 'FounderMember-Copy3.png', 'FounderMember-Copy4.png']} />

      <Members BackGroundColor="#1e295c" Color="#fff" Header={<>Our Adisory <br /> Board</>} Para="Explore how our services can help you achieve your goals and connect with like-minded individuals.Explore how our services can help you achieve your goals and connect with like-minded individuals.Explore how our Explore how our services can help you achieve your goals and connect with like-minded individuals." Members={['/AdvisorBoard1.jpg', 'AdvisorBoar2.jpg', 'AdvisorBoard3.jpg', 'AdvisorBoard4.jpg']} />


       <Members BackGroundColor="#fff" Color="#000" Header={<><span style={{color:'#1e295c'}}>Our Mentor <br /> Board</span></>} Para="Explore how our services can help you achieve your goals and connect with like-minded individuals.Explore how our services can help you achieve your goals and connect with like-minded individuals.Explore how our Explore how our services can help you achieve your goals and connect with like-minded individuals." Members={['/FounderMembery.png', 'FounderMembery2.png', 'FounderMembery1.png',]} />


      <div className="flex flex-col md:flex-row items-center justify-end w-full mob-h" style={{ backgroundImage: `url("/JoinUs.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "380px",
    width: "100%",}}>
      <div className='flex flex-col w-4/5 md:w-2/5'>
        
        <div className="w-full md:w-3/4  text-white flex flex-col justify-center px-0 py-10 md:py-0">
            <p style={{color:'#fff',}} className='text-lg md:text-1xl mb-2'>Lorem, ipsum dolor sit amet consectetur adipisicing <br />elit. Accusamus in reprehenderit laborum. <br /> Voluptate, laborum in.</p>
        </div>

        <div>
          <h1 style={{color:'#fff',}} className='text-3xl md:text-6xl font-bold flex items-center gap-2 mb-10 md:mb-0'>Join Us<img src="public/BlueArrow.png" alt="arrow" className="inline w-6 h-6 ml-2 align-middle" /></h1>
        </div>
      </div>
      </div>

    </div>


  );
}

export default About;
