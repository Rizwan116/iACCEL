import React from 'react';
import MediaCard2 from './MediaCard2';

const MediaCard1 = ({Image,Title, Discription, Date, Cta,}) => {
    return (
        <div   className='flex mb-4 gap-7'>
             <div >
                 
                 <div  className='flex flex-col w-full'>
                   <img data-sal="slide-right"
        data-sal-delay="600"
        data-sal-duration="800" src={Image} alt="" className='mb-5 w-full' style={{}} />
                  <h3 data-sal="slide-right"
        data-sal-delay="600"
        data-sal-duration="800" className='text-2xl mb-3'>{Title}</h3>
                  <p data-sal="slide-right"
        data-sal-delay="600"
        data-sal-duration="800" className='text-1xl  mb-3'>{Discription}</p>

                  <div style={{color:"red"}} className='flex justify-between border-b-2 pb-4 mb-10'>
                    <p style={{color:'#1e295c'}}>{Date}</p>

                    <a href="readmore" className='' style={{color:"red"}}>{Cta}</a>
                  </div>
                 </div>


                 <div>
                     <MediaCard2  Profile="/Media2.png" Item={<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, temporibus!</>} Btn="Read More"  Dates="01 June 2023"/>

                 </div>

                 <hr />
              </div>

        </div>
    );
}

export default MediaCard1;
