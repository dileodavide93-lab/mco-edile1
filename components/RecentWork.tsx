
import React from 'react';

const images = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1615873968403-89e068628265?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1616486029423-aaa47a950cf4?auto=format&fit=crop&q=80&w=800",
];

export const RecentWork: React.FC = () => {
  return (
    <section className="py-20 md:py-32 overflow-hidden border-t border-white/5">
      <div className="px-4 sm:px-6 max-w-7xl mx-auto mb-10 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-400">Portfolio</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mt-3">
            Lavori <span className="gradient-text">recenti.</span>
          </h2>
        </div>
        <button className="px-6 py-3 glass rounded-xl font-semibold text-zinc-300 hover:text-white hover:bg-white/10 transition-all text-sm sm:text-base">
          Vedi tutto &rarr;
        </button>
      </div>

      <div className="marquee-container">
        <div className="marquee-content flex gap-4 sm:gap-6">
          {[...images, ...images].map((src, i) => (
            <div key={i} className="flex-none w-[260px] h-[340px] sm:w-[380px] sm:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden group relative border border-white/10 hover:border-red-500/50 transition-colors">
              <img src={src} alt="Interior" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div>
                  <p className="text-white font-bold text-lg">Progetto residenziale</p>
                  <p className="text-zinc-400 text-sm">Milano, 2025</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
