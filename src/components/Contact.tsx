import { profile } from '../data/site'
import CopyEmail from './CopyEmail'
import InquiryForm from './InquiryForm'
import Status from './Status'

export default function Contact() {
  const channels = [
    { label: 'WhatsApp', value: profile.phoneDisplay, href: profile.whatsapp },
    { label: 'LinkedIn', value: profile.linkedinDisplay, href: profile.linkedin },
    { label: 'GitHub', value: profile.githubDisplay, href: profile.github },
  ]

  return (
    <section id="contact" className="section overflow-hidden border-t border-line">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[40rem]"
        style={{ background: 'radial-gradient(40rem 24rem at 20% 0%, rgba(230,197,148,0.07), transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="wrap relative grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Status />
          <h2 className="mt-8 text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-ink">
            Tell me what you’re building.
          </h2>
          <p className="mt-8 max-w-[26rem] text-[1.0625rem] leading-[1.7] text-muted">
            Send the details and I’ll reply with questions and a clear next step. Prefer email? Copy the address and write
            whenever suits you.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <CopyEmail />
            {profile.calUrl && (
              <a href={profile.calUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Book a call
              </a>
            )}
          </div>

          <ul className="mt-14 border-t border-line">
            {channels.map((c) => (
              <li key={c.label} className="border-b border-line">
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-4 py-4"
                >
                  <span className="text-[0.9375rem] text-ink">{c.label}</span>
                  <span className="text-sm text-muted transition-colors duration-300 group-hover:text-ink">{c.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="rounded-3xl border border-line bg-surface/60 p-6 backdrop-blur sm:p-10">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  )
}
