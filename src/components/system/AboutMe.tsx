import { AboutContent } from './AboutContent'
import { JourneyTimeline } from './JourneyTimeline'
import { ProfileCard } from './ProfileCard'
import { SkillsCard } from './SkillsCard'

export function AboutMe() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid gap-8 md:grid-cols-[300px_1fr] lg:gap-12">
          {/* Left Column - Profile Card + Skills */}
          <div className="space-y-6">
            <ProfileCard />
            <SkillsCard />
          </div>

          {/* Right Column - About Content */}
          <div className="space-y-8">
            <AboutContent />
            <JourneyTimeline />
          </div>
        </div>
      </div>
    </section>
  )
}
