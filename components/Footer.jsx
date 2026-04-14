export default function Footer() {
  return (
    <footer className="border-t border-white/3 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full border border-[var(--rose)]/20 flex items-center justify-center bg-[var(--rose)]/5">
                <span className="text-lg">✂️</span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold gradient-text">MAAN</h3>
                <p className="text-[9px] tracking-[0.35em] text-[var(--rose-light)]/50 uppercase">Unisex Salon</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Premium hair & beauty services at unbeatable prices. Professionally trained by Habib. Your neighborhood salon, elevated.
            </p>
            <p className="text-gray-500 text-sm mt-4">📍 Hastal, Uttam Nagar, Delhi</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase mb-5 text-gray-300">Quick Links</h4>
            <div className="space-y-3">
              {['Home', 'Services', 'Offers', 'About', 'Gallery', 'Contact'].map(n => (
                <a key={n} href={`#${n.toLowerCase()}`} className="block text-gray-500 text-sm hover:text-[var(--rose-light)] hover:pl-1 transition-all">{n}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase mb-5 text-gray-300">Contact</h4>
            <div className="space-y-3 text-sm text-gray-500">
              <a href="tel:+917011810776" className="block hover:text-[var(--rose-light)] transition-colors">📞 +91 70118 10776</a>
              <a href="https://wa.me/917011810776" target="_blank" className="block hover:text-emerald-400 transition-colors">💬 WhatsApp</a>
              <p>🕐 8:00 AM – 9:30 PM</p>
              <p>📅 Open 7 days</p>
            </div>
          </div>
        </div>

        <div className="section-line mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} MAAN Unisex Salon. All rights reserved.</p>
          <p className="text-[var(--rose)]/30">Trained by Habib ✂️</p>
        </div>
      </div>
    </footer>
  );
}