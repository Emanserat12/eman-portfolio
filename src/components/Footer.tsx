import { profile } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-col gap-3 py-8 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#top" className="link self-start text-faint hover:text-ink sm:self-auto">
          Back to top
        </a>
      </div>
    </footer>
  )
}
