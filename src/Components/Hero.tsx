import { AmbientBg } from './AmbientBg'
import type { PointerOffset } from '../hooks/usePointer'

interface Props {
  pointer: PointerOffset
}

export function Hero({ pointer }: Props) {
  return (
    <section
      id="top"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '130px clamp(20px,5vw,72px) 70px',
        overflow: 'hidden',
      }}
    >
      <AmbientBg pointer={pointer} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1240px', margin: '0 auto', width: '100%' }}>
        {/* Eyebrow */}
        <div
          className="at-load at-load-1"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '36px',
          }}
        >
          <span className="pulse-dot" />
          <span
            style={{
              fontSize: '13.5px',
              color: 'var(--muted)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontWeight: 400,
            }}
          >
            Senior Full-Stack Engineer — Noida, India
          </span>
        </div>

        {/* H1 */}
        <h1
          className="at-load at-load-2"
          style={{
            fontWeight: 300,
            fontSize: 'clamp(38px,6.4vw,96px)',
            lineHeight: 1.04,
            letterSpacing: '-0.025em',
            color: 'var(--ink)',
            margin: '0 0 32px',
            maxWidth: '16ch',
          }}
        >
          I design &amp; build software{' '}
          <em className="accent">end to end</em>
          {' '}— from first commit to production.
        </h1>

        {/* Sub-paragraph */}
        <p
          className="at-load at-load-3"
          style={{
            fontSize: 'clamp(16px,1.7vw,19px)',
            color: 'var(--body)',
            lineHeight: 1.65,
            maxWidth: '52ch',
            margin: '0 0 48px',
            fontWeight: 400,
          }}
        >
          Four-plus years architecting SaaS platforms across logistics, automotive,
          and health — from database schema to CI/CD pipeline.
        </p>

        {/* CTA */}
        <a
          href="#work"
          className="at-load at-load-4"
          style={{
            display: 'inline-block',
            padding: '14px 24px',
            border: '1px solid rgba(43,40,35,0.35)',
            borderRadius: '999px',
            fontSize: '15px',
            color: 'var(--ink)',
            textDecoration: 'none',
            transition: 'background 0.25s ease, color 0.25s ease, border-color 0.25s ease',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget
            el.style.background = 'var(--ink)'
            el.style.color = '#f4f1ea'
            el.style.borderColor = 'var(--ink)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget
            el.style.background = 'transparent'
            el.style.color = 'var(--ink)'
            el.style.borderColor = 'rgba(43,40,35,0.35)'
          }}
        >
          Selected work ↓
        </a>
      </div>
    </section>
  )
}
