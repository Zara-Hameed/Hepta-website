import React from 'react'
import Hero from '../Component/Hero/Hero'
import Sidebyside from '../Component/Sidebyside/Sidebyside'
import ExperienceSection from '../Component/ExperienceSection/ExperienceSection'
import Slider from '../Component/Slider/Slider'
import BlogPosts from '../Component/Blogpost/Blogpost'
import TestimonialSection from '../Component/Testimonials/Testimonials'
import TopDestinations from '../Component/Topdestinations/Topdestinations'

const Home = () => {
  return (
    <>
    <Hero/>
    <Sidebyside/>
    <ExperienceSection/>
    <Slider/>
    <BlogPosts/>
    <TestimonialSection/>
    <TopDestinations/>
    
    </>
  )
}

export default Home