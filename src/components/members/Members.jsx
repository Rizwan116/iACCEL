import React from 'react';
import { Link } from 'react-router-dom';
import './Member.css'

const Members = ({Header,Para,Members,BackGroundColor,Color,}) => {

    return (
          <div style={{ backgroundColor: BackGroundColor }}>
      <div className="flex flex-col md:flex-row gap-10 justify-center text-left py-20 px-10 md:px-52 items-center">
        <div  data-sal="slide-right"
        data-sal-delay="400"
        data-sal-duration="800" className="w-full md:w-2/5">
          <h1 style={{ color: Color }} className="font-medium text-4xl md:text-5xl uppercase">
            {Header}
          </h1>
        </div>
        <div  data-sal="slide-left"
        data-sal-delay="400"
        data-sal-duration="800" style={{ color: Color }} className="font-medium text-lg w-full md:w-2/5">
          <p className="text-lg md:text-base">
            {Para}
          </p>
        </div>
      </div>

      {/* 🔥 Map through Members array */}
      <div  data-sal="zoom-in"
        data-sal-delay="400"
        data-sal-duration="800" className="flex flex-col md:flex-row gap-5 justify-center pb-16 md:pb-32 items-center">
        {Members.map((img, index) => (
          <Link key={index}>
            <img
            className='height-mobile'
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
