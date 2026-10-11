import { useState, useEffect, useRef } from 'react'
import { projects } from '../data/projects'
import { useInView } from '../hooks/useInView'
import { Gallery } from './Gallery'

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handler, { passive: true })
    return () => window.removeEventListener('resize', handler)
  }, [])
  return width
}

interface PreviewProps {
  hoveredIndex: number | null
}

function Preview({ hoveredIndex }: PreviewProps) {
  const [displayed, setDisplayed] = useState<{ index: number | null; visible: boolean }>({
    index: null,
    visible: false,
  })
  const [pulsing, setPulsing] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setDisplayed((d) => ({ ...d, visible: false }))
    timerRef.current = setTimeout(() => {
      setDisplayed({ index: hoveredIndex, visible: hoveredIndex !== null })
      if (hoveredIndex !== null) {
        setPulsing(true)
        setTimeout(() => setPulsing(false), 550)
      }
    }, 90)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [hoveredIndex])

  const project = displayed.index !== null ? projects[displayed.index] : null

  return (
    <div
      style={{
        position: 'sticky',
        top: '110px',
        // A cover image sets its own height, so the panel only keeps its fixed shape without one.
        aspectRatio: project?.cover ? 'auto' : '4/3',
        borderRadius: '8px',
        background: hoveredIndex !== null ? 'var(--preview-hover)' : 'var(--preview-bg)',
        transition: 'background 0.3s ease, transform 0.55s cubic-bezier(0.2,0.7,0.2,1)',
        transform: pulsing ? 'scale(0.965)' : 'scale(1)',
        backgroundImage: `repeating-linear-gradient(
          135deg,
          rgba(43,40,35,0.06) 0px,
          rgba(43,40,35,0.06) 1px,
          transparent 1px,
          transparent 12px
        )`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
      }}
    >
      {project?.cover && (
        <img
          src={project.cover}
          alt=""
          style={{
            display: 'block',
            width: '100%',
            aspectRatio: '1024/500',
            objectFit: 'cover',
            opacity: displayed.visible ? 1 : 0,
            transition: 'opacity 0.19s ease',
          }}
        />
      )}
      <div
        style={{
          padding: '20px 24px',
          opacity: displayed.visible ? 1 : 0,
          transition: 'opacity 0.19s ease',
        }}
      >
        {project && (
          <>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(43,40,35,0.08)',
                borderRadius: '999px',
                padding: '4px 10px',
                fontSize: '12px',
                color: 'var(--muted)',
                marginBottom: '8px',
                letterSpacing: '0.04em',
              }}
            >
              {project.index} / {project.domain}
            </span>
            <p
              style={{
                fontSize: '13px',
                color: 'var(--ink-soft)',
                lineHeight: 1.55,
                margin: 0,
                maxWidth: '38ch',
              }}
            >
              {project.description}
            </p>
            {project.gallery && (
              <p style={{ fontSize: '12px', color: 'var(--muted)', margin: '10px 0 0', letterSpacing: '0.02em' }}>
                {project.gallery.length} screenshots inside
              </p>
            )}
          </>
        )}
        {!project && (
          <p style={{ fontSize: '13px', color: 'var(--faint)', margin: 0 }}>
            Hover a project to preview
          </p>
        )}
      </div>
    </div>
  )
}

export function Work() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null)
  const galleryProject = galleryIndex !== null ? projects[galleryIndex] : null
  const width = useWindowWidth()
  const showPreview = width >= 860
  const sectionRef = useInView() as React.RefObject<HTMLElement>

  return (
    <section
      id="work"
      ref={sectionRef}
      style={{
        borderTop: '1px solid var(--hairline)',
        padding: 'var(--section-pad) 0',
      }}
    >
      <div className="section-inner">
        {/* Section heading */}
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
          Selected <em className="accent" style={{ fontSize: 'inherit' }}>work</em>
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: showPreview ? '1.15fr 0.85fr' : '1fr',
            gap: 'clamp(30px,5vw,72px)',
            alignItems: 'start',
          }}
        >
          {/* Project list */}
          <div
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ borderTop: '1px solid var(--hairline)' }}
          >
            {projects.map((project, i) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredIndex(i)}
                style={{
                  display: 'block',
                  borderBottom: '1px solid var(--hairline)',
                  textDecoration: 'none',
                  paddingTop: '24px',
                  paddingBottom: '24px',
                  paddingLeft: hoveredIndex === i ? '20px' : '4px',
                  paddingRight: '4px',
                  position: 'relative',
                  transition: 'padding-left 0.4s cubic-bezier(0.2,0.7,0.2,1)',
                  opacity: hoveredIndex !== null && hoveredIndex !== i ? 0.4 : 1,
                  cursor: 'default',
                }}
              >
                {/* Whole-row link, kept as an overlay so the screenshots button isn't nested inside an anchor */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} (opens in a new tab)`}
                    style={{ position: 'absolute', inset: 0, zIndex: 1 }}
                  />
                )}

                {/* Clay bar */}
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '2px',
                    background: 'var(--clay)',
                    transform: hoveredIndex === i ? 'scaleY(1)' : 'scaleY(0)',
                    transformOrigin: 'top',
                    transition: 'transform 0.45s cubic-bezier(0.2,0.7,0.2,1)',
                  }}
                />

                {/* Row header: index + title + arrow */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', marginBottom: '6px' }}>
                  <span
                    style={{ fontSize: '12.5px', color: 'var(--faint)', minWidth: '22px', flexShrink: 0 }}
                  >
                    {project.index}
                  </span>
                  <span
                    style={{
                      fontSize: 'clamp(18px,2.2vw,28px)',
                      fontWeight: 400,
                      color: 'var(--ink)',
                      letterSpacing: '-0.015em',
                      lineHeight: 1.1,
                      flex: 1,
                    }}
                  >
                    {project.title}
                  </span>
                  <span
                    style={{
                      fontSize: '16px',
                      color: hoveredIndex === i ? 'var(--clay)' : 'var(--faint)',
                      opacity: hoveredIndex === i ? 1 : 0,
                      transform: hoveredIndex === i ? 'translateX(0)' : 'translateX(-6px)',
                      transition: 'opacity 0.4s ease, transform 0.4s ease, color 0.4s ease',
                      flexShrink: 0,
                    }}
                  >
                    ↗
                  </span>
                </div>

                {/* Metadata */}
                <div
                  style={{
                    paddingLeft: '36px',
                    fontSize: '13px',
                    color: 'var(--faint)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {project.domain} — {project.stack.join(' · ')}
                </div>

                {project.gallery && (
                  <button
                    onClick={() => setGalleryIndex(i)}
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      marginTop: '12px',
                      marginLeft: '36px',
                      background: 'transparent',
                      border: '1px solid var(--hairline-strong)',
                      borderRadius: '999px',
                      padding: '6px 14px',
                      fontSize: '12.5px',
                      color: 'var(--clay)',
                      letterSpacing: '0.02em',
                      cursor: 'pointer',
                    }}
                  >
                    View {project.gallery.length} screenshots
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Sticky preview */}
          {showPreview && <Preview hoveredIndex={hoveredIndex} />}
        </div>
      </div>

      {galleryProject?.gallery && (
        <Gallery
          title={galleryProject.title}
          shots={galleryProject.gallery}
          onClose={() => setGalleryIndex(null)}
        />
      )}
    </section>
  )
}
