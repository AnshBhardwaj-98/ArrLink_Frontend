const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Subtle grid */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
    {/* Topology nodes */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <circle cx="200" cy="150" r="3" fill="currentColor" />
      <circle cx="400" cy="300" r="2" fill="currentColor" />
      <circle cx="700" cy="200" r="3" fill="currentColor" />
      <circle cx="900" cy="400" r="2" fill="currentColor" />
      <circle cx="1050" cy="150" r="3" fill="currentColor" />
      <circle cx="300" cy="500" r="2" fill="currentColor" />
      <circle cx="600" cy="600" r="3" fill="currentColor" />
      <circle cx="850" cy="650" r="2" fill="currentColor" />
      <line x1="200" y1="150" x2="400" y2="300" stroke="currentColor" strokeWidth="0.5" />
      <line x1="400" y1="300" x2="700" y2="200" stroke="currentColor" strokeWidth="0.5" />
      <line x1="700" y1="200" x2="900" y2="400" stroke="currentColor" strokeWidth="0.5" />
      <line x1="700" y1="200" x2="1050" y2="150" stroke="currentColor" strokeWidth="0.5" />
      <line x1="400" y1="300" x2="300" y2="500" stroke="currentColor" strokeWidth="0.5" />
      <line x1="300" y1="500" x2="600" y2="600" stroke="currentColor" strokeWidth="0.5" />
      <line x1="900" y1="400" x2="850" y2="650" stroke="currentColor" strokeWidth="0.5" />
      <line x1="600" y1="600" x2="850" y2="650" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  </div>
);

export default GridBackground;
