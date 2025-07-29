import React from 'react';
import '../Testimonials/Testimonials.css';
import person1 from '../../assets/person_1.jpg.webp';
import person2 from '../../assets/person_2.jpg.webp';
import person3 from '../../assets/person_3.jpg.webp';

const testimonials = [
  {
    img: person1,
    text: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
    there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, 
    a large language ocean.`,
    name: 'Clare Gupta',
  },
  {
    img: person2,
    text: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
    there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, 
    a large language ocean.`,
    name: 'Rogie Slater',
  },
  {
    img: person3,
    text: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
    there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, 
    a large language ocean.`,
    name: 'John Doe',
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="title-box" data-aos="fade-up">
          <h2 className="heading">Happy Customers</h2>
        </div>
        <div className="testimonial-row">
          {testimonials.map((item, index) => (
            <div
              className="testimonial-col"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="testimonial">
                <div className="author-image">
                  <img src={item.img} alt={item.name} className="circle-img" />
                </div>
                <blockquote>
                  <p>&ldquo;{item.text}&rdquo;</p>
                </blockquote>
                <p className="author-name">&mdash; {item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
