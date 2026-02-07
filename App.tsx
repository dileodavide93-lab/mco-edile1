
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
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Ambient glow effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] glow-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-red-500/8 rounded-full blur-[120px] glow-pulse" style={{ animationDelay: '1.5s' }}></div>
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
