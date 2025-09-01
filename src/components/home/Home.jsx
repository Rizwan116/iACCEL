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
     <Data BackGroundImage="https://img.freepik.com/free-photo/beautiful-shot-mountain-covered-by-green-trees-with-beautiful-blue-sky-clouds-background_181624-16423.jpg" Header="Home" Text="Your Gateway to MENA Growth" Para="Explore how our services can help you achieve your goals and connect with like-minded individuals." Cta="KNOW MORE" Stats1="25" Stats2="25" Stats3="25" Stats4="25+" />

      <Info BackroundImage = "https://img.freepik.com/free-photo/beautiful-shot-mountain-covered-by-green-trees-with-beautiful-blue-sky-clouds-background_181624-16423.jpg" Header = "Services" Text = "This is a sample text for the hero section. You can replace it with your own content to make it more relevant to your website or application." Para = 'Explore how our services can help you achieve your goals and connect with like-minded individuals.' CardText1 = 'Market Acess'/>

      <SliderSection Header = "Startups" Text = "Where Startups Meet Success" Images = {['https://imgs.search.brave.com/mK7JRffijLaxpK-CJAdR7BHXnEWq316kd3S6-zsgtYc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbGFj/ZWl0LWltZy0xLXAu/Y2RuLmF3cy5wbGFj/ZWl0Lm5ldC91cGxv/YWRzL3N0YWdlL3N0/YWdlX2ltYWdlLzU3/ODA2L29wdGltaXpl/ZF9sYXJnZV90aHVt/Yl9zdGFnZS5qcGc', 'https://imgs.search.brave.com/h_MIoNSGirjfVZXrQbK_eto3brTBYrBWi2wxKKbtJaQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2Rlc2lnbi5u/ZXQvaW1hZ2VzL2hv/bWUtbG9nb3MvQ2xl/YW5pbmctbG9nby0t/LXdhdGVyLWRyb3At/aW4tYS1oZXhhZ29u/LXNoYXBlLmpwZw', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc']} />

      <br />


      <News BackroundImage = "https://img.freepik.com/free-photo/beautiful-shot-mountain-covered-by-green-trees-with-beautiful-blue-sky-clouds-background_181624-16423.jpg" Header = "Media" Date = "Date: 12 March 2025" Time = "Time: 08:30 AM - 1:00 PM" EventDetails = "Lorem ipsum dolor sit amet, "News1Header = "News" New2Text = "Lorem ipsum dolor sit amet,"  News2Date = "22 March 2203" />

      <Crousel  Header = "What People says about us" Para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." Name = "John Doe" Role = "CEO, Company" Image = "https://img.freepik.com/free-photo/young-handsome-office_23-2148474918.jpg?w=740&t=st=1696545721~exp=1696546321~hmac=3a5f0d1e3e2e4f0f5f6e8e6c6e8e6c6e8e6c6e8e6c6e8e6c6e8e6c6e8e6c6e8"/>
      <br />
      <br />
      <br />
    </div>
   
  );
}

export default Home;
