import React from 'react';

const Members = ({Header,Para,Members}) => {

    return (
        <div>
          <div>
             <div>
             <h1>
                {Header}
            </h1>
             </div>
             <div>
                 <p>
                  {Para}
                 </p>
             </div>
          </div>

          <div>
            <img src={Members[0]} alt="" />
             <img src={Members[1]} alt="" />
             <img src={Members[2]} alt="" />
             <img src={Members[3]} alt="" />
          </div>
        </div>
    );
}

export default Members;
