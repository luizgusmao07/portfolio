import { lazy, Suspense } from 'react'

import { FloatingNav, Header } from '@/components/system'

// Lazy load components for better performance
const AboutMe = lazy(() =>
  import('@/components/system/AboutMe').then((m) => ({ default: m.AboutMe })),
)
const ProjectsSection = lazy(() =>
  import('@/components/system/ProjectsSection').then((m) => ({ default: m.ProjectsSection })),
)

function App() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      {/* Floating navigation - shows on right side for all screen sizes */}
      <FloatingNav />
      {/* Alternative: Use BreadcrumbNav instead - uncomment line below and comment FloatingNav above */}
      {/* <BreadcrumbNav /> */}
      <main>
        <Suspense
          fallback={<div className="flex h-32 items-center justify-center">Loading...</div>}
        >
          <AboutMe />
        </Suspense>
        <Suspense
          fallback={<div className="flex h-32 items-center justify-center">Loading...</div>}
        >
          <ProjectsSection />
        </Suspense>
      </main>
    </div>
  )
}

export default App
