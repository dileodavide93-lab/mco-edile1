
import React from 'react';

interface PricingProps {
  onRequestQuote: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onRequestQuote }) => {
  return (
    <section id="pricing" className="py-20 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-14 md:mb-20">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-400">Servizi</span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mt-4 tracking-tight">
          Cosa possiamo fare <span className="gradient-text">per te.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 items-stretch">
        {/* Main card */}
        <div className="relative rounded-2xl sm:rounded-3xl p-7 sm:p-10 md:p-12 flex flex-col h-full overflow-hidden gradient-border glass">
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8">
            <span className="px-3 py-1.5 bg-gradient-to-r from-red-600/20 to-red-400/20 text-red-400 font-bold rounded-full text-[10px] uppercase tracking-widest border border-red-500/20">Piu richiesto</span>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl sm:text-4xl font-black mb-2">Ristrutturazione Totale</h3>
            <p className="text-zinc-500 font-medium text-sm">Trasforma completamente il tuo immobile</p>
          </div>
          <div className="mb-8">
            <span className="text-xl sm:text-2xl font-bold gradient-text">Preventivo personalizzato gratuito</span>
          </div>
          <div className="space-y-4 mb-10 flex-grow">
            {[
              "Progettazione architettonica inclusa",
              "Sostituzione completa impianti",
              "Nuovi pavimenti e rivestimenti",
              "Cartongesso e controsoffitti",
              "Pittura d'interni eco-friendly",
              "Pratiche fiscali per detrazioni 50%",
              "Pulizia post-cantiere inclusa"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-sm sm:text-base">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-red-600/20 to-red-400/20 flex items-center justify-center flex-shrink-0 border border-red-500/20">
                  <svg className="text-red-400" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="text-zinc-300">{feature}</span>
              </div>
            ))}
          </div>
          <button onClick={onRequestQuote} className="w-full py-4 sm:py-5 bg-gradient-to-r from-red-600 to-red-500 text-white text-lg sm:text-xl font-bold rounded-xl sm:rounded-2xl hover:shadow-lg hover:shadow-red-500/25 hover:scale-[1.02] transition-all">Richiedi Sopralluogo</button>
        </div>

        {/* Secondary cards */}
        <div className="flex flex-col gap-5 md:gap-6">
          <div className="glass rounded-2xl sm:rounded-3xl p-7 sm:p-10 flex flex-col justify-center h-full group hover:bg-white/[0.08] transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-4 sm:gap-5 mb-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/20 flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="text-blue-400" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path></svg>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold">Rifacimento Bagno</h3>
                <p className="text-zinc-500 text-sm font-medium">Pronto in 7 giorni</p>
              </div>
            </div>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              Bagno nuovo di design in soli 7 giorni lavorativi. Materiali premium inclusi nel prezzo.
            </p>
          </div>

          <div className="glass rounded-2xl sm:rounded-3xl p-7 sm:p-10 flex flex-col justify-center h-full group hover:bg-white/[0.08] transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-4 sm:gap-5 mb-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-red-600/20 to-red-400/20 flex items-center justify-center border border-red-500/20 flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="text-red-400" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h6"></path><path d="M22 12h-6"></path><path d="M12 2v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 4.93-1.41 1.41"></path><path d="M12 12v8"></path><path d="m8 20 4-4 4 4"></path></svg>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold">Smart Kitchen</h3>
                <p className="text-zinc-500 text-sm font-medium">Design + tecnologia</p>
              </div>
            </div>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              Cucina smart ottimizzata per spazi e impianti moderni. Funzionale e bella da vivere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
