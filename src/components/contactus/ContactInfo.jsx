import React from 'react';

const ContactInfo = ({Name, Info}) => {
    return (
        <div>
            <div>
                 <h4>{Name}</h4>
                <p>{Info}</p>
            </div>
        </div>
    );
}

export default ContactInfo;
