import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import FeatureRows from './components/FeatureRows'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <FeatureRows />
        <CTA />
      </main>
      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-neutral-500 flex items-center justify-between">
          <div>© {new Date().getFullYear()} TrueOmni</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-800">Privacy</a>
            <a href="#" className="hover:text-neutral-800">Terms</a>
            <a href="#" className="hover:text-neutral-800">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
