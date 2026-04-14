export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <img src="/images/salon-about.jpg" alt="MAAN Unisex Salon" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark)]/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:right-8 bg-[var(--dark-2)] border border-[var(--rose)]/15 rounded-2xl px-8 py-5 shadow-2xl">
              <p className="text-gray-500 text-xs tracking-widest uppercase mb-1">Professionally</p>
              <p className="font-display text-3xl font-bold gradient-text">Trained by HABIB</p>
            </div>
            <div className="absolute top-8 -left-4 w-20 h-[1px] bg-[var(--rose)]/30" />
            <div className="absolute top-8 -left-4 h-20 w-[1px] bg-[var(--rose)]/30" />
          </div>

          <div>
            <span className="text-[var(--rose)] text-xs tracking-[0.4em] uppercase font-medium">About Us</span>
            <h2 className="font-display text-5xl sm:text-6xl font-bold mt-4 mb-8">
              Where <span className="gradient-text">Beauty</span> Meets Expertise
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6 text-lg font-light">
              MAAN Unisex Salon brings world-class hair and beauty services to your neighborhood.
              Our team is professionally trained by <strong className="text-[var(--rose-light)] font-medium">Habib</strong> —
              one of the most respected names in the Indian beauty industry.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              Whether you&apos;re looking for a stunning bridal makeover, a refreshing hair spa,
              or a complete beauty package, we&apos;ve got you covered — all at prices that won&apos;t break the bank.
            </p>

            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: '🏆', title: 'Habib Trained', sub: 'Certified professionals' },
                { icon: '💎', title: 'Best Prices', sub: 'Unbeatable rates' },
                { icon: '🕐', title: '8AM – 9:30PM', sub: 'Open all day' },
                { icon: '💇', title: 'Unisex', sub: 'Men & Women welcome' },
              ].map((s, i) => (
                <div key={i} className="p-5 rounded-xl bg-[var(--dark-card)] border border-white/3 group hover:border-[var(--rose)]/15 transition-all">
                  <span className="text-2xl mb-2 block">{s.icon}</span>
                  <p className="font-display font-semibold text-lg group-hover:text-[var(--rose-light)] transition-colors">{s.title}</p>
                  <p className="text-gray-600 text-xs mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}