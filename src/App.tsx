import { AboutMe, FloatingNav, Header, ProjectsSection } from '@/components/system'
// import { BreadcrumbNav } from '@/components/system/BreadcrumbNav'

function App() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      {/* Floating navigation - shows on right side for all screen sizes */}
      <FloatingNav />
      {/* Alternative: Use BreadcrumbNav instead - uncomment line below and comment FloatingNav above */}
      {/* <BreadcrumbNav /> */}
      <main>
        <AboutMe />
        <ProjectsSection />
      </main>
    </div>
  )
}

export default App
