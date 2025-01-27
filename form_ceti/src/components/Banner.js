import React from 'react';
import bannerImage from '../assets/banner-ceti.png'; // Importando a imagem
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="banner-content">
      </div>
    </div>
  );
};

export default Banner;