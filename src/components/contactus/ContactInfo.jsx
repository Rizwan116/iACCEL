import React from 'react';

const ContactInfo = ({Name, Info}) => {
    return (
        <div  data-sal="flip-right"
        data-sal-delay="800"
        data-sal-duration="1000"  className=''>
            <div className='mt-5 mb:mt-8'>
                 <b><h4 className='text-xl md:text-base'>{Name}</h4></b>
                <p className='text-lg md:text-base'>{Info}</p>
            </div>
        </div>
    );
}

export default ContactInfo;
