const SIMULATOR_URL = 'https://simulator.energy.bm/'

export default function SimulatorFAB() {
  return (
    <a
      href={SIMULATOR_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Energy Simulator"
      title="Energy Simulator"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-2xl bg-gradient-to-br from-teal-500 to-navy-900 text-white shadow-[0_4px_20px_rgba(0,119,182,0.45)] ring-2 ring-white/20 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,119,182,0.6)] hover:ring-teal-400/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
    >
      {/* Game controller icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <line x1="6" y1="12" x2="10" y2="12" />
        <line x1="8" y1="10" x2="8" y2="14" />
        <circle cx="15" cy="11" r="1" fill="currentColor" stroke="none" />
        <circle cx="17" cy="13" r="1" fill="currentColor" stroke="none" />
        <path d="M6 9h12l1.5 6.5a1.5 1.5 0 01-1.5 1.5H6a1.5 1.5 0 01-1.5-1.5L6 9z" />
        <path d="M9 9V7.5A1.5 1.5 0 0110.5 6h3A1.5 1.5 0 0115 7.5V9" />
      </svg>
      <span className="text-[9px] font-bold uppercase tracking-widest leading-none opacity-90">Simulator</span>

      {/* Pulse ring */}
      <span className="pointer-events-none absolute inset-0 animate-ping rounded-2xl bg-teal-400 opacity-20" aria-hidden="true" />
    </a>
  )
}
