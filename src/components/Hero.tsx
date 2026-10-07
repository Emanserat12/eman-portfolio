import { hero, profile, proof } from '../data/site'
import CopyEmail from './CopyEmail'
import { openInquiry } from './InquiryDialog'
import Status from './Status'

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="wrap pb-24 pt-16 sm:pt-24 lg:pb-28 lg:pt-28">
        <div className="rise flex flex-wrap items-center justify-between gap-4">
          <Status />
        </div>

        <h1
          className="rise mt-12 max-w-[12ch] text-[clamp(3rem,8.4vw,7.75rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-ink sm:mt-14"
          style={{ animationDelay: '90ms', textWrap: 'balance' } as React.CSSProperties}
        >
          {hero.headline}
        </h1>

        <div
          className="rise mt-14 grid gap-10 border-t border-line pt-10 lg:mt-16 lg:grid-cols-12 lg:items-end"
          style={{ animationDelay: '200ms' }}
        >
          <p className="max-w-[34rem] text-lg leading-[1.7] text-muted lg:col-span-6">
            <span className="text-ink">{profile.name}, full-stack engineer.</span> {hero.intro}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-6 lg:justify-end">
            <button type="button" onClick={openInquiry} className="btn btn-primary">
              Start a project
            </button>
            {profile.calUrl ? (
              <a href={profile.calUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Book a call
              </a>
            ) : (
              <CopyEmail />
            )}
          </div>
        </div>
      </div>

      <div className="rise border-y border-line" style={{ animationDelay: '320ms' }}>
        <ul className="wrap grid sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-4 lg:gap-x-0" aria-label="What I build">
          {proof.map((p) => (
            <li
              key={p.title}
              className="border-t border-line py-8 first:border-t-0 sm:[&:nth-child(2)]:border-t-0 lg:border-l lg:border-t-0 lg:px-8 lg:py-10 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
            >
              <h2 className="text-[0.9375rem] font-semibold text-ink">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
