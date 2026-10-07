import { profile } from '../data/site'

export default function Status({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 text-sm text-muted ${className}`}>
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="absolute -inset-1 rounded-full bg-gold/25 blur-[4px]" />
        <span className="relative h-2 w-2 rounded-full bg-gold" />
      </span>
      {profile.availability}
    </span>
  )
}
