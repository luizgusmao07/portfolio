import { useTranslation } from 'react-i18next'

export function JourneyTimeline() {
  const { t } = useTranslation()

  return (
    <div className="space-y-8">
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
            className="timeline-path drop-shadow-sm"
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
        <div className="timeline-point absolute top-8 left-1/2 z-10 -translate-x-1/2 transform opacity-0">
          <div className="floating-dot relative">
            <div className="size-4 rounded-full bg-purple-500 shadow-lg ring-4 shadow-purple-500/25 ring-purple-100 dark:ring-purple-900" />
            <div className="absolute inset-0 size-4 animate-ping rounded-full bg-purple-500 opacity-20" />
          </div>
        </div>
        <div
          className="timeline-point absolute top-4 right-8 max-w-xs text-right opacity-0"
          style={{ animationDelay: '0.7s' }}
        >
          <span className="mb-2 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900 dark:text-purple-300">
            {t('timeline.current.date')}
          </span>
          <h4 className="text-foreground text-lg font-semibold">{t('timeline.current.title')}</h4>
          <p className="text-muted-foreground text-sm">{t('timeline.current.company')}</p>
          <p className="text-muted-foreground text-xs opacity-75">{t('timeline.current.type')}</p>
        </div>

        {/* Education Milestone - Middle of curve */}
        <div
          className="timeline-point absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform opacity-0"
          style={{ animationDelay: '1.2s' }}
        >
          <div className="floating-dot">
            <div className="size-4 rounded-full bg-purple-500 shadow-lg ring-4 shadow-purple-500/25 ring-purple-100 dark:ring-purple-900" />
          </div>
        </div>
        <div
          className="timeline-point absolute top-1/2 left-8 max-w-xs -translate-y-1/2 transform text-left opacity-0"
          style={{ animationDelay: '1.4s' }}
        >
          <span className="mb-2 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900 dark:text-purple-300">
            {t('timeline.education.date')}
          </span>
          <h4 className="text-foreground text-lg font-semibold">{t('timeline.education.title')}</h4>
          <p className="text-muted-foreground text-sm">{t('timeline.education.course')}</p>
          <p className="text-muted-foreground text-xs opacity-75">
            {t('timeline.education.institution')}
          </p>
        </div>

        {/* Foundation - Bottom center of curve */}
        <div
          className="timeline-point absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transform opacity-0"
          style={{ animationDelay: '1.8s' }}
        >
          <div className="floating-dot">
            <div className="size-4 rounded-full bg-purple-500 shadow-lg ring-4 shadow-purple-500/25 ring-purple-100 dark:ring-purple-900" />
          </div>
        </div>
        <div
          className="timeline-point absolute right-8 bottom-4 max-w-xs text-right opacity-0"
          style={{ animationDelay: '2s' }}
        >
          <span className="mb-2 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900 dark:text-purple-300">
            {t('timeline.foundation.date')}
          </span>
          <h4 className="text-foreground text-lg font-semibold">
            {t('timeline.foundation.title')}
          </h4>
          <p className="text-muted-foreground text-sm">{t('timeline.foundation.course')}</p>
          <p className="text-muted-foreground text-xs opacity-75">
            {t('timeline.foundation.description')}
          </p>
        </div>
      </div>
    </div>
  )
}
