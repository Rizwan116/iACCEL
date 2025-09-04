import React from 'react';

const Infos = ({Header,Para}) => {
    return (
        
           
    <section className="py-0">
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-0 grid md:grid-cols-[1fr_2fr] gap-2">
        
        {/* Left Column (Headings) */}
        <div className="space-y-32">
          <h2 className="text-xl md:text-5xl font-semibold text-[#fff]">
           {Header}
          </h2>
          
        </div>

        {/* Right Column (Descriptions) */}
        <div className="space-y-12 text-[#fff]">
          {/* Investor Connects */}
          <div>
           <p>
            {Para}
           </p>
          </div>

        </div>
      </div>


    </section>
     
    );
}

export default Infos;
