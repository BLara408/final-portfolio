import React from 'react';
import '../../App.css';

import HeroSection from '../HeroSection';
import Footer from '../Footer';
import AboutMe from '../AboutMe';
function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe/>
      <Footer />
    </>
  );
}

export default Home;
