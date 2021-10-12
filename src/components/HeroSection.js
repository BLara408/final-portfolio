import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/backround.mp4' autoPlay loop muted />
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
