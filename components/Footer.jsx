export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">✂️</div>
              <div className="logo-text">
                <h1 className="gradient-text">MAAN</h1>
                <p>Unisex Salon</p>
              </div>
            </div>
            <p>Premium hair &amp; beauty services at unbeatable prices. Professionally trained by Habib. Your neighborhood salon, elevated.</p>
            <p style={{ color: '#6B7280', marginTop: 16 }}>📍 Hastal, Uttam Nagar, Delhi</p>
          </div>

          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#offers">Offers</a>
              <a href="#about">About</a>
              <a href="#gallery">Gallery</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-contact">
              <p>📞 <a href="tel:+917011810776">+91 70118 10776</a></p>
              <p>💬 <a href="https://wa.me/917011810776" target="_blank">WhatsApp</a></p>
              <p>🕐 8:00 AM – 9:30 PM</p>
              <p>📅 Open 7 days</p>
            </div>
          </div>
        </div>

        <div className="section-line" style={{ marginBottom: 24 }} />
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} MAAN Unisex Salon. All rights reserved.</p>
          <p style={{ color: 'rgba(196,121,138,0.3)' }}>Trained by Habib ✂️</p>
        </div>
      </div>
    </footer>
  );
}