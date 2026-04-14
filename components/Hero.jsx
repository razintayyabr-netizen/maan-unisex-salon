'use client';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* BG Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&h=1080&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--dark)]/90 via-[var(--dark)]/70 to-[var(--dark)]" />
      </div>

      {/* Decorative dots */}
      <div className="absolute inset-0 hero-dots opacity-40" />

      {/* Orbs */}
      <div className="absolute top-32 -left-40 w-[500px] h-[500px] bg-[var(--rose)]/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-[var(--gold)]/5 rounded-full blur-[180px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Top badge */}
        <div className="offer-badge inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-[var(--rose)]/20 bg-[var(--rose)]/5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--rose)] animate-pulse" />
          <span className="text-[var(--rose-light)] text-sm font-medium tracking-wide">Trained by HABIB</span>
        </div>

        {/* Main title */}
        <h1 className="font-display text-6xl sm:text-8xl md:text-9xl font-bold mb-3 tracking-wide">
          <span className="gradient-text">MAAN</span>
        </h1>
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[var(--rose)]/50" />
          <p className="font-display text-xl sm:text-2xl text-[var(--rose-light)]/80 tracking-[0.4em] uppercase">
            Unisex Salon
          </p>
          <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[var(--rose)]/50" />
        </div>

        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Where beauty meets expertise. Premium hair & beauty services
          at prices that make you smile.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a
            href="https://wa.me/917011810776?text=Hi! I'd like to book an appointment at MAAN Unisex Salon"
            target="_blank"
            className="btn-primary px-10 py-4 rounded-full text-lg font-medium inline-flex items-center justify-center gap-3"
          >
            <span>Book Appointment</span>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
          <a href="#services" className="btn-outline px-10 py-4 rounded-full text-lg font-medium inline-flex items-center justify-center">
            Explore Services
          </a>
        </div>

        {/* Info pills */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/3 border border-white/5">
            <span className="text-[var(--rose)]">🕐</span>
            <span className="text-gray-400 text-sm">8:00 AM – 9:30 PM</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/3 border border-white/5">
            <span className="text-[var(--rose)]">📍</span>
            <span className="text-gray-400 text-sm">Hastal, Uttam Nagar, Delhi</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/3 border border-white/5">
            <span className="text-[var(--rose)]">📞</span>
            <a href="tel:+917011810776" className="text-gray-400 text-sm hover:text-white transition-colors">+91 70118 10776</a>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.3em] text-gray-600 uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-gray-600/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-[var(--rose)] animate-bounce" />
        </div>
      </div>
    </section>
  );
}