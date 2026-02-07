
import React, { useState } from 'react';

interface HeroProps {
  onRequestQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestQuote }) => {
  const [showPhone, setShowPhone] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="pt-6 pb-16 md:pt-8 md:pb-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <nav className="flex justify-between items-center mb-12 md:mb-20">
        <div className="flex items-center">
          <svg viewBox="0 0 220 80" className="h-10 sm:h-12 w-auto" aria-label="MCO EDILE">
            <polygon points="110,2 170,38 50,38" fill="#ef4444" />
            <line x1="42" y1="40" x2="178" y2="40" stroke="#ef4444" strokeWidth="3" />
            <text x="18" y="72" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="bold" fontSize="38" fill="white" letterSpacing="-1">MCO</text>
            <text x="120" y="64" fontFamily="'Inter', Arial, sans-serif" fontWeight="600" fontSize="22" fill="white" letterSpacing="2">EDILE</text>
          </svg>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-5 py-2.5 text-zinc-400 font-semibold hover:text-white transition-colors">Chi Siamo</button>
          <button className="px-5 py-2.5 text-zinc-400 font-semibold hover:text-white transition-colors">Servizi</button>
          {showPhone ? (
            <a href="tel:+393920244301" className="px-5 py-2.5 glass rounded-xl font-semibold flex items-center gap-2 text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              392 024 4301
            </a>
          ) : (
            <button onClick={() => setShowPhone(true)} className="px-5 py-2.5 glass rounded-xl font-semibold flex items-center gap-2 text-zinc-300 hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              Chiamaci
            </button>
          )}
          <button onClick={onRequestQuote} className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-red-500/25 hover:scale-105 transition-all">Preventivo Gratis</button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass rounded-2xl p-5 mb-8 flex flex-col gap-3">
          <button onClick={() => { onRequestQuote(); setMobileMenuOpen(false); }} className="w-full py-3.5 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-xl text-base">
            Preventivo Gratis
          </button>
          <a href="tel:+393920244301" className="w-full py-3.5 glass-light text-white font-semibold rounded-xl text-base text-center flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Chiamaci ora
          </a>
          <button className="w-full py-3.5 text-zinc-400 font-semibold rounded-xl text-base hover:text-white transition-colors">Chi Siamo</button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6 sm:mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-zinc-300">Disponibili per nuovi progetti</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-[0.9] tracking-tight mb-6 md:mb-8">
            Trasforma{' '}<br className="hidden sm:block" />
            <span className="gradient-text">casa tua.</span><br />
            <span className="text-zinc-500">Zero stress.</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-lg mb-8 md:mb-10 leading-relaxed">
            Ristrutturazioni complete, dal progetto alle chiavi in mano. Noi ci pensiamo a tutto, tu ti godi il risultato.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 md:mb-12">
            <button onClick={onRequestQuote} className="px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-red-600 to-red-500 text-white text-lg sm:text-xl font-bold rounded-2xl hover:scale-105 transition-all shadow-xl shadow-red-500/20">Inizia ora</button>
            <button className="flex items-center justify-center gap-3 px-6 py-4 glass rounded-2xl cursor-pointer hover:bg-white/10 transition-colors group">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors flex-shrink-0">
                <svg className="text-red-400" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
              <span className="font-semibold text-zinc-300 text-sm sm:text-base">Come funziona</span>
            </button>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-500 to-red-400 border-2 border-[#0a0a0a] flex items-center justify-center text-[10px] font-bold">MR</div>
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-[#0a0a0a] flex items-center justify-center text-[10px] font-bold">LB</div>
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-[#0a0a0a] flex items-center justify-center text-[10px] font-bold">GV</div>
              <div className="w-9 h-9 rounded-full bg-zinc-700 border-2 border-[#0a0a0a] flex items-center justify-center text-[10px] font-bold text-zinc-300">+197</div>
            </div>
            <div>
              <div className="flex gap-0.5 text-red-400 text-sm">{'★'.repeat(5)}</div>
              <p className="text-zinc-500 text-xs font-medium">200+ clienti soddisfatti</p>
            </div>
          </div>
        </div>

        {/* Stats card */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-red-600/20 via-red-500/10 to-transparent rounded-[2rem] blur-2xl group-hover:from-red-500/30 transition-all"></div>
          <div className="relative glass p-6 sm:p-8 rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">I nostri numeri</span>
              </div>
              <span className="px-3 py-1 bg-gradient-to-r from-red-600/20 to-red-400/20 text-red-400 text-[10px] font-bold rounded-full uppercase tracking-widest border border-red-500/20">Live</span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
              <div className="glass-light rounded-2xl p-4 sm:p-5 text-center group/stat hover:bg-white/10 transition-colors">
                <p className="text-3xl sm:text-4xl font-black gradient-text">200+</p>
                <p className="text-zinc-500 text-xs sm:text-sm font-medium mt-1">Progetti completati</p>
              </div>
              <div className="glass-light rounded-2xl p-4 sm:p-5 text-center group/stat hover:bg-white/10 transition-colors">
                <p className="text-3xl sm:text-4xl font-black gradient-text">15+</p>
                <p className="text-zinc-500 text-xs sm:text-sm font-medium mt-1">Anni di esperienza</p>
              </div>
              <div className="glass-light rounded-2xl p-4 sm:p-5 text-center group/stat hover:bg-white/10 transition-colors">
                <p className="text-3xl sm:text-4xl font-black gradient-text">98%</p>
                <p className="text-zinc-500 text-xs sm:text-sm font-medium mt-1">Clienti soddisfatti</p>
              </div>
              <div className="glass-light rounded-2xl p-4 sm:p-5 text-center group/stat hover:bg-white/10 transition-colors">
                <p className="text-3xl sm:text-4xl font-black gradient-text">10</p>
                <p className="text-zinc-500 text-xs sm:text-sm font-medium mt-1">Anni di garanzia</p>
              </div>
            </div>

            {/* Mini review */}
            <div className="glass-light rounded-2xl p-4 mb-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-[10px] font-bold flex-shrink-0">LR</div>
                <div>
                  <p className="text-sm font-semibold">Laura R.</p>
                  <div className="flex gap-0.5 text-red-400 text-[10px]">{'★'.repeat(5)}</div>
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">"Puntuali, precisi, casa nuova in 9 settimane. Non ci potevo credere."</p>
            </div>

            <button onClick={onRequestQuote} className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all text-sm sm:text-base">Preventivo Gratuito</button>
          </div>

          <div className="absolute -bottom-3 -right-1 sm:-bottom-5 sm:-right-4 glass p-3 sm:p-4 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-3 float-animation max-w-[220px] sm:max-w-none">
            <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
            <span className="font-semibold text-xs sm:text-sm leading-tight text-zinc-300">3 sopralluoghi prenotati oggi</span>
          </div>
        </div>
      </div>
    </section>
  );
};
