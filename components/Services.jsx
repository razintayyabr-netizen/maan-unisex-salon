const services = [
  {
    name: 'Smoothing',
    price: '₹1,999',
    desc: 'Silky smooth, frizz-free hair that lasts weeks. Professional-grade treatment.',
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&h=350&fit=crop',
  },
  {
    name: 'Party Makeup',
    price: '₹999',
    desc: 'Stunning looks for every celebration. Subtle glam to bold party-ready.',
    tag: 'Best Value',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&h=350&fit=crop',
  },
  {
    name: 'Keratin Treatment',
    price: '₹1,499',
    desc: 'Deep keratin infusion for stronger, shinier, healthier hair.',
    tag: '',
    image: 'https://images.unsplash.com/photo-1519699047748-1b463d4baa73?w=500&h=350&fit=crop',
  },
  {
    name: 'Bridal Makeup',
    price: '₹3,999',
    desc: 'Your perfect bridal glow. HD makeup stunning on camera and in person.',
    tag: 'Premium',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&h=350&fit=crop',
  },
  {
    name: 'Global Color',
    price: '₹999',
    desc: 'Full head coloring with premium brands. Vibrant, long-lasting results.',
    tag: '',
    image: 'https://images.unsplash.com/photo-1605497788046-5f5db6d5a9a0?w=500&h=350&fit=crop',
  },
  {
    name: 'Pre-Bridal + Bridal',
    price: '₹7,999',
    desc: 'Complete bridal package — skincare prep, facials & stunning makeup.',
    tag: 'Best Deal',
    image: 'https://images.unsplash.com/photo-1519741497674-611041407985?w=500&h=350&fit=crop',
  },
  {
    name: 'Hair Spa',
    price: '₹399',
    desc: 'Relaxing deep conditioning. Revitalizes damaged hair, soothes scalp.',
    tag: '',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfa368690?w=500&h=350&fit=crop',
  },
  {
    name: 'Complete Beauty Package',
    price: '₹999',
    desc: 'Threading + De-Tan + Facial + Wax. All-in-one glow up!',
    tag: 'Combo',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&h=350&fit=crop',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 relative">
      {/* BG accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--rose)]/3 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[var(--rose)] text-xs tracking-[0.4em] uppercase font-medium">Our Services</span>
          <h2 className="font-display text-5xl sm:text-6xl font-bold mt-4 mb-5">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <div className="section-line w-32 mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {services.map((svc, i) => (
            <div key={i} className="service-card rounded-2xl group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img src={svc.image} alt={svc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-card)] via-transparent to-transparent" />
                {svc.tag && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full bg-[var(--rose)]/15 text-[var(--rose-light)] border border-[var(--rose)]/15 backdrop-blur-sm">
                    {svc.tag}
                  </span>
                )}
              </div>
              {/* Content */}
              <div className="p-6 pt-3">
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-[var(--rose-light)] transition-colors">{svc.name}</h3>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">{svc.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold gradient-text-gold">{svc.price}</span>
                  <a
                    href={`https://wa.me/917011810776?text=Hi! I'd like to book ${svc.name} at MAAN Unisex Salon`}
                    target="_blank"
                    className="text-xs font-medium text-[var(--rose-light)] border border-[var(--rose)]/20 rounded-full px-4 py-2 hover:bg-[var(--rose)]/10 transition-all"
                  >
                    Book →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}