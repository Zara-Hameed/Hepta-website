import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Sidebyside/Sidebyside.css";
import defaultImage from "../../assets/img_1_long.jpg.webp";

const Sidebyside = ({ setPlayState }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="container">
      <div className="partition">
        <div className="left" data-aos="fade-up">
          <img src={defaultImage} alt="section visual" />
        </div>

        <div className="right" data-aos="fade-up" data-aos-delay="200">
          <h1>Welcome To Our Website</h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts...
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>

          <div className="video" data-aos="fade-up" data-aos-delay="400">
            <button
              className="btn-play"
              onClick={() => setPlayState(true)}
            >
              <span className="icon">
                <i className="fa fa-play"></i>
              </span>
              <span className="text">Watch The Video</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebyside;
