import React from 'react';
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import ScrollToTop from "./ScrollToTop";


function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />  {/* 👈 This ensures scroll resets on every route change */}
      <Header />
      <div
        className="flex-grow"
        style={{
          backgroundImage: "url('path-to-your-image.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
