import { AboutSection } from '@/components/about-section'
import { Hero } from '@/components/hero'
import { Oneko } from '@/components/oneko'
import { ProjectsSection } from '@/components/projects-section'
import { ResourcesSection } from '@/components/resources-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

function App() {
  return (
    <div id="top" className="flex min-h-svh flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main" className="flex-1">
        <Hero />
        <ProjectsSection />
        <ResourcesSection />
        <AboutSection />
      </main>

      <SiteFooter />

      <Oneko />
    </div>
  )
}

export default App
