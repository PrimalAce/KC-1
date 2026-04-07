import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Testimonials from './Components/Testimonials';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Testimonials />
      {/* Add more components here */}
    </div>
  );
};

export default Home;
