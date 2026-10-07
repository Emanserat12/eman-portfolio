import { openInquiry } from './InquiryDialog'
import { process, services } from '../data/site'

export default function Services() {
  return (
    <section id="services" className="section border-t border-line">
      <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <h2 className="section-title">What you can hire me for</h2>
          <p className="mt-6 max-w-[30rem] text-[1.0625rem] leading-[1.7] text-muted">
            I work as a solo developer, so you talk to the person writing the code. Projects range from a single API
            integration to a complete application.
          </p>
          <button type="button" onClick={openInquiry} className="btn btn-ghost mt-10">
            Discuss your project
          </button>
        </div>

        <dl className="lg:col-span-7">
          {services.map((s) => (
            <div key={s.title} className="grid gap-2 border-t border-line py-6 first:border-t-0 first:pt-0 sm:grid-cols-[14rem_1fr] sm:gap-8">
              <dt className="text-[1.0625rem] font-medium text-ink">{s.title}</dt>
              <dd className="text-[0.9375rem] leading-relaxed text-muted">{s.body}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="wrap mt-32 lg:mt-40">
        <h3 className="text-xl font-semibold tracking-tight text-ink">How a project runs</h3>
        <ol className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <li key={step.title} className="bg-canvas p-6 lg:p-7">
              <span className="font-mono text-sm text-faint">{String(i + 1).padStart(2, '0')}</span>
              <h4 className="mt-4 text-[1.0625rem] font-medium text-ink">{step.title}</h4>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
