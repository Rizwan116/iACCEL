import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../hero/Hero';
import ServiceBanner from './ServiceBanner'
import ServiceCard from './ServiceCard';
import ServiceInfo from './ServiceInfo';

function Services() {
  return (
    <div  >
      <Hero backgroundImage="" title="Services" text="lorem lorem lorem lorem lorem" />

      <ServiceBanner Para="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem" Background={''} />

      <ServiceCard />

       <ServiceBanner Para="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem" Background={''} BottomPara={'abc'} BottomPara2={'efg'} BottomPara3={'hik'}/>

      <ServiceInfo />
    </div>
  );
}

export default Services;
