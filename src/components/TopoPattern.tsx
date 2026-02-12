export function TopoPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.03 }}
      >
        <defs>
          <pattern
            id="topographic"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M10 10 Q20 20 30 10 T50 10"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              className="text-black"
            />
            <path
              d="M15 30 Q25 40 35 30 T55 30"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              className="text-gray-700"
            />
            <path
              d="M5 50 Q15 60 25 50 T45 50"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              className="text-black"
            />
            <path
              d="M20 70 Q30 80 40 70 T60 70"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              className="text-gray-700"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#topographic)" />
      </svg>
    </div>
  );
}
