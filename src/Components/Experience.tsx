import { experience } from '../data/experience'
import { useInView } from '../hooks/useInView'

export function Experience() {
  const sectionRef = useInView() as React.RefObject<HTMLElement>

  return (
    <section
      id="experience"
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
          The <em className="accent" style={{ fontSize: 'inherit' }}>Record</em>
        </h2>

        <div>
          {experience.map((entry, i) => (
            <div
              key={i}
              data-reveal
              style={{
                display: 'grid',
                gridTemplateColumns: 'clamp(120px,17vw,210px) 1fr',
                gap: 'clamp(16px,4vw,60px)',
                borderBottom: '1px solid var(--hairline)',
                padding: 'clamp(24px,4vw,48px) 0',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--faint)',
                    margin: '0 0 6px',
                    letterSpacing: '0.01em',
                  }}
                >
                  {entry.period}
                </p>
                <em
                  style={{
                    fontFamily: "'Newsreader', Georgia, serif",
                    fontStyle: 'italic',
                    fontSize: '20px',
                    color: 'var(--clay)',
                    display: 'block',
                  }}
                >
                  {entry.company}
                </em>
              </div>

              <div>
                <h3
                  style={{
                    fontWeight: 500,
                    fontSize: 'clamp(17px,2.2vw,26px)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.015em',
                    color: 'var(--ink)',
                    margin: '0 0 12px',
                  }}
                >
                  {entry.role}
                </h3>
                <p
                  style={{
                    fontSize: 'clamp(15px,1.7vw,19px)',
                    color: 'var(--ink-soft)',
                    lineHeight: 1.65,
                    maxWidth: '56ch',
                    margin: 0,
                  }}
                >
                  {entry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
