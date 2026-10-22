import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Work } from './components/Work'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { StackSection } from './components/Stack'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { NotFound } from './components/NotFound'
import { SectionLink, useRoute } from './router'

export default function App() {
  const route = useRoute()

  return (
    <div className="min-h-screen bg-ink text-chalk">
      <SectionLink
        to="work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-chalk focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
      >
        Skip to content
      </SectionLink>
      <Nav />
      <main>
        {route === 'not-found' ? (
          <NotFound />
        ) : (
          <>
            <Hero />
            <Work />
            <About />
            <Experience />
            <StackSection />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
