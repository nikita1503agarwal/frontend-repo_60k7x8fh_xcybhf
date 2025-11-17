import React from 'react'

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-30 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="TrueOmni" className="h-7 w-auto" onError={(e) => { e.currentTarget.style.display = 'none' }} />
          <span className="text-lg font-semibold tracking-tight text-neutral-900">TrueOmni</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-800">
          <a href="#solutions" className="hover:opacity-70 transition-opacity">Solutions</a>
          <a href="#products" className="hover:opacity-70 transition-opacity">Products</a>
          <a href="#industries" className="hover:opacity-70 transition-opacity">Industries</a>
          <a href="#resources" className="hover:opacity-70 transition-opacity">Resources</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="px-4 py-2 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">Contact</a>
        </div>
        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-black/10" aria-label="Open menu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
        </button>
      </div>
    </header>
  )
}

export default Navbar
