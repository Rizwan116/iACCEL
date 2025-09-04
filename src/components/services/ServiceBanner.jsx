import React from 'react';

const ServiceBanner = ({Title, Para, backgroundImage, BottomPara, BottomPara2, BottomPara3, }) => {
    return (
        <div>
                {/* <div style={{ Background: `url(${Background})` }}>
                    
                    <h1>{Title}</h1>
                    
                    <p>{Para}</p>
                

                <p>{BottomPara}</p>
                <p>{BottomPara2}</p>
                <p>{BottomPara3}</p>
                </div> */}

     <section  data-sal="slide-up"
        data-sal-delay="400"
        data-sal-duration="800" className="flex flex-col justify-center items-center  bg-cover bg-center text-black pb-0 md:pb-0 min-h-[40vh] md:min-h-[92vh]"   style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="max-w-6xl mx-auto px-10 md:px-6 flex flex-col md:flex-row items-center gap-8">
        {/* Left Content */}
        <div   data-sal="slide-right"
        data-sal-delay="700"
        data-sal-duration="800" className="flex-1">
          <h2 className="text-2xl md:text-5xl  mb-10">
             {Title}
          </h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            {Para}
          </p>

          {/* Highlights */}
          <div className="space-y-3">
            <p className="text-sm md:text-base font-semibold">
              <span className="border-b-2 border-red-500 pb-0.5">
                {BottomPara}
              </span>
            </p>
            <p className="text-sm md:text-base font-semibold">
              <span className="border-b-2 border-red-500 pb-0.5">
                 {BottomPara2}
              </span>
            </p>
            <p className="text-sm md:text-base font-semibold">
              <span className="border-b-2 border-red-500 pb-0.5">
                 {BottomPara3}
              </span>
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          {/* <img
            src="https://img.freepik.com/free-photo/hand-holding-light-bulb-with-network-icons_1232-3776.jpg"
            alt="Network Lightbulb"
            className="rounded-lg shadow-lg w-full md:w-[90%]"
          /> */}
        </div>
      </div>
    </section>
        </div>
    );
}

export default ServiceBanner;
