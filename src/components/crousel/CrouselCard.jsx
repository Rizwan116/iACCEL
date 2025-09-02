import React from 'react';

const CrouselCard = ({Header,Para,Name,Role,Image}) => {
    return (
        <div>
      <div>
        <div className='flex items-center py-8 w-full px-24 gap-14'>
          <div className='w-1/5'>
            {Image && <img src={Image} alt="Person" className="" />}
          </div>

          <div  className='w-4/5'>
            <p className='text-lg pb-8'>{Para}</p>
             <p className='text-lg font-medium text-blue-800'>{Name}, <span style={{color:'black', fontWeight:'normal'}}>{Role}</span></p>
              
          </div>
        </div>
      </div>
        </div>
    );
}

export default CrouselCard;
