
import React from 'react';

const steps = [
  {
    num: "01",
    title: "Sopralluogo",
    desc: "Veniamo da te, guardiamo gli spazi e capiamo cosa vuoi. Gratis, senza impegno.",
  },
  {
    num: "02",
    title: "Progetto 3D",
    desc: "Render fotorealistici del risultato finale. Vedi tutto prima di iniziare i lavori.",
  },
  {
    num: "03",
    title: "Realizziamo",
    desc: "I nostri artigiani trasformano gli spazi nei tempi concordati. Tu ti rilassi.",
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-400">Come funziona</span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mt-4 tracking-tight">
            Tre step. <span className="gradient-text">Nessun grattacapo.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="glass rounded-2xl sm:rounded-3xl p-7 sm:p-10 relative overflow-hidden group hover:bg-white/[0.08] transition-all duration-300">
              <span className="text-6xl sm:text-7xl font-black text-white/[0.04] absolute top-4 right-6 select-none group-hover:text-white/[0.08] transition-colors">{step.num}</span>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center mb-5 border border-red-500/20">
                <span className="text-red-400 font-black text-sm">{step.num}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">{step.title}</h3>
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 md:mt-20 flex flex-wrap justify-center items-center gap-6 sm:gap-10 opacity-30 hover:opacity-50 transition-opacity">
          {["MARAZZI", "GROHE", "MAPEI", "VELUX", "KERAKOLL"].map((brand) => (
            <p key={brand} className="text-base sm:text-xl font-black tracking-wider">{brand}</p>
          ))}
        </div>
      </div>
    </section>
  );
};
