const offers = [
  { name: 'Smoothing', price: '₹1,999', original: '₹3,499', save: '43%' },
  { name: 'Party Makeup', price: '₹999', original: '₹1,799', save: '44%' },
  { name: 'Keratin Treatment', price: '₹1,499', original: '₹2,999', save: '50%' },
  { name: 'Bridal Makeup', price: '₹3,999', original: '₹6,999', save: '43%' },
  { name: 'Global Color', price: '₹999', original: '₹1,999', save: '50%' },
  { name: 'Pre-Bridal + Bridal', price: '₹7,999', original: '₹13,999', save: '43%' },
  { name: 'Hair Spa', price: '₹399', original: '₹799', save: '50%' },
  { name: 'Thread+DeTan+Facial+Wax', price: '₹999', original: '₹1,999', save: '50%' },
];

export default function Offers() {
  return (
    <section id="offers" className="py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Decorative orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--rose-gold)]/5 rounded-full blur-[120px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="offer-badge inline-block text-sm tracking-[0.3em] uppercase font-medium px-4 py-2 rounded-full border border-[var(--rose-gold)]/30 bg-[var(--rose-gold)]/10 text-[var(--rose-gold-light)] mb-4">
            🔥 Special Offers
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Unbeatable <span className="gradient-text">Prices</span>
          </h2>
          <p className="text-gray-400">Limited time offers — book now and save big!</p>
          <div className="section-divider w-24 mx-auto mt-6" />
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {offers.map((offer, i) => (
            <div key={i} className="flex items-center justify-between p-5 rounded-xl bg-[var(--dark-card)] border border-[var(--rose-gold)]/10 hover:border-[var(--rose-gold)]/30 transition-all group">
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold group-hover:text-[var(--rose-gold-light)] transition-colors">{offer.name}</h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-2xl font-bold gradient-text">{offer.price}</span>
                  <span className="text-sm text-gray-500 line-through">{offer.original}</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/20">
                  SAVE {offer.save}
                </span>
                <a
                  href={`https://wa.me/917011810776?text=Hi! I want the special offer: ${offer.name} at ${offer.price}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[var(--rose-gold)] hover:underline"
                >
                  Claim →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/917011810776?text=Hi! I'd like to book an appointment at MAAN Unisex Salon"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-block px-10 py-4 rounded-full text-lg font-semibold text-white"
          >
            📞 Book Your Appointment Now
          </a>
        </div>
      </div>
    </section>
  );
}