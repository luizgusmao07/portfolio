import { AboutContent } from './AboutContent'
import { JourneyTimeline } from './JourneyTimeline'
import { ProfileCard } from './ProfileCard'
import { TechnologiesGrid } from './TechnologiesGrid'

export function AboutMe() {
  return (
    <>
      {/* First Section - Profile Card and About Content - Full viewport height minus header */}
      <section id="about" className="flex h-[calc(100vh-80px)] items-center justify-center">
        <div className="mx-auto w-full max-w-5xl px-4">
          <div className="grid items-center gap-8 md:grid-cols-[300px_1fr] lg:gap-12">
            <div className="max-h-[600px] overflow-hidden">
              <ProfileCard />
            </div>
            <div className="max-h-[600px] overflow-y-auto">
              <AboutContent />
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Technologies & Skills - Enhanced grid layout */}
      <section id="skills" className="flex min-h-screen items-center justify-center py-16">
        <div className="mx-auto w-full max-w-5xl px-4">
          <TechnologiesGrid />
        </div>
      </section>

      {/* Third Section - Journey Timeline - Full section dedicated to journey */}
      <section id="journey" className="flex min-h-screen items-center justify-center py-16">
        <div className="mx-auto w-full max-w-5xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-foreground mb-3 text-3xl font-bold">My Journey</h2>
            <p className="text-muted-foreground text-lg">
              The path that led me to where I am today
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <JourneyTimeline />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
