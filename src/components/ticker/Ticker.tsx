const tickerWords = [
  "RASTREIE", "REUSE", "RECICLE", "REDUZA",
  "RASTREIE", "REUSE", "RECICLE", "REDUZA",
  "RASTREIE", "REUSE", "RECICLE", "REDUZA",
  "RASTREIE", "REUSE", "RECICLE", "REDUZA",
];

export default function Ticker() {
  return (
    <div className="bg-green-900 overflow-hidden py-3.5 select-none">
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker 22s linear infinite;
        }
      `}</style>
      <div className="ticker-track">
        {[...tickerWords, ...tickerWords].map((word, i) => (
          <span
            key={i}
            className="text-white font-extrabold text-sm tracking-widest px-5 uppercase whitespace-nowrap"
          >
            {word}
            <span className="mx-4 text-green-500 font-extrabold">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}