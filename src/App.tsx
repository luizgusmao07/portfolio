import { AboutMe } from './components/system/AboutMe'
import { FloatingNav } from './components/system/FloatingNav'
import { Header } from './components/system/Header'
// import { BreadcrumbNav } from './components/system/BreadcrumbNav'

function App() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      {/* Floating navigation - shows on right side for all screen sizes */}
      <FloatingNav />
      {/* Alternative: Use BreadcrumbNav instead - uncomment line below and comment FloatingNav above */}
      {/* <BreadcrumbNav /> */}
      <AboutMe />
    </div>
  )
}

export default App
