import React from "react";
import "./Media.css";

const MediaCard2 = ({ Profile, Item, Dates, Btn, Title }) => (
  <>
    <div
      data-sal="slide-left"
      data-sal-delay="600"
      data-sal-duration="800"
      className="flex mb-4 gap-7"
    >
      {/* gap-8 */}
      <div className="flex w-2/5">
        {/* w-full */}
        <div className="">
          <img src={Profile} alt="" className="" style={{widht:'205px', height:'152px',objectFit:'cover'}} />
        </div>
      </div>

      <div className="flex-col justify-between w-3/5">
        <div className="text-lg font-medium mb-2">{Title}</div>

        <div className="text-md">{Item}</div>
      </div>
    </div>

    <div className="flex justify-between border-b-2 pb-5 mb-5">
      <p>{Dates}</p>

      <a href="readmore" style={{ color: "red" }}>
        {Btn}
      </a>
    </div>
  </>
);

export default MediaCard2;
