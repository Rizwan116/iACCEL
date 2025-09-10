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
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function Crousel({ Header }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
{/* <br className='hidden md:block' /> */}
  // ✅ Array of testimonials
  const testimonials = [
    {
      Para: (
        <>
          We believe that iAGBI can play a pivotal role in helping us achieve our objectives by providing us with the necessary support and guidance to launch and grow our platform in the UAE. iAGBI has a proven track record of nurturing and accelerating early-age Tech startups. We are confident that iAGBI can help us with licensing, workspaces, mentorship, legal guidance, marketing, funding access, and an extensive investor network that can enable us to reach our target customers and partners in the UAE.
{/* <br className='hidden md:block' /> 
<br className='hidden md:block' /> 
         We chose iAGBI as our launchpad for embarking on our entrepreneurial journey in Dubai because we were impressed by their vision, mission, and values. iAGBI's vision is to foster a culture of innovation and entrepreneurship in the UAE by supporting startups that have the potential to create positive social and economic impact. iAGBI's mission is to provide startups with comprehensive services and resources to help them overcome the challenges and risks of launching and scaling their businesses in the UAE. iAGBI's values are based on excellence, integrity, collaboration, diversity, and sustainability. We share these values and believe they are essential for building a successful and sustainable business in the UAE. We are excited to be part of iAGBI's community of entrepreneurs, mentors, investors, and experts who can inspire, challenge, and support us throughout our journey.
 */}

        </>
      ),
      Role: "Co-Founder & CTO TaskTracker Suite",
      Name: <span className='uppercase'>Rishab Chandra</span>,
      Image: "rishab.jpg",
    },
    {
      Para: (
        <>
          When we came here and interacted with the team and Deepak for the first time, and did our first few meetings with key players, it was a no-brainer that we would be setting up an entity in collaboration with iACCEL GBI for our Gulf expansion.


        </>
      ),
      Role: "Co-Founder & CEO Dozee",
      Name: <span className='uppercase'>Mudit Dandwate</span>,
      Image: "MuditDandwate.jpeg",
    },
    // {
    //   Para: (
    //     <>
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br className='hidden md:block' />
    //       Sed do eiusmod tempor incididunt ut labore et dolore magna <br className='hidden md:block' />
    //       aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod <br className='hidden md:block' />
    //       tempor incididunt ut labore et dolore <br /> magna aliqua"
    //     </>
    //   ),
    //   Role: "Co-Founder HexiTime",
    //   Name: <span className='uppercase'>HESHAM ABDULLA</span>,
    //   Image: "CEO.png",
    // },
    {
      Para: (
        <>
         We are thrilled to have partnered with iACCEL for our expansion in the UAE. iAGB's expertise, strategic insights, and seamless collaboration made them the perfect partner for Klub. We are confident that this partnership will not only elevate Klub's presence but also contribute significantly to boosting the SME ecosystem in the UAE


        </>
      ),
      Role: "Co-Founder & CEO Klub",
      Name: <span className='uppercase'>Anurakt Jain</span>,
      Image: "Anurakt_Klub.jpg",
    },
    {
      Para: (
        <>
         With almost 2 decades of experience as a Business banker, I have developed a robust expertise in the banking industry, demonstrated through a successful track record in structured lending, term finance, and liabilities products. 
         {/* My career has been marked by a strong commitment to relationship management, team leadership, and innovation. I am currently the CEO & Co-Founder of #Trustin where I am dedicated to transforming the fintech landscape in the UAE and Middle East. During my tenure in banking, I observed a significant gap in trust and payment security within the buying and selling ecosystem. This inspired our team to develop a pioneering solution: a digital escrow platform. Our platform is the first of its kind Trust as a Service (TaaS) in the region, designed to provide a secure, reliable, and transparent mechanism for transactions. */}


        </>
      ),
      Role: "Co-Founder & CEO TrustIn",
      Name: <span className='uppercase'>Momeen Ahmad</span>,
      Image: "MomeenAhmad.jpg",
    },
    {
      Para: (
        <>
         Before we started working with iACCEL GBi, their impressive track record and the ease of engagement made the decision straightforward. Now, having partnered with them, we can confidently say that they are truly a part of our team. Unlike others, iACCEL GBi integrates deeply, assisting in all aspects of our expansion into the UAE and beyond. 
         {/* Their extensive network, rich experience, and clear vision is making our journey towards establishing Dubai & UAE as a global gaming hub a reality. */}


        </>
      ),
      Role: "Co-Founder & Co-CEO of Gosu Academy",
      Name: <span className='uppercase'>F. Javier Bernal</span>,
      Image: "F_Javier_Bernal.jpg",
    },

     {
      Para: (
        <>
        ACCREDA’s UAE expansion aims to enhance college graduates and individual professional employability. To achieve this, we want to work closely with government and quasi-government entities in the region. Being part of the Dubai SME, iACCEL GBI offers a mainland license which opens a door to building a strong network with local entities that effectively cater to the needs of startups like us.
         {/* iACCEL GBI profoundly understands our market needs and will play a vital role in supporting us through all stages of our journey. They will be a strong pillar behind our UAE operation, helping us strengthen our business relationships and mentoring us with sustainable business approaches in the UAE region. */}




        </>
      ),
      Role: "Co-Founder & Co-CEO of Accreda",
      Name: <span className='uppercase'>Amol Dani</span>,
      Image: "Amol_Dani.jpg",
    },
  ];

  return (
    <div
      data-sal="fade"
      data-sal-delay="400"
      data-sal-duration="800"
      className="crousel-container w-full px-0 md:px-16 lg:px-32 mx-auto py-14 md:py-28"
    >
      <h1
        style={{ color: '#ea2935' }}
        className="font-medium text-2xl uppercase mb-8 text-left px-10 md:px-24"
      >
        {Header}
      </h1>

      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <CrouselCard
            key={index}
            Para={item.Para}
            Role={item.Role}
            Name={item.Name}
            Image={item.Image}
          />
        ))}
      </Slider>
    </div>
  );
}

export default Crousel;
