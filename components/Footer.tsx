
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-20 px-6 border-t border-red-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-white rotate-45"></div>
            </div>
            <span className="text-3xl font-black tracking-tighter">MCO EDILE</span>
          </div>
          
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <a href="#pricing" className="text-xl font-bold hover:text-red-600 transition-colors">Servizi</a>
            <a href="#" className="text-xl font-bold hover:text-red-600 transition-colors">Portfolio</a>
            <a href="#" className="text-xl font-bold hover:text-red-600 transition-colors">Lavora con noi</a>
            <a href="#" className="text-xl font-bold hover:text-red-600 transition-colors">Privacy</a>
            <a href="mailto:info@mcoedile.it" className="text-xl font-bold hover:underline text-red-600">info@mcoedile.it</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-zinc-100">
          <p className="text-zinc-400 font-medium">© 2026 MCO EDILE S.R.L. P.IVA 01234567890. Tutti i diritti riservati.</p>
          <div className="flex gap-6">
             <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 hover:text-white transition-all shadow-sm">𝕏</div>
             <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 hover:text-white transition-all shadow-sm">IG</div>
             <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 hover:text-white transition-all shadow-sm">IN</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
