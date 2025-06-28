import HeroSection from '@/components/HeroSection/HeroSection';
import NavBar from '@/components/NavBar/NavBar';
import PropertiesSection from '@/components/PropertiesSection/PropertiesSection';
import React from 'react';

function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <PropertiesSection />
    </>
  );
}

export default Home;
