import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Services from './components/Services'
import Stack from './components/Stack'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import InquiryDialog from './components/InquiryDialog'

export default function App() {
  return (
    <div className="relative">
      <div className="ambient" aria-hidden="true" />
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-canvas"
      >
        Skip to work
      </a>
      <Nav />
      <main className="relative">
        <Hero />
        <Work />
        <Services />
        <Stack />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <InquiryDialog />
    </div>
  )
}
