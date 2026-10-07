import { stack } from '../data/site'

export default function Stack() {
  return (
    <section id="stack" className="section border-t border-line">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-12">
          <h2 className="section-title lg:col-span-5">Stack and approach</h2>
          <p className="max-w-[36rem] text-[1.0625rem] leading-[1.7] text-muted lg:col-span-6 lg:col-start-7">
            The tools I use every day, and how I use them. Need something that isn’t listed? Ask; I pick up new tools as
            projects need them.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-2 lg:mt-20">
          {stack.map((g) => (
            <div key={g.group} className="bg-canvas p-7 lg:p-9">
              <h3 className="text-[1.0625rem] font-medium text-ink">{g.group}</h3>
              <p className="mt-2 max-w-[28rem] text-[0.9375rem] leading-relaxed text-muted">{g.note}</p>
              <ul className="mt-6 flex flex-wrap gap-1.5">
                {g.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
