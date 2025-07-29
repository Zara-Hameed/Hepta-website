// src/components/Gallerysection.jsx
import React from 'react';
import '../Gallery/Gallerysection.css';

import img1 from '../../assets/img_1.jpg.webp';
import img2 from '../../assets/img_2.jpg.webp';
import img3 from '../../assets/img_3.jpg.webp';
import img5 from '../../assets/img_5.jpg.webp';

const images = [img1, img2, img3, img5];

const galleryLayout = [
  { src: img1, gridArea: '1 / 1 / 2 / 2' },
  { src: img2, gridArea: '1 / 2 / 2 / 3' },
  { src: img3, gridArea: '1 / 3 / 2 / 4' },
  { src: img5, gridArea: '1 / 4 / 2 / 5' },
  { src: img3, gridArea: '2 / 1 / 3 / 2' },
  { src: img5, gridArea: '2 / 2 / 3 / 3' },
  { src: img1, gridArea: '2 / 3 / 3 / 4' },
  { src: img2, gridArea: '2 / 4 / 3 / 5' },
  { src: img1, gridArea: '3 / 1 / 5 / 3' }, // spans 2 rows and 2 columns
  { src: img2, gridArea: '3 / 3 / 5 / 5' }, // spans 2 rows and 2 columns
  { src: img3, gridArea: '5 / 1 / 6 / 2' },
  { src: img5, gridArea: '5 / 2 / 6 / 3' },
  { src: img1, gridArea: '5 / 3 / 6 / 4' },
  { src: img2, gridArea: '5 / 4 / 6 / 5' }
];

const Gallerysection = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-grid">
        {galleryLayout.map((item, index) => (
          <div
            key={index}
            className="gallery-item"
            style={{ gridArea: item.gridArea }}
          >
            <a href={item.src} data-fancybox="gallery">
              <img src={item.src} alt={`Gallery ${index}`} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallerysection;
