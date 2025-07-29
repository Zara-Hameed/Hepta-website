import React from 'react';
import '../Pageshero/Pageshero.css';

const Pageshero = ({ backgroundImg, title }) => {
  const heroStyle = {
    backgroundImage: `url(${backgroundImg})`,
  };

  return (
    <section className="site-hero" style={heroStyle}>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">
            A free template by <a href="#" target="_blank" rel="noopener noreferrer">Colorlib</a>. Download and share!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pageshero;
