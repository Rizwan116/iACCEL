import React from 'react';

const CrouselCard = ({Header,Para,Name,Role,Image}) => {
    return (
        <div>
             <div>
        <div className='flex gap-10 justify-center items-left mt-20 mb-20'>
          <div>
            {Image && <img src={Image} alt="Person" className="w-48 h-48 rounded-full object-cover" />}
          </div>
          <div>
            <p>{Para}</p>
             <p>{Name}</p>
              <p>{Role}</p>
          </div>
        </div>
      </div>
        </div>
    );
}

export default CrouselCard;
