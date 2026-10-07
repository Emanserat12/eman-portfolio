// Abstract, code-drawn interface previews. They suggest each product's shape
// without showing any client data. Swap any of them for a real screenshot later
// by rendering an <img> instead.

const bar = 'rounded-full bg-white/[0.09]'

function Frame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`absolute inset-x-6 bottom-0 top-8 overflow-hidden rounded-t-xl border border-b-0 border-white/[0.08] bg-[#0E0F13] shadow-[0_-20px_60px_-30px_rgba(0,0,0,0.8)] sm:inset-x-10 sm:top-10 ${className}`}
    >
      <div className="flex h-7 items-center gap-1.5 border-b border-white/[0.06] px-3">
        <span className="h-2 w-2 rounded-full bg-white/10" />
        <span className="h-2 w-2 rounded-full bg-white/10" />
        <span className="h-2 w-2 rounded-full bg-white/10" />
      </div>
      {children}
    </div>
  )
}

function Ordo() {
  const heights = [40, 62, 48, 75, 58, 88, 70]
  return (
    <Frame>
      <div className="flex h-full">
        <div className="hidden w-[22%] space-y-2.5 border-r border-white/[0.06] p-3 sm:block">
          {[70, 55, 80, 60, 45].map((w, i) => (
            <div key={i} className={`h-1.5 ${i === 1 ? 'bg-gold/70' : 'bg-white/[0.09]'} rounded-full`} style={{ width: `${w}%` }} />
          ))}
        </div>
        <div className="flex-1 space-y-3 p-4">
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-md border border-white/[0.06] p-2">
                <div className={`h-1 w-1/2 ${bar}`} />
                <div className="mt-2 h-2.5 w-2/3 rounded-full bg-white/[0.16]" />
              </div>
            ))}
          </div>
          <div className="flex h-[38%] items-end gap-1.5 rounded-md border border-white/[0.06] p-2.5">
            {heights.map((h, i) => (
              <div key={i} className={`flex-1 rounded-sm ${i === 5 ? 'bg-gold/70' : 'bg-white/[0.1]'}`} style={{ height: `${h}%` }} />
            ))}
          </div>
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-white/[0.08]" />
              <div className={`h-1.5 w-1/3 ${bar}`} />
              <div className={`ml-auto h-1.5 w-12 ${bar}`} />
            </div>
          ))}
        </div>
      </div>
    </Frame>
  )
}

function CaseForge() {
  return (
    <Frame>
      <div className="relative flex h-full gap-4 p-4">
        <div className="w-[46%] space-y-2 rounded-md border border-white/[0.06] p-3">
          {[90, 75, 85, 60].map((w, i) => (
            <div key={i} className={`h-1.5 ${bar}`} style={{ width: `${w}%` }} />
          ))}
          <div className="h-1.5 w-[70%] rounded-full bg-gold/70" />
          {[80, 92, 55].map((w, i) => (
            <div key={i} className={`h-1.5 ${bar}`} style={{ width: `${w}%` }} />
          ))}
        </div>
        <svg className="absolute left-[46%] top-0 h-full w-[12%]" viewBox="0 0 40 100" preserveAspectRatio="none" aria-hidden="true">
          <path d="M2 34 C 20 34, 20 18, 38 18" stroke="rgba(230,197,148,0.55)" strokeWidth="0.8" fill="none" vectorEffect="non-scaling-stroke" />
          <path d="M2 34 C 20 34, 20 46, 38 46" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" fill="none" vectorEffect="non-scaling-stroke" />
          <path d="M2 34 C 20 34, 20 74, 38 74" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" fill="none" vectorEffect="non-scaling-stroke" />
        </svg>
        <div className="ml-auto flex w-[42%] flex-col justify-center gap-2.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`rounded-md border p-2.5 ${i === 0 ? 'border-gold/40' : 'border-white/[0.06]'}`}>
              <div className={`h-1.5 w-3/4 rounded-full ${i === 0 ? 'bg-white/25' : 'bg-white/[0.12]'}`} />
              <div className={`mt-1.5 h-1 w-1/2 ${bar}`} />
            </div>
          ))}
        </div>
      </div>
    </Frame>
  )
}

function DialMind() {
  const wave = [12, 30, 55, 80, 40, 65, 90, 50, 30, 70, 45, 85, 60, 25, 45, 75, 35, 20, 50, 30, 15, 40, 60, 25]
  return (
    <Frame>
      <div className="flex h-full flex-col gap-4 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/50">
            <div className="h-2 w-2 rounded-full bg-gold" />
          </div>
          <div className="flex h-10 flex-1 items-center gap-[3px]">
            {wave.map((h, i) => (
              <div key={i} className={`flex-1 rounded-full ${i < 14 ? 'bg-white/30' : 'bg-white/[0.1]'}`} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="space-y-2.5">
          {[
            [false, 62],
            [true, 48],
            [false, 70],
          ].map(([agent, w], i) => (
            <div key={i} className={`flex ${agent ? 'justify-end' : ''}`}>
              <div className={`rounded-lg px-3 py-2 ${agent ? 'bg-white/[0.08]' : 'border border-white/[0.06]'}`} style={{ width: `${w}%` }}>
                <div className={`h-1.5 w-full ${bar}`} />
                <div className={`mt-1.5 h-1.5 w-2/3 ${bar}`} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between rounded-md border border-white/[0.06] px-3 py-2">
          <div className={`h-1.5 w-1/3 ${bar}`} />
          <div className="rounded-full border border-gold/40 px-2 py-0.5 font-mono text-[9px] text-gold/90">CRM</div>
        </div>
      </div>
    </Frame>
  )
}

function Revoo() {
  return (
    <Frame>
      <div className="flex h-full gap-4 p-4">
        <div className="flex flex-1 flex-col gap-2.5">
          {[
            [false, 70],
            [true, 55],
            [false, 62],
            [true, 40],
          ].map(([me, w], i) => (
            <div key={i} className={`flex ${me ? 'justify-end' : ''}`}>
              <div
                className={`rounded-2xl px-3 py-2 ${me ? 'rounded-br-sm bg-white/[0.12]' : 'rounded-bl-sm border border-white/[0.07]'}`}
                style={{ width: `${w}%` }}
              >
                <div className={`h-1.5 w-full ${bar}`} />
              </div>
            </div>
          ))}
          <div className="mt-auto h-8 rounded-full border border-white/[0.08]" />
        </div>
        <div className="hidden w-[36%] self-center rounded-lg border border-gold/30 p-3 sm:block">
          <div className="h-1.5 w-1/2 rounded-full bg-gold/70" />
          {[0, 1, 2].map((i) => (
            <div key={i} className="mt-3 flex gap-2">
              <div className={`h-1 w-1/3 ${bar}`} />
              <div className="h-1 flex-1 rounded-full bg-white/[0.16]" />
            </div>
          ))}
        </div>
      </div>
    </Frame>
  )
}

function GetTheFit() {
  return (
    <Frame>
      <div className="grid h-full grid-cols-3 gap-2.5 p-4">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`relative rounded-lg border ${i === 1 ? 'border-gold/40' : 'border-white/[0.06]'} bg-gradient-to-b from-white/[0.05] to-transparent`}
          >
            <div
              className="absolute left-1/2 top-[22%] h-[46%] w-[42%] -translate-x-1/2 bg-white/[0.12]"
              style={{ clipPath: i % 2 ? 'polygon(25% 0,75% 0,100% 20%,85% 30%,85% 100%,15% 100%,15% 30%,0 20%)' : 'polygon(20% 0,80% 0,90% 100%,10% 100%)' }}
            />
            <div className={`absolute bottom-2 left-2 h-1 w-1/2 ${bar}`} />
          </div>
        ))}
      </div>
    </Frame>
  )
}

function ZeroCarbon() {
  return (
    <Frame>
      <div className="flex h-full gap-4 p-4">
        <div className="flex-1 rounded-md border border-white/[0.06] p-3">
          <div className={`h-1.5 w-1/3 ${bar}`} />
          <svg viewBox="0 0 200 80" className="mt-3 h-[70%] w-full" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 20 L25 28 L50 24 L75 38 L100 34 L125 48 L150 46 L175 58 L200 62" fill="none" stroke="rgba(230,197,148,0.75)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
            <path d="M0 20 L25 28 L50 24 L75 38 L100 34 L125 48 L150 46 L175 58 L200 62 L200 80 L0 80Z" fill="rgba(230,197,148,0.06)" />
            <path d="M0 40 L50 42 L100 52 L150 50 L200 60" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
        <div className="hidden w-[34%] flex-col gap-2 sm:flex">
          {[70, 85, 60].map((w, i) => (
            <div key={i} className={`flex ${i === 1 ? 'justify-end' : ''}`}>
              <div className={`rounded-lg px-2.5 py-2 ${i === 1 ? 'bg-white/[0.08]' : 'border border-white/[0.06]'}`} style={{ width: `${w}%` }}>
                <div className={`h-1 w-full ${bar}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  )
}

const previews: Record<string, () => JSX.Element> = {
  ordo: Ordo,
  caseforge: CaseForge,
  dialmind: DialMind,
  revoo: Revoo,
  'get-the-fit': GetTheFit,
  'zero-carbon': ZeroCarbon,
}

export default function ProjectPreview({ slug }: { slug: string }) {
  const P = previews[slug]
  return P ? <P /> : null
}
