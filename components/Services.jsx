const services = [
  {
    name: 'Smoothing',
    price: '₹1,999',
    desc: 'Silky smooth, frizz-free hair that lasts weeks. Professional-grade treatment.',
    tag: 'Popular',
    image: '/images/smoothing.jpg',
  },
  {
    name: 'Party Makeup',
    price: '₹999',
    desc: 'Stunning looks for every celebration. Subtle glam to bold party-ready.',
    tag: 'Best Value',
    image: '/images/makeup.jpg',
  },
  {
    name: 'Keratin Treatment',
    price: '₹1,499',
    desc: 'Deep keratin infusion for stronger, shinier, healthier hair.',
    tag: '',
    image: '/images/keratin.jpg',
  },
  {
    name: 'Bridal Makeup',
    price: '₹3,999',
    desc: 'Your perfect bridal glow. HD makeup stunning on camera and in person.',
    tag: 'Premium',
    image: '/images/bridal.jpg',
  },
  {
    name: 'Global Color',
    price: '₹999',
    desc: 'Full head coloring with premium brands. Vibrant, long-lasting results.',
    tag: '',
    image: '/images/color.jpg',
  },
  {
    name: 'Pre-Bridal + Bridal',
    price: '₹7,999',
    desc: 'Complete bridal package — skincare prep, facials & stunning makeup.',
    tag: 'Best Deal',
    image: '/images/beauty-package.jpg',
  },
  {
    name: 'Hair Spa',
    price: '₹399',
    desc: 'Relaxing deep conditioning. Revitalizes damaged hair, soothes scalp.',
    tag: '',
    image: '/images/hairspa.jpg',
  },
  {
    name: 'Complete Beauty Package',
    price: '₹999',
    desc: 'Threading + De-Tan + Facial + Wax. All-in-one glow up!',
    tag: 'Combo',
    image: '/images/beauty-package.jpg',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--rose)]/3 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-[var(--rose)] text-xs tracking-[0.4em] uppercase font-medium">Our Services</span>
          <h2 className="font-display text-5xl sm:text-6xl font-bold mt-4 mb-5">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <div className="section-line w-32 mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {services.map((svc, i) => (
            <div key={i} className="service-card rounded-2xl group">
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <img src={svc.image} alt={svc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-card)] via-transparent to-transparent" />
                {svc.tag && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full bg-[var(--rose)]/15 text-[var(--rose-light)] border border-[var(--rose)]/15 backdrop-blur-sm">
                    {svc.tag}
                  </span>
                )}
              </div>
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