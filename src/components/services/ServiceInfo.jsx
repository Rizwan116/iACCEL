import React from 'react';

const ServiceInfo = () => {
    return (
        <div>

            <section  data-sal="fade"
        data-sal-delay="400"
        data-sal-duration="800" className="bg-white py-0 md:py-16">
      <div className="max-w-6xl mx-auto px-10 md:px-6 py-8 md:py-14 grid md:grid-cols-[1fr_2fr] gap-2">
        
        {/* Left Column (Headings) */}
        <div  data-sal="slide-right"
        data-sal-delay="400"
        data-sal-duration="800" className="space-y-32">
          <h2 className="text-xl md:text-4xl font-semibold text-[#1a2456]">
            Investor <br className='hidden md:block' /> Connects
          </h2>
          
        </div>

        {/* Right Column (Descriptions) */}
        <div className="space-y-12 text-gray-700">
          {/* Investor Connects */}
          <div  data-sal="slide-left"
        data-sal-delay="400"
        data-sal-duration="800">
            <p className='mt-2 border-b-2 border-red-500 inline-block pb-2 pt-0'>
              IACCEL GBI facilitates investor conversations through Institutional Investors,<br className='hidden md:block' /> High Net Worth Individuals (HNIs), Family Offices, Venture Capital Firms, <br className='hidden md:block' />and Angel Investors.
              
            </p>
            <p className="mt-2 border-b-2 border-red-500 inline-block pb-2 pt-1">
              Fundraising support ranging from $100K to $10M for qualified portfolio startups
            </p>
            <p className="mt-2 pb-2 pt-1">Pitch Day & Events</p>
          </div>

         

        </div>
      </div>

      <div   className="max-w-6xl mx-auto px-10 md:px-6 py-4 md:py-14 grid md:grid-cols-[1fr_2fr] gap-2">
        
        {/* Left Column (Headings) */}
        <div data-sal="slide-right"
        data-sal-delay="600"
        data-sal-duration="1000" className="space-y-32">
         
          <h2 className="text-xl md:text-4xl font-semibold text-[#1a2456]">
            Business <br className='hidden md:block' /> Support
          </h2>
        
        </div>

        {/* Right Column (Descriptions) */}
        <div className="space-y-12 text-gray-700">
        

          {/* Business Support */}
          <div  data-sal="slide-left"
        data-sal-delay="600"
        data-sal-duration="1000">
            <p className="mt-2 border-b-2 border-red-500 inline-block pb-2">
              Business readiness from Day 1 to get you operational immediately.
            </p>
            <p className="mt-2 border-b-2 border-red-500 inline-block pb-2 pt-1">
              Dedicated support through 3rd Party for Marketing, PR, Legal, Accounting, <br className='hidden md:block' />Talent/HR, and Immigration Services success. <br className='hidden md:block' />These strong alliances enhance our ability to support founders, <br className='hidden md:block' />accelerate market expansion, and deliver lasting impact<br className='hidden md:block' /> within the entrepreneurial landscape.
            </p>
            <p className="pb-2 pt-2">
              Photos and link to TBDC Partnership announcement (pending), IAN Partnership, Eurekaa GCC, Angels Den, TiE Bangalore
            </p>
          </div>

          
        </div>
      </div>


      <div  className="max-w-6xl mx-auto px-10 md:px-6 py-10 md:py-14 grid md:grid-cols-[1fr_2fr] gap-2">
        
        {/* Left Column (Headings) */}
        <div  data-sal="slide-right"
        data-sal-delay="800"
        data-sal-duration="1200" className="space-y-32">
        
          <h2 className="text-xl md:text-4xl font-semibold text-[#1a2456]">
            Entity Setup & <br className='hidden md:block' /> Office Space
          </h2>
        </div>

        {/* Right Column (Descriptions) */}
        <div  data-sal="slide-left"
        data-sal-delay="800"
        data-sal-duration="1200" className="space-y-12 text-gray-700">
         
          {/* Entity Setup */}
          <div>
            <p className="mt-2 border-b-2 border-red-500 inline-block pb-2 pt-0">
              Dubai Mainland License for full market access and one-stop entity <br className='hidden md:block' />setup to simplify your launch process
            </p>
            <p className="mt-2 border-b-2 border-red-500 inline-block pb-2 pt-1">
              Expert assistance with certifications to ensure <br className='hidden md:block' /> compliance and speed-to-market
            </p>
            <p className="mt-2 inline-block pb-2 pt-1">
              Fully furnished and serviced office with optional additional <br className='hidden md:block' /> desk in the heart of Dubai,<br className='hidden md:block' /> along with access to meeting rooms, event spaces, wifi, and more 
            </p>
          </div>
        </div>
      </div>
    </section>
            
        </div>
    );
}

export default ServiceInfo;
