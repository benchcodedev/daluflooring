import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <div className="bg-[#E8E6DC] text-[#231F1C] min-h-screen flex flex-col font-sans selection:bg-[#3d2b1f] selection:text-[#FBF9EC] overflow-x-hidden antialiased">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
