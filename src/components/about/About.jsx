import React from "react";
import { Link } from "react-router-dom";
import Data from "../data/Data";
import Members from "../members/Members";
import Hero from "../hero/Hero";
import HeroTwo from "../hero/HeroTwo";
import "./About.css";

function About() {
  return (
    <div>
      <HeroTwo
        backgroundImage="./AboutUsBanner.jpg"
        subtext="ABOUT US"
        title={
          <>
            {" "}
            Your Gateway <br className="hidden md:block" /> to MENA <br />{" "}
            Growth
          </>
        }

        // subtext="Explore how our services can help you achieve your goals and connect with like-minded individuals."
      />

      <Data
        BackGroundImage="./HomeBanner.png"
        Para={
          <>
            Using Dubai as your strategic launchpad,{" "}
            <br className="hidden md:block" /> we offer comprehensive services
            including <br className="hidden md:block" /> company formation,
            office space, a <br className="hidden md:block" /> high-touch market
            access model, <br className="hidden md:block" /> government
            engagement, enterprise <br className="hidden md:block" />{" "}
            partnerships, and investor connectivity. <br /><br />
            Our curated network of industry experts, and in-house<br className="hidden md:block" /> revenue architects, localization specialists, <br className="hidden md:block" />and ecosystem enablers works closely with <br className="hidden md:block" />startups to help them successfully launch, localize,<br className="hidden md:block" /> and grow across the Middle East region.
          </>
        }
        Stats1={
          <>
            25<sup style={{ top: "-0.8em", fontSize: "61%" }}>+</sup>
          </>
        }
        Stats2={
          <>
            500<sup style={{ top: "-0.8em", fontSize: "61%" }}>+</sup>
          </>
        }
        Stats3={<>06</>}
        Stats4={<>22</>}
        Head1={
          <>
            Startups <br /> Launched
          </>
        }
        Head2={
          <>
            Industries <br /> Experts
          </>
        }
        Line2={
          <>
            <div
              style={{ borderRight: "1.5px solid #1e295c", height: "70%" }}
              className="mt-16"
            ></div>
          </>
        }
        Head3={
          <>
            Locations <br /> across Asia
          </>
        }
        Head4={
          <>
            Member <br />
            companies
          </>
        }
      />

      <Members
        Header={
          <>
            <span style={{ color: "#1e295c" }}>
              Our Founding <br /> Members
            </span>
          </>
        }
        Para={<>Our founding members are not only the visionaries behind our inception, but they also continue to lead from the front as the driving force of IACCEL GBI. They bring strategic insight, creativity, and deep commitment to the IACCEL GBI mission every day.</>}
        Members={[
          "/FounderMember1.png",
          "FounderMember2.png",
          "FounderMember-Copy3.png",
          "FounderMember-Copy4.png",
        ]}
      />

      <Members
        BackGroundColor="#1e295c"
        Color="#fff"
        Header={
          <>
            Our Adisory <br /> Board
          </>
        }
        Para="Our Advisory Board is composed of accomplished industry leaders and experts who play a crucial role in driving our growth and innovation. Leveraging their deep knowledge across finance, technology, marketing, and more, they provide strategic guidance that helps us identify new opportunities, navigate challenges, and stay ahead in a rapidly evolving market. Their insights fuel our innovation pipeline and accelerate our ability to foster a strong launchpad for tech startups. "
        Members={[
          "/AdvisorBoard1.jpg",
          "AdvisorBoar2.jpg",
          "AdvisorBoard3.jpg",
          "AdvisorBoard4.jpg",
        ]}
      />

      <Members
        BackGroundColor="#fff"
        Color="#000"
        Header={
          <>
            <span style={{ color: "#1e295c" }}>
              Our Mentor <br /> Board
            </span>
          </>
        }
        Para="Our Mentor Board is a trusted circle of industry leaders, innovators, and seasoned professionals who bring invaluable insight and experience to our journey. With diverse backgrounds and a shared commitment to excellence, they provide strategic guidance, challenge our thinking, and help shape our long-term vision. Their mentorship strengthens our leadership, sharpens our focus, and inspires us to grow with purpose and integrity."
        Members={[
          "/FounderMembery.png",
          "FounderMembery2.png",
          "FounderMembery1.png",
        ]}
      />

      <div
        data-sal="fade"
        data-sal-delay="400"
        data-sal-duration="800"
        className="flex flex-col md:flex-row items-center justify-end w-full mob-h"
        style={{
          backgroundImage: `url("/JoinUs.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "380px",
          width: "100%",
        }}
      >
        <div
          data-sal="slide-right"
          data-sal-delay="400"
          data-sal-duration="800"
          className="flex flex-col w-4/5 md:w-2/5"
        >
          <div className="w-full md:w-3/4  text-white flex flex-col justify-center px-0 py-10 md:py-0">
            <p style={{ color: "#fff" }} className="text-lg md:text-1xl mb-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing{" "}
              <br className="hidden md:block" />
              elit. Accusamus in reprehenderit laborum.{" "}
              <br className="hidden md:block" /> Voluptate, laborum in.
            </p>
          </div>

          <div>
            <h1
              style={{ color: "#fff" }}
              className="text-3xl md:text-6xl font-bold flex items-center gap-2 mb-10 md:mb-0"
            >
              Join Us
              <img
                src="public/BlueArrow.png"
                alt="arrow"
                className="inline w-6 h-6 ml-2 align-middle"
              />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
