'use client';

import { useState } from 'react';

const images = [
  { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=600&fit=crop', label: 'Hair Styling' },
  { src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=600&fit=crop', label: 'Makeup' },
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop', label: 'Bridal' },
  { src: 'https://images.unsplash.com/photo-1519699047748-1b463d4baa73?w=600&h=600&fit=crop', label: 'Hair Spa' },
  { src: 'https://images.unsplash.com/photo-1605497788046-5f5db6d5a9a0?w=600&h=600&fit=crop', label: 'Hair Color' },
  { src: 'https://images.unsplash.com/photo-1521590832167-7bcbfa368690?w=600&h=600&fit=crop', label: 'Keratin' },
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[var(--rose)] text-xs tracking-[0.4em] uppercase font-medium">Our Work</span>
          <h2 className="font-display text-5xl sm:text-6xl font-bold mt-4 mb-5">
            <span className="gradient-text">Gallery</span>
          </h2>
          <div className="section-line w-32 mx-auto" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((img, i) => (
            <div key={i} className="gallery-item aspect-square" onClick={() => setActive(img)}>
              <img src={img.src} alt={img.label} className="w-full h-full object-cover" loading="lazy" />
              <div className="gallery-label">
                <p className="font-display text-xl font-semibold text-white">{img.label}</p>
                <p className="text-gray-400 text-sm mt-1">Click to view</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6" onClick={() => setActive(null)}>
          <div className="relative max-w-4xl">
            <img src={active.src} alt={active.label} className="rounded-2xl max-h-[85vh] w-auto mx-auto" />
            <button onClick={() => setActive(null)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all">
              ✕
            </button>
            <p className="text-center font-display text-2xl text-white mt-5">{active.label}</p>
          </div>
        </div>
      )}
    </section>
  );
}