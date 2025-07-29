import React, { useEffect } from "react";
import heroimg from "../assets/hero_5.jpg.webp";
import Pageshero from "../Component/Pageshero/Pageshero";
import Experiencecard from "../Component/Experiencecard/Experiencecard";
import AOS from "aos";
import "aos/dist/aos.css";
import experienceData from "../assets/Experiencedata.js";
import "../Pages/Styles/Hotels.css";
import Sidebyside from "../Component/Sidebyside/Sidebyside.jsx";
import image from "../assets/hero_1.jpg";
import image1 from '../assets/hero_2.jpg.webp';
import Slider from "../Component/Slider/Slider.jsx";
import HotelFeatures from "../Component/Hotelfeatures/Hotelfeatures.jsx";
import RoomSection from "../Component/RoomSection/Roomsection.jsx";
const Hotels = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Pageshero backgroundImg={heroimg} title="Our Hotel" />
      <div className="experiencegird">
        {experienceData.map((item, index) => (
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
       <RoomSection
          image={image}
          heading="Family Room"
          para1="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
          para2="A small river named Duden flows by their place and supplies it with the necessary regelialia."
          reverse={false}
        />
        <RoomSection
        image={image1}
        heading="Presidential Room"
        para1="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
        para2="A small river named Duden flows by their place and supplies it with the necessary regelialia."
        reverse
      />
   
  
<Slider heading="Hotel Gallery"/>
<HotelFeatures/>




    </>
  );
};

export default Hotels;
