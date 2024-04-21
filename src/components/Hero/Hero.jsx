import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="main">
            <h1>Innovate with <span className='h1-span'>Creativity and Tech Synergy</span> for Better Tomorrow.</h1>
            <button onClick={() => {window.scrollTo(0, window.innerHeight ) }}>Explore more..</button>
        </div>
    </div>
  )
}

export default Hero