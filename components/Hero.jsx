'use client';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&h=1080&fit=crop"
          alt="Salon background"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-[var(--rose-gold)]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-[var(--gold)]/10 rounded-full blur-[100px]" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="offer-badge inline-block mb-6 px-4 py-2 rounded-full border border-[var(--rose-gold)]/30 bg-[var(--rose-gold)]/10">
          <span className="text-[var(--rose-gold-light)] text-sm font-medium">✨ Trained by HABIB</span>
        </div>

        {/* Main heading */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold mb-4">
          <span className="gradient-text">MAAN</span>
        </h1>
        <p className="font-display text-2xl sm:text-3xl text-[var(--rose-gold-light)] mb-6 tracking-wider">
          UNISEX SALON
        </p>
        <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Where beauty meets expertise. Premium hair & beauty services at unbeatable prices.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/917011810776?text=Hi! I'd like to book an appointment at MAAN Unisex Salon"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer px-8 py-4 rounded-full text-lg font-semibold text-white inline-flex items-center gap-2"
          >
            📞 Book Appointment
          </a>
          <a
            href="#services"
            className="px-8 py-4 rounded-full text-lg font-semibold border border-[var(--rose-gold)]/40 text-[var(--rose-gold-light)] hover:bg-[var(--rose-gold)]/10 transition-all"
          >
            View Services
          </a>
        </div>

        {/* Timing + Location */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[var(--dark-card)] border border-[var(--rose-gold)]/15">
            <span className="text-[var(--rose-gold)]">🕐</span>
            <span className="text-gray-300 text-sm">8:00 AM – 9:30 PM</span>
          </div>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[var(--dark-card)] border border-[var(--rose-gold)]/15">
            <span className="text-[var(--rose-gold)]">📍</span>
            <span className="text-gray-300 text-sm">Hastal, Uttam Nagar, Delhi</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" fill="none" stroke="var(--rose-gold)" strokeWidth="2" className="opacity-50">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}