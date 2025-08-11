import './App.css'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

import { TodoList } from '@/components/system/TodoList'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const stored = localStorage.getItem('theme')
    const prefersDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const enableDark = stored ? stored === 'dark' : prefersDark
    setIsDark(enableDark)
    root.classList.toggle('dark', enableDark)
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    const next = !isDark
    setIsDark(next)
    root.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <div className="bg-background text-foreground min-h-dvh">
      <header className="bg-background/80 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10 border-b backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="bg-accent size-6 rounded-md" />
            <span className="font-semibold">Portfolio</span>
            <Badge className="ml-2" variant="outline">
              Base
            </Badge>
          </div>
          <Button size="icon" variant="ghost" aria-label="Toggle theme" onClick={toggleTheme}>
            {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </Button>
        </div>
      </header>

      <main className="mx-auto grid max-w-5xl gap-6 px-4 py-10">
        <section className="grid gap-2">
          <h1 className="text-3xl font-bold tracking-tight">System design foundation</h1>
          <p className="text-muted-foreground">
            Neutral base with purple accents, powered by shadcn/ui.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Tokens</CardTitle>
              <CardDescription>Colors, radii, borders</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-background size-8 rounded-md border" />
                <div className="text-sm">background / foreground</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-accent size-8 rounded-md" />
                <div className="text-sm">accent (purple) / foreground</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary size-8 rounded-md" />
                <div className="text-sm">primary / primary-foreground</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Components</CardTitle>
              <CardDescription>Base shadcn/ui primitives</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Badge>Badge</Badge>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Next steps</CardTitle>
              <CardDescription>See TODO and plan below.</CardDescription>
            </CardHeader>
            <CardContent>
              <TodoList />
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}

export default App
