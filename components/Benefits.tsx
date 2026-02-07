
import React from 'react';

const benefits = [
  {
    title: "Prezzo Fisso",
    desc: "Nessuna sorpresa a fine lavori. Il preventivo firmato è garantito al 100%.",
    icon: "🛡️"
  },
  {
    title: "Chiavi in Mano",
    desc: "Dalle pratiche burocratiche (CILA, SCIA) al montaggio mobili, facciamo tutto noi.",
    icon: "🔑"
  },
  {
    title: "Tempi Certi",
    desc: "Ogni giorno di ritardo sulla consegna è rimborsato. Siamo puntuali per scelta.",
    icon: "⏱️"
  },
  {
    title: "Direzione Lavori",
    desc: "Un architetto dedicato supervisionerà il cantiere ogni singolo giorno.",
    icon: "👷"
  },
  {
    title: "Artigiani Elite",
    desc: "Squadre selezionate di idraulici, elettricisti e muratori altamente qualificati.",
    icon: "🏅"
  },
  {
    title: "Garanzia 10 Anni",
    desc: "Offriamo una garanzia decennale su tutti i lavori strutturali eseguiti.",
    icon: "📝"
  }
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-14 md:mb-24">
        <span className="text-xs font-black uppercase tracking-[0.3em] text-red-600">Perché Sceglierci</span>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mt-4 md:mt-6 mb-6 md:mb-8 tracking-tighter">
          Qualità <span className="text-italics text-red-600">senza compromessi</span>
        </h2>
        <p className="text-lg sm:text-xl text-zinc-500 max-w-2xl mx-auto">
          Dimentica gli incubi dei cantieri infiniti. MCO EDILE ti offre un'esperienza di ristrutturazione moderna, veloce e totalmente garantita.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 sm:gap-x-12 sm:gap-y-20">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="flex flex-col items-center text-center group">
            <div className="w-14 h-14 sm:w-20 sm:h-20 bg-white border-2 border-red-50 shadow-xl shadow-red-100/50 rounded-2xl sm:rounded-3xl flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-8 group-hover:scale-110 transition-transform group-hover:bg-red-50">
              {benefit.icon}
            </div>
            <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">{benefit.title}</h3>
            <p className="text-zinc-500 text-sm sm:text-lg leading-relaxed">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
