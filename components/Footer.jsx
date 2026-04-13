export default function Footer() {
  return (
    <footer className="border-t border-[var(--rose-gold)]/10 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">✂️</span>
              <div>
                <h3 className="font-display text-xl font-bold gradient-text">MAAN</h3>
                <p className="text-[10px] tracking-[0.3em] text-[var(--rose-gold-light)] uppercase">Unisex Salon</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Premium hair & beauty services. Trained by Habib. Unbeatable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'Services', 'Offers', 'About', 'Gallery', 'Contact'].map(name => (
                <a key={name} href={`#${name.toLowerCase()}`} className="block text-gray-400 text-sm hover:text-[var(--rose-gold)] transition-colors">
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>📞 +91 70118 10776</p>
              <p>🕐 8:00 AM – 9:30 PM</p>
              <p>💬 WhatsApp available</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="section-divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} MAAN Unisex Salon. All rights reserved.</p>
          <p className="text-[var(--rose-gold)]/50">Trained by Habib ✂️</p>
        </div>
      </div>
    </footer>
  );
}