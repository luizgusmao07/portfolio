import { useTranslation } from 'react-i18next'

import { Section, SectionHeader } from '@/components/shared'

import { AboutContent } from './AboutContent'
import { JourneyTimeline } from './JourneyTimeline'
import { ProfileCard } from './ProfileCard'
import { TechnologiesGrid } from './TechnologiesGrid'

export function AboutMe() {
  const { t } = useTranslation()

  return (
    <>
      {/* First Section - Profile Card and About Content - Full viewport height minus header */}
      <Section id="about" variant="full-height">
        <div className="grid items-center gap-6 md:grid-cols-[300px_1fr] md:gap-8 lg:gap-12">
          <div className="max-h-[400px] overflow-hidden md:max-h-[600px]">
            <ProfileCard />
          </div>
          <div>
            <AboutContent />
          </div>
        </div>
      </Section>

      {/* Second Section - Technologies & Skills - Enhanced grid layout */}
      <Section id="skills" variant="centered">
        <TechnologiesGrid />
      </Section>

      {/* Third Section - Journey Timeline - Full section dedicated to journey */}
      <Section id="journey" variant="centered">
        <SectionHeader title={t('journey.title')} subtitle={t('journey.subtitle')} />
        <div className="mt-8 flex w-full justify-center overflow-hidden md:mt-12">
          <div className="timeline-container w-full max-w-4xl">
            <JourneyTimeline />
          </div>
        </div>
      </Section>
    </>
  )
}
