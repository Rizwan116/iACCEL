import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithub,
  faTiktok,
  faSnapchatGhost,
  faLinkedinIn,
  faWolfPackBattalion,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons';

import { faLocationDot, faPhoneVolume,faEnvelope  } from "@fortawesome/free-solid-svg-icons";


function Footer() {
  return (
    <footer style={{backgroundColor:'#1e295c'}} className=" text-white py-8">
      <div  data-sal="fade"
        data-sal-delay="300"
        data-sal-duration="800" className="container mx-auto px-6">
        {/* Footer Top Section */}
        <div className="flex flex-wrap justify-around mb-8 mt-10 px-0 md:px-40">
          {/* Logo */}
          <div className="items-center mb-4 md:mb-0 w-full md:w-3/6">
            <img
              src="./LogoAcl.png" // Replace with your logo URL
              alt="Logo"
              className="h-12 object-contain mb-10"
            />

            <p className='mb-4 text-lg'><FontAwesomeIcon icon={faLocationDot} size="sm" style={{color:'red'}}  /> 2nd Floor, Business Village Block A, <br /> &nbsp; &nbsp; &nbsp; Deira - Dubai </p>

            <p className='mb-4 text-lg'><FontAwesomeIcon icon={faPhoneVolume} size="sm" style={{color:'red'}} /> <a href="tel:+91 4343 43434 434">+91 4343 43434 434</a></p>

            <FontAwesomeIcon icon={faEnvelope} size="sm" style={{color:'red'}} /><a href="mailto:" className='mb-7 text-lg'>&nbsp;&nbsp;iagbi@indiaccelerator.com</a>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-12 w-full md:w-2/6 py-4 md:py-0">
            {/* Resources */}
            <div className='w-full py-8 md:py-0'>
              {/* <h2 className="text-lg font-semibold mb-4">RESOURCES</h2> */}
              <ul className="space-y-2 w-4/5 mx-auto md:w-2/5 md:mx-0  text-center md:text-left">
                <li className='border-b border-white pb-1'>
                  <NavLink
                    to="/home"
                    className={({ isActive }) =>
                      `text-white hover:text-orange-300 transition-colors duration-300 text-lg uppercase  ${
                        isActive ? 'text-white' : ''
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className='border-b border-white pb-1'>
                  <NavLink
                    to="/about"
                     className={({ isActive }) =>
                      `text-white hover:text-orange-300 transition-colors duration-300 text-lg uppercase  ${
                        isActive ? 'text-white' : ''
                      }`
                    }
                  >
                    About us
                  </NavLink>
                </li>

                <li className='border-b border-white pb-1'>
                  <NavLink
                    to="/service"
                     className={({ isActive }) =>
                      `text-white hover:text-orange-300 transition-colors duration-300 text-lg uppercase  ${
                        isActive ? 'text-white' : ''
                      }`
                    }
                  >
                    services
                  </NavLink>
                </li>
                <li className='border-b border-white pb-1'>
                  <NavLink
                    to="/media"
                    className={({ isActive }) =>
                      `text-white hover:text-orange-300 transition-colors duration-300 text-lg uppercase  ${
                        isActive ? 'text-white' : ''
                      }`
                    }
                  >
                    media
                  </NavLink>
                </li>
                <li className='border-b border-white pb-1'>
                  <NavLink
                    to="/community"
                     className={({ isActive }) =>
                      `text-white hover:text-orange-300 transition-colors duration-300 text-lg uppercase  ${
                        isActive ? 'text-white' : ''
                      }`
                    }
                  >
                    community
                  </NavLink>
                </li>
                <li >
                  <NavLink
                    to="/contactus"
                     className={({ isActive }) =>
                      `text-white hover:text-orange-300 transition-colors duration-300 text-lg uppercase  ${
                        isActive ? 'text-white' : ''
                      }`
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>

            </div>

            {/* Follow Us */}
           
            {/* Legal */}
            
          </div>

           <div className='flex flex-col justify-between w-3/4 md:w-1/6 '>
              {/* <h2 className="text-lg font-semibold mb-4">FOLLOW US</h2> */}
               <img  data-sal="flip-up"
        data-sal-delay="600"
        data-sal-duration="800" 
              src="./certificate.png" // Replace with your logo URL
              alt="Logo"
              className="h-40 md:h-28 object-contain my-12 md:my-0"
            />
             

           <div className='flex gap-3 justify-center'>
              
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-xl border border-white rounded-full px-1 py-1"
            >
              <FontAwesomeIcon icon={faInstagram } size="lg" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-xl border border-white rounded-full px-0.5 py-1"
            >
              <FontAwesomeIcon icon={faXTwitter} size="lg" />
            </a>
           
           
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-xl border border-white rounded-full px-1 py-1"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
           </div>
            </div>

        </div>

        <div style={{}} className='flex justify-center items-center'>
                    <span style={{backgroundColor:'#e72936', height:'0.5px'}} className='w-4/5 h-1 '></span>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-wrap justify-between items-center pt-0 mt-4 md:px-40">
          <div className="text-sm ">
            <p className='mb-2 md:mb-0'>© All rights reserved by iACCEL GBI</p>
          </div>
          <div className="flex gap-4">
           
                  <NavLink
                    to="/privacyPolicy"
                    className={({ isActive }) =>
                      `text-white hover:text-orange-300 transition-colors duration-300 ${
                        isActive ? 'text-white font-bold' : ''
                      }`
                    }
                  >
                    Terms & Conditions &nbsp;&nbsp; |
                  </NavLink>
              
                  <NavLink
                    to="/termsAndConditions"
                    className={({ isActive }) =>
                      `text-white hover:text-orange-300 transition-colors duration-300 ${
                        isActive ? 'text-white font-bold' : ''
                      }`
                    }
                  >
                    Privacy Policy
                  </NavLink>
               
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
