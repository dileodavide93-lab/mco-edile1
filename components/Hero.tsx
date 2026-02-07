
import React, { useState } from 'react';

interface HeroProps {
  onRequestQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestQuote }) => {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <section className="pt-8 pb-20 md:pt-12 md:pb-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <nav className="flex justify-between items-center mb-16 md:mb-24">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-600/20">
            <div className="w-4 h-4 bg-white rotate-45"></div>
          </div>
          <span className="text-2xl font-extrabold tracking-tighter">MCO EDILE</span>
        </div>
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
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight mb-8">
            La casa dei tuoi <br />
            <span className="text-italics text-red-600">sogni, senza stress</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-500 max-w-md mb-12">
            Progettazione architettonica e ristrutturazioni d'interni complete. Trasformiamo i tuoi spazi con un servizio chiavi in mano d'eccellenza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={onRequestQuote} className="px-10 py-5 bg-red-600 text-white text-xl font-bold rounded-xl hover:scale-105 transition-transform shadow-xl shadow-red-600/30">Inizia il Progetto</button>
            <div className="flex items-center gap-4 px-6 py-4 bg-white border border-zinc-200 rounded-xl cursor-pointer hover:bg-zinc-50 transition-colors group">
              <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors">
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
          <div className="relative bg-white border-4 border-red-600 p-8 rounded-[2rem] shadow-2xl overflow-hidden perspective-card">
            <div className="flex justify-between items-start mb-8">
              <div>
                <span className="px-3 py-1 bg-red-600 text-white text-[10px] font-bold rounded-full uppercase tracking-widest">Qualità Certificata</span>
                <h3 className="text-3xl font-bold mt-4">Pronto per il Cambiamento?</h3>
              </div>
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-3xl">
                🏗️
              </div>
            </div>
            <p className="text-zinc-500 text-lg mb-8">Dalla demolizione all'arredamento finale, ci occupiamo di tutto noi.</p>
            <div className="rounded-2xl overflow-hidden mb-8 border border-zinc-100 shadow-inner">
               <img src="https://images.unsplash.com/photo-1556912177-c54030639a6d?auto=format&fit=crop&q=80&w=800" alt="Cantiere Pulito" className="w-full h-48 object-cover" />
            </div>
            <button className="w-full py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors">Guarda i nostri Servizi</button>
          </div>

          <div className="absolute -bottom-6 -right-6 bg-white border-2 border-red-600 p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-pulse">
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
            <span className="font-bold text-sm">Sconto 50% su Progettazione 3D</span>
          </div>
        </div>
      </div>
    </section>
  );
};
