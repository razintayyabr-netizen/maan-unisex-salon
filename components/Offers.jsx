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
    <section id="offers" className="section">
      <div className="section-inner">
        <div className="section-header">
          <div className="hero-badge" style={{ marginBottom: 20 }}>
            <span>🔥</span>
            <span>Special Offers</span>
          </div>
          <h2 className="section-title">Unbeatable <span className="gradient-text-gold">Prices</span></h2>
          <p style={{ color: '#6B7280', marginTop: -8 }}>Limited time — book now and save big!</p>
          <div className="section-line" style={{ marginTop: 24 }} />
        </div>

        <div className="offers-list">
          {offers.map((o, i) => (
            <div key={i} className="offer-card">
              <div>
                <div className="offer-name">{o.name}</div>
                <div className="offer-prices">
                  <span className="offer-price gradient-text-gold">{o.price}</span>
                  <span className="offer-original">{o.original}</span>
                </div>
              </div>
              <div className="offer-right">
                <span className="offer-save">SAVE {o.save}</span>
                <a href={`https://wa.me/917011810776?text=Hi! I want: ${o.name} at ${o.price}`} target="_blank" className="offer-claim">Claim →</a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 56 }}>
          <a href="https://wa.me/917011810776?text=Hi! I'd like to book an appointment" target="_blank" className="btn-primary" style={{ padding: '16px 48px', fontSize: 18 }}>
            Book Your Appointment
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 9h14M11 4l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}