
import React from 'react';

const benefits = [
  {
    title: "Prezzo Fisso",
    desc: "Il prezzo che ti diamo? Quello resta. Nessuna sorpresa, garantito al 100%.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
    )
  },
  {
    title: "Chiavi in Mano",
    desc: "Burocrazia, permessi, CILA, SCIA... ci pensiamo noi. Tu non devi fare nulla.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.78 7.78 5.5 5.5 0 0 1 7.78-7.78zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
    )
  },
  {
    title: "Tempi Certi",
    desc: "Ritardo? Ti rimborsiamo. Non succede praticamente mai, ma ci mettiamo la faccia.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
    )
  },
  {
    title: "Direzione Lavori",
    desc: "Un architetto dedicato che supervisiona il cantiere ogni giorno. Non sei mai solo.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    )
  },
  {
    title: "Artigiani Top",
    desc: "Squadre selezionate con anni di esperienza. Solo i migliori lavorano con noi.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    )
  },
  {
    title: "Garanzia 10 Anni",
    desc: "Garanzia decennale su tutti i lavori strutturali. Dormi tranquillo, sul serio.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    )
  }
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-14 md:mb-20">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-400">Perche noi</span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mt-4 tracking-tight">
          Non siamo i soliti <span className="gradient-text">muratori.</span>
        </h2>
        <p className="text-lg sm:text-xl text-zinc-500 max-w-2xl mx-auto mt-4 leading-relaxed">
          Basta cantieri infiniti. Con noi hai un team completo che ti segue dall'inizio alla fine.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="glass rounded-2xl p-6 sm:p-8 group hover:bg-white/[0.08] transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center mb-5 border border-red-500/20 text-red-400 group-hover:scale-110 transition-transform">
              {benefit.icon}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">{benefit.title}</h3>
            <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
