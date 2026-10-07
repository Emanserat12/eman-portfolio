import { useState } from 'react'
import { inquiry, profile } from '../data/site'

type State = 'idle' | 'sending' | 'sent' | 'mailto'

/**
 * Sends the inquiry through Netlify Forms. If that isn't available
 * (local dev, other hosts) it opens a pre-filled email instead.
 */
export default function InquiryForm({ onDone }: { onDone?: () => void }) {
  const [type, setType] = useState(inquiry.types[0])
  const [budget, setBudget] = useState('')
  const [state, setState] = useState<State>('idle')
  const [error, setError] = useState('')

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const message = String(data.get('message') || '').trim()

    if (!name || !email || !message) {
      setError('Add your name, email and a few lines about the project.')
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Enter an email address like name@company.com.')
      return
    }
    setError('')
    setState('sending')

    const fields = { 'form-name': 'inquiry', name, email, type, budget, message, 'bot-field': String(data.get('bot-field') || '') }
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(fields).toString(),
      })
      if (!res.ok) throw new Error(String(res.status))
      setState('sent')
      form.reset()
    } catch {
      const body = `${message}\n\nProject type: ${type}${budget ? `\nBudget: ${budget}` : ''}\n\n${name}\n${email}`
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Project inquiry: ${type}`)}&body=${encodeURIComponent(body)}`
      setState('mailto')
    }
  }

  if (state === 'sent' || state === 'mailto') {
    return (
      <div className="py-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40">
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3.5 8.5l3 3 6-7" stroke="#E6C594" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-6 text-2xl font-semibold tracking-tight text-ink">
          {state === 'sent' ? 'Inquiry sent' : 'Your email app is open'}
        </h3>
        <p className="mt-3 max-w-[28rem] text-[0.9375rem] leading-relaxed text-muted">
          {state === 'sent'
            ? 'I’ll read it and reply with questions and next steps.'
            : `Your message is ready to send. If nothing opened, write to ${profile.email} directly.`}
        </p>
        {onDone && (
          <button type="button" onClick={onDone} className="btn btn-ghost mt-8">
            Close
          </button>
        )}
      </div>
    )
  }

  const chip = (active: boolean) =>
    `rounded-full border px-3.5 py-2 text-sm transition-all duration-300 ease-out ${
      active ? 'border-gold/60 bg-gold/[0.08] text-gold' : 'border-line-strong text-muted hover:border-white/25 hover:text-ink'
    }`

  return (
    <form onSubmit={submit} noValidate className="space-y-7">
      <input type="hidden" name="form-name" value="inquiry" />
      <p hidden>
        <label>
          Leave this empty <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <fieldset>
        <legend className="text-sm text-muted">What do you need?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {inquiry.types.map((t) => (
            <button key={t} type="button" aria-pressed={type === t} onClick={() => setType(t)} className={chip(type === t)}>
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-sm text-muted">Budget, if you have one in mind</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {inquiry.budgets.map((b) => (
            <button
              key={b}
              type="button"
              aria-pressed={budget === b}
              onClick={() => setBudget(budget === b ? '' : b)}
              className={chip(budget === b)}
            >
              {b}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm text-muted">Name</span>
          <input name="name" autoComplete="name" className="field mt-2" />
        </label>
        <label className="block">
          <span className="text-sm text-muted">Email</span>
          <input name="email" type="email" autoComplete="email" className="field mt-2" />
        </label>
      </div>

      <label className="block">
        <span className="text-sm text-muted">About the project</span>
        <textarea
          name="message"
          rows={4}
          placeholder="What you’re building, your timeline, and anything that already exists"
          className="field mt-2 h-auto resize-y py-3 leading-relaxed"
        />
      </label>

      {error && (
        <p role="alert" className="text-sm text-[#F2B8A0]">
          {error}
        </p>
      )}

      <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-faint">Or write to {profile.email}</p>
        <button type="submit" className="btn btn-primary" disabled={state === 'sending'}>
          {state === 'sending' ? 'Sending…' : 'Send inquiry'}
        </button>
      </div>
    </form>
  )
}
