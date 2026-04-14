const services = [
  { name: 'Smoothing', price: '₹1,999', desc: 'Silky smooth, frizz-free hair that lasts weeks. Professional-grade treatment.', tag: 'Popular', image: '/images/smoothing.jpg' },
  { name: 'Party Makeup', price: '₹999', desc: 'Stunning looks for every celebration. Subtle glam to bold party-ready.', tag: 'Best Value', image: '/images/makeup.jpg' },
  { name: 'Keratin Treatment', price: '₹1,499', desc: 'Deep keratin infusion for stronger, shinier, healthier hair.', tag: '', image: '/images/keratin.jpg' },
  { name: 'Bridal Makeup', price: '₹3,999', desc: 'Your perfect bridal glow. HD makeup stunning on camera and in person.', tag: 'Premium', image: '/images/bridal.jpg' },
  { name: 'Global Color', price: '₹999', desc: 'Full head coloring with premium brands. Vibrant, long-lasting results.', tag: '', image: '/images/color.jpg' },
  { name: 'Pre-Bridal + Bridal', price: '₹7,999', desc: 'Complete bridal package — skincare prep, facials & stunning makeup.', tag: 'Best Deal', image: '/images/beauty-package.jpg' },
  { name: 'Hair Spa', price: '₹399', desc: 'Relaxing deep conditioning. Revitalizes damaged hair, soothes scalp.', tag: '', image: '/images/hairspa.jpg' },
  { name: 'Complete Beauty Package', price: '₹999', desc: 'Threading + De-Tan + Facial + Wax. All-in-one glow up!', tag: 'Combo', image: '/images/beauty-package.jpg' },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">What We <span className="gradient-text">Offer</span></h2>
          <div className="section-line" />
        </div>

        <div className="services-grid">
          {services.map((svc, i) => (
            <div key={i} className="service-card">
              <div className="service-card-img">
                <img src={svc.image} alt={svc.name} loading="lazy" />
                {svc.tag && <span className="service-tag">{svc.tag}</span>}
              </div>
              <div className="service-card-body">
                <h3>{svc.name}</h3>
                <p>{svc.desc}</p>
                <div className="service-card-footer">
                  <span className="service-price gradient-text-gold">{svc.price}</span>
                  <a href={`https://wa.me/917011810776?text=Hi! I'd like to book ${svc.name}`} target="_blank" className="service-book">Book →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}