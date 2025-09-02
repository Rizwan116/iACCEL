import React from 'react';

const Members = ({Header,Para,Members}) => {

    return (
        <div>
          <div style={{}} className='flex gap-10 justify-center text-left py-20 px-52 items-center'>
             <div className='w-'>
             <h1 className='font-medium text-5xl uppercase'>
                {Header}
            </h1>
             </div>
             <div className='font-medium text-lg'>
                 <p>
                  {Para}
                 </p>
             </div>
          </div>

          <div className='flex gap-5 justify-center'>
            <img style={{height:'400px'}} src={Members[0]} alt="" />
             <img  style={{height:'400px'}}  src={Members[1]} alt="" />
             <img  style={{height:'400px'}}  src={Members[2]} alt="" />
             <img  style={{height:'400px'}}  src={Members[3]} alt="" />
          </div>
        </div>
    );
}

export default Members;
