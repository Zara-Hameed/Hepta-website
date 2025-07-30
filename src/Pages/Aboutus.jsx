import React from "react";
import heroimg from "../assets/hero_2.jpg.webp";
import Pageshero from "../Component/Pageshero/Pageshero";
import image from "../assets/hero_1.jpg";
import Sidebyside from "../Component/Sidebyside/Sidebyside";
import Slider from "../Component/Slider/Slider";
import Team from "../Component/Team/Team";
import RoomSection from "../Component/RoomSection/Roomsection";
const Aboutus = () => {
  return (
    <>
      <Pageshero backgroundImg={heroimg} title="About Us" />
      <RoomSection
        image={image}
        heading="Welcome Travel & Tours"
        para1="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
        para2="A small river named Duden flows by their place and supplies it with the necessary regelialia."
        reverse
      />
      <Slider heading="Hotel Gallery" />
      <Team />
    </>
  );
};

export default Aboutus;
