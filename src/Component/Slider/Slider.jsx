import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Slider/Slider.css";

import img1 from "../../assets/slider-1.jpg.webp";
import img2 from "../../assets/slider-2.jpg.webp";
import img3 from "../../assets/slider-3.jpg.webp";
import img4 from "../../assets/slider-4.jpg.webp";
import img5 from "../../assets/slider-5.jpg.webp";
import img6 from "../../assets/slider-6.jpg.webp";

const images = [img1, img2, img3, img4, img5, img6];

const Slider = ({ heading = "International Tour Management." }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setCurrent(index);

  return (
    <div className="slidersection">
      <div className="sliderheader" data-aos="fade-up">
        <h2 className="heading">{heading}</h2>
        <p
          className="experiencedescription"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
      </div>

      <div className="slider-wrapper" data-aos="fade-up" data-aos-delay="400">
        <button
          className="arrow left"
          onClick={() =>
            setCurrent((current - 1 + images.length) % images.length)
          }
        >
          &lt;
        </button>

        <div className="slidercontainer">
          <img src={images[current]} alt="slide" className="slide-image" />
          <div className="dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === current ? "active" : ""}`}
                onClick={() => goToSlide(i)}
              ></span>
            ))}
          </div>
        </div>

        <button
          className="arrow right"
          onClick={() => setCurrent((current + 1) % images.length)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slider;
