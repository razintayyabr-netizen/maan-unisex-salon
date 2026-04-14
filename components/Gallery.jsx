'use client';

import { useState } from 'react';

const images = [
  { src: '/images/g1.jpg', label: 'Hair Styling' },
  { src: '/images/g2.jpg', label: 'Makeup' },
  { src: '/images/g3.jpg', label: 'Bridal' },
  { src: '/images/g4.jpg', label: 'Hair Spa' },
  { src: '/images/g5.jpg', label: 'Hair Color' },
  { src: '/images/g6.jpg', label: 'Keratin' },
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Our Work</span>
          <h2 className="section-title"><span className="gradient-text">Gallery</span></h2>
          <div className="section-line" />
        </div>

        <div className="gallery-grid">
          {images.map((img, i) => (
            <div key={i} className="gallery-item" onClick={() => setActive(img)}>
              <img src={img.src} alt={img.label} loading="lazy" />
              <div className="gallery-label">
                <p>{img.label}</p>
                <p>Click to view</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {active && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <div style={{ position: 'relative', maxWidth: '900px' }}>
            <img src={active.src} alt={active.label} />
            <div className="lightbox-close" onClick={() => setActive(null)}>✕</div>
            <p className="lightbox-label">{active.label}</p>
          </div>
        </div>
      )}
    </section>
  );
}