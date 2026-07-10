import { useInView } from '../hooks/useInView'

export function Contact() {
  const sectionRef = useInView() as React.RefObject<HTMLElement>

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        borderTop: '1px solid var(--hairline)',
        paddingTop: 'clamp(80px,13vh,170px)',
        paddingBottom: 'clamp(50px,7vh,90px)',
        textAlign: 'center',
      }}
    >
      <div className="section-inner">
        {/* Eyebrow */}
        <p
          data-reveal
          style={{
            fontSize: '13.5px',
            color: 'var(--muted)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            margin: '0 0 28px',
            fontWeight: 400,
          }}
        >
          Available for select projects
        </p>

        {/* Heading */}
        <h2
          data-reveal
          style={{
            fontWeight: 300,
            fontSize: 'clamp(40px,8.5vw,122px)',
            lineHeight: 1,
            letterSpacing: '-0.025em',
            color: 'var(--ink)',
            margin: '0 0 48px',
            transitionDelay: '80ms',
          }}
        >
          Let&apos;s build{' '}
          <em className="accent" style={{ fontSize: 'inherit' }}>something</em>.
        </h2>

        {/* Email link */}
        <div data-reveal style={{ transitionDelay: '160ms', marginBottom: '40px' }}>
          <a
            href="mailto:samsaysag@gmail.com"
            style={{
              fontSize: 'clamp(20px,3vw,34px)',
              color: 'var(--ink)',
              textDecoration: 'none',
              borderBottom: '1.5px solid var(--clay)',
              paddingBottom: '2px',
              transition: 'color 0.2s ease, border-color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--clay)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--ink)'
            }}
          >
            samsaysag@gmail.com ↗
          </a>
        </div>

        {/* Footer info */}
        <div
          data-reveal
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
            fontSize: '14px',
            color: 'var(--muted)',
            transitionDelay: '240ms',
          }}
        >
          <a
            href="https://www.linkedin.com/in/sameony"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ink)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
          >
            LinkedIn ↗
          </a>
          <span style={{ color: 'var(--hairline)', userSelect: 'none' }}>·</span>
          <span>+91 97170 07881</span>
          <span style={{ color: 'var(--hairline)', userSelect: 'none' }}>·</span>
          <span>Noida, India</span>
        </div>
      </div>
    </section>
  )
}
