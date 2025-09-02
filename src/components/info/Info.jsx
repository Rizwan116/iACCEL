import React from 'react';
import { Link } from 'react-router-dom';
import './Info.css'

function Info({ BackgroundImage1,BackgroundImage2,BackgroundImage3,BackgroundImage4,BackgroundImage5, Header, Text, Para, CardText1, CardText2, CardText3, CardText4, CardText5 }) {

  return (
    <div className="w-full mx-auto">
      <div style={{alignItems:"center"}} className="flex flex-col lg:flex-row gap-6 lg:gap-6 justify-center items-start mt-24 mb-20 px-48">
        <div className="flex-1">
          <h2 style={{color:'#ea2935'}} className="text-lg md:text-xl mb-4 max-w-2xl font-bold">{Header}</h2>
          <h1 className="text-6xl md:text-6xl mb-6 animate-fade-in-down "><span style={{color:'#1e295c'}} className=''>{Text}</span></h1>
          <div style={{color:'#ea2935', backgroundColor:'#ea2935'}} className="h-3 w-1/4 mb-5 "></div>
        </div>
        <div className="flex-1">
          <p style={{fontSize:'21px'}} className='text-black'>{Para}</p>
        </div>
      </div>

      <div className="flex flex-wrap mt-5">
        <div className='w-1/5'
          // style={{ backgroundImage: `url(${BackgroundImage1})`,}}
          // className="w-1/5 bg-contain bg-center text-white flex justify-center items-center rounded-lg shadow"
        >
          <Link> 
          <img src={BackgroundImage1} alt="" className='w-full h-auto' />
          </Link>
          {/* <span className="text-red-500 text-lg font-bold">{CardText1}</span> */}
        </div>
        <div className='w-1/5'
          // style={{ backgroundImage: `url(${BackgroundImage2})`, height:'100px'}}
          // className="w-1/5 bg-contain bg-center text-white flex justify-center items-center rounded-lg shadow"
        >
           <Link> 
          <img src={BackgroundImage2} alt="" className='w-full h-auto' />
          </Link>
          {/* <span className="text-red-500 text-lg font-bold">{CardText2}</span> */}
        </div>
        <div className='w-1/5'
          // style={{ backgroundImage: `url(${BackgroundImage3})`, }}
          // className="w-full h-auto bg-contain bg-center text-white flex justify-center items-center rounded-lg shadow"
        >
          <Link> 
          <img src={BackgroundImage3} alt="" className='w-full h-auto' />
          </Link>
          {/* <span className="text-red-500 text-lg font-bold">{CardText3}</span> */}
        </div>
        <div className='w-1/5'
          // style={{ backgroundImage: `url(${BackgroundImage4})`,}}
          // className="w-1/5 bg-contain bg-center text-white flex justify-center items-center rounded-lg shadow"
        >
          <Link> 
          <img src={BackgroundImage4} alt="" className='w-full h-auto' />
          </Link>
             
          
          {/* <span className="text-red-500 text-lg font-bold">{CardText4}</span> */}
        </div>
        <div className='w-1/5'
          // style={{ backgroundImage: `url(${BackgroundImage5})`, }}
          // className="w-1/5 bg-contain bg-center text-white flex justify-center items-center rounded-lg shadow"
        >
          <Link> 
          <img src={BackgroundImage5} alt="" className='w-full h-auto' />
          </Link>
          {/* <span className="text-red-500 text-lg font-bold">{CardText5}</span> */}
        </div>
      </div>
    </div>
  );
}

export default Info;
