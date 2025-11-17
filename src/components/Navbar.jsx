import React, { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#industries', label: 'Industries' },
    { href: '#products', label: 'Products' },
    { href: '#resources', label: 'Resources' },
    { href: '#about', label: 'About' },
  ]

  return (
    <header className="w-full sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="TrueOmni" className="h-7 w-auto" onError={(e) => { e.currentTarget.style.display = 'none' }} />
          <span className="text-lg font-semibold tracking-tight text-neutral-900">TrueOmni</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-800">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-neutral-950 transition-colors">{item.label}</a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="px-4 py-2 rounded-full bg-[#1288FF] text-white hover:bg-[#0f79e5] transition-colors">Request Demo</a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-black/10"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-3 rounded-lg text-neutral-900 hover:bg-neutral-50"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a href="#contact" onClick={() => setOpen(false)} className="block text-center px-4 py-3 rounded-full bg-[#1288FF] text-white hover:bg-[#0f79e5] transition-colors">Request Demo</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
