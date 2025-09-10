import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../hero/Hero';
import ServiceBanner from '../services/ServiceBanner';
import Slider from 'react-slick';
import Crousel from '../crousel/Crousel';
import SliderSection from '../slider/SliderSection';
import Infos from './Infos';
import SliderSectionTwo from '../slider/SliderSectionTwo';
import HeroTwo from '../hero/HeroTwo';
import "sal.js/dist/sal.css";
import sal from "sal.js";
import { useEffect } from "react";


function About() {
  useEffect(() => {
    sal({
      threshold: 0.1,  // 10% of element visible before animation starts
      once: true,      // animate only once
    });
  }, []);
  return (
    <div>
      <HeroTwo backgroundImage="./CommunityBanner.jpg"
        subtext="COMMUNITY"
        title={
          <> Connecting <br /> Visionaries<br />Driving Change

          </>
        }

      // subtext="Explore how our services can help you achieve your goals and connect with like-minded individuals."
      />

      <ServiceBanner Para={<><div className='text-lg'>
        The iACCEL GBI Network is a growing community of
        SMEs, industry experts, ecosystem enablers, and
        global investors driving startup acceleration
        through targeted matchmaking. We connect founders
        with support mentors, ecosystem players, investors,
        and corporates, accelerating growth & market entry,
        and operational excellence.</div></>} backgroundImage={'/CommunityBanner2.jpg'} />

      <SliderSectionTwo Emp={
        <>
          <div>

            <Infos Header={<><div className='blue text-3xl md:text-4xl'>Startups</div></>} Para={<><div className='text-black text-justify text-xl md:text-base'>Our startups are the heart of innovation and entrepreneurship at iACCEL GBI. Driven by visionary founders and bold ideas, they are transforming industries and making a real impact across the MENA region and beyond. With access to strategic resources, mentorship, and a dynamic ecosystem, these startups are accelerating growth, solving challenges, and shaping the future. Discover the exciting ventures that are defining new possibilities and driving meaningful change.</div></>} />
          </div>
        </>
      }



        Images={[
          { src: "/logo/dozee.png", name: "Dozee" },
          { src: "/logo/TrustInLogo.jpg", name: "TrustIn" },
          { src: "/logo/XSquare.jpg", name: "XSquare" },
          { src: "/logo/WizerLogo.jpeg", name: "Wizer Logo" },
          { src: "/logo/TreziOnlyLightNoBG.png", name: "Trezi Only Light" },
          { src: "/logo/REVERSE-ERTICAL.png", name: "REVERSE ERTICAL" },
          { src: "/logo/ReflowXLogo.png", name: "Reflow X" },
          { src: "/logo/iaccel_client3.png", name: "iaccel" },
          { src: "/logo/iaccel_client1.png", name: "iaccel" },
          { src: "/logo/Hexitime.jpeg", name: "Hexitime" },
          { src: "/logo/GosuAcademyLogo.png", name: "Gosu Academy" },
          { src: "/logo/AyatiDevices.jpg", name: "Ayati Devices" },
          { src: "/logo/eg.jpeg", name: "EG HealthCare Center" },
          { src: "/logo/AuraFinancelogo.png", name: "Aura Finance" },
          { src: "HomeIconSlider2.png", name: "Aura Finance" },
        ]}
      />

      <SliderSection Emp={
        <>
          <div>

            <Infos Header={<><div className='text-white text-3xl md:text-4xl'>Scaleups</div></>} Para={<><div className='text-justify text-justify text-xl md:text-base'>Our startups are the heart of innovation and entrepreneurship at iACCEL GBI. Driven by visionary founders and bold ideas, they are transforming industries and making a real impact across the MENA region and beyond. With access to strategic resources, mentorship, and a dynamic ecosystem, these startups are accelerating growth, solving challenges, and shaping the future. Discover the exciting ventures that are defining new possibilities and driving meaningful change.</div></>} />
          </div>
        </>
      }



        Images={[
           { src: "/logo/dozee.png", name: "Dozee" },
          { src: "/logo/TrustInLogo.jpg", name: "TrustIn" },
          { src: "/logo/XSquare.jpg", name: "XSquare" },
          { src: "/logo/WizerLogo.jpeg", name: "Wizer Logo" },
          { src: "/logo/TreziOnlyLightNoBG.png", name: "Trezi Only Light" },
          { src: "/logo/REVERSE-ERTICAL.png", name: "REVERSE ERTICAL" },
          { src: "/logo/ReflowXLogo.png", name: "Reflow X" },
          { src: "/logo/iaccel_client3.png", name: "iaccel" },
          { src: "/logo/iaccel_client1.png", name: "iaccel" },
          { src: "/logo/Hexitime.jpeg", name: "Hexitime" },
          { src: "/logo/GosuAcademyLogo.png", name: "Gosu Academy" },
          { src: "/logo/AyatiDevices.jpg", name: "Ayati Devices" },
          { src: "/logo/eg.jpeg", name: "EG HealthCare Center" },
          { src: "/logo/AuraFinancelogo.png", name: "Aura Finance" },
          { src: "HomeIconSlider2.png", name: "Aura Finance" },
        ]}
      />




      <Crousel Header={<>
        <div className=' md:text-3xl blue' >
          What People say about us
        </div>
      </>} Para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." Name="John Doe" Role="CEO, Company" Image="https://img.freepik.com/free-photo/young-handsome-office_23-2148474918.jpg?w=740&t=st=1696545721~exp=1696546321~hmac=3a5f0d1e3e2e4f0f5f6e8e6c6e8e6c6e8e6c6e8e6c6e8e6c6e8e6c6e8e6c6e8" />


      <ServiceBanner Title={<><div className='blue text-3xl md:text-4xl pt-10 md:pt-0'>
        Government
      </div></>} Para={<><div className='text-lg text-justify'>
        The iACCEL GBI Network is a growing community of
        SMEs, industry experts, ecosystem enablers, and
        global investors driving startup acceleration
        through targeted matchmaking. We connect founders
        with support mentors, ecosystem players, investors,
        and corporates, accelerating growth & market entry,
        and operational excellence.</div></>} backgroundImage={'/CommunityBanner3.jpg'} />

    </div>
  );
}

export default About;
