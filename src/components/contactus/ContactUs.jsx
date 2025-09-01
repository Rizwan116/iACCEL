import React from 'react';
import { Link } from 'react-router-dom';
import ContactInfo from './ContactInfo';
import Hero from '../hero/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  return (
    <div>
      <Hero  backgroundImage="https://img.freepik.com/free-photo/beautiful-shot-mountain-covered-by-green-trees-with-beautiful-blue-sky-clouds-background_181624-16423.jpg"
      title="Home"
      text="text text"
      subtext="Explore how our services can help you achieve your goals and connect with like-minded individuals."
     />

     <div>
      <div>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dolor?</h1>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem commodi modi excepturi quae minima eveniet!</p>

          <div>
            <div>
                <ContactInfo name="Location" info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui!" />

                <ContactInfo name="Location" info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui!" />

            
                 <div>
                              <h2 className="text-lg font-semibold mb-4">Social Network</h2>
                            
                             
                
                              <a
                              href="https://facebook.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                            >
                              <FontAwesomeIcon icon={faFacebookF} size="lg" />
                            </a>
                            <a
                              href="https://twitter.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                            >
                              <FontAwesomeIcon icon={faTwitter} size="lg" />
                            </a>
                            <a
                              href="https://instagram.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
                            >
                              <FontAwesomeIcon icon={faInstagram} size="lg" />
                            </a>
                            
                          
                         
                          
                            </div>
          
                
            </div>

            <div>
                <ContactInfo name="Location" info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui!" />
                <ContactInfo name="Location" info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui!" />
            </div>
          </div>
      </div>

      <div>
         <div>

        <form action="">
            <h5>Enquiry</h5>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque optio unde doloribus fugiat rem velit.</p>

            <input type="text" placeholder="Full Name"/>
             <input type="text" placeholder="Full Name"/>
              <input type="text" placeholder="Full Name"/>
               <input type="text" placeholder="Full Name"/>
                <input type="text" placeholder="Full Name"/>
                 <input type="text" placeholder="Full Name"/>

                 <button>Submit</button>
        </form>

      </div>

      </div>


      <iframe src="" frameborder="0">map area</iframe>

   

     </div>


       
    </div>
  );
}

export default ContactUs;
