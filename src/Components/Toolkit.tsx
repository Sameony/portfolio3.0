import { toolkit } from '../data/toolkit'
import { useInView } from '../hooks/useInView'

export function Toolkit() {
  const sectionRef = useInView() as React.RefObject<HTMLElement>

  return (
    <section
      ref={sectionRef}
      style={{
        borderTop: '1px solid var(--hairline)',
        padding: 'var(--section-pad) 0',
      }}
    >
      <div className="section-inner">
        <h2
          data-reveal
          style={{
            fontWeight: 300,
            fontSize: 'clamp(30px,4.5vw,56px)',
            lineHeight: 1,
            letterSpacing: '-0.025em',
            color: 'var(--ink)',
            margin: '0 0 clamp(32px,5vw,64px)',
          }}
        >
          The <em className="accent" style={{ fontSize: 'inherit' }}>Toolkit</em>
        </h2>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(20px,4vw,40px)',
          }}
        >
          {toolkit.map((group, i) => (
            <div
              key={group.label}
              data-reveal
              style={{
                display: 'grid',
                gridTemplateColumns: 'clamp(100px,17vw,210px) 1fr',
                gap: 'clamp(16px,4vw,48px)',
                alignItems: 'start',
                transitionDelay: `${i * 60}ms`,
              }}
            >
              <span
                style={{
                  fontSize: '13px',
                  color: 'var(--faint)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  paddingTop: '3px',
                }}
              >
                {group.label}
              </span>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px 20px',
                }}
              >
                {group.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontSize: 'clamp(15px,1.8vw,20px)',
                      color: 'var(--ink)',
                      lineHeight: 1.5,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
