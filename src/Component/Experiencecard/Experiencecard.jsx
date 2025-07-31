import React from 'react';
import '../ExperienceSection/ExperienceSection.css';

const Experiencecard = ({ image, title, description, aos, delay }) => {
  return (
    <div
      className="card"
      data-aos={aos}           
      data-aos-delay={delay}   
    >
      <img src={image} alt={title} className="cardicon" />
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
    </div>
  );
};

export default Experiencecard;
