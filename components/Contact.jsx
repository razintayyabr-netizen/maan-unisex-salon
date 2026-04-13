export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--rose-gold)]/5 rounded-full blur-[100px]" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[var(--rose-gold)] text-sm tracking-[0.3em] uppercase font-medium">Get In Touch</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-4">
            Visit <span className="gradient-text">Our Salon</span>
          </h2>
          <div className="section-divider w-24 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Phone */}
          <a href="tel:+917011810776" className="service-card rounded-2xl p-8 text-center block">
            <span className="text-4xl mb-4 block">📞</span>
            <h3 className="font-display text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-[var(--rose-gold-light)] font-medium">+91 70118 10776</p>
            <p className="text-gray-500 text-sm mt-2">Tap to call directly</p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/917011810776?text=Hi! I'd like to book an appointment at MAAN Unisex Salon"
            target="_blank"
            rel="noopener noreferrer"
            className="service-card rounded-2xl p-8 text-center block"
          >
            <span className="text-4xl mb-4 block">💬</span>
            <h3 className="font-display text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-green-400 font-medium">+91 70118 10776</p>
            <p className="text-gray-500 text-sm mt-2">Chat & book instantly</p>
          </a>

          {/* Timing */}
          <div className="service-card rounded-2xl p-8 text-center">
            <span className="text-4xl mb-4 block">🕐</span>
            <h3 className="font-display text-xl font-semibold mb-2">Working Hours</h3>
            <p className="text-[var(--rose-gold-light)] font-medium">8:00 AM – 9:30 PM</p>
            <p className="text-gray-500 text-sm mt-2">Open all 7 days</p>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-12 gallery-placeholder rounded-2xl h-64 flex items-center justify-center">
          <div className="text-center">
            <span className="text-4xl mb-2 block">📍</span>
            <p className="text-gray-400">Visit us at our salon</p>
            <p className="text-gray-500 text-sm mt-1">Call for exact location & directions</p>
          </div>
        </div>
      </div>
    </section>
  );
}