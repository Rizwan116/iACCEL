import React from 'react';
import { Link } from 'react-router-dom';
import ContactInfo from './ContactInfo';
import Hero from '../hero/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import HeroTwo from '../hero/HeroTwo';

import "sal.js/dist/sal.css";
import sal from "sal.js";
import { useEffect } from "react";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithub,
  faTiktok,
  faSnapchatGhost,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

function ContactUs() {
   useEffect(() => {
            sal({
              threshold: 0.1,  // 10% of element visible before animation starts
              once: true,      // animate only once
            });
          }, []);
  return (
    <div>
      <HeroTwo   backgroundVideo="./iACCELGBIContactUs.mp4"
         subtext="CONTACT US"
      title={
      <> We are here <br /> to listen
      
       </>
      }
      
      // subtext="Explore how our services can help you achieve your goals and connect with like-minded individuals."
     />

     <div style={{backgroundColor:'#ededed'}} className=''>
      <div  data-sal="zoom-in"
        data-sal-delay="600"
        data-sal-duration="800"  className='flex flex-col md:flex-row px-10 md:px-56 py-5 md:py-20 gap-5'>
          
          <div  className='w-full md:w-4/6'>
            <h1 style={{color:'#1e295c'}} className='text-3xl md:text-4xl pb-5'>We are always ready <br /> to help you ad answer <br /> your questions</h1>

             <p className='pb-6 text-lg md:text-base'>We are excited to connect with you! <br /> Whether you are interested in partnering or learning more about how we are building <br /> the entrepreneurial ecosystem in the MENA region, let’s connect!</p>

             <p className='pb-6 text-lg md:text-base'>If you are a founder exploring expansion into the MENA Region, <br />please contact: <a href="mailto:Deepak.ahuja@iaccelgbi.com">Deepak.ahuja@iaccelgbi.com</a></p>

             <p className='pb-6 text-lg md:text-base'>If you are a VC looking to explore investments in the tech startup ecosystem, <br />please contact: 
<a href="mailto:Aliya.babul@iaccelgbi.com">Aliya.babul@iaccelgbi.com</a></p>
            

                <div className='flex flex-col md:flex-row gap-2 md:gap-10'>

                      <div className=''>
                        <ContactInfo Name="Location" Info={<>2nd Floor, Buisness Village <br /> Block A, Deira - Dubai</>} />

                        <ContactInfo Name="Office time" Info={<>Monday - Friday<br /> 09 00 AM - 06 00 PM</>} />

                    
                          <div  data-sal="flip-right"
        data-sal-delay="800"
        data-sal-duration="1200"   className='mt-9'>
                                        <h2 className="font-bold mb-3 text-xl md:text-base">Social Network</h2>
                                      
                                      
                          
                                       <div className='flex gap-3 '>
                                                    
                                                  <a style={{color:'#eb2935'}}
                                                    href="https://twitter.com"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-red-900 transition-colors duration-300 text-xl border border-red-500 rounded-full px-1 py-1"
                                                  >
                                                    <FontAwesomeIcon icon={faInstagram } size="lg" />
                                                  </a>
                                                  <a style={{color:'#eb2935'}}
                                                    href="https://instagram.com"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                   className=" hover:text-red-900 transition-colors duration-300 text-xl border border-red-500 rounded-full px-1 py-1"
                                                  >
                                                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                                                  </a>
                                                 
                                                 
                                                  <a style={{color:'#eb2935'}}
                                                    href="https://linkedin.com"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                   className="hover:text-red-900 transition-colors duration-300 text-xl border border-red-500 rounded-full px-1 py-1"
                                                  >
                                                    <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                                                  </a>
                                                 </div>
                                      
                                    
                                  
                                    
                          </div>
                  
                        
                    </div>

                      <div className='mb-8 md:mb-0'>
                          <ContactInfo Name="Contact" Info={<><a style={{color:'#000'}} href="mailto:iagbi@indiaaccelerator.com">iagbi@indiaaccelerator.com</a><br /> <a style={{color:'#000'}} href="tel:+971 4 339 2968">+971 4 339 2968</a> </>} />
                          <ContactInfo Name="Whatsapp" Info={<>
                            <a style={{color:'#000'}} href="tel:+971564039100">+971564039100</a>
                            </>} />
                      </div>

                </div>

          </div>

       
      <div className="w-full md:w-5/12 bg-white shadow-lg rounded-xl p-6 sm:p-10 ">
        {/* Heading */}
        <h2 style={{color:'#eb2935'}} className="text-xl font-bold mb-2">Enquiry</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Define your goals and area of enquiry and we can add value to your business
        </p>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border-b border-gray-300 focus:outline-none py-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border-b border-gray-300 focus:outline-none py-2"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full border-b border-gray-300 focus:outline-none py-2"
          />
          <input
            type="text"
            placeholder="Company"
            className="w-full border-b border-gray-300 focus:outline-none py-2"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border-b border-gray-300 focus:outline-none py-2"
          />
          <textarea
            placeholder="Message"
            rows="3"
            className="w-full border-b border-gray-300 focus:outline-none py-2"
          ></textarea>

          {/* Submit Button */}
          <button style={{backgroundColor:'#eb2935'}}
            type="submit"
            className=" hover:bg-red-800 text-white font-semibold py-2 px-6 rounded-full w-full"
          >
            Submit
          </button>
        </form>
      </div>
   
      </div>

     


       <div className="w-full h-screen mt-10 md:mt-0">
       <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509364!2d144.95373631531697!3d-37.81627944202114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f9f9f1%3A0xf0456e3d1d8a1234!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1692018487459!5m2!1sen!2sin"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

   

     </div>


       
    </div>
  );
}

export default ContactUs;
