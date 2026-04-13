const services = [
  {
    icon: '💆‍♀️',
    name: 'Smoothing',
    price: '₹1,999',
    desc: 'Silky smooth, frizz-free hair that lasts weeks. Professional-grade treatment for all hair types.',
    tag: 'Popular',
  },
  {
    icon: '💄',
    name: 'Party Makeup',
    price: '₹999',
    desc: 'Stunning looks for every celebration. From subtle glam to bold party-ready styles.',
    tag: 'Best Value',
  },
  {
    icon: '✨',
    name: 'Keratin Treatment',
    price: '₹1,499',
    desc: 'Deep keratin infusion for stronger, shinier, healthier hair. Reduces breakage significantly.',
    tag: '',
  },
  {
    icon: '👰',
    name: 'Bridal Makeup',
    price: '₹3,999',
    desc: 'Your perfect bridal glow. Professional HD makeup that looks stunning in person and on camera.',
    tag: 'Premium',
  },
  {
    icon: '🎨',
    name: 'Global Color',
    price: '₹999',
    desc: 'Full head coloring with premium international brands. Vibrant, long-lasting results.',
    tag: '',
  },
  {
    icon: '💒',
    name: 'Pre-Bridal + Bridal Makeup',
    price: '₹7,999',
    desc: 'Complete bridal package — skincare prep, facials, and stunning makeup for your big day.',
    tag: 'Best Deal',
  },
  {
    icon: '🧖‍♀️',
    name: 'Hair Spa',
    price: '₹399',
    desc: 'Relaxing deep conditioning treatment. Revitalizes damaged hair and soothes the scalp.',
    tag: '',
  },
  {
    icon: '🌸',
    name: 'Thread + De-Tan + Facial + Wax',
    price: '₹999',
    desc: 'Complete beauty package — threading, de-tanning, facial, and full wax. All-in-one glow up!',
    tag: 'Combo',
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
            <div key={i} className="service-card rounded-2xl p-6 relative overflow-hidden">
              {svc.tag && (
                <span className="absolute top-3 right-3 text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded-full bg-[var(--rose-gold)]/20 text-[var(--rose-gold-light)] border border-[var(--rose-gold)]/20">
                  {svc.tag}
                </span>
              )}
              <span className="text-4xl mb-4 block">{svc.icon}</span>
              <h3 className="font-display text-xl font-semibold mb-2">{svc.name}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{svc.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-2xl font-bold gradient-text">{svc.price}</span>
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
          ))}
        </div>
      </div>
    </section>
  );
}