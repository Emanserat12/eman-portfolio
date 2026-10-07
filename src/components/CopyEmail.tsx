import { profile } from '../data/site'
import { useCopy } from './useCopy'

/** Copies the email address and confirms right on the button. */
export default function CopyEmail({ className = 'btn btn-ghost' }: { className?: string }) {
  const { copied, copy } = useCopy()
  return (
    <button type="button" onClick={() => copy(profile.email)} className={className} aria-live="polite">
      {copied ? (
        <>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3.5 8.5l3 3 6-7" stroke="#E6C594" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Email copied
        </>
      ) : (
        <>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="opacity-70">
            <rect x="5.5" y="5.5" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.4" />
            <path d="M10.5 3.5v-.5a1.5 1.5 0 00-1.5-1.5H4A1.5 1.5 0 002.5 3v5A1.5 1.5 0 004 9.5h.5" stroke="currentColor" strokeWidth="1.4" />
          </svg>
          Copy email
        </>
      )}
    </button>
  )
}
