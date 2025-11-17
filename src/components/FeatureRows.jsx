import React from 'react'

const features = [
  {
    title: 'Kiosks that feel effortless',
    copy: 'Beautiful, accessible and secure experiences for check-in, ticketing, wayfinding and more.',
    cta: 'Learn more',
  },
  {
    title: 'Digital signage that adapts',
    copy: 'Manage dynamic content at scale with real-time data and stunning layouts.',
    cta: 'See signage',
  },
  {
    title: 'Mobile that connects everything',
    copy: 'Bring the journey to the guest’s pocket with loyalty, offers and messaging.',
    cta: 'Explore mobile',
  },
]

const FeatureRows = () => {
  return (
    <section className="bg-white" id="solutions">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 space-y-24">
        {features.map((f, idx) => (
          <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}>
            <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="aspect-[16/10] w-full rounded-2xl bg-neutral-100 border border-black/5 overflow-hidden">
                <div className="h-full w-full flex items-center justify-center text-neutral-400">Image / Video Placeholder</div>
              </div>
            </div>
            <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900">{f.title}</h2>
              <p className="mt-5 text-lg text-neutral-700 max-w-prose">{f.copy}</p>
              <div className="mt-8">
                <a href="#" className="text-neutral-900 underline underline-offset-4 hover:no-underline">{f.cta}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeatureRows
