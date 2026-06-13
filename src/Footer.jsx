export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-brand-dark text-brand-bg border-t-3 border-brand-dark py-8 overflow-hidden select-none">
      {/* Marquee Banner */}
      <div className="flex border-b-2 border-brand-bg/20 pb-6 mb-6">
        <div className="animate-marquee whitespace-nowrap flex gap-8 font-display font-black text-lg md:text-xl uppercase tracking-widest text-[#FBFAF7]">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              <span> Ganesh M </span>
              <span className="text-brand-red"> ✦ </span>
              <span> Full-Stack Developer </span>
              <span className="text-brand-rose"> ✦ </span>
              <span> Tech Enthusiast </span>
              <span className="text-brand-muddy"> ✦ </span>
            </span>
          ))}
        </div>
      </div>

      {/* Copyright Info */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xxs md:text-xs font-bold uppercase tracking-widest text-brand-bg/70">
        <p>&copy; {year} Ganesh M. All rights reserved.</p>
      </div>
    </footer>
  );
}
