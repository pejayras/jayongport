// src/components/SocialLinks.jsx
import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import './SocialLinks.css';


const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/pejayra" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
        <FaLinkedin />
      </a>
      <a href="https://www.instagram.com/pejayra" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
        <FaInstagram />
      </a>
      <a href="https://www.facebook.com/pejayra" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
        <FaFacebook />
      </a>
      <a href="https://wa.me/6281262730609" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default SocialLinks;
