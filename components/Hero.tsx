
import React, { useState } from 'react';

interface HeroProps {
  onRequestQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestQuote }) => {
  const [showPhone, setShowPhone] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="pt-6 pb-16 md:pt-12 md:pb-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <nav className="flex justify-between items-center mb-10 md:mb-24">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-600/20">
            <div className="w-4 h-4 bg-white rotate-45"></div>
          </div>
          <span className="text-xl sm:text-2xl font-extrabold tracking-tighter">MCO EDILE</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-6 py-2 border-2 border-red-600 text-red-600 rounded-lg font-bold hover:bg-red-600 hover:text-white transition-all">Chi Siamo</button>
          {showPhone ? (
            <a href="tel:+393920244301" className="px-6 py-2 border-2 border-red-600 bg-red-600 text-white rounded-lg font-bold flex items-center gap-2 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              392 024 4301
            </a>
          ) : (
            <button onClick={() => setShowPhone(true)} className="px-6 py-2 border-2 border-red-600 text-red-600 rounded-lg font-bold hover:bg-red-600 hover:text-white transition-all flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              Chiamaci ora
            </button>
          )}
          <button onClick={onRequestQuote} className="px-6 py-2 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-600/30">Richiedi Preventivo</button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-zinc-800 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-zinc-800 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-zinc-800 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-2 border-red-100 rounded-2xl p-5 mb-8 flex flex-col gap-3 shadow-xl animate-[fadeIn_0.2s_ease-out]">
          <button onClick={() => { onRequestQuote(); setMobileMenuOpen(false); }} className="w-full py-3 bg-red-600 text-white font-bold rounded-xl text-base">
            Richiedi Preventivo
          </button>
          <a href="tel:+393920244301" className="w-full py-3 border-2 border-red-600 text-red-600 font-bold rounded-xl text-base text-center flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Chiamaci ora
          </a>
          <button className="w-full py-3 border-2 border-zinc-200 text-zinc-700 font-bold rounded-xl text-base">Chi Siamo</button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold leading-[0.9] tracking-tight mb-6 md:mb-8">
            La casa dei tuoi <br />
            <span className="text-italics text-red-600">sogni, senza stress</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-500 max-w-md mb-8 md:mb-12">
            Progettazione architettonica e ristrutturazioni d'interni complete. Trasformiamo i tuoi spazi con un servizio chiavi in mano d'eccellenza.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button onClick={onRequestQuote} className="px-8 py-4 sm:px-10 sm:py-5 bg-red-600 text-white text-lg sm:text-xl font-bold rounded-xl hover:scale-105 transition-transform shadow-xl shadow-red-600/30">Inizia il Progetto</button>
            <div className="flex items-center gap-4 px-5 py-3 sm:px-6 sm:py-4 bg-white border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-colors group">
              <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors flex-shrink-0">
                <svg className="text-red-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div>
                <p className="font-bold text-sm">Consulenza Gratuita</p>
                <p className="text-zinc-500 text-xs">Pianifica un sopralluogo</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-red-400 via-red-600 to-red-800 rounded-[2rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
          <div className="relative bg-white border-4 border-red-600 p-5 sm:p-8 rounded-2xl sm:rounded-[2rem] shadow-2xl overflow-hidden perspective-card">
            <div className="flex justify-between items-start mb-5 sm:mb-6">
              <span className="px-3 py-1 bg-red-600 text-white text-[10px] font-bold rounded-full uppercase tracking-widest">I Nostri Numeri</span>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-red-100 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-red-600">MC</div>
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-zinc-800 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">+</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6">
              <div className="bg-red-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center">
                <p className="text-2xl sm:text-3xl font-black text-red-600">200+</p>
                <p className="text-zinc-500 text-xs sm:text-sm font-medium mt-1">Progetti completati</p>
              </div>
              <div className="bg-red-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center">
                <p className="text-2xl sm:text-3xl font-black text-red-600">15+</p>
                <p className="text-zinc-500 text-xs sm:text-sm font-medium mt-1">Anni di esperienza</p>
              </div>
              <div className="bg-red-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center">
                <p className="text-2xl sm:text-3xl font-black text-red-600">98%</p>
                <p className="text-zinc-500 text-xs sm:text-sm font-medium mt-1">Clienti soddisfatti</p>
              </div>
              <div className="bg-red-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center">
                <p className="text-2xl sm:text-3xl font-black text-red-600">10</p>
                <p className="text-zinc-500 text-xs sm:text-sm font-medium mt-1">Anni di garanzia</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 sm:p-4 bg-zinc-50 rounded-xl sm:rounded-2xl mb-5 sm:mb-6">
              <div className="flex -space-x-1.5">
                <div className="w-7 h-7 bg-green-100 rounded-full border-2 border-white flex items-center justify-center text-green-600 text-[10px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div className="w-7 h-7 bg-green-100 rounded-full border-2 border-white flex items-center justify-center text-green-600 text-[10px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div className="w-7 h-7 bg-green-100 rounded-full border-2 border-white flex items-center justify-center text-green-600 text-[10px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 font-medium">Prezzo fisso garantito, zero sorprese</p>
            </div>

            <button onClick={onRequestQuote} className="w-full py-3 sm:py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors text-sm sm:text-base">Richiedi Preventivo Gratuito</button>
          </div>

          <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 bg-white border-2 border-red-600 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-2 sm:gap-3 animate-pulse max-w-[200px] sm:max-w-none">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full flex-shrink-0"></div>
            <span className="font-bold text-xs sm:text-sm leading-tight">3 sopralluoghi prenotati oggi</span>
          </div>
        </div>
      </div>
    </section>
  );
};
