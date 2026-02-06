
import React from 'react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <span className="text-xs font-black uppercase tracking-[0.3em] text-red-600">I Nostri Servizi</span>
        <h2 className="text-5xl md:text-7xl font-bold mt-6 mb-8 tracking-tighter">
          Soluzioni per ogni <br />
          <span className="text-italics text-red-600">esigenza abitativa</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <div className="bg-white border-4 border-red-600 p-10 md:p-14 rounded-[3rem] shadow-2xl flex flex-col h-full relative overflow-hidden">
          <div className="absolute top-10 right-10">
            <span className="px-4 py-2 bg-red-50 text-red-600 font-bold rounded-full text-xs uppercase tracking-widest">Top Choice</span>
          </div>
          <div className="mb-12">
            <h3 className="text-4xl font-black mb-2">Ristrutturazione Totale</h3>
            <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs">Trasforma completamente il tuo immobile</p>
          </div>
          <div className="flex items-baseline gap-2 mb-12">
            <span className="text-3xl font-bold text-red-600 italic">Preventivo personalizzato gratuito</span>
          </div>
          <div className="space-y-6 mb-16 flex-grow">
            {[
              "Progettazione architettonica inclusa",
              "Sostituzione completa impianti",
              "Nuovi pavimenti e rivestimenti",
              "Opere in cartongesso e controsoffitti",
              "Pittura d'interni con prodotti bio",
              "Pratiche fiscali per detrazioni (50%)",
              "Pulizia finale post-cantiere inclusa"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-4 text-xl font-medium">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600">✓</div>
                {feature}
              </div>
            ))}
          </div>
          <button className="w-full py-6 bg-red-600 text-white text-2xl font-black rounded-[2rem] hover:bg-red-700 hover:scale-[1.02] transition-all shadow-xl shadow-red-600/30">Richiedi Sopralluogo</button>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-white p-12 rounded-[3rem] border-2 border-dashed border-red-200 flex flex-col justify-center h-full group hover:bg-red-600 hover:text-white transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 bg-red-50 border-2 border-red-600 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-white transition-all">🛁</div>
              <h3 className="text-3xl font-bold">Rifacimento Bagno</h3>
            </div>
            <p className="text-xl text-zinc-500 group-hover:text-red-50 leading-relaxed">
              Il tuo nuovo bagno di design pronto in soli 7 giorni lavorativi, materiali inclusi.
            </p>
          </div>
          
          <div className="bg-white p-12 rounded-[3rem] border-2 border-dashed border-red-200 flex flex-col justify-center h-full group hover:bg-red-600 hover:text-white transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 bg-red-50 border-2 border-red-600 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-white transition-all">🍳</div>
              <h3 className="text-3xl font-bold">Smart Kitchen Pack</h3>
            </div>
            <p className="text-xl text-zinc-500 group-hover:text-red-50 leading-relaxed">
              Rinnoviamo l'ambiente cucina ottimizzando spazi e impianti per le tecnologie moderne.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
