const services = [
  {
    icon: '💆‍♀️',
    name: 'Smoothing',
    price: '₹1,999',
    desc: 'Silky smooth, frizz-free hair that lasts weeks. Professional-grade treatment for all hair types.',
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop',
  },
  {
    icon: '💄',
    name: 'Party Makeup',
    price: '₹999',
    desc: 'Stunning looks for every celebration. From subtle glam to bold party-ready styles.',
    tag: 'Best Value',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop',
  },
  {
    icon: '✨',
    name: 'Keratin Treatment',
    price: '₹1,499',
    desc: 'Deep keratin infusion for stronger, shinier, healthier hair. Reduces breakage significantly.',
    tag: '',
    image: 'https://images.unsplash.com/photo-1519699047748-1b463d4baa73?w=400&h=300&fit=crop',
  },
  {
    icon: '👰',
    name: 'Bridal Makeup',
    price: '₹3,999',
    desc: 'Your perfect bridal glow. Professional HD makeup that looks stunning in person and on camera.',
    tag: 'Premium',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop',
  },
  {
    icon: '🎨',
    name: 'Global Color',
    price: '₹999',
    desc: 'Full head coloring with premium international brands. Vibrant, long-lasting results.',
    tag: '',
    image: 'https://images.unsplash.com/photo-1605497788046-5f5db6d5a9a0?w=400&h=300&fit=crop',
  },
  {
    icon: '💒',
    name: 'Pre-Bridal + Bridal Makeup',
    price: '₹7,999',
    desc: 'Complete bridal package — skincare prep, facials, and stunning makeup for your big day.',
    tag: 'Best Deal',
    image: 'https://images.unsplash.com/photo-1519741497674-611041407985?w=400&h=300&fit=crop',
  },
  {
    icon: '🧖‍♀️',
    name: 'Hair Spa',
    price: '₹399',
    desc: 'Relaxing deep conditioning treatment. Revitalizes damaged hair and soothes the scalp.',
    tag: '',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfa368690?w=400&h=300&fit=crop',
  },
  {
    icon: '🌸',
    name: 'Thread + De-Tan + Facial + Wax',
    price: '₹999',
    desc: 'Complete beauty package — threading, de-tanning, facial, and full wax. All-in-one glow up!',
    tag: 'Combo',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[var(--rose-gold)] text-sm tracking-[0.3em] uppercase font-medium">What We Offer</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <div className="section-divider w-24 mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <div key={i} className="service-card rounded-2xl overflow-hidden relative group">
              {svc.tag && (
                <span className="absolute top-3 right-3 z-10 text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded-full bg-[var(--rose-gold)]/20 text-[var(--rose-gold-light)] border border-[var(--rose-gold)]/20">
                  {svc.tag}
                </span>
              )}
              {/* Image */}
              <div className="h-44 overflow-hidden">
                <img
                  src={svc.image}
                  alt={svc.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold mb-1">{svc.name}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{svc.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold gradient-text">{svc.price}</span>
                  <a
                    href={`https://wa.me/917011810776?text=Hi! I'd like to book ${svc.name} at MAAN Unisex Salon`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[var(--rose-gold)] border border-[var(--rose-gold)]/30 rounded-full px-3 py-1 hover:bg-[var(--rose-gold)]/10 transition-colors"
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