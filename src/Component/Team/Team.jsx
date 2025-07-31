
import React from 'react';
import '../Team/Team.css'

import person1 from '../../assets/person_1.jpg.webp';
import person2 from '../../assets/person_2.jpg.webp';
import person3 from '../../assets/person_3.jpg.webp';

const teamMembers = [
  {
    name: 'Vince Richardson',
    role: 'CEO, Co-Founder',
    image: person3,
  },
  {
    name: 'Jean Love',
    role: 'CTO, Co-Founder',
    image: person1,
  },
  {
    name: 'Jeff Stark',
    role: 'Marketer, Co-Founder',
    image: person2,
  },
  {
    name: 'Vince Richardson',
    role: 'CEO, Co-Founder',
    image: person3,
  },
  {
    name: 'Jean Love',
    role: 'CTO, Co-Founder',
    image: person1,
  },
  {
    name: 'Jeff Stark',
    role: 'Marketer, Co-Founder',
    image: person2,
  },
];

const Team = () => {
  return (
    <section className="team-section">
      <div className="container">
        <div className="text-center heading-wrapper" data-aos="fade-up">
          <h2 className="heading">Team</h2>
          <p className="lead">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index} data-aos="fade-up" data-aos-delay={100 * ((index % 3) + 1)}>
              <div className="media-custom">
                <a href="#">
                  <img src={member.image} alt={member.name} className="img-fluid" />
                </a>
                <div className="media-body">
                  <span className="meta-post">{member.role}</span>
                  <h2>
                    <a href="#">{member.name}</a>
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

export default Team;
