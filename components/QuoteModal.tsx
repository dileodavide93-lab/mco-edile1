
import React, { useState } from 'react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch('https://formsubmit.co/ajax/dileodavide93@gmail.com', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData,
      });
      setSubmitted(true);
    } catch {
      alert('Errore nell\'invio. Riprova più tardi.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={handleClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      <div
        className="relative bg-[#141414] rounded-t-2xl sm:rounded-3xl shadow-2xl w-full sm:max-w-lg max-h-[92vh] overflow-y-auto p-5 sm:p-8 md:p-10 border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile drag handle */}
        <div className="sm:hidden w-10 h-1 bg-zinc-700 rounded-full mx-auto mb-4" />

        <button
          onClick={handleClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-zinc-400 hover:text-white text-lg"
        >
          &times;
        </button>

        {submitted ? (
          <div className="text-center py-8 sm:py-12">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/20 flex items-center justify-center mx-auto mb-5 text-green-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">Richiesta inviata!</h3>
            <p className="text-zinc-400 text-base sm:text-lg mb-6 sm:mb-8">Ti ricontatteremo entro 24 ore per fissare un sopralluogo gratuito.</p>
            <button onClick={handleClose} className="px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all">
              Perfetto
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Preventivo <span className="gradient-text">gratuito</span></h3>
            <p className="text-zinc-500 text-sm sm:text-base mb-6 sm:mb-8">Compila il form, ti richiamiamo entro 24h.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="_subject" value="Nuova richiesta preventivo dal sito" />
              <input type="hidden" name="_captcha" value="false" />

              <div>
                <label className="block text-sm font-semibold text-zinc-300 mb-1.5">Nome e Cognome *</label>
                <input
                  type="text"
                  name="nome"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-red-500/50 focus:outline-none focus:bg-white/[0.08] transition-all text-base text-white placeholder-zinc-600"
                  placeholder="Mario Rossi"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-300 mb-1.5">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-red-500/50 focus:outline-none focus:bg-white/[0.08] transition-all text-base text-white placeholder-zinc-600"
                  placeholder="mario@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-300 mb-1.5">Telefono *</label>
                <input
                  type="tel"
                  name="telefono"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-red-500/50 focus:outline-none focus:bg-white/[0.08] transition-all text-base text-white placeholder-zinc-600"
                  placeholder="+39 333 123 4567"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-300 mb-1.5">Tipo di lavoro</label>
                <select
                  name="tipo_lavoro"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-red-500/50 focus:outline-none focus:bg-white/[0.08] transition-all text-base text-white"
                >
                  <option value="Ristrutturazione Totale">Ristrutturazione Totale</option>
                  <option value="Rifacimento Bagno">Rifacimento Bagno</option>
                  <option value="Cucina">Cucina</option>
                  <option value="Altro">Altro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-300 mb-1.5">Metratura approssimativa</label>
                <input
                  type="text"
                  name="metratura"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-red-500/50 focus:outline-none focus:bg-white/[0.08] transition-all text-base text-white placeholder-zinc-600"
                  placeholder="es. 80 mq"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-300 mb-1.5">Messaggio</label>
                <textarea
                  name="messaggio"
                  rows={3}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-red-500/50 focus:outline-none focus:bg-white/[0.08] transition-all resize-none text-base text-white placeholder-zinc-600"
                  placeholder="Descrivi brevemente il tuo progetto..."
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white text-lg font-bold rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Invio in corso...' : 'Invia richiesta'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
