export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="gallery-placeholder aspect-[4/5] rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <span className="text-6xl mb-4 block">✂️</span>
                <p className="font-display text-3xl font-bold gradient-text">MAAN</p>
                <p className="text-gray-500 text-sm mt-2">Unisex Salon</p>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[var(--rose-gold)] text-white px-6 py-3 rounded-xl shadow-lg">
              <p className="font-display font-bold text-lg">Trained by</p>
              <p className="font-display font-bold text-2xl">HABIB</p>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-[var(--rose-gold)] text-sm tracking-[0.3em] uppercase font-medium">About Us</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-6">
              Where <span className="gradient-text">Beauty</span> Meets Expertise
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              MAAN Unisex Salon brings world-class hair and beauty services to your neighborhood. 
              Our team is professionally trained by Habib — one of the most respected names in the beauty industry — 
              ensuring every treatment meets the highest standards.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Whether you&apos;re looking for a stunning bridal makeover, a refreshing hair spa, 
              or a complete beauty package, we&apos;ve got you covered — all at prices that won&apos;t break the bank.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-[var(--dark-card)] border border-[var(--rose-gold)]/10">
                <span className="text-2xl mb-2 block">🏆</span>
                <p className="font-semibold">Habib Trained</p>
                <p className="text-xs text-gray-500">Certified professionals</p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--dark-card)] border border-[var(--rose-gold)]/10">
                <span className="text-2xl mb-2 block">💰</span>
                <p className="font-semibold">Best Prices</p>
                <p className="text-xs text-gray-500">Unbeatable rates</p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--dark-card)] border border-[var(--rose-gold)]/10">
                <span className="text-2xl mb-2 block">🕐</span>
                <p className="font-semibold">8AM – 9:30PM</p>
                <p className="text-xs text-gray-500">Open all day</p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--dark-card)] border border-[var(--rose-gold)]/10">
                <span className="text-2xl mb-2 block">💇</span>
                <p className="font-semibold">Unisex</p>
                <p className="text-xs text-gray-500">Men & Women welcome</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}