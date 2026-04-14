export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--rose)]/5 rounded-full blur-[200px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[var(--rose)] text-xs tracking-[0.4em] uppercase font-medium">Get In Touch</span>
          <h2 className="font-display text-5xl sm:text-6xl font-bold mt-4 mb-5">
            Visit <span className="gradient-text">Our Salon</span>
          </h2>
          <div className="section-line w-32 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Phone */}
          <a href="tel:+917011810776" className="service-card rounded-2xl p-8 text-center block group">
            <div className="w-16 h-16 rounded-2xl bg-[var(--rose)]/8 border border-[var(--rose)]/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-[var(--rose)]/15 transition-colors">
              <span className="text-3xl">📞</span>
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-[var(--rose-light)] font-medium">+91 70118 10776</p>
            <p className="text-gray-600 text-sm mt-2">Tap to call</p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/917011810776?text=Hi! I'd like to book an appointment at MAAN Unisex Salon"
            target="_blank"
            className="service-card rounded-2xl p-8 text-center block group"
          >
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/8 border border-emerald-500/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-emerald-500/15 transition-colors">
              <span className="text-3xl">💬</span>
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-emerald-400 font-medium">+91 70118 10776</p>
            <p className="text-gray-600 text-sm mt-2">Chat & book instantly</p>
          </a>

          {/* Hours */}
          <div className="service-card rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-[var(--gold)]/8 border border-[var(--gold)]/10 flex items-center justify-center mx-auto mb-5">
              <span className="text-3xl">🕐</span>
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">Working Hours</h3>
            <p className="text-[var(--gold-light)] font-medium">8:00 AM – 9:30 PM</p>
            <p className="text-gray-600 text-sm mt-2">Open 7 days</p>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden border border-white/3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.0!2d77.05!3d28.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHastal%2C+Uttam+Nagar%2C+Delhi!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="300"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
            allowFullScreen=""
            loading="lazy"
            title="MAAN Unisex Salon Location"
          />
        </div>
        <p className="text-center text-gray-600 text-sm mt-4">
          📍 Hastal, Uttam Nagar, Delhi · <a href="https://maps.google.com/?q=Hastal+Uttam+Nagar+Delhi" target="_blank" className="text-[var(--rose-light)] hover:underline">Open in Google Maps →</a>
        </p>
      </div>
    </section>
  );
}