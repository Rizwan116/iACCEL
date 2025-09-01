import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../hero/Hero';
import ServiceBanner from '../services/ServiceBanner';
import Slider from 'react-slick';
import Crousel from '../crousel/Crousel';
import SliderSection from '../slider/SliderSection';

function About() {
  return (
    <div>
      <Hero backgroundImage="" title="Community" text="Connecting Visinories Driving Change" />

      <ServiceBanner Background="" Para="lorem lorem lorem lorem lorem lorem lorem" />

      <SliderSection Header = "Startups" Text = "Where Startups Meet Success" Images = {['https://imgs.search.brave.com/mK7JRffijLaxpK-CJAdR7BHXnEWq316kd3S6-zsgtYc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbGFj/ZWl0LWltZy0xLXAu/Y2RuLmF3cy5wbGFj/ZWl0Lm5ldC91cGxv/YWRzL3N0YWdlL3N0/YWdlX2ltYWdlLzU3/ODA2L29wdGltaXpl/ZF9sYXJnZV90aHVt/Yl9zdGFnZS5qcGc', 'https://imgs.search.brave.com/h_MIoNSGirjfVZXrQbK_eto3brTBYrBWi2wxKKbtJaQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2Rlc2lnbi5u/ZXQvaW1hZ2VzL2hv/bWUtbG9nb3MvQ2xl/YW5pbmctbG9nby0t/LXdhdGVyLWRyb3At/aW4tYS1oZXhhZ29u/LXNoYXBlLmpwZw', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc']} />


     <div>
            <SliderSection Header = "Startups" Text = "Where Startups Meet Success" Images = {['https://imgs.search.brave.com/mK7JRffijLaxpK-CJAdR7BHXnEWq316kd3S6-zsgtYc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbGFj/ZWl0LWltZy0xLXAu/Y2RuLmF3cy5wbGFj/ZWl0Lm5ldC91cGxv/YWRzL3N0YWdlL3N0/YWdlX2ltYWdlLzU3/ODA2L29wdGltaXpl/ZF9sYXJnZV90aHVt/Yl9zdGFnZS5qcGc', 'https://imgs.search.brave.com/h_MIoNSGirjfVZXrQbK_eto3brTBYrBWi2wxKKbtJaQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2Rlc2lnbi5u/ZXQvaW1hZ2VzL2hv/bWUtbG9nb3MvQ2xl/YW5pbmctbG9nby0t/LXdhdGVyLWRyb3At/aW4tYS1oZXhhZ29u/LXNoYXBlLmpwZw', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc']} />

     </div>

      <Crousel />


      <ServiceBanner Background="" Title="Goverment" Para="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem" />


    </div>
  );
}

export default About;
