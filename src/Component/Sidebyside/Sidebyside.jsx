import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Sidebyside/Sidebyside.css";
import defaultImage from "../../assets/img_1_long.jpg.webp";

const Sidebyside = ({
  image = defaultImage,
  title = "Welcome To Our Website",
  showVideo = true,
  videoLink = "https://vimeo.com/channels/staffpicks/93951774",
  buttonText = "Learn More",
  buttonLink = "#",
  reverse = false, 
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    // <div className="container">
    //   <div className="partition">
    //     <div className="left" data-aos="fade-up">
    //       <img src={image} alt="section visual" />
    //     </div>
    //     <div className="right" data-aos="fade-up" data-aos-delay="200">
    //       <h1>{title}</h1>
    //       <p>
    //         Far far away, behind the word mountains, far from the countries
    //         Vokalia and Consonantia, there live the blind texts...
    //       </p>
    //       <p>
    //         A small river named Duden flows by their place and supplies it with
    //         the necessary regelialia.
    //       </p>

    //       <div className="video" data-aos="fade-up" data-aos-delay="400">
    //         {showVideo ? (
    //           <a
    //             href={videoLink}
    //             className="btn-play"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             <span className="icon">
    //               <i className="fa fa-play"></i>
    //             </span>
    //             <span className="text">Watch The Video</span>
    //           </a>
    //         ) : (
    //           <a href={buttonLink} className="btn-alt">
    //             {buttonText}
    //           </a>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container">
  <div className={`partition ${reverse ? "reverse" : ""}`}>
    {!reverse ? (
      <>
        <div className="left" data-aos="fade-up">
          <img src={image} alt="section visual" />
        </div>
        <div className="right" data-aos="fade-up" data-aos-delay="200">
          <h1>{title}</h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts...
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>

          <div className="video" data-aos="fade-up" data-aos-delay="400">
            {showVideo ? (
              <a
                href={videoLink}
                className="btn-play"
                target="_blank"
                rel="noreferrer"
              >
                <span className="icon">
                  <i className="fa fa-play"></i>
                </span>
                <span className="text">Watch The Video</span>
              </a>
            ) : (
              <a href={buttonLink} className="btn-alt">
                {buttonText}
              </a>
            )}
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="right" data-aos="fade-up" data-aos-delay="200">
          <h1>{title}</h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts...
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>

          <div className="video" data-aos="fade-up" data-aos-delay="400">
            {showVideo ? (
              <a
                href={videoLink}
                className="btn-play"
                target="_blank"
                rel="noreferrer"
              >
                <span className="icon">
                  <i className="fa fa-play"></i>
                </span>
                <span className="text">Watch The Video</span>
              </a>
            ) : (
              <a href={buttonLink} className="btn-alt">
                {buttonText}
              </a>
            )}
          </div>
        </div>

        <div className="left" data-aos="fade-up">
          <img src={image} alt="section visual" />
        </div>
      </>
    )}
  </div>
</div>

  );
};

export default Sidebyside;
