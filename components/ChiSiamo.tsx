
import React from 'react';
import { Footer } from './Footer';

interface ChiSiamoProps {
  onNavigate: (page: 'home' | 'chi-siamo') => void;
  onRequestQuote: () => void;
}

const milestones = [
  {
    year: '2009',
    title: 'L\'inizio di un sogno',
    text: 'Marco Colombo fonda MCO EDILE con una missione chiara: ristrutturare non solo muri, ma la fiducia tra cliente e impresa. Il primo cantiere? Un bilocale a Milano, consegnato con una settimana di anticipo.',
  },
  {
    year: '2013',
    title: 'La prima grande sfida',
    text: 'Ristrutturazione completa di un palazzo storico nel centro di Roma. 12 appartamenti, 8 mesi di lavoro, zero contenziosi. Il passaparola diventa il nostro miglior biglietto da visita.',
  },
  {
    year: '2017',
    title: 'Il metodo MCO',
    text: 'Formalizziamo il nostro processo: sopralluogo gratuito, preventivo trasparente, cronoprogramma garantito. Nasce il "Patto di Ferro" — se sforiamo i tempi, lo sconto è automatico.',
  },
  {
    year: '2021',
    title: 'Superbonus e oltre',
    text: 'Guidiamo centinaia di famiglie attraverso il labirinto del Superbonus 110%. Diventiamo punto di riferimento per la riqualificazione energetica, con oltre 80 cantieri gestiti in un solo anno.',
  },
  {
    year: '2024',
    title: 'Il futuro è adesso',
    text: 'Superiamo i 200 progetti completati. Investiamo in tecnologie BIM, materiali sostenibili e formazione continua. La nostra garanzia di 10 anni è diventata lo standard che i clienti si aspettano.',
  },
];

const values = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: 'Trasparenza',
    text: 'Preventivi dettagliati senza sorprese. Ogni voce di spesa è chiara, ogni variazione comunicata in anticipo. Il tuo budget è sacro.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Eccellenza',
    text: 'Solo materiali di prima qualità e artigiani selezionati. Ogni dettaglio è curato perché la tua casa merita il meglio, senza compromessi.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Rispetto',
    text: 'Rispettiamo i tempi, il budget e la tua vita quotidiana. Cantieri ordinati, vicini avvisati, polvere ridotta al minimo. Casa tua resta casa tua.',
  },
];

const stats = [
  { value: '200+', label: 'Progetti completati' },
  { value: '15+', label: 'Anni di esperienza' },
  { value: '98%', label: 'Clienti soddisfatti' },
  { value: '10', label: 'Anni di garanzia' },
];

export const ChiSiamo: React.FC<ChiSiamoProps> = ({ onNavigate, onRequestQuote }) => {
  return (
    <div>
      {/* Nav bar */}
      <nav className="flex justify-between items-center px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto pt-6 md:pt-8">
        <button onClick={() => onNavigate('home')} className="flex items-center cursor-pointer">
          <svg viewBox="0 0 220 80" className="h-10 sm:h-12 w-auto" aria-label="MCO EDILE">
            <polygon points="110,2 170,38 50,38" fill="#ef4444" />
            <line x1="42" y1="40" x2="178" y2="40" stroke="#ef4444" strokeWidth="3" />
            <text x="18" y="72" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="bold" fontSize="38" fill="white" letterSpacing="-1">MCO</text>
            <text x="120" y="64" fontFamily="'Inter', Arial, sans-serif" fontWeight="600" fontSize="22" fill="white" letterSpacing="2">EDILE</text>
          </svg>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('home')}
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 text-zinc-400 font-semibold hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Torna alla Home
          </button>
          <button
            onClick={onRequestQuote}
            className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-red-500/25 hover:scale-105 transition-all text-sm sm:text-base"
          >
            Preventivo Gratis
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-20 px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-zinc-300">La nostra storia</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6">
          Costruiamo <span className="gradient-text">sogni.</span><br />
          <span className="text-zinc-500">Dal 2009.</span>
        </h1>
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Non siamo solo un'impresa edile. Siamo artigiani del cambiamento — trasformiamo spazi vissuti in luoghi da vivere. Ogni muro che alziamo racconta una storia di fiducia.
        </p>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-black text-center mb-12 md:mb-16">
          Il nostro <span className="gradient-text">percorso</span>
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-600/50 via-red-500/30 to-transparent sm:-translate-x-px"></div>

          <div className="space-y-8 md:space-y-12">
            {milestones.map((m, i) => (
              <div key={m.year} className={`relative flex flex-col sm:flex-row items-start gap-4 sm:gap-8 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                {/* Year badge */}
                <div className={`flex-shrink-0 w-full sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}>
                  <div className={`inline-block sm:block ${i % 2 === 0 ? '' : ''}`}>
                    <span className="text-3xl sm:text-4xl font-black gradient-text ml-10 sm:ml-0">{m.year}</span>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 top-2 sm:top-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#0a0a0a] sm:-translate-x-1.5 -translate-x-1.5 z-10"></div>

                {/* Card */}
                <div className="flex-shrink-0 w-full sm:w-[calc(50%-2rem)] ml-10 sm:ml-0">
                  <div className="glass rounded-2xl p-5 sm:p-6 hover:bg-white/[0.07] transition-colors">
                    <h3 className="font-bold text-lg mb-2">{m.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{m.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-black text-center mb-4">
          I nostri <span className="gradient-text">valori</span>
        </h2>
        <p className="text-zinc-400 text-center max-w-xl mx-auto mb-12 md:mb-16">
          Tre principi che guidano ogni decisione, ogni cantiere, ogni relazione.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {values.map((v) => (
            <div key={v.title} className="glass rounded-2xl p-6 sm:p-8 hover:bg-white/[0.07] transition-colors text-center group">
              <div className="w-14 h-14 glass-light rounded-2xl flex items-center justify-center mx-auto mb-5 text-red-400 group-hover:text-red-300 transition-colors">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{v.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto">
        <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl sm:text-5xl font-black gradient-text mb-1">{s.value}</p>
                <p className="text-zinc-400 text-xs sm:text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-12 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
          Vuoi conoscerci <span className="gradient-text">di persona?</span>
        </h2>
        <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
          Prenota un sopralluogo gratuito. Vieni a vedere come lavoriamo — nessun impegno, solo una chiacchierata sincera.
        </p>
        <button
          onClick={onRequestQuote}
          className="px-10 py-5 bg-gradient-to-r from-red-600 to-red-500 text-white text-lg font-bold rounded-2xl hover:scale-105 transition-all shadow-xl shadow-red-500/20"
        >
          Prenota sopralluogo gratuito
        </button>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};
