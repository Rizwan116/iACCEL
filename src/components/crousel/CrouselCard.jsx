import React from 'react';
import './Crousel.css'

const CrouselCard = ({Header,Para,Name,Role,Image}) => {
    return (
        <div>
      <div>
        <div className='flex items-center py-8 w-full px-4 md:px-24 gap-6 md:gap-14 mobile-flex-col'>
          <div className='md:m-1/5 mobile-div-flex'>
          {/* h-96 md:h-auto w-96 md:w-auto  md:rounded-none*/}
            {Image && <img src={Image} alt="Person" className="rounded-full h-40  md:h-60 md:w-60 md: md:m-full" />}
          </div>

          <div  className='w-4/5'>
            <p className='text-lg pb-8'>{Para}</p>
             <p className='text-lg font-medium text-blue-800'>{Name}, <br className='block md:hidden' /> <span style={{color:'black', fontWeight:'normal'}}>{Role}</span></p>
              
          </div>
        </div>
      </div>
        </div>
    );
}

export default CrouselCard;
