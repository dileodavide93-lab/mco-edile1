
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
    <section className="py-20 md:py-32 bg-zinc-950 text-white overflow-hidden">
      <div className="px-4 sm:px-6 max-w-7xl mx-auto mb-10 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-3 md:mb-4">Lavori recenti</h2>
          <p className="text-red-500 text-lg sm:text-xl font-medium">Qualità ed estetica d'avanguardia.</p>
        </div>
        <button className="px-6 py-3 sm:px-8 sm:py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 hover:scale-105 transition-all text-sm sm:text-base">Vedi portfolio</button>
      </div>

      <div className="marquee-container">
        <div className="marquee-content flex gap-4 sm:gap-8">
          {[...images, ...images].map((src, i) => (
            <div key={i} className="flex-none w-[260px] h-[340px] sm:w-[400px] sm:h-[500px] rounded-2xl sm:rounded-[2rem] overflow-hidden border-4 border-zinc-800 hover:border-red-600 group relative transition-colors">
              <img src={src} alt="Interior" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="px-4 py-2 sm:px-6 sm:py-2 bg-white text-red-600 font-bold rounded-full shadow-xl text-sm sm:text-base">Vedi progetto</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
