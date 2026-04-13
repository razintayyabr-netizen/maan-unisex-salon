'use client';

import { useState } from 'react';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=600&fit=crop',
    alt: 'Hair styling at MAAN Salon',
    label: 'Hair Styling',
  },
  {
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=600&fit=crop',
    alt: 'Makeup service at MAAN Salon',
    label: 'Makeup',
  },
  {
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop',
    alt: 'Bridal makeup at MAAN Salon',
    label: 'Bridal',
  },
  {
    src: 'https://images.unsplash.com/photo-1519699047748-1b463d4baa73?w=600&h=600&fit=crop',
    alt: 'Hair spa treatment at MAAN Salon',
    label: 'Hair Spa',
  },
  {
    src: 'https://images.unsplash.com/photo-1605497788046-5f5db6d5a9a0?w=600&h=600&fit=crop',
    alt: 'Hair coloring at MAAN Salon',
    label: 'Hair Color',
  },
  {
    src: 'https://images.unsplash.com/photo-1521590832167-7bcbfa368690?w=600&h=600&fit=crop',
    alt: 'Beauty treatment at MAAN Salon',
    label: 'Keratin',
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[var(--rose-gold)] text-sm tracking-[0.3em] uppercase font-medium">Our Work</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-4">
            <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-gray-400">See the magic we create every day</p>
          <div className="section-divider w-24 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setSelected(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-4 left-4 text-white font-display font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-w-3xl max-h-[80vh]">
            <img src={selected.src} alt={selected.alt} className="rounded-2xl max-h-[80vh] w-auto" />
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
            <p className="text-center text-white font-display text-xl mt-4">{selected.label}</p>
          </div>
        </div>
      )}
    </section>
  );
}