import React from 'react';
import { Link } from 'react-router-dom';


function Data({ BackGroundImage, Header, Text, Para, Cta, Stats1, Stats2, Stats3, Stats4 }) {

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          `url('${BackGroundImage}')`,
      }}
    >
      {/* gap-6 lg:gap-10 max-w-6xl */}
      <div className='flex flex-col lg:flex-row gap-72'>
        {/* p-4 md:p-8 lg:p-9 */}
        <div className="rounded-lg text-left">
          <p style={{color:'#ea2935'}} className="text-lg md:text-xl mb-4 max-w-2xl font-bold">
            <span className='text-black'></span>
            {Header}
          </p>
          {/* w-1/2  */}
          <h1 className="text-6xl md:text-6xl mb-6 animate-fade-in-down ">
          <span style={{color:'#1e295c'}} className=''>{Text}</span>
          </h1>

          <div style={{color:'#ea2935', backgroundColor:'#ea2935'}} className="h-3 w-1/3 mb-5 "></div>

          <p className="mb-9 max-w-2xl">
          <span style={{fontSize:'21px'}} className='text-black'>{Para}</span>
            
          </p>

          <Link style={{backgroundColor:'#1e295c',fontSize:'14px'}}
            to="/contactus"
            className="inline-bloc text-white font-bold py-3 px-8 rounded-lg transform transition hover:scale-105 mt-10"
          >
            {Cta}
          </Link>
        </div>

        {/* <div className="bg-black bg-opacity-50 p-10 rounded-lg shadow-2xl text-center mt-24"></div> */}
{/* style={{alignItems:'center'}} */}
        <div  className='flex flex-col lg:flex-row gap-14'>
          <div  className="text-center flex justify-evenly flex-col">
          <div  style={{textAlign:'left'}}>
            <span style={{color:'#eb2935'}} className='text-8xl font-extrabold'>{Stats1}</span>
            <br />
            <span style={{color:'#1e295c',fontSize:'18px',lineHeight:'5px'}} className=''><b>Startups <br /> Launched</b></span>

         
          </div>
          <div  style={{textAlign:'left'}}>
            <span style={{color:'#eb2935'}} className='text-7xl font-extrabold'>{Stats2}</span>
            <br />
            <span style={{color:'#1e295c',fontSize:'18px',lineHeight:'5px'}} className=''><b>Industries <br /> Experts</b></span>

          </div>
        </div>

        {/* <div className="bg-black bg-opacity-50 p-10 rounded-lg shadow-2xl text-center mt-24"></div> */}

        <div style={{borderRight: '1.5px solid #1e295c', height:'70%',}} className='mt-16'>

        </div>

        <div className="text-center flex justify-evenly flex-col pl-5">
          <div style={{textAlign:'left'}}>
            <span style={{color:'#eb2935'}} className='text-8xl font-extrabold'>{Stats3}<br /></span>
            <span style={{color:'#1e295c',fontSize:'18px',lineHeight:'5px'}} className=''><b>Locations <br /> across Asia</b></span>
          </div>
          <div style={{textAlign:'left'}}>
            <span style={{color:'#eb2935'}} className='text-8xl font-extrabold'>{Stats4}</span>
            <br />
            <span style={{color:'#1e295c',fontSize:'18px',lineHeight:'5px'}} className=''><b>Member <br />companies</b></span>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
