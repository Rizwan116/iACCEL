import React from "react";
import MediaCard2 from "./MediaCard2";

const MediaCard1 = ({ Image, Title, Discription, Date, Cta }) => {
  const mediaDataOne = [
    {
      Image: "/Media1.png",
      Title: "IAN Group and iACCEL GBI partnership",
      Discription:
        "IAN Group partners with iACCEL GBI to connect Middle Eastern investors with Indian startups and support their expansion into the UAE.",
      Date: "01 June 2023",
      Cta: "Read More",
      Profile: "/Media2.png",
      Item: "This is some additional description for the media card.",
    },
   
  ];

  const mediaDataTwo = [
    // {
    //   Profile: "/media/12.jpg",
    //   Title: (
    //     <>
    //       Dubai SME and India Accelerator launch iACCEL Gulf Business Incubator
    //       LLC in Dubai
    //     </>
    //   ),
    //   Item: (
    //     <>
    //       Dubai SME and India Accelerator launch iAccel GBI in Dubai to support
    //       startups with mentorship, networking, and funding.
    //     </>
    //   ),
    //   Btn: "Read More",
    //   Dates: "01 June 2023",
    // },
    {
      Profile: "/media/13.jpg",
      Title: (
        <>
         Dubai SME and India Accelerator launch iACCEL Gulf Business Incubator LLC in Dubai

        </>
      ),
      Item: (
        <>
         Dubai SME and India Accelerator launch iAccel GBI in Dubai to support startups with mentorship, networking, and funding.


        </>
      ),
      Btn: "Read More",
      Dates: "01 June 2023",
    },
    {
      Profile: "/media/14.jpg",
      Title: <>Dubai SME and India Accelerator launch iACCEL Gulf Business Incubator LLC in Dubai
</>,
      Item: (
        <>
         Dubai SME and India Accelerator launch iAccel GBI in Dubai to support startups with mentorship, networking, and funding.


        </>
      ),
      Btn: "Read More",
      Dates: "01 June 2023",
    },
    {
      Profile: "/media/15.jpg",
      Title: <>Dubai SME and India Accelerator launch iACCEL Gulf Business Incubator LLC in Dubai
</>,
      Item: (
        <>
         Dubai SME and India Accelerator launch iAccel GBI in Dubai to support startups with mentorship, networking, and funding.


        </>
      ),
      Btn: "Read More",
      Dates: "01 June 2023",
    },
    {
      Profile: "/media/16.jpg",
      Title: (
        <>
         iACCEL GBI LOOKING TO ONBOARD 25-30 STARTUPS

        </>
      ),
      Item: (
        <>
         iACCEL GBI aims to onboard 30 startups, expand to Saudi Arabia, and launch a $25-50M fund by 2024.


        </>
      ),
      Btn: "Read More",
      Dates: "01 June 2023",
    },
    {
      Profile: "/media/17.jpg",
      Title: (
        <>
          iACCEL GBI LOOKING TO ONBOARD 25-30 STARTUPS

        </>
      ),
      Item: (
        <>
         iACCEL GBI aims to onboard 30 startups, expand to Saudi Arabia, and launch a $25-50M fund by 2024.


        </>
      ),
      Btn: "Read More",
      Dates: "01 June 2023",
    },
    {
      Profile: "/media/18.jpg",
      Title: <>IAccel GBI and Accreda collaborate to revolutionize the transition from education to employment in the UAE
</>,
      Item: (
        <>
          iACCEL GBI and Accreda join forces to redefine how students transition into the workforce in the UAE!
        </>
      ),
      Btn: "Read More",
      Dates: "01 June 2023",
    },
    {
      Profile: "/media/19.jpg",
      Title: <>iAccel Gulf Business Incubator joins forces with ERB to revolutionise UAE fintech sector
</>,
      Item: (
        <>
          iACCEL Gulf Business Incubator partners with ERB to drive innovation in the UAE fintech sector!


        </>
      ),
      Btn: "Read More",
      Dates: "01 June 2023",
    },
    {
      Profile: "/media/20.jpg",
      Title: (
        <>
         UAE, India partner to boost SME opportunities

        </>
      ),
      Item: (
        <>
          iACCEL GBI partners with ERB to boost Dubai’s fintech sector and support its D33 vision.


        </>
      ),
      Btn: "Read More",
      Dates: "01 June 2023",
    },

    {
      Profile: "/media/21.jpg",
      Title: (
        <>
          TiE Bangalore

        </>
      ),
      Item: (
        <>
         iACCEL GBI has partnered with TiE Bangalore for the Matrix Global Summit, which has previously conducted 100+ events with 6,300+ delegates and 750+ startups.


        </>
      ),
      Btn: "Read More",
      Dates: "01 June 2023",
    },
  ];

  return (
    <>
      <div className="flex flex-col mb-4 gap-7">
        {mediaDataOne.map((data, index) => (
          <div key={index}>
            <div className="flex flex-col w-full">
              <img
                data-sal="slide-right"
                data-sal-delay="600"
                data-sal-duration="800"
                src={data.Image}
                alt={data.Title}
                className="mb-5 w-full"
              />

              <h3
                data-sal="slide-right"
                data-sal-delay="600"
                data-sal-duration="800"
                className="text-2xl mb-3"
              >
                {data.Title}
              </h3>

              <p
                data-sal="slide-right"
                data-sal-delay="600"
                data-sal-duration="800"
                className="text-1xl mb-3"
              >
                {data.Discription}
              </p>

              <div
                style={{ color: "red" }}
                className="flex justify-between border-b-2 pb-4 mb-10"
              >
                <p style={{ color: "#1e295c" }}>{data.Date}</p>
                <a href="readmore" style={{ color: "red" }}>
                  {data.Cta}
                </a>
              </div>
            </div>

            {mediaDataTwo.map((data, index) => (
              <div key={index}>
                <div>
                 <MediaCard2
              key={index}
              Profile={data.Profile}
              Title={data.Title}
              Item={data.Item}
              Btn={data.Btn}
              Dates={data.Dates}
            />
                </div>
              </div>
            ))}

            {/* <hr /> */}
          </div>
        ))}
      </div>
    </>
    // <div   className='flex mb-4 gap-7'>
    //      <div >

    //          <div  className='flex flex-col w-full'>
    //            <img data-sal="slide-right"
    // data-sal-delay="600"
    // data-sal-duration="800" src={Image} alt="" className='mb-5 w-full' style={{}} />
    //           <h3 data-sal="slide-right"
    // data-sal-delay="600"
    // data-sal-duration="800" className='text-2xl mb-3'>{Title}</h3>
    //           <p data-sal="slide-right"
    // data-sal-delay="600"
    // data-sal-duration="800" className='text-1xl  mb-3'>{Discription}</p>

    //           <div style={{color:"red"}} className='flex justify-between border-b-2 pb-4 mb-10'>
    //             <p style={{color:'#1e295c'}}>{Date}</p>

    //             <a href="readmore" className='' style={{color:"red"}}>{Cta}</a>
    //           </div>
    //          </div>

    //          <div>
    //              <MediaCard2  Profile="/Media2.png" Item={<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, temporibus!</>} Btn="Read More"  Dates="01 June 2023"/>

    //          </div>

    //          <hr />
    //       </div>

    // </div>
  );
};

export default MediaCard1;
