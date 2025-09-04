import React from 'react';
import { Link } from 'react-router-dom';

const Members = ({Header,Para,Members,BackGroundColor,Color,}) => {

    return (
        // <div style={{backgroundColor:BackGroundColor}}>
        //   <div style={{}} className='flex flex-col md:flex-row  gap-10 justify-center text-left py-20 px-4 md:px-52 items-center'>
        //      <div className='w-full md:w-2/5'>
        //      <h1 style={{color:Color}} className='font-medium text-5xl uppercase'>
        //         {Header}
        //     </h1>
        //      </div>
        //      <div style={{color:Color}}  className='font-medium text-lg w-full md:w-2/5'>
        //          <p className='text-lg md:text-base'>
        //           {Para}
        //          </p>
        //      </div>
        //   </div>

        //   <div className='flex flex-col md:flex-row gap-5 justify-center pb-5 md:pb-32 items-center'>
        //     <Link><img style={{height:'400px'}} src={Members[0]} alt="" /></Link>
        //      <Link><img style={{height:'400px'}}  src={Members[1]} alt="" /></Link>
        //      <Link><img style={{height:'400px'}}  src={Members[2]} alt="" /></Link>
        //      <Link><img style={{height:'400px'}}  src={Members[3]} alt="" /></Link>
        //   </div>
        // </div>

          <div style={{ backgroundColor: BackGroundColor }}>
      <div className="flex flex-col md:flex-row gap-10 justify-center text-left py-20 px-4 md:px-52 items-center">
        <div className="w-full md:w-2/5">
          <h1 style={{ color: Color }} className="font-medium text-4xl md:text-5xl uppercase">
            {Header}
          </h1>
        </div>
        <div style={{ color: Color }} className="font-medium text-lg w-full md:w-2/5">
          <p className="text-lg md:text-base">
            {Para}
          </p>
        </div>
      </div>

      {/* 🔥 Map through Members array */}
      <div className="flex flex-col md:flex-row gap-5 justify-center pb-16 md:pb-32 items-center">
        {Members.map((img, index) => (
          <Link key={index}>
            <img
              style={{ height: '400px' }}
              src={img}
              alt={`member-${index}`}
            />
          </Link>
        ))}
      </div>
    </div>
    );
}

export default Members;
