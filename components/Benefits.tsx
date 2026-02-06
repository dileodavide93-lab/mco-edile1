
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
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <span className="text-xs font-black uppercase tracking-[0.3em] text-red-600">Perché Sceglierci</span>
        <h2 className="text-5xl md:text-7xl font-bold mt-6 mb-8 tracking-tighter">
          Qualità <span className="text-italics text-red-600">senza compromessi</span>
        </h2>
        <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
          Dimentica gli incubi dei cantieri infiniti. MCO EDILE ti offre un'esperienza di ristrutturazione moderna, veloce e totalmente garantita.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-white border-2 border-red-50 shadow-xl shadow-red-100/50 rounded-3xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform group-hover:bg-red-50">
              {benefit.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
            <p className="text-zinc-500 text-lg leading-relaxed">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
