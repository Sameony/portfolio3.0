import { useRef, useEffect } from 'react'
import { useInView } from '../hooks/useInView'

interface Stat {
  value: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { value: 4, suffix: '+', label: 'Years shipping production software' },
  { value: 10, suffix: '+', label: 'Products shipped end-to-end' },
  { value: 6, suffix: '', label: 'Industries served, automotive to wellness' },
  { value: 8, suffix: '×', label: 'Faster page loads — 38s cut to 5s' },
]

function StatCard({ stat, delay }: { stat: Stat; delay: number }) {
  const numRef = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = numRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const target = stat.value
          const duration = 1500
          const start = performance.now()

          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            el.textContent = String(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [stat.value])

  return (
    <div
      data-reveal
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <div
        style={{
          fontWeight: 300,
          fontSize: 'clamp(44px,5.5vw,76px)',
          lineHeight: 1,
          color: 'var(--ink)',
          fontVariantNumeric: 'tabular-nums',
          letterSpacing: '-0.02em',
        }}
      >
        <span ref={numRef}>0</span>
        <span>{stat.suffix}</span>
      </div>

      {/* Clay divider */}
      <div
        style={{
          width: '28px',
          height: '1px',
          background: 'var(--clay)',
          margin: '18px 0 14px',
        }}
      />

      <p
        style={{
          fontSize: '14.5px',
          color: 'var(--muted)',
          lineHeight: 1.5,
          maxWidth: '24ch',
          margin: 0,
        }}
      >
        {stat.label}
      </p>
    </div>
  )
}

export function Stats() {
  const sectionRef = useInView() as React.RefObject<HTMLElement>

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        borderTop: '1px solid var(--hairline)',
        padding: 'var(--section-pad) 0',
      }}
    >
      <div className="section-inner">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'clamp(32px,5vw,64px)',
          }}
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
