import React from 'react';
import Hero from '../../components/Hero/Hero';
import HomeAbout from './HomeAbout/HomeAbout';
import HomeFeatures from './HomeFeatures/HomeFeatures';
import Mover from '../../components/Mover/Mover';

const Home = () => {
  return (
    <>
    <div className="text-center">
      <Hero />
      <HomeAbout />
      <HomeFeatures />
      <Mover />
    </div>
    
    </>
  )
}

export default Home