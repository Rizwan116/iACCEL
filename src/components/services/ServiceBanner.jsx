import React from 'react';

const ServiceBanner = ({Para, Background, BottomPara, BottomPara2, BottomPara3, }) => {
    return (
        <div>
                <div style={{ Background: `url(${Background})` }}>
                    <p>{Para}</p>
                

                <p>{BottomPara}</p>
                <p>{BottomPara2}</p>
                <p>{BottomPara3}</p>
                </div>
        </div>
    );
}

export default ServiceBanner;
