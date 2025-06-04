import React from 'react';
import './Hero.css';
import profilePic from '../assets/profile.png'; // Letakkan gambar di folder src/assets

function Hero() {
  return (
    <div className="hero">
      <img src={profilePic} alt="Foto Jayong" className="hero-image" />
      <h1>Hello, I'm Jayong</h1>
      <p>Welcome to my portfolio website!</p>
    </div>
  );
}

export default Hero;
