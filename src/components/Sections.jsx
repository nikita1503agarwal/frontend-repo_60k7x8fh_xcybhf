import React from 'react'
import { motion } from 'framer-motion'
import VideoCarousel from './VideoCarousel'

export const HeroIndustry = () => {
  return (
    <section className="relative w-full bg-white" id="hero">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.05]">Smart Service. Real Results. For Hotels, Destinations, and Retail.</h1>
            <p className="mt-5 text-lg text-neutral-700 max-w-xl">TrueOmni unites your guest and visitor experience across kiosks, signage, and mobile — connecting people, data, and revenue opportunities.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#ive" className="px-5 py-3 rounded-full bg-[#1288FF] text-white hover:bg-[#0f79e5] transition-colors shadow-[0_10px_30px_-10px_rgba(18,136,255,0.7)]">I’m in Travel → IVE</a>
              <a href="#nexi" className="px-5 py-3 rounded-full border border-neutral-300 hover:bg-neutral-50">I’m in Hotels → Nexi</a>
              <a href="#ire" className="px-5 py-3 rounded-full border border-neutral-300 hover:bg-neutral-50">I’m a Retailer → IRE</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="absolute -inset-6 bg-[radial-gradient(600px_300px_at_80%_0%,rgba(18,136,255,0.18),transparent_60%)] pointer-events-none" />
            <VideoCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export const ProductByIndustry = () => {
  const cards = [
    { key: 'ive', title: 'IVE – Interactive Visitor Ecosystem', industry: 'Travel / Destinations', focus: 'Visitor engagement, partner promotions, ticketing, analytics', link: '#ive' },
    { key: 'nexi', title: 'Nexi Smart Service', industry: 'Hotels / Resorts', focus: 'Guest check-in, upsells, personalization, operational efficiency', link: '#nexi' },
    { key: 'ire', title: 'IRE – Interactive Retail Ecosystem', industry: 'Retailers', focus: 'Store engagement, promotions, loyalty programs, mobile interactivity', link: '#ire' },
  ]
  return (
    <section id="industries" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900">Solutions Built for Your Industry</h2>
          <p className="mt-4 text-neutral-700">Choose the solution that fits your business and visitor needs.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <motion.a key={c.key} href={c.link} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="group rounded-2xl border border-black/5 bg-white p-6 hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(400px_200px_at_80%_0%,rgba(18,136,255,0.12),transparent_60%)]" />
              <div className="text-xs uppercase tracking-wide text-neutral-500">{c.industry}</div>
              <h3 className="mt-2 text-xl font-semibold text-neutral-900">{c.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{c.focus}</p>
              <span className="inline-flex items-center gap-2 mt-5 text-[#1288FF]">Learn How {c.title.split(' ')[0]} Works<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' className='h-4 w-4'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'/></svg></span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export const OmniEcosystem = () => {
  const items = [
    { title: 'Omni Platform', body: 'Central hub integrating PMS, CRM, booking engines, POS, and partner systems' },
    { title: 'Delivery Channels', body: 'Kiosk • Signage • Mobile' },
    { title: 'Benefits', body: 'Data-driven insights, real-time engagement, cross-platform analytics' },
  ]
  return (
    <section id="ecosystem" className="bg-neutral-50 border-y border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900">One Platform, Endless Connections</h2>
          <p className="mt-4 text-neutral-700">TrueOmni connects your existing systems into a unified ecosystem across kiosks, signage, and mobile devices.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl bg-white p-6 border border-black/5">
              <div className="text-sm font-medium text-neutral-500">{it.title}</div>
              <div className="mt-2 text-neutral-900">{it.body}</div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12">
          <div className="relative rounded-2xl border border-black/5 bg-white p-6">
            <div className="absolute -inset-x-10 -top-10 -bottom-10 bg-[radial-gradient(600px_300px_at_70%_0%,rgba(18,136,255,0.1),transparent_60%)] pointer-events-none" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              <div className="md:col-span-1">
                <div className="text-sm uppercase tracking-wide text-neutral-500">Omni Platform</div>
                <h4 className="text-xl font-semibold mt-1">Integrations Hub</h4>
                <p className="mt-2 text-sm text-neutral-700">Connect PMS, CRM, booking, POS and more with unified data and control.</p>
              </div>
              <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-xl border border-black/5 p-4 bg-neutral-50">Kiosk</div>
                <div className="rounded-xl border border-black/5 p-4 bg-neutral-50">Signage</div>
                <div className="rounded-xl border border-black/5 p-4 bg-neutral-50">Mobile</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const ToolsModules = () => {
  const tiles = [
    { title: 'True AI with Avatar', body: 'Personalized AI assistant for guests and visitors' },
    { title: 'AI-Based Itinerary Builder', body: 'Automatically creates personalized itineraries and experiences' },
    { title: 'Advertising Networks', body: 'Local and national partner promotion across devices' },
    { title: 'Augmented Reality Photobooths', body: 'Engage visitors with shareable experiences' },
    { title: 'Ticketing Systems', body: 'Simplify access, reservations, and check-ins' },
    { title: 'Reservation Systems', body: 'Integrates with existing booking engines and PMS' },
  ]
  return (
    <section id="products" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900">Powerful Tools to Customize Your Experience</h2>
          <p className="mt-4 text-neutral-700">Industry-specific, SaaS-based modules let you tailor Smart Service, Engagement, and Sales tools across any device.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiles.map((t, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="group rounded-2xl border border-black/5 bg-white p-6 hover:shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(400px_200px_at_80%_0%,rgba(18,136,255,0.12),transparent_60%)]" />
              <h3 className="text-lg font-semibold text-neutral-900">{t.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{t.body}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8">
          <a href="#tools" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1288FF] text-white hover:bg-[#0f79e5]">See How It Works</a>
        </div>
      </div>
    </section>
  )
}

export const Partnerships = () => {
  const logos = [
    { name: 'Salesforce', href: 'https://www.salesforce.com/' },
    { name: 'Toast', href: 'https://pos.toasttab.com/' },
    { name: 'Symphony', href: 'https://www.oracle.com/industries/hospitality/point-of-sale/' },
    { name: 'Miles Media', href: 'https://www.milespartnership.com/' },
    { name: 'OPERA PMS', href: 'https://www.oracle.com/industries/hospitality/products/opera/' },
  ]
  return (
    <section id="resources" className="bg-neutral-50 border-y border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900">Extend the Value of Your Existing Systems</h2>
          <p className="mt-4 text-neutral-700">We leverage your current investments in CRMs, booking engines, and partner platforms while building deeper engagement and revenue opportunities.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {logos.map((l) => (
            <a key={l.name} href={l.href} target="_blank" rel="noreferrer" className="h-16 rounded-xl border border-black/5 bg-white flex items-center justify-center text-neutral-400 hover:text-neutral-700">
              {l.name}
            </a>
          ))}
        </div>
        <div className="mt-8">
          <a href="#partnerships" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-neutral-300 hover:bg-neutral-50">Learn About Our Partnerships</a>
        </div>
      </div>
    </section>
  )
}

export const ProofPoints = () => {
  const stats = [
    { kpi: '70%+', label: 'guests prefer self-service check-in' },
    { kpi: '50–70%', label: 'visitor engagement increase with interactive kiosks' },
    { kpi: '20–30%', label: 'incremental revenue lift from upsells and partner promotions' },
    { kpi: '< 6 mo', label: 'ROI for most deployments' },
  ]
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900">Smart. Connected. Measurable.</h2>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {stats.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-black/5 p-6">
                  <div className="text-3xl font-semibold text-neutral-900">{s.kpi}</div>
                  <div className="mt-1 text-sm text-neutral-600">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <div className="rounded-2xl border border-black/5 p-6">
              <div className="text-sm text-neutral-500">What our customers say</div>
              <div className="mt-4 space-y-4">
                <blockquote className="rounded-xl border border-black/5 p-4 bg-neutral-50">“Nexi shaved minutes off check-in and lifted ancillaries.” — Hotel Client</blockquote>
                <blockquote className="rounded-xl border border-black/5 p-4 bg-neutral-50">“IVE helps us surface partner offers at the right time.” — DMO Partner</blockquote>
                <blockquote className="rounded-xl border border-black/5 p-4 bg-neutral-50">“IRE turned our screens into a measurable revenue channel.” — Retail CX Lead</blockquote>
              </div>
              <div className="mt-6">
                <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1288FF] text-white hover:bg-[#0f79e5]">Request a Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="font-semibold text-neutral-900">Products</div>
            <ul className="mt-3 space-y-2 text-neutral-600">
              <li><a href="#nexi" className="hover:text-neutral-900">Nexi</a></li>
              <li><a href="#ive" className="hover:text-neutral-900">IVE</a></li>
              <li><a href="#ire" className="hover:text-neutral-900">IRE</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-neutral-900">Industries</div>
            <ul className="mt-3 space-y-2 text-neutral-600">
              <li><a href="#industries" className="hover:text-neutral-900">Hotels</a></li>
              <li><a href="#industries" className="hover:text-neutral-900">Travel / Destinations</a></li>
              <li><a href="#industries" className="hover:text-neutral-900">Retail</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-neutral-900">Resources</div>
            <ul className="mt-3 space-y-2 text-neutral-600">
              <li><a href="#resources" className="hover:text-neutral-900">Case Studies</a></li>
              <li><a href="#resources" className="hover:text-neutral-900">Blog</a></li>
              <li><a href="#resources" className="hover:text-neutral-900">Whitepapers</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-neutral-900">Get in touch</div>
            <ul className="mt-3 space-y-2 text-neutral-600">
              <li><a href="#contact" className="hover:text-neutral-900">Request a demo</a></li>
              <li><a href="#contact" className="hover:text-neutral-900">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-black/5 pt-6 text-xs text-neutral-500">© {new Date().getFullYear()} TrueOmni</div>
      </div>
    </footer>
  )
}
