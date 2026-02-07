
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
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className="relative bg-white rounded-t-2xl sm:rounded-3xl shadow-2xl w-full sm:max-w-lg max-h-[92vh] overflow-y-auto p-5 sm:p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile drag handle */}
        <div className="sm:hidden w-10 h-1 bg-zinc-300 rounded-full mx-auto mb-4" />

        <button
          onClick={handleClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-zinc-100 transition-colors text-zinc-400 hover:text-zinc-700 text-2xl"
        >
          &times;
        </button>

        {submitted ? (
          <div className="text-center py-8 sm:py-12">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6 text-2xl sm:text-3xl">✓</div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Richiesta inviata!</h3>
            <p className="text-zinc-500 text-base sm:text-lg mb-6 sm:mb-8">Ti ricontatteremo entro 24 ore per fissare un sopralluogo gratuito.</p>
            <button onClick={handleClose} className="px-8 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors">
              Chiudi
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Richiedi Preventivo</h3>
            <p className="text-zinc-500 text-sm sm:text-base mb-5 sm:mb-8">Compila il modulo e ti ricontatteremo entro 24 ore.</p>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <input type="hidden" name="_subject" value="Nuova richiesta preventivo dal sito" />
              <input type="hidden" name="_captcha" value="false" />

              <div>
                <label className="block text-sm font-bold mb-1">Nome e Cognome *</label>
                <input
                  type="text"
                  name="nome"
                  required
                  className="w-full px-4 py-3 border-2 border-zinc-200 rounded-xl focus:border-red-600 focus:outline-none transition-colors text-base"
                  placeholder="Mario Rossi"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-zinc-200 rounded-xl focus:border-red-600 focus:outline-none transition-colors text-base"
                  placeholder="mario@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-1">Telefono *</label>
                <input
                  type="tel"
                  name="telefono"
                  required
                  className="w-full px-4 py-3 border-2 border-zinc-200 rounded-xl focus:border-red-600 focus:outline-none transition-colors text-base"
                  placeholder="+39 333 123 4567"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-1">Tipo di lavoro</label>
                <select
                  name="tipo_lavoro"
                  className="w-full px-4 py-3 border-2 border-zinc-200 rounded-xl focus:border-red-600 focus:outline-none transition-colors bg-white text-base"
                >
                  <option value="Ristrutturazione Totale">Ristrutturazione Totale</option>
                  <option value="Rifacimento Bagno">Rifacimento Bagno</option>
                  <option value="Cucina">Cucina</option>
                  <option value="Altro">Altro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-1">Metratura approssimativa</label>
                <input
                  type="text"
                  name="metratura"
                  className="w-full px-4 py-3 border-2 border-zinc-200 rounded-xl focus:border-red-600 focus:outline-none transition-colors text-base"
                  placeholder="es. 80 mq"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-1">Messaggio</label>
                <textarea
                  name="messaggio"
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-zinc-200 rounded-xl focus:border-red-600 focus:outline-none transition-colors resize-none text-base"
                  placeholder="Descrivi brevemente il tuo progetto..."
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-red-600 text-white text-lg font-bold rounded-xl hover:bg-red-700 transition-colors shadow-lg shadow-red-600/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Invio in corso...' : 'Invia Richiesta'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
