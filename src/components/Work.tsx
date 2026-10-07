import { useEffect, useMemo, useRef, useState } from 'react'
import { categories, projects, type Category, type Project } from '../data/site'
import { openInquiry } from './InquiryDialog'
import ProjectPreview from './ProjectPreview'

function PreviewStage({ slug, tall = false, wide = false }: { slug: string; tall?: boolean; wide?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-line bg-surface ${
        wide ? 'aspect-[16/10] rounded-b-none border-x-0 border-t-0 sm:aspect-[2/1]' : tall ? 'aspect-[16/11] lg:aspect-[21/9]' : 'aspect-[16/11]'
      }`}
    >
      <div
        className="absolute inset-0 opacity-70 transition-opacity duration-500 ease-out group-hover:opacity-100"
        style={{ background: 'radial-gradient(70% 60% at 50% 0%, rgba(230,197,148,0.10), transparent 70%)' }}
      />
      <div className={`absolute inset-0 transition-transform duration-500 ease-out group-hover:-translate-y-1.5 ${tall ? 'lg:inset-x-[18%]' : wide ? 'sm:inset-x-[10%]' : ''}`}>
        <ProjectPreview slug={slug} />
      </div>
    </div>
  )
}

function Card({ p, featured, onOpen }: { p: Project; featured: boolean; onOpen: () => void }) {
  return (
    <li className={featured ? 'md:col-span-2' : ''}>
      <button
        type="button"
        onClick={onOpen}
        aria-haspopup="dialog"
        className="group block w-full rounded-[1.25rem] p-2 text-left transition-all duration-300 ease-out hover:bg-white/[0.02]"
      >
        <div className="transition-all duration-300 ease-out group-hover:shadow-[0_30px_80px_-40px_rgba(230,197,148,0.25)]">
          <PreviewStage slug={p.slug} tall={featured} />
        </div>
        <div className={`px-2 pb-3 pt-6 ${featured ? 'lg:grid lg:grid-cols-12 lg:gap-10' : ''}`}>
          <div className={featured ? 'lg:col-span-5' : ''}>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-ink">{p.title}</h3>
              <span className="flex items-center gap-1.5 text-sm text-faint transition-colors duration-300 group-hover:text-ink">
                Case study
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M4.5 9.5l5-5M5.5 4.5h4v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
            <p className="mt-1.5 text-[0.9375rem] text-muted">{p.sector}</p>
          </div>
          <div className={featured ? 'lg:col-span-7' : ''}>
            <p className={`mt-4 max-w-[38rem] text-[0.9375rem] leading-relaxed text-muted ${featured ? 'lg:mt-0' : 'line-clamp-2'}`}>
              {p.summary}
            </p>
            {p.stack.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tech stack">
                {p.stack.map((s) => (
                  <li key={s} className="tag">
                    {s}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </button>
    </li>
  )
}

function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (project && !d.open) d.showModal()
    if (!project && d.open) d.close()
  }, [project])

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current?.close()}
      aria-labelledby="case-title"
      className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-1.5rem)] max-w-[52rem] overflow-y-auto rounded-3xl border border-line-strong bg-canvas p-0 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]"
    >
      {project && (
        <div>
          <div className="relative">
            <PreviewStage slug={project.slug} wide />
            <button
              type="button"
              onClick={() => ref.current?.close()}
              aria-label="Close case study"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-canvas/70 text-ink backdrop-blur transition-all duration-300 ease-out hover:bg-elevated"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <div className="p-6 sm:p-10">
            <h2 id="case-title" className="text-[2.25rem] font-semibold leading-tight tracking-[-0.04em] text-ink">
              {project.title}
            </h2>
            <p className="mt-1 text-muted">{project.sector}</p>

            <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-line py-6 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-faint">Built for</dt>
                <dd className="mt-1 text-ink">{project.builtFor}</dd>
              </div>
              <div>
                <dt className="text-faint">My role</dt>
                <dd className="mt-1 text-ink">{project.role}</dd>
              </div>
              {project.stack.length > 0 && (
                <div className="col-span-2 sm:col-span-1">
                  <dt className="text-faint">Stack</dt>
                  <dd className="mt-1 font-mono text-[0.8125rem] text-ink">{project.stack.join(', ')}</dd>
                </div>
              )}
            </dl>

            <p className="mt-8 text-lg leading-[1.7] text-ink/90">{project.summary}</p>

            <h3 className="mt-10 text-sm font-semibold text-ink">What I built</h3>
            <ul className="mt-4 space-y-3">
              {project.built.map((b) => (
                <li key={b} className="flex gap-3.5 text-[0.9375rem] leading-relaxed text-muted">
                  <span className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-white/40" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[0.9375rem] text-muted">Need something like this?</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  ref.current?.close()
                  openInquiry()
                }}
              >
                Start a similar project
              </button>
            </div>
          </div>
        </div>
      )}
    </dialog>
  )
}

export default function Work() {
  const [filter, setFilter] = useState<Category>('All')
  const [open, setOpen] = useState<Project | null>(null)

  const shown = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter],
  )

  return (
    <section id="work" className="section">
      <div className="wrap">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="section-title">Selected work</h2>
            <p className="mt-5 max-w-[32rem] text-[1.0625rem] leading-[1.7] text-muted">
              Legal platforms, AI agents, e-commerce and real-time systems. Open any project for the full case study.
            </p>
          </div>

          <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0" role="group" aria-label="Filter projects">
            <div className="inline-flex gap-1 rounded-full border border-line p-1">
              {categories.map((c) => {
                const active = filter === c
                const count = c === 'All' ? projects.length : projects.filter((p) => p.categories.includes(c)).length
                return (
                  <button
                    key={c}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFilter(c)}
                    className={`flex h-9 items-center gap-2 whitespace-nowrap rounded-full px-4 text-sm transition-all duration-300 ease-out ${
                      active ? 'bg-white/[0.08] text-ink' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {active && <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />}
                    {c}
                    <span className="font-mono text-[0.6875rem] text-faint">{count}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <ul className="-mx-2 mt-16 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:mt-20">
          {shown.map((p, i) => (
            <Card
              key={p.slug}
              p={p}
              // Full-width cards keep the two-column grid from leaving a gap
              featured={(i === 0 && shown.length % 2 === 1) || (filter === 'All' && (i === 0 || i === shown.length - 1))}
              onOpen={() => setOpen(p)}
            />
          ))}
        </ul>
      </div>

      <ProjectDialog project={open} onClose={() => setOpen(null)} />
    </section>
  )
}
