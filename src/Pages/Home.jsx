import React, { useState } from 'react';
import Hero from '../Component/Hero/Hero';
import Sidebyside from '../Component/Sidebyside/Sidebyside';
import ExperienceSection from '../Component/ExperienceSection/ExperienceSection';
import Slider from '../Component/Slider/Slider';
import BlogPosts from '../Component/Blogpost/Blogpost';
import TestimonialSection from '../Component/Testimonials/Testimonials';
import TopDestinations from '../Component/Topdestinations/Topdestinations';
import Videoplayer from '../Component/Videoplayer/Videoplayer';

const Home = () => {
  const [playState, setPlayState] = useState(false); 

  return (
    <>
      <Hero />
      <Sidebyside setPlayState={setPlayState} />
      <ExperienceSection />
      <Slider />
      <BlogPosts />
      <TestimonialSection />
      <TopDestinations />
      <Videoplayer playState={playState} setPlayState={setPlayState} />
    </>
  );
};

export default Home;
