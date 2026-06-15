

export default function Toast({ show }) {
  if (!show) return null;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-[200000] animate-fade-in-up">
      <div className="glass-panel px-6 py-4 rounded-2xl border border-green-500/30 shadow-2xl flex items-center gap-3 bg-black/80 backdrop-blur-xl">
        <span className="material-symbols-outlined text-green-400 animate-pulse">schedule</span>
        <span className="font-label-caps text-xs text-white tracking-wider font-bold">Tickets Coming Soon!</span>
      </div>
    </div>
  );
}
