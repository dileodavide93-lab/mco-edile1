
import React from 'react';

interface FooterProps {
  onNavigate?: (page: 'home' | 'chi-siamo') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="py-12 md:py-16 px-4 sm:px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12 mb-10 md:mb-14">
          <div className="flex items-center">
            <svg viewBox="0 0 220 80" className="h-10 sm:h-12 w-auto" aria-label="MCO EDILE">
              <polygon points="110,2 170,38 50,38" fill="#ef4444" />
              <line x1="42" y1="40" x2="178" y2="40" stroke="#ef4444" strokeWidth="3" />
              <text x="18" y="72" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="bold" fontSize="38" fill="white" letterSpacing="-1">MCO</text>
              <text x="120" y="64" fontFamily="'Inter', Arial, sans-serif" fontWeight="600" fontSize="22" fill="white" letterSpacing="2">EDILE</text>
            </svg>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-10">
            <button onClick={() => onNavigate?.('chi-siamo')} className="text-sm sm:text-base font-semibold text-zinc-400 hover:text-white transition-colors">Chi Siamo</button>
            <a href="#pricing" className="text-sm sm:text-base font-semibold text-zinc-400 hover:text-white transition-colors">Servizi</a>
            <a href="#" className="text-sm sm:text-base font-semibold text-zinc-400 hover:text-white transition-colors">Portfolio</a>
            <a href="#" className="text-sm sm:text-base font-semibold text-zinc-400 hover:text-white transition-colors">Lavora con noi</a>
            <a href="#" className="text-sm sm:text-base font-semibold text-zinc-400 hover:text-white transition-colors">Privacy</a>
            <a href="mailto:info@mcoedile.it" className="text-sm sm:text-base font-semibold text-red-400 hover:text-red-300 transition-colors">info@mcoedile.it</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
          <p className="text-zinc-600 font-medium text-xs sm:text-sm text-center md:text-left">&copy; 2026 MCO EDILE S.R.L. P.IVA 01234567890</p>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 glass rounded-xl flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all text-sm font-bold">X</a>
            <a href="#" className="w-10 h-10 glass rounded-xl flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all text-sm font-bold">IG</a>
            <a href="#" className="w-10 h-10 glass rounded-xl flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all text-sm font-bold">IN</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
