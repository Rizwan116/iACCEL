import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Github from './components/github/Github'
import About from './components/about/About'
import "sal.js/dist/sal.css";
import sal from "sal.js";

function App() {
  const [count, setCount] = useState(0)

   useEffect(() => {
    sal({
      threshold: 0.1,  // 10% of element visible before animation starts
      once: true,      // animate only once
    });
  }, []);

   useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 9000); // 4s splash
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      
    </>
  )
}

export default App
