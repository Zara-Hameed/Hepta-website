import React from 'react';
import '../RoomSection/Roomsection.css'


const RoomSection = ({ image, heading, para1, para2, reverse }) => {
  return (
    <div className={`half ${reverse ? 'reverse' : ''}`} data-aos="fade">
      <div
        className="image"
        style={{ backgroundImage: `url(${image})` }}
        data-aos="fade"
      ></div>
      <div
        className="text"
        data-aos={reverse ? 'fade-left' : 'fade-right'}
        data-aos-delay="200"
      >
        <h2>{heading}</h2>
        <p>{para1}</p>
        <p>{para2}</p>
        <p className="mt-5">
          <a href="#" className="btn btn-primary uppercase">
            Learn More
          </a>
        </p>
      </div>
    </div>
  );
};

export default RoomSection;
