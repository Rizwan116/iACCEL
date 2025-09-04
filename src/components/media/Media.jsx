import React from 'react';
import { Link } from 'react-router-dom';
import './Media.css';
import Hero from '../hero/Hero';
import MediaCard1 from './MediaCard1';
import MediaCard2 from './MediaCard2';

function Media() {
  
  return (
    <div>

       <Hero backgroundImage="./Media.jpg"
         subtext="MEDIA"
      title={
      <>Our work <br />speaks for <br /> itself     
       </>
      }
      
      // subtext="Explore how our services can help you achieve your goals and connect with like-minded individuals."
     />
     

        <div>

            <h1 style={{color:'#1e295c'}} className='px-8 md:px-44 text-3xl md:text-6xl py-10 md:py-20 '>
              stay updated with news, <br />
              press realser and stories driving <br />
              our global journey
            </h1>

        </div>
           <div className='flex flex-col md:flex-row w-full justify-around px-10 md:px-36'>
             <div className='w-full md:w-2/5'>
              <MediaCard1 Image="/Media1.png" Title={<>IAN GROUP and IACCEL GBI partnership</>} Discription={<>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati distinctio quos cum fuga consequuntur temporibus sequi dignissimos nisi fugit natus, totam at, modi nobis? Porro alias similique hic animi sequi?</>} Date="08 June 2025" Cta="Read More" />

           

              </div>

                <div className='w-full md:w-2/5'>
               <MediaCard2 Profile="/Media2.png" Item={<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, temporibus!</>} Btn="Read More"  Dates="01 June 2023"/>

                 <MediaCard2 Profile="/Media2.png" Item={<>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, temporibus!</>} Btn="Read More"  Dates="01 June 2023"/>

             </div>
           </div>
    </div>
  );
}

export default Media;
