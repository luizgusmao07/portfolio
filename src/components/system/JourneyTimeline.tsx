export function JourneyTimeline() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="mb-2 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-2xl font-semibold text-transparent">
          My Journey
        </h3>
        <p className="text-muted-foreground mb-12 text-sm">From student to professional</p>
      </div>

      <div className="relative mx-auto h-80 max-w-3xl">
        {/* Curved Path SVG */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 400 320"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M 200 40 Q 120 100 200 160 Q 280 220 200 280"
            stroke="url(#gradient)"
            strokeWidth="3"
            fill="none"
            className="drop-shadow-sm"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(168 85 247)" stopOpacity="0.8" />
              <stop offset="50%" stopColor="rgb(147 51 234)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="rgb(126 34 206)" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Journey Points positioned on the curve */}

        {/* Current Position - Top center of curve */}
        <div className="absolute top-8 left-1/2 z-10 -translate-x-1/2 transform">
          <div className="relative">
            <div className="size-4 rounded-full bg-purple-500 shadow-lg ring-4 shadow-purple-500/25 ring-purple-100 dark:ring-purple-900" />
            <div className="absolute inset-0 size-4 animate-ping rounded-full bg-purple-500 opacity-20" />
          </div>
        </div>
        <div className="absolute top-4 right-8 max-w-xs text-right">
          <span className="mb-2 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900 dark:text-purple-300">
            Jun 2025 - Present
          </span>
          <h4 className="text-foreground text-lg font-semibold">Customer Support Engineer</h4>
          <p className="text-muted-foreground text-sm">CloudWalk, Inc.</p>
          <p className="text-muted-foreground text-xs opacity-75">Brazilian Fintech • Internship</p>
        </div>

        {/* Education Milestone - Middle of curve */}
        <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform">
          <div className="size-4 rounded-full bg-purple-500 shadow-lg ring-4 shadow-purple-500/25 ring-purple-100 dark:ring-purple-900" />
        </div>
        <div className="absolute top-1/2 left-8 max-w-xs -translate-y-1/2 transform text-left">
          <span className="mb-2 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900 dark:text-purple-300">
            2025
          </span>
          <h4 className="text-foreground text-lg font-semibold">Associate Degree</h4>
          <p className="text-muted-foreground text-sm">Systems Development and Analysis</p>
          <p className="text-muted-foreground text-xs opacity-75">FATEC São Paulo</p>
        </div>

        {/* Foundation - Bottom center of curve */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transform">
          <div className="size-4 rounded-full bg-purple-500 shadow-lg ring-4 shadow-purple-500/25 ring-purple-100 dark:ring-purple-900" />
        </div>
        <div className="absolute right-8 bottom-4 max-w-xs text-right">
          <span className="mb-2 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900 dark:text-purple-300">
            2022
          </span>
          <h4 className="text-foreground text-lg font-semibold">Technical Course</h4>
          <p className="text-muted-foreground text-sm">Systems Development</p>
          <p className="text-muted-foreground text-xs opacity-75">Foundation in programming</p>
        </div>
      </div>
    </div>
  )
}
