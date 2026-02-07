
import React, { useState } from 'react';

const faqs = [
  {
    q: "Quanto ci vuole per una ristrutturazione completa?",
    a: "Per un 80-100mq, di solito tra le 8 e le 12 settimane. Dipende dalla complessita degli impianti e dalle finiture che scegli."
  },
  {
    q: "Vi occupate anche delle detrazioni fiscali?",
    a: "Certo. Prepariamo tutta la documentazione per il Bonus Ristrutturazione del 50%, inclusa la pratica ENEA quando serve."
  },
  {
    q: "Il preventivo e davvero fisso?",
    a: "Si, al 100%. Il prezzo che firmi e quello che paghi. Niente sorprese a fine lavori, a meno che non sia tu a chiedere modifiche."
  },
  {
    q: "Devo occuparmi io dei permessi?",
    a: "No, ci pensiamo noi a tutto. CILA, SCIA, chiusura lavori, aggiornamento catastale. Tu non tocchi un foglio."
  },
  {
    q: "Posso seguire i lavori da remoto?",
    a: "Si, report fotografico settimanale via email. Sai sempre a che punto siamo, anche se non puoi passare in cantiere."
  }
];

interface FAQProps {
  onRequestQuote: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onRequestQuote }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-400">FAQ</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mt-4 mb-8 md:mb-12">
            Hai <span className="gradient-text">dubbi?</span>
          </h2>

          <div className="glass rounded-2xl sm:rounded-3xl p-7 sm:p-10 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Pronto a partire?</h3>
              <p className="text-zinc-400 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">Prenota un sopralluogo gratuito. Valutiamo insieme il tuo progetto, senza impegno.</p>
              <button onClick={onRequestQuote} className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-red-500/25 hover:scale-105 transition-all text-sm sm:text-base">Prenota sopralluogo</button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px] -mr-20 -mt-20"></div>
          </div>
        </div>

        <div className="space-y-2 sm:space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`glass rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 ${openIdx === idx ? 'bg-white/[0.08]' : ''}`}>
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center p-5 sm:p-6 text-left group gap-4"
              >
                <span className={`text-base sm:text-lg font-semibold transition-colors ${openIdx === idx ? 'text-white' : 'text-zinc-300 group-hover:text-white'}`}>{faq.q}</span>
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all text-sm font-bold ${openIdx === idx ? 'bg-gradient-to-br from-red-500 to-orange-500 text-white rotate-45' : 'bg-white/10 text-zinc-400'}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIdx === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-zinc-400 text-sm sm:text-base leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
