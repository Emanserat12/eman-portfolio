import { experience } from '../data/site'

export default function Experience() {
  return (
    <section id="experience" className="section border-t border-line">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <h2 className="section-title lg:sticky lg:top-28">Experience</h2>
        </div>

        <ol className="relative lg:col-span-8">
          <span className="absolute bottom-2 left-[5px] top-2 w-px bg-line" aria-hidden="true" />
          {experience.map((job, i) => (
            <li key={job.company} className="relative pb-14 pl-10 last:pb-0">
              <span
                className={`absolute left-0 top-[0.45rem] h-[11px] w-[11px] rounded-full border ${
                  i === 0 ? 'border-gold bg-gold' : 'border-line-strong bg-canvas'
                }`}
                aria-hidden="true"
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="text-xl font-semibold tracking-tight text-ink">
                  {job.title}, <span className="font-normal text-muted">{job.company}</span>
                </h3>
                <p className="shrink-0 font-mono text-[0.8125rem] text-faint">{job.period}</p>
              </div>
              <ul className="mt-4 max-w-[40rem] space-y-2">
                {job.points.map((pt) => (
                  <li key={pt} className="text-[0.9375rem] leading-relaxed text-muted">
                    {pt}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
