
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 md:py-16 px-4 sm:px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12 mb-10 md:mb-14">
          <div className="flex items-center">
            <img src="/logo.jpeg" alt="MCO EDILE" className="h-10 sm:h-12 w-auto" />
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-10">
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
