
import React from 'react';

const steps = [
  {
    title: "Sopralluogo",
    desc: "Un nostro esperto analizzerà lo stato attuale della tua casa per definire le potenzialità degli spazi.",
    icon: "📐",
    bg: "bg-red-50"
  },
  {
    title: "Progettazione",
    desc: "Riceverai render 3D fotorealistici e planimetrie dettagliate per visualizzare il risultato finale.",
    icon: "🖊️",
    bg: "bg-red-50"
  },
  {
    title: "Esecuzione",
    desc: "I nostri artigiani realizzeranno i lavori nei tempi stabiliti, con direzione lavori costante.",
    icon: "🔨",
    bg: "bg-red-50"
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 px-6 border-y border-zinc-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
          Il processo di ristrutturazione <br />
          <span className="text-italics text-red-600">più fluido e trasparente d'Italia</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className={`${step.bg} border-2 border-red-600 p-10 rounded-[2.5rem] relative overflow-hidden group hover:bg-red-100 transition-colors`}>
              <div className="text-5xl mb-6">{step.icon}</div>
              <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
              <p className="text-zinc-600 text-lg leading-relaxed">{step.desc}</p>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-red-600/5 rounded-full group-hover:scale-150 transition-transform"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
          <p className="text-2xl font-black">MARAZZI</p>
          <p className="text-2xl font-black">GROHE</p>
          <p className="text-2xl font-black">MAPEI</p>
          <p className="text-2xl font-black">VELUX</p>
          <p className="text-2xl font-black">KERAKOLL</p>
        </div>
      </div>
    </section>
  );
};
