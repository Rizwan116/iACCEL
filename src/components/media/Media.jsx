import React from 'react';
import { Link } from 'react-router-dom';
import './Media.css';
import Hero from '../hero/Hero';
import MediaCard1 from './MediaCard1';
import MediaCard2 from './MediaCard2';
import HeroTwo from '../hero/HeroTwo';
import "sal.js/dist/sal.css";
import sal from "sal.js";
import { useEffect } from "react";

function Media() {
  useEffect(() => {
    sal({
      threshold: 0.1,  // 10% of element visible before animation starts
      once: true,      // animate only once
    });
  }, []);


  const mediaData = [
   
    {
      Profile: "/media/2.jpg",
      Title: <>Suresh Kumar, Chairman of IBPC</>,
      Item: <>iACCEL GBI hosted Mr. Suresh Kumar, Founder of IBPC, who shared insights and kind words on our journey so far.
      </>,
      Btn: "Read More",
      Dates: "01 June 2023"
    },
    {
      Profile: "/media/3.jpg",
      Title: <>iACCEL GBI showcases 7 startups at Expand North Star 2024 in Dubai
      </>,
      Item: <>iACCEL GBI hosted Mr. Suresh Kumar, Founder of IBPC, who shared insights and kind words on our journey so far.

      </>,
      Btn: "Read More",
      Dates: "01 June 2023"
    },
    {
      Profile: "/media/4.jpg",
      Title: <>iACCEL GBI partners with Angels Den Funding to expand into UK and European markets
      </>,
      Item: <>iACCEL GBI partners with Angels Den Funding to expand into UK and European markets, fostering cross-border startup growth.

      </>,
      Btn: "Read More",
      Dates: "01 June 2023"
    },
    {
      Profile: "/media/5.webp",
      Title: <>iACCEL GBI teams up with Tech Inspira to bring AWS Activate program benefits to portfolio startups
      </>,
      Item: <>iACCEL GBI partners with Tech Inspira to provide its portfolio startups with AWS Activate benefits, enhancing their cloud infrastructure capabilities.

      </>,
      Btn: "Read More",
      Dates: "01 June 2023"
    },
    {
      Profile: "/media/6.jpg",
      Title: <>Dubai-based business incubator iACCEL GBI, TrustIn partner to transform escrow transaction landscape in Middle East
      </>,
      Item: <>iACCEL GBI joins forces with TrustIn to revolutionize the escrow transaction landscape in the Middle East, driving innovation and security in financial transactions.

      </>,
      Btn: "Read More",
      Dates: "01 June 2023"
    },
    {
      Profile: "/media/7.png",
      Title: <>National Incubator Network
      </>,
      Item: <>iACCEL GBI joins the National Incubator Network to drive innovation and entrepreneurship in the UAE, with support from Sheikh Nahyan bin Mubarak Al Nahyan.

      </>,
      Btn: "Read More",
      Dates: "01 June 2023"
    },
    {
      Profile: "/media/8.jpg",
      Title: <>Startup Conclave by Vibrant Gujarat
      </>,
      Item: <>iACCEL GBI's CEO, Deepak Ahuja, participated in the Vibrant Gujarat Startup Conclave 2023, sharing insights on global opportunities for startups alongside prominent figures.

      </>,
      Btn: "Read More",
      Dates: "01 June 2023"
    },
    {
      Profile: "/media/9.jpg",
      Title: <>Tech Sparks
      </>,
      Item: <>iACCEL GBI's CEO and Co-Founder, Deepak Ahuja, at TechSparks Mumbai 2024, discussing cross-border collaborations and how iACCEL GBI facilitates seamless expansion into the UAE for startups.

      </>,
      Btn: "Read More",
      Dates: "01 June 2023"
    },
    {
      Profile: "/media/10.jpg",
      Title: <>Dubai SME and India Accelerator launch iACCEL Gulf Business Incubator LLC in Dubai
      </>,
      Item: <>Dubai SME and India Accelerator launch iAccel GBI in Dubai to support startups with mentorship, networking, and funding.

      </>,
      Btn: "Read More",
      Dates: "01 June 2023"
    },

    {
      Profile: "/media/11.jpg",
      Title: <>Expanding its geographical footprint, iACCEL GBI in Dubai is India Accelerator’s first international office</>,
      Item: <></>,
      Btn: "Read More",
      Dates: "01 June 2023"
    },

    {
      Profile: "/media/12.jpg",
      Title:<>Dubai SME and India Accelerator launch iACCEL Gulf Business Incubator   LLC in Dubai   </>,
      Item: <>Dubai SME and India Accelerator launch iAccel GBI in Dubai to support startups with mentorship, networking, and funding.</>,
      Btn: "Read More",
      Dates: "01 June 2023"
    },



    
  ];

  return (


    <div>

      <HeroTwo backgroundImage="./m.jpg"
        subtext="MEDIA"
        title={
          <>Our work <br />speaks for <br /> itself
          </>
        }

      // subtext="Explore how our services can help you achieve your goals and connect with like-minded individuals."
      />


      <div data-sal="fade"
        data-sal-delay="400"
        data-sal-duration="800">

        <h1 style={{ color: '#1e295c' }} className='px-10 md:px-44 text-3xl md:text-6xl py-10 md:py-20 '>
          stay updated with news, <br />
          press realser and stories driving <br />
          our global journey
        </h1>

      </div>
      <div data-sal="fade"
        data-sal-delay="400"
        data-sal-duration="800" className='flex flex-col md:flex-row w-full px-10 md:px-48 gap-16'>
          {/* justify-around px-10 md:px-32 flex items-center justify-between max-w-6xl mx-auto px-6 */}
        <div className='w-full md:w-2/4'>
          <MediaCard1 Image="/Media1.png" Title={<>IAN GROUP and IACCEL GBI partnership</>} Discription={<>IAN Group partners with iACCEL GBI to connect Middle Eastern investors with Indian startups and support their expansion into the UAE.</>} Date="08 June 2025" Cta="Read More" />



        </div>

        <div className="w-full md:w-2/4">
          {mediaData.map((data, index) => (
            <MediaCard2
              key={index}
              Profile={data.Profile}
              Title={data.Title}
              Item={data.Item}
              Btn={data.Btn}
              Dates={data.Dates}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Media;
