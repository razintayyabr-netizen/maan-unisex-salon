export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-image">
            <div className="about-image-inner">
              <img src="/images/salon-about.jpg" alt="MAAN Unisex Salon" />
            </div>
            <div className="about-badge">
              <p>Professionally</p>
              <p className="gradient-text">Trained by HABIB</p>
            </div>
          </div>

          <div className="about-text">
            <span className="section-label">About Us</span>
            <h2>Where <span className="gradient-text">Beauty</span> Meets Expertise</h2>
            <p>
              MAAN Unisex Salon brings world-class hair and beauty services to your neighborhood.
              Our team is professionally trained by <strong style={{ color: 'var(--rose-light)' }}>Habib</strong> —
              one of the most respected names in the Indian beauty industry.
            </p>
            <p className="light">
              Whether you&apos;re looking for a stunning bridal makeover, a refreshing hair spa,
              or a complete beauty package, we&apos;ve got you covered — all at prices that won&apos;t break the bank.
            </p>

            <div className="about-stats">
              <div className="about-stat">
                <span className="icon">🏆</span>
                <p className="title">Habib Trained</p>
                <p className="sub">Certified professionals</p>
              </div>
              <div className="about-stat">
                <span className="icon">💎</span>
                <p className="title">Best Prices</p>
                <p className="sub">Unbeatable rates</p>
              </div>
              <div className="about-stat">
                <span className="icon">🕐</span>
                <p className="title">8AM – 9:30PM</p>
                <p className="sub">Open all day</p>
              </div>
              <div className="about-stat">
                <span className="icon">💇</span>
                <p className="title">Unisex</p>
                <p className="sub">Men &amp; Women welcome</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}