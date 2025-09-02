import React from 'react';
import { Link } from 'react-router-dom';
import Data from '../data/Data';
import Members from '../members/Members';

function About() {
  return (
    <div >
      <Data BackGroundImage="https://img.freepik.com/free-photo/beautiful-shot-mountain-covered-by-green-trees-with-beautiful-blue-sky-clouds-background_181624-16423.jpg" Header="Home" Text="Your Gateway to MENA Growth" Para="Explore how our services can help you achieve your goals and connect with like-minded individuals." Cta="KNOW MORE" Stats1="25" Stats2="25" Stats3="25" Stats4="25+" />

      <Members Header={<>Our Founding <br /> Member</>} Para="Explore how our services can help you achieve your goals and connect with like-minded individuals.Explore how our services can help you achieve your goals and connect with like-minded individuals.Explore how our Explore how our services can help you achieve your goals and connect with like-minded individuals." Members={['/FounderMember1.png', 'FounderMember2.png', 'FounderMember-Copy3.png', 'FounderMember-Copy4.png']} />

      <Members Header="LOREM LOREM LOREM" Para="Explore how our services can help you achieve your goals and connect with like-minded individuals." Members={['https://imgs.search.brave.com/mK7JRffijLaxpK-CJAdR7BHXnEWq316kd3S6-zsgtYc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbGFj/ZWl0LWltZy0xLXAu/Y2RuLmF3cy5wbGFj/ZWl0Lm5ldC91cGxv/YWRzL3N0YWdlL3N0/YWdlX2ltYWdlLzU3/ODA2L29wdGltaXpl/ZF9sYXJnZV90aHVt/Yl9zdGFnZS5qcGc', 'https://imgs.search.brave.com/h_MIoNSGirjfVZXrQbK_eto3brTBYrBWi2wxKKbtJaQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2Rlc2lnbi5u/ZXQvaW1hZ2VzL2hv/bWUtbG9nb3MvQ2xl/YW5pbmctbG9nby0t/LXdhdGVyLWRyb3At/aW4tYS1oZXhhZ29u/LXNoYXBlLmpwZw', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc']} />


      <Members Header="LOREM LOREM LOREM" Para="Explore how our services can help you achieve your goals and connect with like-minded individuals." Members={['https://imgs.search.brave.com/mK7JRffijLaxpK-CJAdR7BHXnEWq316kd3S6-zsgtYc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbGFj/ZWl0LWltZy0xLXAu/Y2RuLmF3cy5wbGFj/ZWl0Lm5ldC91cGxv/YWRzL3N0YWdlL3N0/YWdlX2ltYWdlLzU3/ODA2L29wdGltaXpl/ZF9sYXJnZV90aHVt/Yl9zdGFnZS5qcGc', 'https://imgs.search.brave.com/h_MIoNSGirjfVZXrQbK_eto3brTBYrBWi2wxKKbtJaQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2Rlc2lnbi5u/ZXQvaW1hZ2VzL2hv/bWUtbG9nb3MvQ2xl/YW5pbmctbG9nby0t/LXdhdGVyLWRyb3At/aW4tYS1oZXhhZ29u/LXNoYXBlLmpwZw', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc', 'https://imgs.search.brave.com/UMpqa4g_brcrICB8-f4wkXHbjEvg3acXDxgndvYHuDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcGku/ZnJlZWxvZ29kZXNp/Z24ub3JnL2Fzc2V0/cy90aHVtYi9sb2dv/L2YyNmM2NzE1YzNh/ZDQzNjM4NjA0ODc0/YzNjMjU2MWRiXzQw/MC5wbmc',]} />


      <div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus in reprehenderit laborum. Voluptate, laborum in.</p>

        <h1>Join Us icon</h1>
      </div>

    </div>


  );
}

export default About;
