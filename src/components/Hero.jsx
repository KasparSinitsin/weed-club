import React from 'react';
import './Hero.css'; // Add styles for the hero image
import heroImage from '../assets/hero.jpg';

const Hero = () => {
  return (
    <div className="hero">
      <img src={heroImage} alt="Hero" className="hero-image" />
    </div>
  );
};

export default Hero;
