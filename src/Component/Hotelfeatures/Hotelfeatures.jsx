import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '../Hotelfeatures/HotelFeatures.css'
import img1 from "../../assets/img_1.jpg.webp";
import img2 from "../../assets/img_2.jpg.webp";
import img3 from "../../assets/img_3.jpg.webp";

const HotelFeatures = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    { id: 1, image: img1, title: "Five Reasons to Stay at Villa Resort", delay: 100 },
    { id: 2, image: img2, title: "Relax in Premium Rooms & Facilities", delay: 200 },
    { id: 3, image: img3, title: "Unmatched Natural Beauty Nearby", delay: 300 },
  ];

  return (
    <section className="section bg-pattern">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="heading">More Hotel Features</h2>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet?
            Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.
          </p>
        </div>

        <div className="features-grid">
          {features.map((item) => (
            <div className="feature-card" key={item.id} data-aos="fade-up" data-aos-delay={item.delay}>
              <div className="media-custom">
                <a href="#">
                  <img src={item.image} alt="Feature" className="feature-img" />
                </a>
                <div className="media-body">
                  <h2 className="feature-title">
                    <a href="#">{item.title}</a>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelFeatures;
