
import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { RecentWork } from './components/RecentWork';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';

const App: React.FC = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const openQuote = () => setQuoteOpen(true);
  const closeQuote = () => setQuoteOpen(false);

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111] overflow-x-hidden">
      {/* Grid Background Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
        {/* Fix: removed invalid 'size' property from style object */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-10">
        <Hero onRequestQuote={openQuote} />
        <HowItWorks />
        <Benefits />
        <RecentWork />
        <Pricing onRequestQuote={openQuote} />
        <FAQ onRequestQuote={openQuote} />
        <Footer />
      </div>

      <QuoteModal isOpen={quoteOpen} onClose={closeQuote} />
    </div>
  );
};

export default App;
