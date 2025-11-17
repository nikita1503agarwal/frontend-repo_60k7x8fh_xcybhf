import React from 'react'
import Navbar from './components/Navbar'
import PageParallax from './components/PageParallax'
import { HeroIndustry, ProductByIndustry, OmniEcosystem, ToolsModules, Partnerships, ProofPoints, Footer } from './components/Sections'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <PageParallax />
      <main>
        <HeroIndustry />
        <ProductByIndustry />
        <OmniEcosystem />
        <ToolsModules />
        <Partnerships />
        <ProofPoints />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
