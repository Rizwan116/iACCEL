import React from 'react';

const CrouselCard = ({Header,Para,Name,Role,Image}) => {
    return (
        <div>
             <div>
        <div className='flex-col lg:flex-row items-center lg:items-center px-4 py-8 w-full max-w-2xl mx-auto lg:gap-8'>
          <div>
            {Image && <img src={Image} alt="Person" className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mb-6 lg:mb-0 lg:mr-8" />}
          </div>
          <div>
            <p  className='mt-14 text-lg'>{Para}</p>
             <p>{Name}</p>
              <p>{Role}</p>
          </div>
        </div>
      </div>
        </div>
    );
}

export default CrouselCard;
