
import React from 'react';

interface PricingProps {
  onRequestQuote: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onRequestQuote }) => {
  return (
    <section id="pricing" className="py-20 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-14 md:mb-24">
        <span className="text-xs font-black uppercase tracking-[0.3em] text-red-600">I Nostri Servizi</span>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mt-4 md:mt-6 mb-6 md:mb-8 tracking-tighter">
          Soluzioni per ogni <br />
          <span className="text-italics text-red-600">esigenza abitativa</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
        <div className="bg-white border-4 border-red-600 p-7 sm:p-10 md:p-14 rounded-2xl sm:rounded-[3rem] shadow-2xl flex flex-col h-full relative overflow-hidden">
          <div className="absolute top-6 right-6 sm:top-10 sm:right-10">
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-red-50 text-red-600 font-bold rounded-full text-[10px] sm:text-xs uppercase tracking-widest">Top Choice</span>
          </div>
          <div className="mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-4xl font-black mb-2">Ristrutturazione Totale</h3>
            <p className="text-zinc-400 font-bold uppercase tracking-widest text-[10px] sm:text-xs">Trasforma completamente il tuo immobile</p>
          </div>
          <div className="flex items-baseline gap-2 mb-8 sm:mb-12">
            <span className="text-xl sm:text-3xl font-bold text-red-600 italic">Preventivo personalizzato gratuito</span>
          </div>
          <div className="space-y-4 sm:space-y-6 mb-10 sm:mb-16 flex-grow">
            {[
              "Progettazione architettonica inclusa",
              "Sostituzione completa impianti",
              "Nuovi pavimenti e rivestimenti",
              "Opere in cartongesso e controsoffitti",
              "Pittura d'interni con prodotti bio",
              "Pratiche fiscali per detrazioni (50%)",
              "Pulizia finale post-cantiere inclusa"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 sm:gap-4 text-base sm:text-xl font-medium">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-sm sm:text-base flex-shrink-0">✓</div>
                {feature}
              </div>
            ))}
          </div>
          <button onClick={onRequestQuote} className="w-full py-4 sm:py-6 bg-red-600 text-white text-lg sm:text-2xl font-black rounded-xl sm:rounded-[2rem] hover:bg-red-700 hover:scale-[1.02] transition-all shadow-xl shadow-red-600/30">Richiedi Sopralluogo</button>
        </div>

        <div className="flex flex-col gap-5 md:gap-8">
          <div className="bg-white p-8 sm:p-12 rounded-2xl sm:rounded-[3rem] border-2 border-dashed border-red-200 flex flex-col justify-center h-full group hover:bg-red-600 hover:text-white transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl">
            <div className="flex items-center gap-4 sm:gap-6 mb-5 sm:mb-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-50 border-2 border-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl group-hover:scale-110 group-hover:bg-white transition-all flex-shrink-0">🛁</div>
              <h3 className="text-2xl sm:text-3xl font-bold">Rifacimento Bagno</h3>
            </div>
            <p className="text-base sm:text-xl text-zinc-500 group-hover:text-red-50 leading-relaxed">
              Il tuo nuovo bagno di design pronto in soli 7 giorni lavorativi, materiali inclusi.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-12 rounded-2xl sm:rounded-[3rem] border-2 border-dashed border-red-200 flex flex-col justify-center h-full group hover:bg-red-600 hover:text-white transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl">
            <div className="flex items-center gap-4 sm:gap-6 mb-5 sm:mb-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-50 border-2 border-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl group-hover:scale-110 group-hover:bg-white transition-all flex-shrink-0">🍳</div>
              <h3 className="text-2xl sm:text-3xl font-bold">Smart Kitchen Pack</h3>
            </div>
            <p className="text-base sm:text-xl text-zinc-500 group-hover:text-red-50 leading-relaxed">
              Rinnoviamo l'ambiente cucina ottimizzando spazi e impianti per le tecnologie moderne.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
