import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../hero/Hero';
import ServiceBanner from './ServiceBanner'
import ServiceCard from './ServiceCard';
import ServiceInfo from './ServiceInfo';
import Data from '../data/Data'
import "sal.js/dist/sal.css";
import sal from "sal.js";
import { useEffect } from "react";


function Services() {
  useEffect(() => {
      sal({
        threshold: 0.1,  // 10% of element visible before animation starts
        once: true,      // animate only once
      });
    }, []);
  return (
    <div  >
     <Hero backgroundImage="./Services.jpg"
         subtext="SERVICES"
      title={
      <> Value-Driven <br /> MENA Growth<br />Proposition 
      
       </>
      }
      
      // subtext="Explore how our services can help you achieve your goals and connect with like-minded individuals."
     />

     
              {/* <Data BackGroundImage="public/CommunityBanner2.jpg" Para={<>Using Dubai as your strategic launchpad, <br /> we offer comprehensive services including <br /> company formation, office space, a <br /> high-touch market access model, <br /> government engagement, enterprise <br /> partnerships, and investor connectivity.</>} /> */}


       <ServiceBanner Para={<><div className='text-lg'>
        The iACCEL GBI Network is a growing community of 
            SMEs, industry experts, ecosystem enablers, and 
            global investors driving startup acceleration 
            through targeted matchmaking. We connect founders 
            with support mentors, ecosystem players, investors, 
            and corporates, accelerating growth & market entry, 
            and operational excellence.</div></>} backgroundImage={'/ServicesBanner.jpg'} />


      <ServiceCard />

       <ServiceBanner Title={<><div className='text-white pt-10 mb:pt-0'>
        iACCEL GBI Network <br /> of Experts & Enablers</div></>} Para={<>
        
        <div className='text-white mb-10'>
          The iACCEL GBI Network is a growing community of 
            SMEs, industry experts, ecosystem enablers, and 
            global investors driving startup acceleration 
            through targeted matchmaking. We connect founders 
            with support mentors, ecosystem players, investors, 
            and corporates, accelerating growth & market entry, 
            and operational excellence.
        </div>

        </>} backgroundImage={'/ServicesBannerInfo.jpg'} BottomPara={<><div style={{borderBottom:"2px solid #ea2935"}} className='text-white text-xl py-1'>
          500+ Experts, Enablers & Investors</div></>} BottomPara2={<><div style={{borderBottom:"2px solid #ea2935"}} className='text-white text-xl pb-2'>
            Curated, Structured Matching with Relevant Stakeholders</div></>} BottomPara3={<> <div  className='text-white text-xl py-1'>
              Accelerated Connections That Drive Growth</div></>}/>

      <ServiceInfo />
    </div>
  );
}

export default Services;
