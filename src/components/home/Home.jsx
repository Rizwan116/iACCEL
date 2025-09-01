import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import Data from '../data/Data';
import SliderSection from '../slider/SliderSection';
import Crousel from '../crousel/Crousel';
import News from '../news/News';
import Hero from '../hero/Hero';
import Info from '../info/Info';

function Home() {


 
  return (
    <div>
      <Hero  backgroundImage="https://img.freepik.com/free-photo/beautiful-shot-mountain-covered-by-green-trees-with-beautiful-blue-sky-clouds-background_181624-16423.jpg"
      title="Home"
      text="text text"
      subtext="Explore how our services can help you achieve your goals and connect with like-minded individuals."
     />
     <Data />
      <Info />
      <SliderSection />
      <br />
      <News />
      <Crousel />
      <br />
      <br />
      <br />
    </div>
   
  );
}

export default Home;
