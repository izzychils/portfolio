import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Work } from './components/Work'
import { Manifesto } from './components/Manifesto'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { StackSection } from './components/Stack'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { NotFound } from './components/NotFound'
import { SectionRail } from './components/SectionRail'
import { SectionLink, useRoute } from './router'

const ticker = [
  'React',
  'TypeScript',
  'Node',
  'Python',
  'PostgreSQL',
  'Tailwind',
  'Redis',
  'FastAPI',
  'Docker',
  'Vercel',
]

export default function App() {
  const route = useRoute()

  return (
    <div className="min-h-screen bg-paper text-ink">
      <SectionLink
        to="work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-chalk"
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
            <Marquee items={ticker} />
            <Work />
            <Manifesto />
            <About />
            <Experience />
            <StackSection />
            <Contact />
          </>
        )}
      </main>
      <Footer />
      <SectionRail />
    </div>
  )
}
