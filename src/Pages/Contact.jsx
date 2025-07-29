import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Pageshero from '../Component/Pageshero/Pageshero';
import hero4 from '../assets/hero_4.jpg.webp';
import ContactSection from '../Component/Contactsection/COntactsection';
import TestimonialSection from '../Component/Testimonials/Testimonials';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Pageshero backgroundImg={hero4} title="Contact" />
      <ContactSection />
   <hr style={{ borderColor: "#A2AF9B" }} />
      <TestimonialSection />
    </>
  );
};

export default Contact;
