export default function Gallery() {
  const placeholders = [
    { icon: '💇‍♀️', label: 'Hair Styling' },
    { icon: '💄', label: 'Makeup' },
    { icon: '👰', label: 'Bridal' },
    { icon: '🧖‍♀️', label: 'Hair Spa' },
    { icon: '🎨', label: 'Hair Color' },
    { icon: '✨', label: 'Keratin' },
  ];

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
          {placeholders.map((item, i) => (
            <div key={i} className="gallery-placeholder aspect-square rounded-2xl flex flex-col items-center justify-center hover:border-[var(--rose-gold)]/30 transition-all cursor-pointer group">
              <span className="text-5xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</span>
              <p className="text-gray-500 text-sm group-hover:text-[var(--rose-gold-light)] transition-colors">{item.label}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          📸 Real photos coming soon — book a visit to see our work in person!
        </p>
      </div>
    </section>
  );
}