
import React, { useState } from 'react';

const faqs = [
  {
    q: "Quanto dura mediamente una ristrutturazione completa?",
    a: "Per un appartamento di circa 80-100mq, i lavori durano solitamente tra le 8 e le 12 settimane, a seconda della complessità degli impianti e delle finiture scelte."
  },
  {
    q: "Vi occupate anche delle detrazioni fiscali?",
    a: "Assolutamente sì. Prepariamo tutta la documentazione necessaria per permetterti di usufruire del Bonus Ristrutturazione del 50%, inclusa la pratica ENEA se richiesta."
  },
  {
    q: "Il preventivo è davvero fisso o ci saranno extra?",
    a: "Il nostro metodo si basa su un'analisi meticolosa iniziale. Salvo richieste di varianti da parte tua durante i lavori, il prezzo pattuito nel contratto non subirà variazioni."
  },
  {
    q: "Devo richiedere io i permessi in comune?",
    a: "No, ci occupiamo noi di tutto l'iter burocratico. I nostri architetti presenteranno CILA o SCIA e si occuperanno della chiusura lavori e dell'aggiornamento catastale."
  },
  {
    q: "Posso vedere l'avanzamento dei lavori a distanza?",
    a: "Sì, riceverai un report fotografico settimanale via email o tramite la tua bacheca privata, così sarai sempre informato anche se non puoi recarti in cantiere."
  }
];

interface FAQProps {
  onRequestQuote: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onRequestQuote }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-8 md:mb-12">
            Domande <br />
            <span className="text-italics text-red-600">frequenti</span>
          </h2>
          <div className="bg-red-600 text-white p-8 sm:p-12 rounded-2xl sm:rounded-[3rem] relative overflow-hidden shadow-2xl shadow-red-600/20">
             <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Pronto a iniziare?</h3>
                <p className="text-red-50 text-base sm:text-lg mb-6 sm:mb-8">Prenota un sopralluogo tecnico senza impegno. Valuteremo insieme il tuo progetto.</p>
                <button onClick={onRequestQuote} className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-red-600 font-bold rounded-xl hover:scale-105 transition-transform text-sm sm:text-base">Richiedi Sopralluogo</button>
             </div>
             <div className="absolute top-0 right-0 w-64 h-64 bg-red-800 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b-2 border-red-50 pb-3 sm:pb-4">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center py-4 sm:py-6 text-left group gap-4"
              >
                <span className={`text-lg sm:text-2xl font-bold group-hover:text-red-600 transition-colors ${openIdx === idx ? 'text-red-600' : ''}`}>{faq.q}</span>
                <span className={`text-xl sm:text-2xl transform transition-transform text-red-600 flex-shrink-0 ${openIdx === idx ? 'rotate-45' : ''}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIdx === idx ? 'max-h-96 opacity-100 pb-4 sm:pb-6' : 'max-h-0 opacity-0'}`}>
                <p className="text-base sm:text-xl text-zinc-500 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
