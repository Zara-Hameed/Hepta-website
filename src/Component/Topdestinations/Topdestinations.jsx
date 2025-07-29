import React from "react";
import "../Topdestinations/Topdestinations.css";
import img1 from "../../assets/img_1.jpg.webp";
import img2 from "../../assets/img_2.jpg.webp";
import img3 from "../../assets/img_3.jpg.webp";
import img4 from "../../assets/img_4.jpg.webp";

const destinations = [
  {
    title: "Food & Wines",
    image: img1,
    rating: 4,
    reviews: "3,239 reviews",
  },
  {
    title: "Resort & Spa",
    image: img2,
    rating: 4,
    reviews: "4,921 reviews",
  },
  {
    title: "Hotel Rooms",
    image: img3,
    rating: 4,
    reviews: "2,112 reviews",
  },
  {
    title: "Mountain Climbing",
    image: img4,
    rating: 4,
    reviews: "6,421 reviews",
  },
];

const getStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const half = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={i} className="star full">★</span>);
  }

  if (half) {
    stars.push(<span key="half" className="star half">☆</span>);
  }

  while (stars.length < 5) {
    stars.push(<span key={`empty-${stars.length}`} className="star empty">☆</span>);
  }

  return stars;
};

const TopDestinations = () => {
  return (
    <section className="visit-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Top Destination</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto
            doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id
            porro, culpa maiores quis, blanditiis laboriosam alias. Sed.
          </p>
        </div>

        <div className="destinations-grid">
          {destinations.map((item, index) => (
            <div
              className="destination-card"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <div className="stars-review">
                <div className="stars">{getStars(item.rating)}</div>
                <div className="review-count">{item.reviews}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
