import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import myVideo from './assets/backround.mp4'


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={myVideo} autoPlay loop muted />
      <h1 className = "port">Welcome to my Portfolio</h1>
      
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          to = '/products'
        >
          View Projects
        </Button>
        
       
      </div>
    </div>
  );
}

export default HeroSection;
