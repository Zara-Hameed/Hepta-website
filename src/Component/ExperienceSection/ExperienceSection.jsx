import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Experiencecard from "../Experiencecard/Experiencecard";
import "../ExperienceSection/ExperienceSection.css";

import breakfast from "../../assets/001-breakfast.svg";
import planet from "../../assets/002-planet-earth.svg";
import airplane from "../../assets/003-airplane.svg";
import beach from "../../assets/004-beach.svg";
import mountains from "../../assets/005-mountains.svg";
import balloon from "../../assets/006-hot-air-balloon.svg";

const data = [
  {
    image: breakfast,
    title: "Good Foods",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    image: planet,
    title: "Travel Anywhere",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    image: airplane,
    title: "Airplane",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    image: beach,
    title: "Beach Resort",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    image: mountains,
    title: "Mountain Climbing",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    image: balloon,
    title: "Hot Air Balloon",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
];

const ExperienceSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="experience">
      <div className="experiencecontainer">
        <div className="experienceheader" data-aos="fade-up">
          <h2 className="heading">Experience Once In Your Life Time</h2>
          <p className="experiencedescription">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
        <div className="experiencegird">
          {data.map((item, index) => (
            <Experiencecard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              aos="fade-up"
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
