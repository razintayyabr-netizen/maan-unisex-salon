export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Visit <span className="gradient-text">Our Salon</span></h2>
          <div className="section-line" />
        </div>

        <div className="contact-grid">
          <a href="tel:+917011810776" className="contact-card">
            <div className="contact-icon">📞</div>
            <h3>Call Us</h3>
            <p className="value">+91 70118 10776</p>
            <p className="sub">Tap to call</p>
          </a>
          <a href="https://wa.me/917011810776?text=Hi! I'd like to book an appointment" target="_blank" className="contact-card">
            <div className="contact-icon" style={{ background: 'rgba(16,185,129,0.08)', borderColor: 'rgba(16,185,129,0.1)' }}>💬</div>
            <h3>WhatsApp</h3>
            <p className="value" style={{ color: '#34D399' }}>+91 70118 10776</p>
            <p className="sub">Chat &amp; book instantly</p>
          </a>
          <div className="contact-card">
            <div className="contact-icon" style={{ background: 'rgba(212,168,83,0.08)', borderColor: 'rgba(212,168,83,0.1)' }}>🕐</div>
            <h3>Working Hours</h3>
            <p className="value" style={{ color: 'var(--gold-light)' }}>8:00 AM – 9:30 PM</p>
            <p className="sub">Open 7 days</p>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.0!2d77.05!3d28.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHastal%2C+Uttam+Nagar%2C+Delhi!5e0!3m2!1sen!2sin!4v1"
            loading="lazy"
            title="MAAN Unisex Salon Location"
          />
        </div>
        <p className="contact-address">
          📍 Hastal, Uttam Nagar, Delhi · <a href="https://maps.google.com/?q=Hastal+Uttam+Nagar+Delhi" target="_blank">Open in Google Maps →</a>
        </p>
      </div>
    </section>
  );
}