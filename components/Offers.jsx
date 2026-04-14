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
    <section id="offers" className="py-28 px-6 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute -right-60 top-20 w-[500px] h-[500px] bg-[var(--gold)]/5 rounded-full blur-[200px]" />
      <div className="absolute -left-60 bottom-20 w-[500px] h-[500px] bg-[var(--rose)]/5 rounded-full blur-[200px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="offer-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--rose)]/20 bg-[var(--rose)]/5 mb-5">
            <span className="text-[var(--rose)]">🔥</span>
            <span className="text-sm text-[var(--rose-light)] font-medium tracking-wide">Special Offers</span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl font-bold mb-5">
            Unbeatable <span className="gradient-text-gold">Prices</span>
          </h2>
          <p className="text-gray-500">Limited time — book now and save big!</p>
          <div className="section-line w-32 mx-auto mt-6" />
        </div>

        {/* List */}
        <div className="space-y-3">
          {offers.map((o, i) => (
            <div key={i} className="offer-card rounded-xl p-5 flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold">{o.name}</h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xl font-bold gradient-text-gold">{o.price}</span>
                  <span className="text-sm text-gray-600 line-through">{o.original}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/15">
                  SAVE {o.save}
                </span>
                <a
                  href={`https://wa.me/917011810776?text=Hi! I want the special offer: ${o.name} at ${o.price}`}
                  target="_blank"
                  className="text-[var(--rose-light)] hover:text-white transition-colors text-sm font-medium"
                >
                  Claim →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="https://wa.me/917011810776?text=Hi! I'd like to book an appointment at MAAN Unisex Salon"
            target="_blank"
            className="btn-primary inline-flex items-center gap-3 px-12 py-4 rounded-full text-lg font-medium"
          >
            Book Your Appointment
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 9h14M11 4l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}