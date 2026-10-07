import { useEffect, useRef, useState } from 'react'
import InquiryForm from './InquiryForm'

export const openInquiry = () => window.dispatchEvent(new Event('open-inquiry'))

export default function InquiryDialog() {
  const ref = useRef<HTMLDialogElement>(null)
  const [key, setKey] = useState(0)

  useEffect(() => {
    const open = () => {
      setKey((k) => k + 1) // fresh form each time
      ref.current?.showModal()
    }
    window.addEventListener('open-inquiry', open)
    return () => window.removeEventListener('open-inquiry', open)
  }, [])

  const close = () => ref.current?.close()

  return (
    <dialog
      ref={ref}
      aria-labelledby="inquiry-title"
      onClick={(e) => e.target === ref.current && close()}
      className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-1.5rem)] max-w-[40rem] overflow-y-auto rounded-3xl border border-line-strong bg-surface p-0 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]"
    >
      <div className="p-6 sm:p-10">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 id="inquiry-title" className="text-[1.75rem] font-semibold leading-tight tracking-[-0.03em] text-ink">
              Start a project
            </h2>
            <p className="mt-2 text-[0.9375rem] text-muted">A few details now saves a round of emails later.</p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="-mr-2 -mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-muted transition-all duration-300 ease-out hover:bg-white/[0.06] hover:text-ink"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="mt-8">
          <InquiryForm key={key} onDone={close} />
        </div>
      </div>
    </dialog>
  )
}
