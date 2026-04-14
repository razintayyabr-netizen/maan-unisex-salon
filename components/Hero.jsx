export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <img src="/images/hero-bg.jpg" alt="" />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <div className="hero-badge-dot" />
          <span>Trained by HABIB</span>
        </div>

        <h1 className="hero-title">
          <span className="gradient-text">MAAN</span>
        </h1>

        <div className="hero-subtitle">
          <div className="hero-subtitle-line" />
          <p className="hero-subtitle-text">Unisex Salon</p>
          <div className="hero-subtitle-line" style={{ background: 'linear-gradient(to left, transparent, rgba(196,121,138,0.5))' }} />
        </div>

        <p className="hero-desc">
          Where beauty meets expertise. Premium hair &amp; beauty services at prices that make you smile.
        </p>

        <div className="hero-ctas">
          <a href="https://wa.me/917011810776?text=Hi! I'd like to book an appointment at MAAN Unisex Salon" target="_blank" className="btn-primary">
            <span>Book Appointment</span>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
          <a href="#services" className="btn-outline">Explore Services</a>
        </div>

        <div className="hero-pills">
          <div className="hero-pill">
            <span>🕐</span><span>8:00 AM – 9:30 PM</span>
          </div>
          <div className="hero-pill">
            <span>📍</span><span>Hastal, Uttam Nagar, Delhi</span>
          </div>
          <div className="hero-pill">
            <span>📞</span>
            <a href="tel:+917011810776" style={{ color: '#9CA3AF', transition: 'color 0.3s' }}>+91 70118 10776</a>
          </div>
        </div>
      </div>
    </section>
  );
}