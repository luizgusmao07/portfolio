import { Container } from '@/components/layout/Container'
import { Header } from '@/components/layout/Header'
import { AboutSection } from '@/components/sections/AboutSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { EducationSection } from '@/components/sections/EducationSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { useLanguage } from '@/hooks/useLanguage'

function App() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <div className="bg-background text-foreground min-h-screen overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(147,51,234,0.16),transparent_32rem),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_28rem)]" />
      <Header language={language} onToggleLanguage={toggleLanguage} />
      <main>
        <Container>
          <HeroSection language={language} />
          <AboutSection language={language} />
          <ExperienceSection language={language} />
          <SkillsSection language={language} />
          <EducationSection language={language} />
          <ContactSection language={language} />
        </Container>
      </main>
    </div>
  )
}

export default App
