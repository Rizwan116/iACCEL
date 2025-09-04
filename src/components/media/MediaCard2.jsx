import React from 'react';
import './media.css'

const MediaCard2 = ({Profile, Item, Dates, Btn}) => {
    return (
       <>
        <div className='flex mb-4 gap-7'>
                   <div className='flex gap-8'>
                   <div className='w-full'>
                     <img src={Profile} alt="" className='w-full' />
                   </div>
                   
                  </div>

                  <div className='flex-col justify-between'>

                     <div className='text-lg'>{Item}</div>
                    
                   </div>
                  
                
        </div>

        <div className='flex justify-between border-b-2 pb-5 mb-5'>
                   <p>{Dates}</p>

                    <a href="readmore" style={{color:'red'}}>{Btn}</a>
                  </div></>
        
    );
}

export default MediaCard2;
