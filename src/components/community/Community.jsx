import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../hero/Hero';
import ServiceBanner from '../services/ServiceBanner';
import Slider from 'react-slick';
import Crousel from '../crousel/Crousel';

function About() {
  return (
    <div>
      <Hero />

      <ServiceBanner />

      <Slider Text="Startup" Para="Text TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText" />

      <div>
        <Slider Text="Scaleups" Para="Text TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText" />
      </div>

      <Crousel />


      <ServiceBanner Title="Goverment" Para="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem" Background={''} />





    </div>
  );
}

export default About;
